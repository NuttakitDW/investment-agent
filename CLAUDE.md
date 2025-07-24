# Investment Agent - Thai Stock (SET) Financial Analysis

## Project Overview
This is a financial investment agent designed to help bankers and investors analyze financial statements for companies listed on the Stock Exchange of Thailand (SET).

## Core Capabilities
1. **Financial Statement Search**: Search and retrieve financial statements for SET-listed companies
2. **Intelligent Summarization**: Provide concise summaries of key financial metrics
3. **Focus Point Analysis**: Highlight critical areas that require attention
4. **Visual Dashboard**: Create interactive dashboards to visualize financial insights

## Key Financial Metrics to Analyze
- **Profitability**: ROE, ROA, Net Profit Margin, Gross Profit Margin
- **Liquidity**: Current Ratio, Quick Ratio, Cash Flow
- **Efficiency**: Asset Turnover, Inventory Turnover, Receivables Turnover
- **Leverage**: Debt-to-Equity, Interest Coverage Ratio
- **Growth**: Revenue Growth, Earnings Growth, Asset Growth
- **Valuation**: P/E Ratio, P/B Ratio, EV/EBITDA

## Focus Areas for Analysis
1. **Red Flags**:
   - Declining margins
   - Increasing debt levels
   - Negative cash flow from operations
   - Unusual accounting changes
   - Related party transactions

2. **Positive Indicators**:
   - Consistent revenue growth
   - Improving margins
   - Strong cash generation
   - Market share gains
   - Dividend sustainability

## Dashboard Components
1. **Executive Summary Panel**
   - Company overview
   - Key metrics at a glance
   - YoY/QoQ comparisons

2. **Financial Performance Charts**
   - Revenue and profit trends
   - Margin analysis
   - Cash flow visualization

3. **Ratio Analysis**
   - Peer comparison
   - Historical trends
   - Industry benchmarks

4. **Risk Assessment**
   - Risk score calculation
   - Warning indicators
   - Recommendation matrix

## Data Sources
- SET official website
- Company annual reports (56-1 One Report)
- Quarterly financial statements
- SET Market Analysis and Reporting Tool (SETSMART)
- Thailand Securities Depository (TSD)

## Technical Implementation
- Use Python for data processing and analysis
- Pandas for financial data manipulation
- Plotly/Dash for interactive dashboards
- BeautifulSoup/Selenium for web scraping (if needed)
- API integration with SET data providers

## Workflow
1. User inputs company ticker or name
2. Agent retrieves latest financial statements
3. Performs automated analysis
4. Generates summary with key insights
5. Creates visual dashboard
6. Provides investment recommendations

## Important Considerations
- Ensure compliance with SET regulations
- Consider Thai accounting standards (TFRS)
- Include sector-specific metrics
- Account for currency considerations (THB)
- Monitor regulatory changes from SEC Thailand

## Development Guidelines
- When write script or add new tools add in tools folder only

## Development Tools and Frameworks
- Use NextJS to create dashboard