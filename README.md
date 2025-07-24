# KBANK Financial Analysis Dashboard

A comprehensive financial analysis tool for analyzing KBANK (Kasikornbank) financial statements with an interactive dashboard.

## Features

- **Automated Financial Data Extraction**: Extracts key financial metrics from Excel statements
- **Key Banking Metrics Calculation**:
  - Return on Equity (ROE)
  - Return on Assets (ROA)
  - Net Interest Margin (NIM)
  - Capital Adequacy Ratio
  - Loan-to-Deposit Ratio
  - Net Profit Margin

- **Interactive Dashboard**:
  - Real-time gauge charts for key performance indicators
  - Historical trend analysis
  - Industry benchmark comparisons
  - Visual insights and recommendations

- **Intelligent Analysis**:
  - Automated insight generation based on financial metrics
  - Strategic recommendations for improvement
  - Risk indicators and warnings

## Installation

```bash
# Clone the repository
cd /Users/nuttakit/project/investment-agent

# Install required packages
pip install -r requirements.txt
```

## Usage

```bash
# Run the analysis dashboard
python tools/run_analysis.py
```

Then open your browser and navigate to: http://localhost:8050

## Dashboard Components

1. **Key Metrics Overview**: Total Assets, Net Profit, ROE, Capital Adequacy
2. **Performance Gauges**: Visual indicators for ROE, ROA, and NIM
3. **Trend Analysis**: Historical performance visualization
4. **Benchmark Comparison**: Compare against industry standards
5. **Insights & Recommendations**: AI-generated analysis and suggestions

## Financial Metrics Explained

- **ROE (Return on Equity)**: Measures profitability relative to shareholder equity
- **ROA (Return on Assets)**: Indicates how efficiently assets generate profit
- **NIM (Net Interest Margin)**: Shows profitability of lending activities
- **Capital Adequacy**: Ensures sufficient capital buffer for risk
- **Loan-to-Deposit Ratio**: Balances lending growth with liquidity

## Data Requirements

The tool expects KBANK financial statements in Excel format with:
- Balance Sheet data
- Income Statement data
- Properly formatted numerical values

## Architecture

- `financial_analyzer.py`: Core analysis engine for extracting and calculating metrics
- `dashboard.py`: Dash-based interactive visualization interface
- `run_analysis.py`: Main execution script