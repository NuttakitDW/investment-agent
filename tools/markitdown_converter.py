#!/usr/bin/env python3
"""
MarkItDown Converter - Convert various file formats to Markdown
Useful for preparing documents for LLMs and text analysis
"""

import sys
import os
from pathlib import Path

# Installation instructions
INSTALL_INSTRUCTIONS = """
To install markitdown on your MacBook:

1. Make sure Python 3.10+ is installed:
   brew install python@3.11

2. Install markitdown using pip:
   pip3 install 'markitdown[all]'

3. Or install in a virtual environment (recommended):
   python3 -m venv venv
   source venv/bin/activate
   pip install 'markitdown[all]'

4. Usage:
   - Command line: markitdown document.pdf > output.md
   - Python script: python3 markitdown_converter.py <file>
"""

try:
    from markitdown import MarkItDown
except ImportError:
    print("MarkItDown is not installed!")
    print(INSTALL_INSTRUCTIONS)
    sys.exit(1)

def convert_file(file_path):
    """Convert a file to Markdown using MarkItDown"""
    try:
        # Initialize MarkItDown
        md = MarkItDown()
        
        # Convert the file
        print(f"Converting {file_path}...")
        result = md.convert(file_path)
        
        # Save the output
        output_path = Path(file_path).with_suffix('.md')
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(result.text_content)
        
        print(f"Converted successfully! Output saved to: {output_path}")
        return output_path
        
    except Exception as e:
        print(f"Error converting file: {e}")
        return None

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 markitdown_converter.py <file_path>")
        print("\nSupported formats:")
        print("- PDF, PowerPoint, Word, Excel")
        print("- Images (with EXIF data and OCR)")
        print("- Audio (with transcription)")
        print("- HTML, CSV, JSON, XML")
        print("- ZIP files, YouTube URLs")
        sys.exit(1)
    
    file_path = sys.argv[1]
    
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' not found!")
        sys.exit(1)
    
    convert_file(file_path)

if __name__ == "__main__":
    main()