import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, TrendingUp, FileText } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "GROUP",
    description: "Group ownership structure",
  },
  {
    icon: FileText,
    title: "COMPANY", 
    description: "Subsidiary of the Group",
  },
  {
    icon: Users,
    title: "SHAREHOLDERS",
    description: "Shareholder of Companies/Groups",
  },
  {
    icon: TrendingUp,
    title: "SRA",
    description: "Sustainability Risk Assessment by Group",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">
            CORPORATE PROFILE FEATURES
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This is a feature that displays detailed information from group, company, shareholder and SRA data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-gradient text-center hover:shadow-hover transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-agribiz-blue-light transition-colors">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to explore corporate profiles?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Access comprehensive information about companies, their ownership structures, and sustainability assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agribiz-blue px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Start Searching
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;