import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  ShoppingCart, 
  Zap, 
  MessageSquare, 
  BarChart3,
  Smartphone 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'CRM Inteligente',
      description: 'Gestão de clientes em tempo real com automação completa'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Automação de Vendas',
      description: 'Integração com e-commerce e sistemas de pagamento'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'PDV Moderno',
      description: 'Sistemas rápidos e intuitivos para seu negócio'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Integração Omnichannel',
      description: 'WhatsApp + Instagram + Web em uma só plataforma'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Relatórios e BI',
      description: 'Dashboards inteligentes para tomada de decisões'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos para iOS e Android'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções tecnológicas completas para modernizar e automatizar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover-lift group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;