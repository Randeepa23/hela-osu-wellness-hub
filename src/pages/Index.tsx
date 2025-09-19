import { ArrowRight, Star, Leaf, Shield, Award, MapPin, Phone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import heroImage from '@/assets/hero-ayurveda.jpg';
import productsImage from '@/assets/products-hero.jpg';

const Index = () => {
  const featuredProducts = [
    {
      name: "Itura Powder",
      category: "Churna",
      description: "Traditional herbal powder blend for digestive wellness and overall health enhancement",
      benefits: ["Digestive Health", "Immunity Boost", "Natural Detox", "Energy Support"],
      price: "2,500",
      isExclusive: true,
    },
    {
      name: "Belimal Tea",
      category: "Herbal Tea",
      description: "Premium Ceylon herbal tea with natural healing properties and authentic taste",
      benefits: ["Antioxidants", "Heart Health", "Natural Flavor", "Stress Relief"],
      price: "850",
    },
    {
      name: "Ayurvedic Oil",
      category: "Oils",
      description: "Pure herbal oil preparation for therapeutic massage and skin nourishment",
      benefits: ["Skin Care", "Relaxation", "Pain Relief", "Aromatherapy"],
      price: "1,200",
    },
  ];

  const highlights = [
    { icon: Award, title: "19+ Years", subtitle: "Of Trust & Excellence" },
    { icon: Users, title: "100+", subtitle: "Skilled Employees" },
    { icon: MapPin, title: "8+", subtitle: "Outlets Across Sri Lanka" },
    { icon: Shield, title: "100%", subtitle: "Authentic Products" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-ayur-deep-green/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-ayur-gold/20 text-ayur-gold border-ayur-gold/30 backdrop-blur-sm">
            <Leaf className="w-4 h-4 mr-2" />
            Authentic Ayurveda Since 2004
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Authentic Ayurveda for a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ayur-gold to-accent">
              Healthier Tomorrow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Experience the power of traditional Sri Lankan Ayurvedic medicine with our premium range of 
            herbal products, crafted with 19+ years of expertise and natural ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground hover:shadow-xl hover:scale-105 transition-all">
              View Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Find a Branch
              <MapPin className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-ayur-sage rounded-full flex items-center justify-center mb-4">
                    <highlight.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.subtitle}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              <Star className="w-4 h-4 mr-2" />
              Featured Products
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Premium Ayurvedic Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of authentic Ayurvedic products, 
              crafted using traditional methods and the finest natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream to-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Shield className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                19+ Years of Ayurvedic Excellence in Sri Lanka
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2004, S.H.G. Hela Osu has grown from a small Ayurvedic pharmacy to 
                Sri Lanka's trusted leader in authentic herbal products. Our commitment to quality, 
                tradition, and customer well-being drives everything we do.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ayur-gold rounded-full"></div>
                  <span className="text-foreground">100% authentic Ayurvedic formulations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ayur-gold rounded-full"></div>
                  <span className="text-foreground">Expanding to 40 outlets in Colombo region</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ayur-gold rounded-full"></div>
                  <span className="text-foreground">ISO certified manufacturing processes</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-ayur-sage hover:shadow-lg">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={productsImage} 
                alt="Ayurvedic Products" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-ayur-deep-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Visit our outlets, consult with our experts, and discover the perfect Ayurvedic 
            solutions for your health and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-ayur-gold text-accent-foreground hover:bg-accent hover:shadow-xl">
              <Phone className="mr-2 w-5 h-5" />
              Call +94 11 123 4567
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Find Nearest Branch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;