import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/55999999999', '_blank');
  };

  return (
    <section 
      id="inicio"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-gold">Automação e Tecnologia</span>
            <br />
            <span className="text-foreground">para impulsionar o seu negócio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            CRM, PDV, automação de vendas e soluções digitais sob medida
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gradient-gold hover:shadow-gold text-primary font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              📲 Fale Conosco
            </Button>
            
            <Button
              variant="outline"
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-gold text-gold hover:bg-gold hover:text-primary px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Conheça nossos serviços
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gold/10 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gold/20 rounded-full animate-pulse hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;