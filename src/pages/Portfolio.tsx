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
      title: "HealthCare Provider Website",
      industry: "Healthcare",
      description: "Modern, HIPAA-compliant website with patient portal and appointment booking",
      results: "300% increase in online appointments, 95% patient satisfaction score",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      category: "Web Development",
    },
    {
      title: "Financial Services SEO Campaign",
      industry: "Finance",
      description: "Comprehensive SEO strategy for a financial advisory firm",
      results: "Top 3 rankings for 50+ keywords, 400% organic traffic growth",
      technologies: ["SEO", "Content Marketing", "Analytics"],
      category: "SEO",
    },
    {
      title: "Restaurant Chain Brand Refresh",
      industry: "Food & Beverage",
      description: "Complete brand identity redesign and marketing collateral",
      results: "85% brand recognition increase, successful 20-location rollout",
      technologies: ["Brand Strategy", "Graphic Design", "Marketing"],
      category: "Branding",
    },
    {
      title: "SaaS Product Marketing Campaign",
      industry: "Technology",
      description: "Multi-channel performance marketing for B2B SaaS product launch",
      results: "1,500+ qualified leads, 18% conversion rate, 350% ROI",
      technologies: ["Google Ads", "LinkedIn Ads", "Marketing Automation"],
      category: "Performance Marketing",
    },
    {
      title: "Real Estate Portal Development",
      industry: "Real Estate",
      description: "Custom property listing platform with advanced search and virtual tours",
      results: "2,000+ active listings, 65% user engagement increase",
      technologies: ["React", "AWS", "ElasticSearch", "3D Tours"],
      category: "Web Development",
    },
    {
      title: "Fashion Retail Social Media Campaign",
      industry: "Fashion",
      description: "Instagram and TikTok focused campaign for fashion retailer",
      results: "200K+ new followers, 5M+ impressions, 12% engagement rate",
      technologies: ["Social Media", "Content Creation", "Influencer Marketing"],
      category: "Social Media",
    },
    {
      title: "Education Platform Redesign",
      industry: "Education",
      description: "UX-focused redesign of online learning platform",
      results: "45% increase in course completion, 4.8/5 user satisfaction",
      technologies: ["UI/UX", "React", "Learning Management System"],
      category: "Web Design",
    },
    {
      title: "Automotive Dealer Local SEO",
      industry: "Automotive",
      description: "Local SEO optimization for multi-location automotive dealer",
      results: "#1 local rankings, 180% increase in showroom visits",
      technologies: ["Local SEO", "Google My Business", "Reviews Management"],
      category: "SEO",
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
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{project.industry}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="bg-accent/50 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{project.results}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Case Study Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Case Study</h2>
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <Badge className="mb-4">Success Story</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    E-commerce Success: 250% Sales Growth
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    How we transformed a struggling online store into a thriving e-commerce business 
                    through strategic redesign and conversion optimization.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">
                        Client had outdated website with poor mobile experience and low conversion rates. 
                        Cart abandonment was at 82% and average session time was under 1 minute.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Solution</h4>
                      <p className="text-muted-foreground">
                        Complete website redesign with mobile-first approach, streamlined checkout process, 
                        improved product pages, and integrated analytics for continuous optimization.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                    <h4 className="font-semibold mb-4">Key Results</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Sales Increase</span>
                          <span className="font-bold text-primary">+250%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: "100%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Conversion Rate</span>
                          <span className="font-bold text-primary">+40%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: "85%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Cart Abandonment Reduction</span>
                          <span className="font-bold text-primary">-55%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: "90%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Mobile Traffic</span>
                          <span className="font-bold text-primary">+180%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: "95%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-section-bg rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "Stripe", "MongoDB", "AWS", "Analytics"].map((tech, idx) => (
                        <Badge key={idx} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
