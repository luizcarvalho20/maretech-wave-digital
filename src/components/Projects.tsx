import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Loja Solar',
      description: 'CRM integrado com automação de vendas para empresa de energia solar',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp API'],
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Restaurante do Mar',
      description: 'PDV + painel de gestão de estoque para cadeia de restaurantes',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Analytics'],
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Clínica Vida',
      description: 'Sistema omnichannel integrado ao WhatsApp e Instagram',
      technologies: ['Angular', 'Django', 'Redis', 'Telegram Bot'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-primary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-gradient-gold mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exemplos de soluções que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift group cursor-pointer overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gold/10 rounded-lg text-gold">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gold">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/20 text-gold border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center text-gold hover:text-gold-muted transition-colors cursor-pointer">
                  <span className="text-sm font-medium">Ver detalhes</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;