import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Modern, responsive websites that convert visitors into customers.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "ROI-focused campaigns across all digital channels.",
    },
    {
      icon: Zap,
      title: "SEO Services",
      description: "Rank higher, get more organic traffic, and grow your business.",
    },
    {
      icon: Users,
      title: "Branding & Creative",
      description: "Build a memorable brand that resonates with your audience.",
    },
  ];

  const testimonials = [
    {
      quote: "DigitalSolutions transformed our online presence. Our traffic increased by 300% in just 6 months.",
      author: "Sarah Johnson",
      company: "Tech Innovations Inc.",
    },
    {
      quote: "Professional, responsive, and results-driven. Best digital agency we've worked with.",
      author: "Michael Chen",
      company: "Global Retail Solutions",
    },
    {
      quote: "Their expertise in e-commerce helped us achieve record-breaking sales this year.",
      author: "Emily Rodriguez",
      company: "Fashion Forward",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Driving Business Growth & Innovation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                18+ years of experience delivering cutting-edge digital solutions. 
                4000+ successful projects. 50+ expert team members ready to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Book a Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={heroImage}
                alt="Digital innovation and business growth"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to drive measurable growth for your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {[
                  "18+ years of proven expertise in digital transformation",
                  "ROI-focused strategies backed by data and analytics",
                  "Full-stack capabilities from design to deployment",
                  "Dedicated team of 50+ certified professionals",
                  "4000+ successful projects across diverse industries",
                  "Transparent communication and project management",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Discovery", desc: "Understanding your goals and challenges" },
                    { step: "02", title: "Strategy", desc: "Crafting a customized digital roadmap" },
                    { step: "03", title: "Execution", desc: "Implementing with precision and creativity" },
                    { step: "04", title: "Optimization", desc: "Continuous improvement and growth" },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-4xl font-bold text-primary/30">{item.step}</div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading businesses worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
