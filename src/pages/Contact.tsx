import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  Star,
  CheckCircle
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useAdvancedEffects";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useScrollReveal();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully!",
      description: "Thank you for your interest. We'll respond within 24 hours to begin your project transformation.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 (0) 815916549"],
      description: "Immediate response during business hours",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["admin@hour-glass.co.za", "raben@hour-glass.co.za"],
      description: "Professional response within 24 hours",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Kyalami, Gauteng", "Johannesburg"],
      description: "Serving clients across Africa",
      gradient: "from-purple-500 to-violet-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 09:00 - 15:00"],
      description: "Professional service during business hours",
      gradient: "from-amber-500 to-orange-400",
    }
  ];

  const services = [
    "Project Planning Consultation",
    "Risk Assessment & Mitigation",
    "Process Optimization",
    "Training & Development",
    "Other (Please specify)"
  ];

  const benefits = [
    { icon: CheckCircle, text: "Free initial consultation" },
    { icon: CheckCircle, text: "24-hour response guarantee" },
    { icon: CheckCircle, text: "Customized project solutions" },
    { icon: CheckCircle, text: "Industry-leading expertise" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="py-40 bg-gradient-premium text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/90"></div>
        
        {/* Animated background elements */}
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
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8">
              Let's Create <span className="text-accent">Excellence</span> Together
            </h1>
            <p className="text-2xl md:text-3xl font-body max-w-4xl mx-auto opacity-90 leading-relaxed">
              Ready to transform your project vision into extraordinary reality? 
              Connect with Hour-Glass and experience the difference.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Info */}
      <section className="py-32 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Premium Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-premium bg-gradient-card border-gradient hover-lift reveal-up">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-primary">
                        Start Your Project Transformation
                      </h2>
                      <p className="font-body text-muted-foreground text-lg">
                        Complete the form below for your personalized consultation
                      </p>
                    </div>
                  </div>

                  {/* Benefits highlight */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-6 bg-accent/5 rounded-2xl border border-accent/10">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <benefit.icon className="h-5 w-5 text-accent" />
                        <span className="font-body text-foreground">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="reveal-up stagger-1">
                        <Label htmlFor="firstName" className="font-body font-semibold text-primary">
                          First Name *
                        </Label>
                        <Input 
                          id="firstName" 
                          type="text" 
                          className="mt-3 h-12 border-2 border-border focus:border-accent transition-colors duration-300" 
                          required 
                        />
                      </div>
                      <div className="reveal-up stagger-2">
                        <Label htmlFor="lastName" className="font-body font-semibold text-primary">
                          Last Name *
                        </Label>
                        <Input 
                          id="lastName" 
                          type="text" 
                          className="mt-3 h-12 border-2 border-border focus:border-accent transition-colors duration-300" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="reveal-up stagger-3">
                        <Label htmlFor="email" className="font-body font-semibold text-primary">
                          Email Address *
                        </Label>
                        <Input 
                          id="email" 
                          type="email" 
                          className="mt-3 h-12 border-2 border-border focus:border-accent transition-colors duration-300" 
                          required 
                        />
                      </div>
                      <div className="reveal-up stagger-4">
                        <Label htmlFor="phone" className="font-body font-semibold text-primary">
                          Phone Number
                        </Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          className="mt-3 h-12 border-2 border-border focus:border-accent transition-colors duration-300" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="reveal-up stagger-5">
                        <Label htmlFor="company" className="font-body font-semibold text-primary">
                          Company Name
                        </Label>
                        <Input 
                          id="company" 
                          type="text" 
                          className="mt-3 h-12 border-2 border-border focus:border-accent transition-colors duration-300" 
                        />
                      </div>
                      <div className="reveal-up stagger-1">
                        <Label htmlFor="projectValue" className="font-body font-semibold text-primary">
                          Estimated Project Value
                        </Label>
                        <select 
                          id="projectValue" 
                          className="mt-3 w-full h-12 px-4 py-2 border-2 border-border bg-background rounded-lg focus:outline-none focus:border-accent transition-colors duration-300"
                        >
                          <option value="">Select range</option>
                          <option value="under-50m">Under R50M</option>
                          <option value="50m-200m">R50M - R200M</option>
                          <option value="200m-500m">R200M - R500M</option>
                          <option value="500m-1b">R500M - R1B</option>
                          <option value="over-1b">Over R1B</option>
                        </select>
                      </div>
                    </div>

                    <div className="reveal-up stagger-2">
                      <Label htmlFor="service" className="font-body font-semibold text-primary">
                        Service Required *
                      </Label>
                      <select 
                        id="service" 
                        className="mt-3 w-full h-12 px-4 py-2 border-2 border-border bg-background rounded-lg focus:outline-none focus:border-accent transition-colors duration-300"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="reveal-up stagger-3">
                      <Label htmlFor="message" className="font-body font-semibold text-primary">
                        Project Details & Vision *
                      </Label>
                      <Textarea 
                        id="message" 
                        rows={6} 
                        className="mt-3 border-2 border-border focus:border-accent transition-colors duration-300" 
                        placeholder="Share your project vision, timeline, key challenges, and how Hour-Glass can help transform your goals into reality..."
                        required 
                      />
                    </div>

                    <div className="flex items-start space-x-3 reveal-up stagger-4">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="mt-2 accent-accent" 
                        required 
                      />
                      <Label htmlFor="privacy" className="font-body text-sm text-muted-foreground leading-relaxed">
                        I agree to Hour-Glass contacting me regarding my project and consent to my data being processed in accordance with our privacy policy. I understand this consultation is complimentary.
                      </Label>
                    </div>

                    <Button variant="accent" size="lg" className="w-full text-xl py-4 hover-lift pulse-glow reveal-up stagger-5">
                      <Sparkles className="mr-3 h-6 w-6" />
                      Begin Your Transformation
                      <Send className="ml-3 h-6 w-6" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`shadow-elevated hover-lift bg-gradient-card border-gradient reveal-scale stagger-${index + 1}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="h-8 w-8 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-primary mb-3 text-xl">
                            {info.title}
                          </h3>
                          <div className="space-y-2 font-body text-foreground">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-lg font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-3 font-medium">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-32 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-primary mb-12 reveal-up">
            Our <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Location</span>
          </h2>
          <Card className="shadow-premium hover-lift reveal-up">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    Johannesburg Office
                  </h3>
                  <p className="font-body text-muted-foreground text-lg">
                    Strategic location in Africa's business capital
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    Interactive map integration available
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Premium Alternative Contact Methods */}
      <section className="py-32 bg-gradient-premium text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 reveal-up">
            Choose Your Preferred 
            <span className="text-accent"> Connection Method</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-glass border-white/20 hover-lift reveal-scale stagger-1">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Schedule a Strategic Call
                </h3>
                <p className="font-body text-white/80 mb-6 leading-relaxed">
                  Book a convenient time for an in-depth project transformation discussion
                </p>
                <Button variant="accent" className="w-full hover-lift">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Book Premium Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-glass border-white/20 hover-lift reveal-scale stagger-2">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Direct Project Inquiry
                </h3>
                <p className="font-body text-white/80 mb-6 leading-relaxed">
                  Send us a detailed email with your project vision and requirements
                </p>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  Send Direct Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;