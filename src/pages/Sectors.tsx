import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pickaxe, 
  Fuel, 
  Building, 
  Zap, 
  TrendingUp,
  ArrowRight,
  DollarSign,
  Users,
  Award
} from "lucide-react";

const Sectors = () => {
  const sectors = [
    {
      icon: Pickaxe,
      title: "Mining",
      description: "Comprehensive project management for mining operations, from exploration to production",
      projects: "45+ Projects",
      value: "R1.2B+",
      expertise: [
        "Mine development and expansion",
        "Equipment procurement and installation",
        "Safety and compliance management",
        "Environmental impact mitigation",
        "Resource optimization strategies"
      ]
    },
    {
      icon: Fuel,
      title: "Oil & Gas",
      description: "Expert management of complex oil and gas infrastructure projects",
      projects: "32+ Projects", 
      value: "R850M+",
      expertise: [
        "Pipeline construction and maintenance",
        "Refinery upgrades and modifications",
        "Offshore platform installations",
        "Safety protocol implementation",
        "Regulatory compliance management"
      ]
    },
    {
      icon: Building,
      title: "Construction",
      description: "Large-scale construction project management from conception to completion",
      projects: "38+ Projects",
      value: "R680M+",
      expertise: [
        "Commercial and industrial buildings",
        "Infrastructure development",
        "Contract and vendor management",
        "Quality assurance and control",
        "Timeline and budget optimization"
      ]
    },
    {
      icon: Building,
      title: "Infrastructure",
      description: "Critical infrastructure projects that support economic development",
      projects: "25+ Projects",
      value: "R920M+",
      expertise: [
        "Transportation networks",
        "Utility infrastructure",
        "Public facilities development",
        "Urban planning integration",
        "Community impact management"
      ]
    },
    {
      icon: Zap,
      title: "Power Generation",
      description: "Energy sector projects ensuring reliable power supply and sustainability",
      projects: "18+ Projects",
      value: "R1.1B+",
      expertise: [
        "Renewable energy installations",
        "Power plant construction",
        "Grid integration projects",
        "Energy efficiency optimization",
        "Maintenance and upgrade programs"
      ]
    }
  ];

  const portfolioStats = [
    {
      icon: DollarSign,
      title: "R50M - R1B+",
      description: "Project Value Range"
    },
    {
      icon: Users,
      title: "500+",
      description: "Team Members Managed"
    },
    {
      icon: Award,
      title: "98%",
      description: "Success Rate"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Industry <span className="text-accent">Sectors</span>
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto opacity-90">
            Specialized expertise across critical infrastructure and industrial sectors
          </p>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trusted in projects worth R50M – R1B+
          </h2>
          <p className="text-lg font-body opacity-90">
            Delivering excellence across Africa's most challenging industrial environments
          </p>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 shadow-card">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    {stat.title}
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

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Our Sector Expertise
            </h2>
            <p className="text-xl font-body text-foreground max-w-3xl mx-auto">
              Deep industry knowledge and proven track record across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <sector.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                        {sector.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-4">
                        {sector.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm font-body">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {sector.projects}
                        </span>
                        <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
                          {sector.value}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-heading font-semibold text-primary mb-3">
                      Key Expertise:
                    </h4>
                    <ul className="space-y-2 font-body text-foreground">
                      {sector.expertise.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Success Stories
            </h2>
            <p className="text-xl font-body text-foreground max-w-3xl mx-auto">
              Representative projects showcasing our sector expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  Mining Expansion Project
                </h3>
                <p className="font-body text-muted-foreground mb-3">
                  R450M platinum mine expansion delivered 15% under budget and 6 weeks ahead of schedule.
                </p>
                <div className="text-sm font-body text-accent font-semibold">
                  Completed 2023
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  Power Plant Upgrade
                </h3>
                <p className="font-body text-muted-foreground mb-3">
                  R280M coal-fired power plant efficiency upgrade improving output by 18%.
                </p>
                <div className="text-sm font-body text-accent font-semibold">
                  Completed 2023
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  Infrastructure Development
                </h3>
                <p className="font-body text-muted-foreground mb-3">
                  R320M highway extension project enhancing regional connectivity.
                </p>
                <div className="text-sm font-body text-accent font-semibold">
                  Completed 2022
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Your Sector, Our Expertise
          </h2>
          <p className="text-xl font-body mb-8 max-w-2xl mx-auto opacity-90">
            Connect with our team to discuss how our sector-specific expertise can drive your project success.
          </p>
          <Button variant="accent" size="lg" className="text-lg">
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sectors;