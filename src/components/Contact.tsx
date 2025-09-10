import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/55999999999', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/maretech', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@maretech.com.br', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e vamos levar o seu negócio para o próximo nível!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover-lift">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gold">WhatsApp</h3>
                <p className="text-muted-foreground">Resposta imediata</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover-lift">
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <Instagram className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gold">Instagram</h3>
                <p className="text-muted-foreground">@maretech</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover-lift">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gold">E-mail</h3>
                <p className="text-muted-foreground">contato@maretech.com.br</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover-lift">
              <div className="p-3 bg-gold/10 rounded-lg">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-gold">Localização</h3>
                <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-gold mb-4">
                Pronto para transformar seu negócio?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe está pronta para desenvolver a solução perfeita para suas necessidades. 
                Vamos conversar sobre seu projeto!
              </p>
              
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-gold hover:shadow-gold text-primary font-semibold py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  📲 Falar no WhatsApp
                </Button>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={handleInstagram}
                    className="flex-1 border-gold text-gold hover:bg-gold hover:text-primary py-3 rounded-xl"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleEmail}
                    className="flex-1 border-gold text-gold hover:bg-gold hover:text-primary py-3 rounded-xl"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    E-mail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;