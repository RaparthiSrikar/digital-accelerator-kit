import { Link } from "react-router-dom";
import { ArrowRight, Code, ShoppingCart, LineChart, Megaphone, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ServicesGrid = () => {
  const services = [
    {
      number: "01",
      icon: Code,
      title: "Website Design",
      description: "We build modern, user-first websites that reflect brand and drive results.",
    },
    {
      number: "02",
      icon: ShoppingCart,
      title: "E-Commerce Websites",
      description: "Launch mobile-ready online stores for seamless shopping and better sales.",
    },
    {
      number: "03",
      icon: LineChart,
      title: "SEO Services",
      description: "Boost visibility and traffic with targeted, up-to-date SEO strategies.",
    },
    {
      number: "04",
      icon: Users,
      title: "Lead Generation Campaigns",
      description: "Capture and convert quality leads with high-impact digital campaigns.",
    },
    {
      number: "05",
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Grow your brand with content strategies across key social platforms.",
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Improve performance to turn site visitors into paying customers.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">Our Services</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
                Expert Digital Services to Grow your Brand
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                From strategy to execution, we offer a full range of digital marketing and web development services tailored to help your brand thrive online.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/services">
                All Services
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-muted/10 group-hover:text-primary/10 transition-colors">
                  {service.number}
                </div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
