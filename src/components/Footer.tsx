const Footer = () => {
  return (
    <footer className="bg-primary-dark py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gradient-gold">
              Maré Tech
            </span>
          </div>
          
          <p className="text-gold-muted mb-8 max-w-md mx-auto">
            Transformando negócios com tecnologia e inovação desde 2025
          </p>

          <div className="border-t border-primary-medium pt-8">
            <p className="text-gold-muted text-sm">
              Maré Tech © 2025 — Transformando negócios com tecnologia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;