# KBANK Financial Dashboard

A modern financial analysis dashboard for Kasikornbank (KBANK) built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Real-time Stock Price**: Display current stock price with daily changes
- **Key Financial Metrics**: NIM, ROA, ROE, NPL ratios with visual indicators
- **Performance Charts**: Interactive charts showing quarterly revenue and profit trends
- **Business Segments**: Pie chart breakdown of revenue by business segment
- **Investment Analysis**: Comprehensive investment recommendations with risk assessment
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Dashboard Sections

### 1. Performance Tab
- Quarterly revenue and profit line charts
- Net Interest Margin (NIM) trend analysis
- Historical performance visualization

### 2. Business Segments Tab
- Revenue distribution by segment
- Visual breakdown of:
  - Retail Banking (45%)
  - Corporate Banking (30%)
  - Investment Banking (15%)
  - Others (10%)

### 3. Key Ratios Tab
- **Profitability Ratios**: NIM, ROA, ROE, Cost-to-Income
- **Risk & Capital Ratios**: NPL, Tier 1 Capital, Total Capital
- Benchmark comparisons for each metric

### 4. Investment Analysis Tab
- Investment rating (BUY/HOLD/SELL)
- Target price and upside potential
- Key strengths and risk factors
- Actionable investment recommendations

## Data Integration

Currently, the dashboard uses mock data. To integrate with real financial data:

1. Create an API endpoint in `app/api/financial-data/route.ts`
2. Connect to your data source (database, external API, etc.)
3. Update the `useEffect` hook in `app/page.tsx` to fetch from your API

## Customization

### Adding New Metrics
1. Update the `financialData` state structure
2. Create new `MetricCard` components
3. Add corresponding visualizations

### Styling
- Tailwind CSS classes are used throughout
- Modify `globals.css` for custom styles
- Update color schemes in component files

## Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Charting library for data visualization
- **Lucide React**: Icon library

## Future Enhancements

- Real-time data integration with SET API
- PDF report generation
- Email alerts for price changes
- Multi-company comparison
- Historical data analysis (5+ years)
- Mobile app version