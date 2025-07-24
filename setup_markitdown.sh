#!/bin/bash

# Setup script for markitdown in investment-agent project

echo "Setting up markitdown for investment-agent..."

# Navigate to project directory
cd /Users/nuttakit/project/investment-agent

# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install markitdown with all dependencies
echo "Installing markitdown with all optional features..."
pip install 'markitdown[all]'

# Create a convenience script to use markitdown
cat > use_markitdown.sh << 'EOF'
#!/bin/bash
# Convenience script to use markitdown

# Activate virtual environment
source /Users/nuttakit/project/investment-agent/venv/bin/activate

# Run markitdown with provided arguments
markitdown "$@"
EOF

chmod +x use_markitdown.sh

echo ""
echo "✅ Setup complete!"
echo ""
echo "To use markitdown:"
echo "1. Run: source venv/bin/activate"
echo "2. Then: markitdown <file> > output.md"
echo ""
echo "Or use the convenience script:"
echo "./use_markitdown.sh <file> > output.md"
echo ""
echo "Example: ./use_markitdown.sh financial_report.pdf > report.md"