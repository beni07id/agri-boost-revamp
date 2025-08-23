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
      <section className="relative overflow-hidden hero-gradient text-white min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">OFFERING INSIGHTS INTO</span>
                <span className="block text-gradient bg-gradient-to-r from-white via-agribiz-cyan to-white bg-clip-text text-transparent">
                  GOVERNANCE & OPERATIONAL
                </span>
                <span className="block">FRAMEWORK</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive corporate profiles, ownership structures, and sustainability assessments for agricultural companies across Southeast Asia.
            </p>
            
            {/* Premium Search Bar */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <SearchBar 
                  placeholder="Search for agricultural companies, groups, or shareholders..."
                  onSearch={handleSearch}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-lg shadow-elegant"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-agribiz-cyan/20 rounded-2xl blur opacity-30"></div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/company-search">
                <Button size="lg" className="btn-primary text-lg">
                  Start Exploring
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" className="btn-secondary text-lg">
                  View Features
                </Button>
              </Link>
            </div>

            {/* Stats Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 floating-animation">
                <div className="text-4xl font-bold mb-2 text-white">2,100+</div>
                <div className="text-white/80 text-lg font-medium uppercase tracking-wide">Groups</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 floating-animation" style={{animationDelay: '1s'}}>
                <div className="text-4xl font-bold mb-2 text-white">7,700+</div>
                <div className="text-white/80 text-lg font-medium uppercase tracking-wide">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 floating-animation" style={{animationDelay: '2s'}}>
                <div className="text-4xl font-bold mb-2 text-white">28,000+</div>
                <div className="text-white/80 text-lg font-medium uppercase tracking-wide">Shareholders</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 section-glow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              AGRIBIZ PLATFORM
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-agribiz-navy mb-6">
              Get Company Information
              <span className="block text-gradient">Quickly & Efficiently</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Access comprehensive business intelligence with our four key search categories: Group structures, Company profiles, Shareholder networks, and Sustainability Risk Assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <Card className="card-feature text-left group hover:shadow-elegant transition-all duration-500 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-agribiz-navy mb-4">Group Company Structure</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Comprehensive mapping of holding companies and subsidiaries operating across various segments including the palm oil industry.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-feature text-left group hover:shadow-elegant transition-all duration-500 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-agribiz-navy mb-4">Corporate Profile</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Detailed company data including registration details, certifications, shareholders, and notarial deeds for comprehensive business understanding.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-8">
              <Card className="card-feature text-left group hover:shadow-elegant transition-all duration-500 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-agribiz-navy mb-4">Shareholders & Ownership</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Track individual, company, and institutional shareholders with detailed share ownership structures and relationships.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-feature text-left group hover:shadow-elegant transition-all duration-500 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-agribiz-navy mb-4">Sustainability Risk Assessment</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Comprehensive SRA evaluations focusing on environmental and social practices, NDPE compliance, and risk management.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Quick Access Tabs */}
          <div className="bg-white rounded-3xl shadow-elegant p-8 border border-border/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-agribiz-navy mb-2">Quick Search Access</h3>
              <p className="text-muted-foreground">Choose your search category to get started</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link to="/company-search?tab=group" className="group">
                <div className="bg-gradient-feature border border-border/30 rounded-2xl p-6 text-center hover:shadow-hover transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-agribiz-blue-light transition-colors">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-agribiz-navy">Group</h4>
                </div>
              </Link>
              <Link to="/company-search?tab=company" className="group">
                <div className="bg-gradient-feature border border-border/30 rounded-2xl p-6 text-center hover:shadow-hover transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-agribiz-blue-light transition-colors">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-agribiz-navy">Company</h4>
                </div>
              </Link>
              <Link to="/company-search?tab=shareholder" className="group">
                <div className="bg-gradient-feature border border-border/30 rounded-2xl p-6 text-center hover:shadow-hover transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-agribiz-blue-light transition-colors">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-agribiz-navy">Shareholder</h4>
                </div>
              </Link>
              <Link to="/sra-summary" className="group">
                <div className="bg-gradient-feature border border-border/30 rounded-2xl p-6 text-center hover:shadow-hover transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-agribiz-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-agribiz-blue-light transition-colors">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-agribiz-navy">SRA</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats & Trust Section */}
      <section className="py-32 stats-gradient text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our comprehensive database delivers accurate, real-time insights that power critical business decisions across Southeast Asia's agricultural sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-4 group-hover:bg-white/20 transition-all duration-300 pulse-glow">
                <div className="text-5xl lg:text-6xl font-bold mb-2">2,100+</div>
                <div className="text-white/80 text-lg font-medium uppercase tracking-wide">Groups Tracked</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-4 group-hover:bg-white/20 transition-all duration-300 pulse-glow" style={{animationDelay: '0.5s'}}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">7,700+</div>
                <div className="text-white/80 text-lg font-medium uppercase tracking-wide">Companies</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-4 group-hover:bg-white/20 transition-all duration-300 pulse-glow" style={{animationDelay: '1s'}}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">28,000+</div>
                <div className="text-white/80 text-lg font-medium uppercase tracking-wide">Shareholders</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-4 group-hover:bg-white/20 transition-all duration-300 pulse-glow" style={{animationDelay: '1.5s'}}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">99.9%</div>
                <div className="text-white/80 text-lg font-medium uppercase tracking-wide">Data Accuracy</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
              <p className="text-white/80">Continuously maintained and updated database ensuring the most current information</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">NDPE Compliance</h3>
              <p className="text-white/80">No Deforestation, No Peat, No Exploitation due diligence at group level</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verified Ownership</h3>
              <p className="text-white/80">Robust ownership verification process exclusive to palm oil operations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
