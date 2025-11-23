import { ExternalLink, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart E-commerce Platform",
      industry: "E-commerce",
      description: "Complete e-commerce solution with custom features and payment integration",
      results: "250% increase in online sales, 40% improvement in conversion rate",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "E-commerce",
    },
    {
      title: "FinTrack Mobile Banking App",
      industry: "Finance",
      description: "Mobile banking app with advanced security features and user-friendly interface",
      results: "150,000+ app downloads, 4.8-star rating on app stores",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
    },
    {
      title: "EduHub Online Learning Platform",
      industry: "Education",
      description: "Interactive online learning platform with personalized learning paths",
      results: "300% increase in student engagement, 95% course completion rate",
      technologies: ["Angular", "AWS", "GraphQL"],
      category: "Education",
    },
    {
      title: "HealthPlus Telemedicine Solution",
      industry: "Healthcare",
      description: "Secure telemedicine platform connecting patients with healthcare professionals",
      results: "200% increase in patient consultations, reduced wait times by 60%",
      technologies: ["Vue.js", "WebRTC", "PostgreSQL"],
      category: "Healthcare",
    },
    {
      title: "TravelNow Booking Website",
      industry: "Travel",
      description: "Travel booking website with AI-powered recommendations and real-time updates",
      results: "180% increase in bookings, 50% improvement in customer satisfaction",
      technologies: ["Next.js", "Serverless Functions", "Algolia"],
      category: "Travel",
    },
    {
      title: "Foodie Social Media App",
      industry: "Social Media",
      description: "Social media app for food enthusiasts to share recipes and restaurant reviews",
      results: "100,000+ active users, 4.7-star rating on app stores",
      technologies: ["Swift", "Kotlin", "Django"],
      category: "Mobile App",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work That Drives Growth</h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects across diverse industries. 
              Each project represents our commitment to excellence and measurable results.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6">
                    <Badge className="mb-3">{project.category}</Badge>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="text-primary-foreground" size={32} />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{project.industry}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Results:</span>
                    <span className="text-sm text-muted-foreground">{project.results}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Technologies:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
