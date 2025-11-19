import { Award, Target, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project receives our full attention and expertise.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Staying ahead of digital trends to deliver cutting-edge solutions for our clients.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Your success is our success. We build long-term relationships based on trust.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Data-driven strategies that deliver measurable ROI and business growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              18+ years of digital excellence, transforming businesses through innovative solutions
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg">
              <p>
                Founded in 2006, DigitalSolutions began with a simple mission: to help businesses harness 
                the power of digital technology to achieve extraordinary growth. What started as a small 
                team of passionate developers has evolved into a full-service digital agency with over 50 
                experts across design, development, marketing, and strategy.
              </p>
              <p>
                Over the past 18+ years, we've delivered more than 4000 successful projects for clients 
                ranging from startups to Fortune 500 companies. Our customer-first approach, combined with 
                technical excellence and creative innovation, has made us a trusted partner for businesses 
                looking to thrive in the digital age.
              </p>
              <p>
                Today, we continue to push boundaries, staying at the forefront of digital trends while 
                maintaining our commitment to delivering measurable results and exceptional value to every client.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To empower businesses with innovative digital solutions that drive measurable growth, 
                enhance customer experiences, and create lasting competitive advantages in an ever-evolving 
                digital landscape.
              </p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-accent/50 to-accent/20">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the world's most trusted digital transformation partner, recognized for our 
                commitment to excellence, innovation, and the measurable success we create for our clients.
              </p>
            </Card>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-section-bg rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Industry Recognition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Top 10 Digital Agency - Industry Awards 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Best Web Development Company - Tech Excellence 2022</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Innovation in Digital Marketing - Marketing Summit 2021</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Customer Choice Award - 5 consecutive years</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Milestones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>4000+ successful projects delivered globally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>50+ certified professionals across all specializations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>98% client satisfaction and retention rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Serving clients in 30+ countries worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="space-y-6">
              {[
                {
                  step: "Discovery & Analysis",
                  description: "We start by understanding your business, goals, challenges, and target audience through comprehensive research and analysis.",
                },
                {
                  step: "Strategic Planning",
                  description: "Our experts craft a customized digital strategy aligned with your objectives, leveraging industry best practices and innovative solutions.",
                },
                {
                  step: "Design & Development",
                  description: "We bring the strategy to life with cutting-edge design and development, ensuring quality, performance, and user experience excellence.",
                },
                {
                  step: "Testing & Launch",
                  description: "Rigorous testing across devices and platforms ensures a flawless launch that exceeds expectations.",
                },
                {
                  step: "Optimization & Support",
                  description: "Post-launch, we continuously monitor, optimize, and provide ongoing support to maximize your ROI and ensure sustained growth.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
