import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  PlaneTakeoff, 
  Settings, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  Shield
} from "lucide-react";

const Services = () => {
  const projectPhases = [
    {
      icon: Rocket,
      phase: "Initiation",
      description: "High-level conceptual schedule input",
      details: [
        "High level conceptual schedule input",
        "Early risk and exposure review",
        "Strategic alignment of scope and schedule",
        "Contract risk flagging for preliminary project structures",
        "Securing feasibility project funding through the investment committee by demonstrating effective schedule governance"
      ]
    },
    {
      icon: Target,
      phase: "Feasibility",
      description: "Development of Level 1-2 project schedules",
      details: [
        "Development of Level 1-2 project schedules",
        "Time-risk scenario planning",
        "Tender timeline advisory",
        "Support in drafting time related terms in RFPs or procurement strategies"
      ]
    },
    {
      icon: Settings,
      phase: "Front-End Engineering Design (FEED)",
      description: "Level 3-4 schedule development",
      details: [
        "Level 3-4 schedule development",
        "BOQ & milestone alignment",
        "Delay mitigation planning",
        "Drawing Approval Cycle based progress tracking system",
        "Review of time and planning obligations in draft contracts (NEC, FIDIC, EPC)"
      ]
    },
    {
      icon: PlaneTakeoff,
      phase: "Procurement/Manufacturing",
      description: "Procurement schedule creation",
      details: [
        "Procurement schedule creation",
        "Vendor milestone tracking",
        "Long-lead procurement timing strategies",
        "QC Sign-off based progress tracking system",
        "Schedule-related input to supplier contract clauses & delivery obligations"
      ]
    },
    {
      icon: BarChart3,
      phase: "Execution/Construction",
      description: "Level 4-5 schedule development",
      details: [
        "Level 4-5 schedule development",
        "Forensic delay & impact analysis",
        "Physical Progress monitoring & S-curve reporting",
        "Claims and EOT support",
        "Contractual compliance monitoring & support with compensation events (NEC/FIDIC)",
        "Professional schedule auditing and/or creation"
      ]
    },
    {
      icon: Shield,
      phase: "Commissioning",
      description: "Commissioning sequence scheduling",
      details: [
        "Commissioning sequence scheduling",
        "QC Sign-off based progress tracking system",
        "Late system handover delay assessment",
        "Readiness tracking",
        "Support for schedule-related obligations in O&M handover clauses"
      ]
    },
    {
      icon: CheckCircle,
      phase: "Closeout",
      description: "Forensic Delay method selection and analysis",
      details: [
        "Forensic Delay method selection and analysis",
        "As-built schedule development",
        "Lessons learned report",
        "Final Report and project repository audit",
        "Dispute resolution support",
        "Contractual closure & reconciliation of time-related obligations and claims"
      ]
    }
  ];

  const serviceHighlights = [
    {
      icon: Clock,
      title: "Time Protection",
      description: "Rigorous scheduling and milestone management to ensure on-time delivery"
    },
    {
      icon: Target,
      title: "Cost Control",
      description: "Integrated cost planning, estimation, and control using project scheduling tools and techniques"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Proactive identification and management of project risks and issues"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto opacity-90">
            Comprehensive project planning solutions across the complete project lifecycle
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-xl font-body text-foreground max-w-3xl mx-auto">
              Focused on protecting the three most critical aspects of your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {highlight.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Project Planning Phases
            </h2>
            <p className="text-xl font-body text-foreground max-w-3xl mx-auto">
              Our systematic approach ensures every aspect of your project is expertly managed
            </p>
          </div>

          <div className="space-y-12">
            {projectPhases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < projectPhases.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-border hidden md:block"></div>
                )}
                
                <Card className="shadow-card hover:shadow-hero transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                      {/* Phase Icon and Number */}
                      <div className="md:col-span-1 text-center md:text-left">
                        <div className="inline-flex items-center space-x-4">
                          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                            <phase.icon className="h-8 w-8" />
                          </div>
                          <div className="hidden md:block text-2xl font-heading font-bold text-accent">
                            0{index + 1}
                          </div>
                        </div>
                      </div>
                      
                      {/* Phase Details */}
                      <div className="md:col-span-3">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                          {phase.phase}
                        </h3>
                        <p className="text-lg font-body text-secondary mb-4">
                          {phase.description}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 font-body text-foreground">
                          {phase.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">
            Additional Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  Risk Assessment
                </h3>
                <p className="font-body text-muted-foreground">
                  Comprehensive risk analysis and mitigation strategy development
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  Process Optimization
                </h3>
                <p className="font-body text-muted-foreground">
                  Streamlining workflows and improving operational efficiency
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  Training & Development
                </h3>
                <p className="font-body text-muted-foreground">
                  Building internal project planning capabilities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-body mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our project planning expertise can benefit your next project.
          </p>
          <Button variant="accent" size="lg" className="text-lg">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;