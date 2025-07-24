#!/usr/bin/env python3
import zipfile
import xml.etree.ElementTree as ET
import os
import re

def extract_excel_sheets(excel_path):
    """Extract sheet names and basic content from Excel file"""
    try:
        with zipfile.ZipFile(excel_path, 'r') as zip_file:
            # List all files in the Excel (which is actually a zip)
            file_list = zip_file.namelist()
            
            # Find worksheets
            worksheets = [f for f in file_list if f.startswith('xl/worksheets/') and f.endswith('.xml')]
            
            print(f"Found {len(worksheets)} worksheets")
            
            # Extract workbook.xml to get sheet names
            if 'xl/workbook.xml' in file_list:
                workbook_xml = zip_file.read('xl/workbook.xml')
                root = ET.fromstring(workbook_xml)
                
                # Find sheet names
                sheets = []
                for sheet in root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheet'):
                    name = sheet.get('name')
                    if name:
                        sheets.append(name)
                
                print(f"\nSheet names found: {sheets}")
                
            # Try to extract some content from the first worksheet
            if worksheets:
                sheet_xml = zip_file.read(worksheets[0])
                root = ET.fromstring(sheet_xml)
                
                # Extract shared strings if available
                shared_strings = []
                if 'xl/sharedStrings.xml' in file_list:
                    strings_xml = zip_file.read('xl/sharedStrings.xml')
                    strings_root = ET.fromstring(strings_xml)
                    for si in strings_root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
                        t = si.find('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t')
                        if t is not None and t.text:
                            shared_strings.append(t.text)
                
                print(f"\nFound {len(shared_strings)} text values")
                print("\nSample text values (first 50):")
                for i, text in enumerate(shared_strings[:50]):
                    if text.strip():
                        print(f"{i}: {text}")
                
                return sheets, shared_strings
                
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return None, None

def create_data_summary(shared_strings):
    """Create a summary of the financial data found"""
    # Look for key financial terms
    financial_terms = {
        'revenue': [], 'income': [], 'expense': [], 'asset': [], 
        'liability': [], 'equity': [], 'cash': [], 'profit': [],
        'loss': [], 'ratio': [], 'margin': [], 'growth': []
    }
    
    for text in shared_strings:
        text_lower = text.lower()
        for term, matches in financial_terms.items():
            if term in text_lower:
                matches.append(text)
    
    return financial_terms

if __name__ == "__main__":
    excel_path = "/Users/nuttakit/project/investment-agent/downloads/0016FIN140520252138030756T (1)/FINANCIAL_STATEMENTS.XLSX"
    
    sheets, shared_strings = extract_excel_sheets(excel_path)
    
    if shared_strings:
        print("\n\n=== FINANCIAL DATA SUMMARY ===")
        financial_data = create_data_summary(shared_strings)
        
        for category, items in financial_data.items():
            if items:
                print(f"\n{category.upper()} related items:")
                for item in items[:5]:  # Show first 5 items
                    print(f"  - {item}")