import { MapPin, Phone, Clock, Navigation, Truck, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Branches = () => {
  const currentOutlets = [
    {
      name: "Borelasgamuwa (Head Office)",
      address: "No. 123, Borelasgamuwa Road, Borelasgamuwa",
      phone: "+94 11 123 4567",
      hours: "8:00 AM - 8:00 PM",
      services: ["Full Product Range", "Consultation", "Home Delivery"],
      isHeadOffice: true,
    },
    {
      name: "Piliyandala Branch",
      address: "No. 45, Piliyandala-Maharagama Road, Piliyandala",
      phone: "+94 11 234 5678",
      hours: "8:30 AM - 7:30 PM",
      services: ["Full Product Range", "Consultation"],
    },
    {
      name: "Maharagama Branch",
      address: "No. 67, High Level Road, Maharagama",
      phone: "+94 11 345 6789",
      hours: "8:30 AM - 7:30 PM",
      services: ["Full Product Range", "Expert Consultation"],
    },
    {
      name: "Thalawathugoda Branch",
      address: "No. 89, Sri Jayawardenepura Road, Thalawathugoda",
      phone: "+94 11 456 7890",
      hours: "9:00 AM - 7:00 PM",
      services: ["Full Product Range", "Online Ordering"],
    },
    {
      name: "Wijerama Branch",
      address: "No. 12, Wijerama Mawatha, Colombo 07",
      phone: "+94 11 567 8901",
      hours: "8:30 AM - 8:00 PM",
      services: ["Full Product Range", "Premium Collection"],
    },
    {
      name: "Pannipitiya Branch",
      address: "No. 34, Pannipitiya Road, Pannipitiya",
      phone: "+94 11 678 9012",
      hours: "8:30 AM - 7:30 PM",
      services: ["Full Product Range", "Consultation"],
    },
    {
      name: "Homagama Branch",
      address: "No. 56, Homagama-Padukka Road, Homagama",
      phone: "+94 11 789 0123",
      hours: "9:00 AM - 7:00 PM",
      services: ["Essential Products", "Basic Consultation"],
    },
    {
      name: "Kiribathgoda Branch",
      address: "No. 78, Kandy Road, Kiribathgoda",
      phone: "+94 11 890 1234",
      hours: "8:30 AM - 7:30 PM",
      services: ["Full Product Range", "Expert Advice"],
    },
  ];

  const upcomingOutlets = [
    { name: "Kaduwela", status: "Opening Soon", expectedDate: "Q1 2025" },
    { name: "Malabe", status: "Under Construction", expectedDate: "Q2 2025" },
    { name: "Ja-Ela", status: "Planning Phase", expectedDate: "Q2 2025" },
    { name: "Rajagiriya", status: "Site Acquired", expectedDate: "Q3 2025" },
  ];

  const deliveryInfo = {
    serviceName: "Osu Seriya",
    coverage: "Greater Colombo Area",
    deliveryTime: "Same Day / Next Day",
    minimumOrder: "Rs. 1,500",
    deliveryFee: "Rs. 250 (Free above Rs. 5,000)",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream via-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <MapPin className="w-4 h-4 mr-2" />
              Our Locations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              8+ Outlets Serving You
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find us across Sri Lanka with convenient locations and expanding to 40+ outlets 
              in the greater Colombo region. Quality Ayurvedic products and expert consultation 
              available at every branch.
            </p>
          </div>
        </div>
      </section>

      {/* Current Outlets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Current Outlet Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit any of our conveniently located outlets for personalized consultation 
              and access to our complete range of authentic Ayurvedic products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentOutlets.map((outlet, index) => (
              <Card key={index} className={`border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${outlet.isHeadOffice ? 'border-2 border-ayur-gold/30' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground leading-tight">
                      {outlet.name}
                    </CardTitle>
                    {outlet.isHeadOffice && (
                      <Badge className="bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground text-xs">
                        Head Office
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{outlet.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{outlet.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{outlet.hours}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Services Available:</h4>
                    <div className="flex flex-wrap gap-1">
                      {outlet.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-ayur-sage">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Service */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-ayur-gold/20 text-ayur-gold border-ayur-gold/30">
                <Truck className="w-4 h-4 mr-2" />
                Delivery Service
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Osu Seriya - Home Delivery
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Can't visit our outlets? No problem! Our Osu Seriya delivery service brings 
                authentic Ayurvedic products directly to your doorstep across the greater Colombo area.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Service Coverage:</span>
                  <span className="text-primary">{deliveryInfo.coverage}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Delivery Time:</span>
                  <span className="text-primary">{deliveryInfo.deliveryTime}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Minimum Order:</span>
                  <span className="text-primary">{deliveryInfo.minimumOrder}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-medium text-foreground">Delivery Fee:</span>
                  <span className="text-primary">{deliveryInfo.deliveryFee}</span>
                </div>
              </div>

              <Button size="lg" className="mt-6 bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground">
                <Truck className="w-5 h-5 mr-2" />
                Order for Delivery
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-ayur-sage/20 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-ayur-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-12 h-12 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Osu Seriya</h3>
                  <p className="text-muted-foreground">Fast & Reliable Delivery</p>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-ayur-gold text-ayur-gold" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Outlets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Expanding Our Reach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're rapidly expanding across the Colombo region with new outlets planned 
              to bring Ayurvedic wellness even closer to your community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingOutlets.map((outlet, index) => (
                <Card key={index} className="text-center border-2 border-dashed border-primary/30">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-ayur-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {outlet.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {outlet.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Expected: {outlet.expectedDate}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-ayur-cream to-secondary/50 rounded-lg">
                <div className="text-3xl font-bold text-primary">40+</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Target Outlets</div>
                  <div className="text-sm text-muted-foreground">By end of 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Find Your Nearest Outlet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our interactive map to locate the nearest S.H.G. Hela Osu outlet and 
              get directions for easy access to our products and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-ayur-sage/10 to-secondary/20 rounded-lg p-12 text-center border-2 border-dashed border-primary/20">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                We're working on an interactive map feature to help you find outlets easily
              </p>
              <Button className="bg-gradient-to-r from-primary to-ayur-sage">
                View Current Locations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;