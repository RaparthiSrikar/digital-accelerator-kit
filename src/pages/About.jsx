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
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Our Team */}
          {/* <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[...Array(5)].map((_, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="relative overflow-hidden rounded-md mb-4">
                    <img
                      src={`https://source.unsplash.com/random/200x200?sig=${index}`}
                      alt={`Team Member ${index + 1}`}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Team Member {index + 1}</h3>
                  <p className="text-muted-foreground text-sm">Job Title</p>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Testimonials */}
          {/* <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(2)].map((_, index) => (
                <Card key={index} className="p-6">
                  <p className="text-lg italic mb-4">
                    "DigitalSolutions transformed our online presence and delivered exceptional results. We
                    highly recommend their services!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://source.unsplash.com/random/50x50?sig=${index + 5}`}
                      alt={`Client ${index + 1}`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">Client Name {index + 1}</h4>
                      <p className="text-muted-foreground text-sm">Company Name</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
