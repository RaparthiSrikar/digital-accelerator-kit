import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden rounded-3xl mx-4 mt-20 md:mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Professional business team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-dark/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
          {/* Left Content */}
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Empowering your Digital Growth with Expertise
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in">
              Shiftwave blends smart marketing with powerful web development to help your brand grow by tailored solutions.
            </p>
            <Button asChild size="lg" className="animate-scale-in">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          {/* Right Stats Cards */}
          <div className="flex flex-col gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-stat-card text-stat-card-foreground p-6 rounded-2xl min-w-[200px] shadow-lg">
              <div className="text-4xl font-bold mb-1">4,000+</div>
              <div className="text-sm font-medium">Website Projects</div>
            </div>
            <div className="bg-stat-card text-stat-card-foreground p-6 rounded-2xl min-w-[200px] shadow-lg">
              <div className="text-4xl font-bold mb-1">18+</div>
              <div className="text-sm font-medium">Years of Experience</div>
            </div>
            <div className="bg-stat-card text-stat-card-foreground p-6 rounded-2xl min-w-[200px] shadow-lg">
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-sm font-medium">Skilled Employees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
