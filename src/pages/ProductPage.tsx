
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Check, Download, ShoppingCart, Info, Shield, Zap } from "lucide-react";

const ProductPage = () => {
  // Ensure page has correct meta title
  React.useEffect(() => {
    document.title = "AGT EA - Product Details";
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">AGT EA</span>
                <span className="block mt-2 bg-gold-gradient bg-clip-text text-transparent">Technical Specifications</span>
              </h1>
              <p className="text-white/80 text-lg mb-8">
                A comprehensive overview of our powerful gold trading expert advisor, designed for precise market analysis and automated trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gold hover:bg-gold-dark text-navy text-lg px-8 py-6 h-auto font-semibold">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Purchase Now
                </Button>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6 h-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video bg-gold-gradient p-1 rounded-2xl shadow-[0_0_30px_5px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full bg-navy/80 rounded-xl overflow-hidden p-6">
                  <img 
                    src="/lovable-uploads/eea41f1f-83c1-4ebb-8273-d559b75c37aa.png" 
                    alt="AGT EA Dashboard" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Specs Tabs */}
        <section className="container mb-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-navy-light border border-gold/20 mb-8 p-1 w-full flex flex-wrap justify-center">
              <TabsTrigger value="overview" className="text-white data-[state=active]:bg-gold data-[state=active]:text-navy">
                Overview
              </TabsTrigger>
              <TabsTrigger value="requirements" className="text-white data-[state=active]:bg-gold data-[state=active]:text-navy">
                System Requirements
              </TabsTrigger>
              <TabsTrigger value="parameters" className="text-white data-[state=active]:bg-gold data-[state=active]:text-navy">
                Parameters
              </TabsTrigger>
              <TabsTrigger value="performance" className="text-white data-[state=active]:bg-gold data-[state=active]:text-navy">
                Performance Data
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in">
              <Card className="bg-navy-light border border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold text-2xl">Product Overview</CardTitle>
                  <CardDescription className="text-white/70">Everything you need to know about AGT EA</CardDescription>
                </CardHeader>
                <CardContent className="text-white/80">
                  <div className="grid gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">What is AGT EA?</h3>
                      <p>AGT EA (Automated Gold Trading Expert Advisor) is a sophisticated algorithmic trading solution designed specifically for the gold market (XAUUSD). It utilizes advanced technical analysis and proprietary algorithms to identify optimal entry and exit points, managing trades with precision while you focus on other activities.</p>
                    </div>
                    
                    <Separator className="bg-gold/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Key Features</h3>
                      <ul className="grid gap-3">
                        <li className="flex items-start">
                          <Check className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Proprietary algorithm specifically optimized for gold market volatility</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Advanced risk management with dynamic stop-loss and take-profit functionality</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Multiple timeframe analysis for confirmation of trading signals</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Customizable trading parameters to suit different risk profiles</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Real-time performance monitoring and reporting</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator className="bg-gold/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Compatibility</h3>
                      <p>AGT EA is compatible with MetaTrader 4 and MetaTrader 5 platforms, supporting most major brokers that offer gold (XAUUSD) trading. The EA works with both ECN and standard accounts.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="requirements" className="animate-fade-in">
              <Card className="bg-navy-light border border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold text-2xl">System Requirements</CardTitle>
                  <CardDescription className="text-white/70">Hardware and software needed to run AGT EA</CardDescription>
                </CardHeader>
                <CardContent className="text-white/80">
                  <div className="grid gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Trading Platform</h3>
                      <ul className="grid gap-3">
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>MetaTrader 4 (build 1320 or higher)</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>MetaTrader 5 (build 2850 or higher)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator className="bg-gold/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Hardware Requirements</h3>
                      <ul className="grid gap-3">
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>CPU: 2.0 GHz or higher (dual-core recommended)</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>RAM: 2GB minimum (4GB recommended)</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Internet: Stable connection with minimum 1 Mbps speed</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>VPS: Recommended for 24/7 operation (Windows Server 2012 or later)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator className="bg-gold/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Broker Requirements</h3>
                      <ul className="grid gap-3">
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Must offer XAUUSD (Gold) trading</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Low spread and commission recommended</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Fast execution with minimal slippage</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Allows automated trading (EA support)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="parameters" className="animate-fade-in">
              <Card className="bg-navy-light border border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold text-2xl">Parameters & Settings</CardTitle>
                  <CardDescription className="text-white/70">Customizable options for your trading strategy</CardDescription>
                </CardHeader>
                <CardContent className="text-white/80">
                  <div className="grid gap-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gold/20">
                            <th className="text-left py-3 px-4 font-semibold">Parameter</th>
                            <th className="text-left py-3 px-4 font-semibold">Default</th>
                            <th className="text-left py-3 px-4 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Lot Size</td>
                            <td className="py-3 px-4">0.01</td>
                            <td className="py-3 px-4">Trading volume in lots</td>
                          </tr>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Max Spread</td>
                            <td className="py-3 px-4">50</td>
                            <td className="py-3 px-4">Maximum allowed spread in points</td>
                          </tr>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Take Profit</td>
                            <td className="py-3 px-4">500</td>
                            <td className="py-3 px-4">Take profit level in points</td>
                          </tr>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Stop Loss</td>
                            <td className="py-3 px-4">300</td>
                            <td className="py-3 px-4">Stop loss level in points</td>
                          </tr>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Risk Percentage</td>
                            <td className="py-3 px-4">2%</td>
                            <td className="py-3 px-4">Risk per trade as percentage of balance</td>
                          </tr>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Max Orders</td>
                            <td className="py-3 px-4">5</td>
                            <td className="py-3 px-4">Maximum number of open orders</td>
                          </tr>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Use Martingale</td>
                            <td className="py-3 px-4">False</td>
                            <td className="py-3 px-4">Enable/disable martingale strategy</td>
                          </tr>
                          <tr className="border-b border-gold/10">
                            <td className="py-3 px-4 font-medium">Martingale Multiplier</td>
                            <td className="py-3 px-4">1.5</td>
                            <td className="py-3 px-4">Multiplier for martingale strategy</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <Separator className="bg-gold/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Advanced Settings</h3>
                      <p className="mb-4">AGT EA comes with additional advanced settings that can be fine-tuned by experienced traders:</p>
                      <ul className="grid gap-3">
                        <li className="flex items-start">
                          <Shield className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Drawdown protection with customizable threshold</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>News filter to avoid trading during high-impact economic events</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Trading hours restriction with session-based optimization</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="text-gold mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Multi-timeframe analysis parameters (M5, M15, H1, H4)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance" className="animate-fade-in">
              <Card className="bg-navy-light border border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold text-2xl">Performance Data</CardTitle>
                  <CardDescription className="text-white/70">Historical results and backtesting information</CardDescription>
                </CardHeader>
                <CardContent className="text-white/80">
                  <div className="grid gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Backtesting Results (2018-2023)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Total Profit</p>
                          <p className="text-2xl font-bold text-gold">+457%</p>
                        </div>
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Win Rate</p>
                          <p className="text-2xl font-bold text-gold">72.3%</p>
                        </div>
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Max Drawdown</p>
                          <p className="text-2xl font-bold text-gold">18.7%</p>
                        </div>
                      </div>
                      <div className="bg-navy p-6 rounded-lg border border-gold/10 mb-6">
                        <p className="text-center mb-4 text-white/60">Monthly Performance (%)</p>
                        <div className="h-40 flex items-end justify-between gap-2">
                          <div className="h-[30%] w-full bg-gold/20 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+4.2%</span>
                          </div>
                          <div className="h-[55%] w-full bg-gold/30 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+7.8%</span>
                          </div>
                          <div className="h-[40%] w-full bg-gold/20 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+5.6%</span>
                          </div>
                          <div className="h-[25%] w-full bg-gold/15 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+3.5%</span>
                          </div>
                          <div className="h-[15%] w-full bg-red-500/20 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">-2.1%</span>
                          </div>
                          <div className="h-[60%] w-full bg-gold/40 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+8.4%</span>
                          </div>
                          <div className="h-[45%] w-full bg-gold/30 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+6.3%</span>
                          </div>
                          <div className="h-[10%] w-full bg-red-500/15 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">-1.4%</span>
                          </div>
                          <div className="h-[35%] w-full bg-gold/20 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+4.9%</span>
                          </div>
                          <div className="h-[50%] w-full bg-gold/30 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+7.0%</span>
                          </div>
                          <div className="h-[42%] w-full bg-gold/25 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+5.8%</span>
                          </div>
                          <div className="h-[38%] w-full bg-gold/20 relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs transition-opacity">+5.3%</span>
                          </div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-white/40">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                          <span>Jul</span>
                          <span>Aug</span>
                          <span>Sep</span>
                          <span>Oct</span>
                          <span>Nov</span>
                          <span>Dec</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="bg-gold/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Strategy Performance Metrics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Profit Factor</p>
                          <p className="text-2xl font-bold text-gold">2.47</p>
                        </div>
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Recovery Factor</p>
                          <p className="text-2xl font-bold text-gold">3.81</p>
                        </div>
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Sharpe Ratio</p>
                          <p className="text-2xl font-bold text-gold">1.89</p>
                        </div>
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Average Trade</p>
                          <p className="text-2xl font-bold text-gold">+$43.27</p>
                        </div>
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">Expected Payoff</p>
                          <p className="text-2xl font-bold text-gold">1.72</p>
                        </div>
                        <div className="bg-navy p-4 rounded-lg border border-gold/10">
                          <p className="text-sm text-white/60">AHPR</p>
                          <p className="text-2xl font-bold text-gold">0.48%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Call to Action */}
        <section className="container">
          <div className="bg-gold-gradient p-px rounded-2xl">
            <div className="bg-navy rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your gold trading?</h2>
                  <p className="text-white/80 mb-6">
                    Get started with AGT EA today and experience the power of automated gold trading with our risk-free 30-day money-back guarantee.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Purchase ($399)
                    </Button>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                      <Zap className="mr-2 h-4 w-4" />
                      Try Free Demo
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-40 h-40 rounded-full bg-gold/20 flex items-center justify-center animate-pulse-slow">
                    <div className="w-32 h-32 rounded-full bg-gold/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-lg">
                        30-Day<br/>Guarantee
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
