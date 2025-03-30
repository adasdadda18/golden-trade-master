
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TestimonialProps {
  testimonial: {
    name: string;
    position: string;
    content: string;
    image: string;
    rating: number;
    category: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full bg-navy-light border border-gold/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="text-gold">
              <Quote className="w-6 h-6 opacity-70" />
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < testimonial.rating ? 'fill-gold text-gold' : 'text-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <p className="text-white/90 italic mb-6 flex-grow text-sm">{testimonial.content}</p>
          
          <div className="flex items-center mt-auto pt-4 border-t border-gold/10">
            <Avatar className="h-10 w-10 border border-gold/20">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback className="bg-navy text-gold">{getInitials(testimonial.name)}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <h4 className="text-gold font-medium text-sm">{testimonial.name}</h4>
              <p className="text-white/60 text-xs">{testimonial.position}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
