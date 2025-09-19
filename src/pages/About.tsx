import { Award, Users, MapPin, Target, Heart, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer Care",
      description: "Prioritizing customer satisfaction and well-being in every interaction and product we offer."
    },
    {
      icon: Leaf,
      title: "Tradition",
      description: "Preserving ancient Ayurvedic wisdom while embracing modern quality standards."
    },
    {
      icon: Award,
      title: "Trust",
      description: "Building lasting relationships through consistent quality and authentic products."
    },
    {
      icon: Users,
      title: "Employee Well-being",
      description: "Creating a supportive environment where our team can grow and contribute meaningfully."
    }
  ];

  const milestones = [
    { year: "2004", event: "Founded S.H.G. Hela Osu with a vision to serve authentic Ayurveda" },
    { year: "2010", event: "Opened our first 3 outlets in Colombo suburbs" },
    { year: "2015", event: "Established our own manufacturing unit for Itura products" },
    { year: "2020", event: "Expanded to 8+ outlets and 100+ employees" },
    { year: "2024", event: "Planning expansion to 40 outlets in Colombo region" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream via-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Leaf className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              19+ Years of Ayurvedic Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From humble beginnings in 2004 to becoming Sri Lanka's trusted leader in authentic 
              Ayurvedic products, our journey is built on tradition, quality, and unwavering 
              commitment to wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Founded on the Principles of Authentic Ayurveda
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  S.H.G. Hela Osu (Pvt) Ltd was established in 2004 with a simple yet profound mission: 
                  to make authentic Ayurvedic medicine accessible to every Sri Lankan family. What started 
                  as a small pharmacy has evolved into a trusted network of 8+ outlets serving communities 
                  across the island.
                </p>
                <p>
                  Our founder's vision was to bridge the gap between ancient Ayurvedic wisdom and modern 
                  lifestyle needs. Today, with over 100 dedicated employees and expanding operations, we 
                  continue to honor this vision while setting new standards in herbal medicine quality 
                  and customer service.
                </p>
                <p>
                  As we prepare to expand to 40 outlets in the Colombo region, our commitment remains 
                  unchanged: delivering authentic, high-quality Ayurvedic products that enhance lives 
                  and preserve our rich healing traditions for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-ayur-sage/20 to-secondary/40 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Since 2004</h3>
                  <p className="text-muted-foreground">Serving Sri Lanka with Authentic Ayurveda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be Sri Lanka's leading supplier of authentic Ayurvedic products, 
                  preserving traditional healing wisdom while meeting modern wellness needs 
                  with uncompromising quality and service excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-ayur-gold/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-ayur-gold to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver authentic, high-quality Ayurvedic products with excellent customer service, 
                  while fostering employee well-being and contributing to the preservation of 
                  Sri Lanka's rich Ayurvedic heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every product we create, 
              ensuring we stay true to our mission of promoting wellness and preserving tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-ayur-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Journey Through the Years
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a single vision to a network of wellness centers, explore the key milestones 
              that have shaped our company's growth and success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-ayur-sage"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-ayur-gold rounded-full border-4 border-background shadow-md z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="border-border/50 shadow-md">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                          {milestone.year}
                        </Badge>
                        <p className="text-foreground leading-relaxed">
                          {milestone.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;