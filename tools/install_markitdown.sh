#!/bin/bash

# Install markitdown for the investment-agent project

echo "Installing markitdown..."

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "Python 3 is not installed. Please install Python 3.10 or higher."
    exit 1
fi

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install markitdown with all optional dependencies
echo "Installing markitdown with all dependencies..."
pip install 'markitdown[all]'

echo "Installation complete!"
echo ""
echo "To use markitdown:"
echo "1. Activate the virtual environment: source venv/bin/activate"
echo "2. Use command line: markitdown <file> > output.md"
echo "3. Or use in Python scripts"