import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-display font-semibold text-gradient-gold">
              Maré Tech
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-gold transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-gold transition-colors duration-200"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-foreground hover:text-gold transition-colors duration-200"
            >
              Exemplos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-gold transition-colors duration-200"
            >
              Contato
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;