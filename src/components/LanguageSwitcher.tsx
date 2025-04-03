
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('vi');
    } else if (language === 'vi') {
      setLanguage('zh');
    } else {
      setLanguage('en');
    }
  };

  const getDisplayLabel = () => {
    switch (language) {
      case 'en': return 'VI';
      case 'vi': return 'ZH';
      case 'zh': return 'EN';
      default: return 'EN';
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="border-gold/20 text-gold hover:border-gold hover:bg-gold/10"
      onClick={toggleLanguage}
    >
      {getDisplayLabel()}
    </Button>
  );
};

export default LanguageSwitcher;
