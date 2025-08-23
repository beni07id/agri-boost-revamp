import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { Building2, Users, TrendingUp, Search, ArrowRight } from "lucide-react";

const Index = () => {
  const handleSearch = (query: string) => {
    // Navigate to search results
    window.location.href = `/company-search?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Agricultural Business
              <span className="block text-agribiz-cyan">Intelligence Platform</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
              Comprehensive corporate profiles, ownership structures, and sustainability assessments for agricultural companies across Southeast Asia.
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar 
                placeholder="Search for agricultural companies..."
                onSearch={handleSearch}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-2"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/company-search">
                <Button size="lg" className="bg-white text-agribiz-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                  Explore Companies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                >
                  View Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Comprehensive Business Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access detailed information about agricultural companies, their relationships, and sustainability practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient text-center group hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-agribiz-blue-light transition-colors">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Company Profiles</h3>
                <p className="text-muted-foreground">
                  Detailed information on thousands of agricultural companies across Indonesia, Malaysia, and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center group hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-agribiz-blue-light transition-colors">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Ownership Data</h3>
                <p className="text-muted-foreground">
                  Track ownership structures, shareholders, and corporate relationships across the agricultural sector.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center group hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-agribiz-blue-light transition-colors">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">SRA Assessments</h3>
                <p className="text-muted-foreground">
                  Sustainability Risk Assessments providing insights into environmental and social practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Companies Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Shareholders Mapped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Data Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
