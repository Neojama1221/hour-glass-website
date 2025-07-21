import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  BarChart3, 
  Lightbulb, 
  ArrowRight,
  Rocket,
  TrendingUp,
  Globe
} from "lucide-react";
import futurePlansBackground from "@/assets/future-plans-bg.jpg";

const FuturePlans = () => {
  const futurePlans = [
    {
      icon: Smartphone,
      title: "Project Management Software",
      description: "Cutting-edge digital solutions",
      details: [
        "Custom project dashboards with real-time analytics",
        "Mobile-first design for field accessibility",
        "AI-powered risk prediction and mitigation",
        "Integrated communication and collaboration tools",
        "Automated reporting and compliance tracking"
      ],
      timeline: "Q2 2024 Launch",
      status: "In Development"
    },
    {
      icon: BarChart3,
      title: "Advanced Progress Tracking",
      description: "Real-time project intelligence",
      details: [
        "IoT sensor integration for live project metrics",
        "Predictive analytics for milestone forecasting",
        "Resource optimization algorithms",
        "Automated progress photography and documentation",
        "Dynamic schedule adjustment recommendations"
      ],
      timeline: "Q3 2024 Beta",
      status: "Design Phase"
    },
    {
      icon: Lightbulb,
      title: "Value-Added Services",
      description: "Comprehensive project ecosystem",
      details: [
        "Training and certification programs",
        "Industry benchmarking and best practices",
        "Sustainability and ESG consulting",
        "Digital transformation advisory",
        "Post-project optimization services"
      ],
      timeline: "Q4 2024 Launch",
      status: "Planning"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Enhanced Efficiency",
      description: "Streamlined processes reducing project overhead by up to 25%"
    },
    {
      icon: TrendingUp,
      title: "Improved Outcomes",
      description: "Data-driven insights leading to better project success rates"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Cloud-based solutions enabling remote project management"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 31, 68, 0.8), rgba(79, 91, 102, 0.6)), url(${futurePlansBackground})`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Future <span className="text-accent">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto opacity-90">
            Pioneering the next generation of project management solutions
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-primary mb-8">
            Our Vision for Tomorrow
          </h2>
          <p className="text-xl font-body text-foreground max-w-4xl mx-auto leading-relaxed">
            At Hour-Glass, we're not just managing today's projects – we're building the future of project management. 
            Our commitment to innovation drives us to develop cutting-edge solutions that will revolutionize how 
            complex projects are planned, executed, and delivered across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Future Plans Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Innovation Roadmap
            </h2>
            <p className="text-xl font-body text-foreground max-w-3xl mx-auto">
              Three strategic pillars driving our technological advancement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {futurePlans.map((plan, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <plan.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-primary mb-1">
                        {plan.title}
                      </h3>
                      <p className="font-body text-secondary text-sm">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-3 font-body text-foreground mb-6">
                      {plan.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center text-sm font-body">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {plan.status}
                      </span>
                      <span className="text-accent font-semibold">
                        {plan.timeline}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Future Benefits
            </h2>
            <p className="text-xl font-body text-foreground max-w-3xl mx-auto">
              The advantages our innovations will bring to your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partnership */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary mb-8">
              Technology Partnerships
            </h2>
            <p className="text-xl font-body text-foreground leading-relaxed mb-8">
              We're collaborating with leading technology partners and research institutions to ensure our 
              innovations are built on cutting-edge foundations. Our partnerships span artificial intelligence, 
              IoT sensors, cloud computing, and mobile technology to create comprehensive solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="p-6 shadow-card">
                <CardContent className="p-0">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    Research & Development
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Continuous investment in R&D to stay ahead of industry trends and client needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-card">
                <CardContent className="p-0">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    Industry Collaboration
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Working with sector leaders to validate and refine our technological solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Be Part of the Future
          </h2>
          <p className="text-xl font-body mb-8 max-w-2xl mx-auto opacity-90">
            Join our early access program and be among the first to experience the next generation 
            of project management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg">
              Join Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuturePlans;