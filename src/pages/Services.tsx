import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, LineChart, Megaphone, Palette, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Design & Development",
      description: "We create stunning, responsive websites that combine beautiful design with powerful functionality. Our sites are built to convert visitors into customers.",
      features: [
        "Custom responsive design",
        "Modern UI/UX principles",
        "Fast loading speeds",
        "Mobile-first approach",
        "SEO-friendly architecture",
        "Content management systems",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "Build a powerful online store that drives sales. We create custom e-commerce solutions with seamless payment integration and intuitive user experiences.",
      features: [
        "Custom storefront design",
        "Secure payment gateways",
        "Inventory management",
        "Shopping cart optimization",
        "Product catalog systems",
        "Order tracking & management",
      ],
    },
    {
      icon: LineChart,
      title: "SEO (Search Engine Optimization)",
      description: "Dominate search rankings and drive organic traffic. Our data-driven SEO strategies help you reach more customers and grow your online visibility.",
      features: [
        "Comprehensive SEO audits",
        "On-page optimization",
        "Technical SEO improvements",
        "Link building strategies",
        "Local SEO services",
        "Monthly performance reports",
      ],
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Build your brand and engage your audience across all social platforms. We create compelling content and run targeted campaigns that deliver results.",
      features: [
        "Content strategy & creation",
        "Community management",
        "Paid social campaigns",
        "Influencer partnerships",
        "Analytics & reporting",
        "Brand awareness campaigns",
      ],
    },
    {
      icon: Globe,
      title: "Performance Marketing / PPC",
      description: "Get immediate results with data-driven paid advertising. We manage campaigns across Google Ads, Meta, and other platforms to maximize your ROI.",
      features: [
        "Google Ads management",
        "Meta Ads campaigns",
        "Conversion optimization",
        "A/B testing strategies",
        "Budget optimization",
        "Detailed ROI tracking",
      ],
    },
    {
      icon: Palette,
      title: "Branding & Creative Services",
      description: "Create a memorable brand identity that resonates with your audience. From logos to complete brand guidelines, we bring your vision to life.",
      features: [
        "Logo design & branding",
        "Brand strategy development",
        "Visual identity systems",
        "Marketing collateral",
        "Ad creative design",
        "Brand guidelines",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We deliver full-service digital solutions that help businesses grow faster, 
              reach wider, and convert better. Every service is tailored to your unique goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 md:p-12 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-8">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild>
                      <Link to="/contact">
                        Request Service
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
