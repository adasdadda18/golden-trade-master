
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface CaseStudyProps {
  title: string;
  trader: {
    name: string;
    position: string;
    image: string;
    initials: string;
  };
  content: {
    challenge: string;
    solution: string;
    results: string;
  };
  metrics: {
    profitIncrease: string;
    drawdownReduction: string;
    timeframe: string;
  };
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, trader, content, metrics }) => {
  return (
    <Card className="bg-navy/70 backdrop-blur-sm border border-gold/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300">
      <CardHeader className="bg-navy-light border-b border-gold/10 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-gold text-xl">{title}</CardTitle>
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-2 border border-gold/20">
              <AvatarImage src={trader.image} alt={trader.name} />
              <AvatarFallback className="bg-navy text-gold">{trader.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-white font-medium text-sm">{trader.name}</p>
              <CardDescription className="text-white/60 text-xs">{trader.position}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-2">Challenge</h3>
            <p className="text-white/80 text-sm">{content.challenge}</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-2">Solution</h3>
            <p className="text-white/80 text-sm">{content.solution}</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-2">Results</h3>
            <p className="text-white/80 text-sm">{content.results}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gold/10">
            <div className="text-center">
              <p className="text-gold font-bold text-xl">{metrics.profitIncrease}</p>
              <p className="text-white/60 text-xs">Profit Increase</p>
            </div>
            <div className="text-center">
              <p className="text-gold font-bold text-xl">{metrics.drawdownReduction}</p>
              <p className="text-white/60 text-xs">Drawdown Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-gold font-bold text-xl">{metrics.timeframe}</p>
              <p className="text-white/60 text-xs">Timeframe</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudy;
