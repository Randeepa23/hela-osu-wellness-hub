import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: '',
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+94 11 123 4567", "+94 71 234 5678 (WhatsApp)"],
      color: "from-primary to-ayur-sage"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@helaosu.lk", "support@helaosu.lk"],
      color: "from-ayur-gold to-accent"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["No. 123, Borelasgamuwa Road", "Borelasgamuwa, Sri Lanka"],
      color: "from-ayur-sage to-secondary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 6:00 PM"],
      color: "from-ayur-earth to-muted"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Product Information",
    "Consultation Request",
    "Bulk Orders",
    "Wholesale Inquiry", 
    "Franchise Opportunity",
    "Complaint or Feedback",
    "Technical Support"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ayur-cream via-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Contact S.H.G. Hela Osu
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our products or need expert Ayurvedic consultation? 
              We're here to help! Reach out through any of our convenient contact methods.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you like us to contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-ayur-sage hover:shadow-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="border-ayur-gold/20 bg-gradient-to-br from-ayur-gold/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Phone className="w-5 h-5 text-ayur-gold" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    For urgent inquiries or immediate assistance, call our hotline or WhatsApp us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Visit Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Visit Our Head Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">S.H.G. Hela Osu (Pvt) Ltd</p>
                    <p className="text-muted-foreground">
                      No. 123, Borelasgamuwa Road<br />
                      Borelasgamuwa, Sri Lanka
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">Office Hours:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Sunday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-foreground">Services Available:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Product Consultation</Badge>
                      <Badge variant="outline">Expert Advice</Badge>
                      <Badge variant="outline">Full Product Range</Badge>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="bg-gradient-to-br from-secondary/30 to-ayur-cream/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Looking for Answers?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Check our knowledge base for common questions about Ayurvedic products and treatments.
                  </p>
                  <Button variant="outline">
                    Browse FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Find Us on the Map
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Locate our head office and all branch locations easily with our integrated map feature.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-ayur-sage/10 to-secondary/20 rounded-lg p-12 text-center border-2 border-dashed border-primary/20">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Interactive Map Integration
              </h3>
              <p className="text-muted-foreground mb-6">
                Google Maps integration coming soon for easy navigation to all our locations
              </p>
              <Button className="bg-gradient-to-r from-primary to-ayur-sage">
                View Branch Locations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;