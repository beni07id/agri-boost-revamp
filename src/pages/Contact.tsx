import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            CONTACT US
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for questions, support, or partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                We're here to help you access comprehensive agricultural business intelligence. 
                Reach out to our team for any inquiries about our platform.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-agribiz-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        Jl. Anggrek No.6, Pontianak City, West Kalimantan, Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-agribiz-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:helpdesk@earthqualizer.org"
                        className="text-primary hover:text-primary-light transition-colors"
                      >
                        helpdesk@earthqualizer.org
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-agribiz-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company (Optional)
                </label>
                <Input 
                  placeholder="Your company name"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="What's this about?"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button className="w-full h-12 bg-agribiz-blue hover:bg-agribiz-blue-light text-white font-semibold">
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="card-gradient overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-agribiz-gray h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-agribiz-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground">
                    Interactive map integration coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;