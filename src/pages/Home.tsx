import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Target, AlertTriangle, ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { useScrollReveal, useParallax, useCountUp } from "@/hooks/useAdvancedEffects";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const projectsCount = useCountUp(150, 3000);
  const valueCount = useCountUp(2.5, 3000);
  const retentionCount = useCountUp(95, 3000);

  useScrollReveal();
  useParallax();

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsCount.startAnimation();
            valueCount.startAnimation();
            retentionCount.startAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, []);

  const coreValues = [
    {
      icon: Eye,
      title: "Clarity",
      description: "Crystal-clear vision and transparent communication throughout every project phase.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Unwavering ethical practices that build unshakeable trust and deliver on every commitment.",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Surgical attention to detail ensuring flawless and punctual project delivery.",
      gradient: "from-purple-500 to-violet-400",
    },
    {
      icon: AlertTriangle,
      title: "Prevention",
      description: "Proactive risk intelligence that prevents issues before they threaten your success.",
      gradient: "from-amber-500 to-orange-400",
    },
  ];

  const projectPhases = [
    { name: "Project Initiation", description: "Strategic visioning and scope crystallization", icon: "🎯" },
    { name: "Planning & Design", description: "Architectural blueprints and resource orchestration", icon: "📋" },
    { name: "Execution", description: "Masterful implementation with real-time optimization", icon: "⚡" },
    { name: "Monitoring", description: "Intelligent tracking with predictive adjustments", icon: "📊" },
    { name: "Project Closeout", description: "Seamless delivery and knowledge preservation", icon: "🏆" },
  ];

  const stats = [
    { 
      icon: TrendingUp, 
      value: projectsCount.count, 
      suffix: "+", 
      label: "Projects Delivered",
      description: "Successfully completed across multiple sectors"
    },
    { 
      icon: Sparkles, 
      value: valueCount.count, 
      suffix: "B+", 
      prefix: "R",
      label: "Total Value Managed",
      description: "In project investments protected"
    },
    { 
      icon: Users, 
      value: retentionCount.count, 
      suffix: "%", 
      label: "Client Retention",
      description: "Long-term partnerships built on excellence"
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <div className="reveal-scale">
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 leading-tight">
              Protect Your Time,
              <br />
              <span className="text-gradient bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Cost & Reputation
              </span>
            </h1>
            <p className="text-xl md:text-3xl font-body mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Elite project management consulting delivering uncompromising 
              <span className="text-accent font-semibold"> clarity, integrity, precision, and prevention</span> 
              to safeguard your most valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="accent" size="lg" className="text-xl px-12 py-4 hover-lift pulse-glow" onClick={() => navigate("/contact")}>
                <Sparkles className="mr-3 h-6 w-6" />
                Partner With Excellence
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-glass">
                Discover Our Vision
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Introduction Section */}
      <section className="py-32 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center reveal-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-8">
              What Hour-Glass 
              <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Delivers</span>
            </h2>
            <p className="text-2xl font-body text-foreground max-w-6xl mx-auto leading-relaxed mb-16">
              We orchestrate comprehensive project management symphonies, specializing in complex, 
              high-stakes projects across mining, oil & gas, construction, infrastructure, and power generation. 
              Our mastery ensures your projects transcend expectations in 
              <span className="text-accent font-semibold"> time, budget, and quality</span>.
            </p>
          </div>

          {/* Stats section */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal-up">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 shadow-elevated hover-lift bg-gradient-card border-gradient">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-5xl font-heading font-bold text-primary mb-2">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {stat.label}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 reveal-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-8">
              Our Core 
              <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl font-body text-foreground max-w-3xl mx-auto">
              Four foundational principles that define our excellence and drive every engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className={`group relative overflow-hidden shadow-elevated hover-lift reveal-scale stagger-${index + 1} bg-gradient-card`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-10 w-10 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sophisticated Project Solutions */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 reveal-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">
              Adaptive Project 
              <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-xl font-body text-white/90 max-w-4xl mx-auto">
              Our comprehensive mastery covers every phase of your project lifecycle with surgical precision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {projectPhases.map((phase, index) => (
              <div key={index} className="text-center reveal-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-yellow-400 text-primary rounded-full flex items-center justify-center mx-auto font-heading font-bold text-3xl shadow-premium hover-lift">
                    {phase.icon}
                  </div>
                  {index < projectPhases.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-white/30 transform translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {phase.name}
                </h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="reveal-scale">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8">
              Ready to Achieve 
              <span className="text-accent">Project Mastery</span>?
            </h2>
            <p className="text-2xl font-body mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Partner with Hour-Glass to transform your project vision into extraordinary reality. 
              Protect your time, cost, and reputation through our proven excellence.
            </p>
            <Button variant="accent" size="lg" className="text-2xl px-16 py-6 hover-lift pulse-glow">
              <Sparkles className="mr-4 h-8 w-8" />
              Begin Your Journey
              <ArrowRight className="ml-4 h-8 w-8" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;