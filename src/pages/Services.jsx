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
      icon: Palette,
      title: "Branding & Visual Identity",
      description: "Crafting memorable brands that resonate with your audience. From logo design to brand guidelines, we ensure consistency and impact.",
      features: [
        "Logo design",
        "Brand strategy",
        "Visual identity",
        "Brand guidelines",
        "Marketing collateral",
        "Brand voice",
      ],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Reach your target audience and drive conversions with our data-driven digital marketing strategies. We maximize your online presence and ROI.",
      features: [
        "SEO optimization",
        "PPC advertising",
        "Social media marketing",
        "Content marketing",
        "Email marketing",
        "Analytics & reporting",
      ],
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Improve your website's visibility and organic traffic with our expert SEO services. We'll help you rank higher in search results and attract more customers.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Off-page optimization",
        "Technical SEO",
        "Content optimization",
        "Link building",
      ],
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description: "Unlock the power of your data with our comprehensive analytics services. We'll help you track, measure, and optimize your digital performance.",
      features: [
        "Data tracking & analysis",
        "Custom dashboards",
        "Conversion optimization",
        "A/B testing",
        "Reporting & insights",
        "Predictive analytics",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Launch or optimize your online store with our tailored e-commerce solutions. We'll help you create a seamless shopping experience that drives sales.",
      features: [
        "E-commerce platform setup",
        "Payment gateway integration",
        "Product catalog management",
        "Shopping cart optimization",
        "Customer support tools",
        "Marketing automation",
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
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 md:p-12 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid md:grid-cols-[auto,1fr] gap-8">
                    <div className="flex items-start">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="mt-6 rounded-full">
                        <Link to="/contact">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
