import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Target, ArrowRight, Sparkles, Star } from "lucide-react";
import { useScrollReveal, useParallax } from "@/hooks/useAdvancedEffects";
import aboutBackground from "@/assets/about-background.jpg";
import directorProfile from "@/assets/director-profile.jpg";

const About = () => {
  useScrollReveal();
  useParallax();

  const achievements = [
    {
      icon: Award,
      title: "150+ Projects",
      description: "Successfully delivered across multiple sectors",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Users,
      title: "95% Client Retention",
      description: "Long-term partnerships built on trust and results",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: TrendingUp,
      title: "R2.5B+ Value",
      description: "Total project value successfully managed",
      gradient: "from-purple-500 to-violet-400",
    },
    {
      icon: Target,
      title: "98% On-Time",
      description: "Delivery rate with budget compliance",
      gradient: "from-amber-500 to-orange-400",
    },
  ];

  const credentials = [
    { icon: Star, title: "Professional Diploma in Forensic Schedule Analysis", desc: "College of Contract Management UK" },
    { icon: Star, title: "Professional Diploma in Expert Witness (in progress)", desc: "College of Contract Management UK" },
    { icon: Star, title: "Higher National Diploma: Mechanical Engineering", desc: "Durban University of Technology" },
    { icon: Star, title: "16+ Years Experience", desc: "Engineering, procurement & construction" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Immersive Hero Section */}
      <section 
        className="relative py-40 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${aboutBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white reveal-scale">
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8">
              About <span className="text-gradient bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Hour-Glass</span>
            </h1>
            <p className="text-2xl md:text-3xl font-body max-w-4xl mx-auto opacity-90 leading-relaxed">
              Building excellence through visionary project management mastery
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Philosophy Section */}
      <section className="py-32 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center reveal-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-12">
              Our <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <div className="bg-gradient-card rounded-3xl p-12 shadow-premium border-gradient hover-lift">
              <p className="text-2xl font-body text-foreground leading-relaxed mb-8">
                At Hour-Glass, we believe that exceptional project management is the <span className="text-accent font-semibold">cornerstone of business transformation</span>. 
                Our philosophy centers on four fundamental principles that guide every engagement: delivering absolute 
                clarity in communication and objectives, maintaining unwavering integrity in all our dealings, 
                applying surgical precision in every aspect of project execution, and implementing robust prevention 
                strategies to mitigate risks before they impact your business.
              </p>
              <p className="text-xl font-body text-muted-foreground leading-relaxed">
                We understand that your reputation, time, and resources are invaluable. That's why we approach 
                every project with the meticulous care and strategic thinking that complex, high-value projects demand. 
                <span className="text-primary font-semibold"> Excellence isn't just our standard—it's our promise.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sophisticated Director Profile */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-center text-white mb-20 reveal-up">
              Visionary <span className="text-accent">Leadership</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 reveal-up">
                <div className="bg-white/10 backdrop-glass rounded-3xl p-10 shadow-premium">
                  <h3 className="text-4xl font-heading font-bold text-white mb-6">
                    Raben Moodley
                  </h3>
                  <div className="text-lg font-semibold text-accent mb-6">
                    FORENSIC PLANNER, LEAD PLANNER, PLANNING ENGINEER
                  </div>
                  <p className="text-xl font-body text-white/90 mb-8 leading-relaxed">
                    16+ years of expertise in engineering, procurement, construction, and project management for high-value, 
                    complex capital projects portfolios.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-2xl font-heading font-bold text-white mb-4">Key Experience & Achievements:</h4>
                    <div className="space-y-4 text-white/90">
                      <div>
                        <h5 className="font-semibold text-accent mb-2">Forensic Delay Analysis & Claims:</h5>
                        <p className="text-sm">Investigated project delays, prepared expert reports for claims and legal proceedings, and applied advanced delay analysis methodologies for complex disputes.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-2">Project Controls & Planning:</h5>
                        <p className="text-sm">Developed and managed estimation and execution schedules for large EPC and mining projects, from concept to closeout.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-2">Portfolio Management:</h5>
                        <p className="text-sm">Oversaw portfolios of 100+ projects (total value R750M+), including the creation of portfolio master schedules and innovative tracking/reporting tools for strategic planning.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-2">Major Infrastructure & Industrial Projects:</h5>
                        <p className="text-sm">Delivered delay analysis, mitigation, and schedule management for projects ranging from R50 million to over R1 billion across rail, mining, industrial, and infrastructure sectors.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-2">Progress Tracking & Reporting:</h5>
                        <p className="text-sm">Engineered advanced tracking systems and reporting dashboards, enabling data-driven decision-making and comprehensive project oversight.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-2">Contractual Compliance:</h5>
                        <p className="text-sm">Ensured all schedules and project controls aligned with contract requirements, supporting claims, EOT submissions, and dispute resolution.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {credentials.map((cred, index) => (
                      <div key={index} className="flex items-start space-x-3 reveal-scale" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <cred.icon className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-white text-sm">{cred.title}</p>
                          <p className="text-xs text-white/70">{cred.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-accent/10 rounded-2xl border border-accent/20">
                    <h5 className="font-semibold text-accent mb-2">Sector Experience:</h5>
                    <p className="text-white/90 font-body text-sm">
                      Mining | Oil & Gas | Construction | Infrastructure | Power Generation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-center reveal-scale">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-accent rounded-full scale-110 opacity-20 animate-pulse"></div>
                  <img 
                    src={directorProfile} 
                    alt="Director Profile" 
                    className="w-96 h-96 rounded-full mx-auto shadow-premium object-cover border-4 border-accent/30 hover-lift"
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center shadow-premium">
                    <Sparkles className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements */}
      <section className="py-32 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-center text-primary mb-20 reveal-up">
            Exceptional <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`group relative overflow-hidden shadow-elevated hover-lift reveal-scale stagger-${index + 1} bg-gradient-card`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-10 w-10 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
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
              Experience the Hour-Glass 
              <span className="text-accent">Difference</span>
            </h2>
            <p className="text-2xl font-body mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Partner with proven expertise and visionary leadership to ensure your next project 
              delivers extraordinary, transformational results.
            </p>
            <Button variant="accent" size="lg" className="text-2xl px-16 py-6 hover-lift pulse-glow">
              <Sparkles className="mr-4 h-8 w-8" />
              Start Your Project
              <ArrowRight className="ml-4 h-8 w-8" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;