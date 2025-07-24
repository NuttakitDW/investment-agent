# MarkItDown Usage Guide

MarkItDown is a Microsoft tool that converts various file formats to Markdown, perfect for preparing documents for LLMs and text analysis.

## Installation

```bash
# Install with pip (requires Python 3.10+)
pip3 install 'markitdown[all]'

# Or use homebrew to install Python first
brew install python@3.11
```

## Quick Start

### Command Line Usage
```bash
# Convert a PDF to Markdown
markitdown document.pdf > document.md

# Convert Excel file
markitdown financial_data.xlsx > financial_data.md

# Convert PowerPoint
markitdown presentation.pptx > presentation.md
```

### Python Usage
```python
from markitdown import MarkItDown

# Initialize converter
md = MarkItDown()

# Convert file
result = md.convert("document.pdf")
print(result.text_content)

# Save to file
with open("output.md", "w") as f:
    f.write(result.text_content)
```

## Using the Converter Script

I've created a Python script for easy conversion:

```bash
# Convert any supported file
python3 tools/markitdown_converter.py path/to/file.pdf
```

## Supported Formats

- **Documents**: PDF, Word (.docx), PowerPoint (.pptx), Excel (.xlsx)
- **Images**: JPG, PNG (with OCR and EXIF data)
- **Audio**: MP3, WAV (with transcription)
- **Web**: HTML, YouTube URLs
- **Data**: CSV, JSON, XML
- **Archives**: ZIP files
- **E-books**: EPUB

## Use Cases for Investment Analysis

1. **Convert Financial Reports**: 
   ```bash
   markitdown "KBANK_Annual_Report.pdf" > "KBANK_Report.md"
   ```

2. **Extract Data from Excel**:
   ```bash
   markitdown "Financial_Statements.xlsx" > "Financial_Data.md"
   ```

3. **Process Presentation Slides**:
   ```bash
   markitdown "Investor_Presentation.pptx" > "Presentation_Notes.md"
   ```

## Benefits

- Preserves document structure and formatting
- Makes documents searchable and analyzable
- Perfect for feeding data to LLMs
- Supports batch processing
- Lightweight and fast

## Troubleshooting

If markitdown is not installed:
1. Check Python version: `python3 --version` (needs 3.10+)
2. Install pip: `python3 -m ensurepip`
3. Use virtual environment if permission issues occur