'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, AlertCircle, DollarSign, BarChart3, PieChart, Activity } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Dashboard() {
  const [financialData, setFinancialData] = useState<any>(null)

  useEffect(() => {
    // In a real app, this would fetch from an API
    setFinancialData({
      company: 'Kasikornbank (KBANK)',
      lastUpdate: new Date().toLocaleDateString(),
      stockPrice: 145.50,
      priceChange: -2.50,
      priceChangePercent: -1.69,
      metrics: {
        nim: 3.2,
        roa: 1.2,
        roe: 12.5,
        npl: 3.1,
        costToIncome: 44.8,
        tier1: 15.2,
        totalCapital: 18.5
      },
      quarterlyData: [
        { quarter: 'Q1 2024', revenue: 45000, profit: 12000, nim: 3.0 },
        { quarter: 'Q2 2024', revenue: 46500, profit: 12500, nim: 3.1 },
        { quarter: 'Q3 2024', revenue: 47200, profit: 13000, nim: 3.1 },
        { quarter: 'Q4 2024', revenue: 48000, profit: 13500, nim: 3.2 },
        { quarter: 'Q1 2025', revenue: 49000, profit: 14000, nim: 3.2 }
      ],
      segmentData: [
        { name: 'Retail Banking', value: 45, color: '#0088FE' },
        { name: 'Corporate Banking', value: 30, color: '#00C49F' },
        { name: 'Investment Banking', value: 15, color: '#FFBB28' },
        { name: 'Others', value: 10, color: '#FF8042' }
      ]
    })
  }, [])

  if (!financialData) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{financialData.company}</h1>
          <p className="text-gray-600">Financial Analysis Dashboard • Last updated: {financialData.lastUpdate}</p>
        </div>

        {/* Stock Price Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">Stock Price</CardTitle>
                <CardDescription>SET: KBANK</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">฿{financialData.stockPrice.toFixed(2)}</div>
                <div className={`flex items-center ${financialData.priceChange < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {financialData.priceChange < 0 ? <TrendingDown className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1" />}
                  <span>{financialData.priceChange.toFixed(2)} ({financialData.priceChangePercent.toFixed(2)}%)</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard title="Net Interest Margin" value={`${financialData.metrics.nim}%`} icon={DollarSign} trend="up" />
          <MetricCard title="Return on Assets" value={`${financialData.metrics.roa}%`} icon={BarChart3} trend="stable" />
          <MetricCard title="Return on Equity" value={`${financialData.metrics.roe}%`} icon={PieChart} trend="up" />
          <MetricCard title="NPL Ratio" value={`${financialData.metrics.npl}%`} icon={AlertCircle} trend="down" status="warning" />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="segments">Business Segments</TabsTrigger>
            <TabsTrigger value="ratios">Key Ratios</TabsTrigger>
            <TabsTrigger value="analysis">Investment Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Quarterly Performance</CardTitle>
                <CardDescription>Revenue and Profit Trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={financialData.quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue (Million ฿)" />
                    <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Net Profit (Million ฿)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Net Interest Margin Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={financialData.quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="nim" fill="#0088FE" name="NIM %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Business Segment</CardTitle>
                <CardDescription>Q1 2025 Distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RePieChart>
                    <Pie
                      data={financialData.segmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {financialData.segmentData.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ratios" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profitability Ratios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <RatioItem label="Net Interest Margin" value={`${financialData.metrics.nim}%`} benchmark="3.0%" status="good" />
                    <RatioItem label="Return on Assets" value={`${financialData.metrics.roa}%`} benchmark="1.0%" status="good" />
                    <RatioItem label="Return on Equity" value={`${financialData.metrics.roe}%`} benchmark="10.0%" status="good" />
                    <RatioItem label="Cost-to-Income" value={`${financialData.metrics.costToIncome}%`} benchmark="45.0%" status="good" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk & Capital Ratios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <RatioItem label="NPL Ratio" value={`${financialData.metrics.npl}%`} benchmark="3.5%" status="warning" />
                    <RatioItem label="Tier 1 Capital" value={`${financialData.metrics.tier1}%`} benchmark="8.5%" status="good" />
                    <RatioItem label="Total Capital" value={`${financialData.metrics.totalCapital}%`} benchmark="11.0%" status="good" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Investment Recommendation</CardTitle>
                <CardDescription>Based on Q1 2025 Analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Rating</span>
                    <Badge className="bg-green-600">BUY</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Target Price</span>
                    <span className="font-bold">฿180.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Upside Potential</span>
                    <span className="text-green-600 font-bold">+23.7%</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Key Strengths</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Market leadership in Thai banking sector</li>
                      <li>Strong digital banking platform (K PLUS)</li>
                      <li>Solid capital position above regulatory requirements</li>
                      <li>Diversified revenue streams</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Risk Factors</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>NPL ratio approaching warning threshold</li>
                      <li>Interest rate sensitivity</li>
                      <li>Increasing competition from digital banks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function MetricCard({ title, value, icon: Icon, trend, status }: any) {
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
  const bgColor = status === 'warning' ? 'bg-yellow-50' : 'bg-white'
  
  return (
    <Card className={bgColor}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-xs ${trendColor} flex items-center mt-1`}>
          {trend === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
          {trend === 'down' && <TrendingDown className="w-3 h-3 mr-1" />}
          {trend === 'stable' && <Activity className="w-3 h-3 mr-1" />}
          <span>{trend === 'up' ? 'Above' : trend === 'down' ? 'Below' : 'At'} benchmark</span>
        </div>
      </CardContent>
    </Card>
  )
}

function RatioItem({ label, value, benchmark, status }: any) {
  const statusColor = status === 'good' ? 'text-green-600' : status === 'warning' ? 'text-yellow-600' : 'text-red-600'
  
  return (
    <div className="flex justify-between items-center py-2 border-b last:border-0">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-sm text-gray-500">Benchmark: {benchmark}</div>
      </div>
      <div className={`text-lg font-bold ${statusColor}`}>{value}</div>
    </div>
  )
}