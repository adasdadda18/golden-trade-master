
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the available languages
export type Language = 'en' | 'vi' | 'zh';

// Define the language context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

// Create a provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // Try to get the language from localStorage, fallback to 'en'
  const [language, setLanguage] = useState<Language>(
    () => {
      const savedLanguage = localStorage.getItem('language') as Language;
      return savedLanguage === 'vi' ? 'vi' : savedLanguage === 'zh' ? 'zh' : 'en';
    }
  );

  // Update language and save to localStorage
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
