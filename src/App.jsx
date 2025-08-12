import React from 'react';
import './App.css';
import { Phone, Instagram, Mail, Heart, Brain, Users, CheckCircle, Star } from 'lucide-react';
import brendaPhoto from './assets/brenda-photo.jpg';
import logo from './assets/logo.webp';

function App() {
  const specialties = [
    "Transtornos ansiosos",
    "Depressão",
    "Transtornos alimentares",
    "Bipolaridade",
    "Transtorno de Personalidade Borderline",
    "Relacionamentos",
    "Comportamento Alimentar e Emagrecimento",
    "Procrastinação e baixa autoestima"
  ];

  const differentiators = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Psicologia Baseada em Evidências",
      description: "Aprimoramento constante através de estudos recentes para entregar os melhores resultados possíveis."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Foco em Demandas Específicas",
      description: "Especialização em áreas específicas para oferecer tratamento mais eficaz e direcionado."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Abordagem Colaborativa",
      description: "Trabalho em equipe onde não existe hierarquia, criando um ambiente seguro e acolhedor."
    }
  ];

  const sessionSteps = [
    {
      number: "01",
      title: "Acolhimento Genuíno",
      description: "Momento de reconexão onde você pode compartilhar como foi sua semana e como está se sentindo."
    },
    {
      number: "02", 
      title: "Definindo a Rota",
      description: "Juntos decidimos o que trabalhar na sessão, focando no que é mais relevante para seu bem-estar."
    },
    {
      number: "03",
      title: "Coração da Sessão",
      description: "Usamos ferramentas da TCC para entender pensamentos, sentimentos e comportamentos."
    },
    {
      number: "04",
      title: "Plano de Ação",
      description: "Atividades gentis para aplicar o que aprendemos no seu dia a dia."
    },
    {
      number: "05",
      title: "Encerramento",
      description: "Resumo da sessão e momento para tirar dúvidas, saindo com mais clareza e esperança."
    }
  ];

  return (
    <div className="min-h-screen paper-texture">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <img src={logo} alt="Brenda Cardim Logo" className="h-16 w-auto" />
              <h1 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
                <span className="signature-style text-4xl lg:text-5xl block mb-2">Brenda Cardim</span>
                <span className="text-2xl lg:text-3xl font-normal tracking-wide">PSICÓLOGA</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light">CRP 01/26963</p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl lg:text-2xl font-light text-foreground">
                Terapia Cognitivo Comportamental
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Promovo o bem-estar psicológico através de uma abordagem colaborativa, 
                criando um espaço seguro e acolhedor para sua jornada de autoconhecimento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5561982008260" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-elegant inline-flex items-center justify-center px-8 py-4 text-white rounded-lg font-medium hover-lift"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consulta
              </a>
              <a 
                href="https://instagram.com/brendacardimpsi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg font-medium hover-lift bg-card text-card-foreground"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img 
                src={brendaPhoto} 
                alt="Brenda Cardim - Psicóloga" 
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Sobre Minha Abordagem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Meu estilo de trabalho é colaborativo, onde não existe hierarquia. Eu tenho a expertise 
              técnica/teórica, mas você tem expertise na sua própria experiência de vida. Juntos 
              alinhamos objetivos e dificuldades para promover mais qualidade de vida e saúde mental.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center space-y-4 hover-lift p-6 rounded-xl bg-background">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Áreas de Especialização
            </h2>
            <p className="text-lg text-muted-foreground">
              Atendimento especializado em diversas demandas psicológicas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg hover-lift">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Como Funciona uma Sessão
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada sessão segue uma estrutura flexível e colaborativa, focando no que realmente importa para você.
            </p>
          </div>

          <div className="space-y-8">
            {sessionSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-light text-primary">{step.number}</span>
                    <h3 className="text-2xl font-medium text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                <div className="w-full lg:w-80 h-2 lg:h-40 bg-gradient-to-r lg:bg-gradient-to-b from-primary/20 to-accent/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Formação e Experiência
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 p-8 bg-card rounded-xl hover-lift">
              <h3 className="text-xl font-medium text-foreground flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Formação Acadêmica
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Graduação em Psicologia</h4>
                  <p className="text-muted-foreground">Faculdade Pernambucana de Saúde - 2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Pós-graduação em TCC</h4>
                  <p className="text-muted-foreground">Grupo de Psicologia Baseada em Evidências - Em andamento</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 p-8 bg-card rounded-xl hover-lift">
              <h3 className="text-xl font-medium text-foreground flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                Especializações
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">• Psicopatologia em saúde mental</p>
                <p className="text-muted-foreground">• Emagrecimento e tratamento de obesidade</p>
                <p className="text-muted-foreground">• Comportamento Alimentar</p>
                <p className="text-muted-foreground">• Terapia de Relacionamentos</p>
                <p className="text-muted-foreground">• 2 anos de experiência clínica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou aqui para te acompanhar nessa jornada de autoconhecimento e transformação. 
              Entre em contato para agendar sua consulta.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <a 
              href="https://wa.me/5561982008260" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 p-6 bg-background rounded-xl hover-lift"
            >
              <Phone className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">WhatsApp</span>
              <span className="text-muted-foreground">(61) 98200-8260</span>
            </a>

            <a 
              href="mailto:BrendaLcardim@gmail.com"
              className="flex flex-col items-center space-y-3 p-6 bg-background rounded-xl hover-lift"
            >
              <Mail className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">E-mail</span>
              <span className="text-muted-foreground">BrendaLcardim@gmail.com</span>
            </a>

            <a 
              href="https://instagram.com/brendacardimpsi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 p-6 bg-background rounded-xl hover-lift"
            >
              <Instagram className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">Instagram</span>
              <span className="text-muted-foreground">@brendacardimpsi</span>
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium text-foreground">Atendimento Online</p>
            <p className="text-muted-foreground">
              Sessões de até 50 minutos • Plataformas: Google Meet e WhatsApp Video
            </p>
            <p className="text-sm text-muted-foreground">
              Modalidade: Pacotes de 4 sessões • Pagamento via PIX
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={logo} alt="Brenda Cardim" className="h-8 w-auto" />
            <span className="signature-style text-xl">Brenda Cardim</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Brenda Cardim - Psicóloga CRP 01/26963. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

