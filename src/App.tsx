import { useEffect, useState } from 'react';
import portfolioData from './data/portfolio.json';
import { PortfolioData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [data, setData] = useState<PortfolioData>(portfolioData);

  useEffect(() => {
    // Set CSS variables for theme colors
    document.documentElement.style.setProperty('--color-primary', data.theme.colors.primary);
    document.documentElement.style.setProperty('--color-secondary', data.theme.colors.secondary);
    document.documentElement.style.setProperty('--color-accent', data.theme.colors.accent);
  }, [data.theme.colors]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero data={data.personalInfo} />
      <Timeline experiences={data.experience} />
      <Projects projects={data.projects} />
      <Contact data={data.personalInfo} />
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;