
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="border-gold/20 text-gold hover:border-gold hover:bg-gold/10"
      onClick={toggleLanguage}
    >
      {language === 'en' ? 'VI' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
