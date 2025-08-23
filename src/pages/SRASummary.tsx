import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  BarChart3 
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const SRASummary = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sraData = {
    company: "Mr Sulaidy",
    overallScore: 15,
    maxScore: 41,
    percentage: 37,
    sections: [
      {
        name: "Transparency",
        score: 1,
        maxScore: 10,
        percentage: 8,
        status: "high-risk",
        details: [
          { criteria: "Company subsidiaries (including mills, refineries, etc.)", status: "available" },
          { criteria: "Total landbank and planted land", status: "not-available" },
          { criteria: "Location of concessions and mills", status: "not-available" },
          { criteria: "Up-to-date supplier lists", status: "not-available" }
        ]
      },
      {
        name: "RSPO Compliance", 
        score: 0,
        maxScore: 10,
        percentage: 0,
        status: "high-risk",
        details: []
      },
      {
        name: "NDPE Compliance",
        score: 6,
        maxScore: 21,
        percentage: 25,
        status: "medium-risk",
        details: []
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            SRA SUMMARY OF MR SULAIDY
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar placeholder="Search for other group company" />
          </div>
        </div>

        {/* Summary Card */}
        <Card className="card-gradient mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              PERCENTAGE OF MR SULAIDY % SRA + OVERALL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Score Table */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  *Note: The highest the score/percentage is, the best is the company
                </p>
                
                <div className="space-y-3">
                  {sraData.sections.map((section, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">{section.name} (out of {section.maxScore})</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{section.score}</span>
                        <span className="text-muted-foreground">{section.percentage}%</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-2 pt-4 border-t-2 border-primary">
                    <span className="font-bold">Total (out of {sraData.maxScore})</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-primary">{sraData.overallScore}</span>
                      <span className="font-bold text-xl text-primary">{sraData.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--border))"
                      strokeWidth="8"
                      fill="none"
                    />
                    
                    {/* Progress circles */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${sraData.percentage * 2.51} 251.2`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-primary">{sraData.percentage}%</div>
                    <div className="text-sm text-muted-foreground">Overall</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary mb-6">SRA ASSESSMENT DETAILS</h2>
          
          {sraData.sections.map((section, index) => (
            <Collapsible 
              key={index}
              open={expandedSections.includes(section.name)}
              onOpenChange={() => toggleSection(section.name)}
            >
              <Card className="card-gradient">
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-primary">{section.name.toUpperCase()}</CardTitle>
                        {section.status === "high-risk" && (
                          <Badge variant="destructive" className="bg-red-100 text-red-800">
                            High Risk
                          </Badge>
                        )}
                        {section.status === "medium-risk" && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            Medium Risk
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          Score: {section.score}/{section.maxScore}
                        </span>
                        {expandedSections.includes(section.name) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    {section.name === "Transparency" && (
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">
                            UPSTREAM TRANSPARENCY (SCORE 0)
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Very limited information available
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-start">
                              <span className="font-medium">Score Parameter</span>
                              <span className="font-medium">Description</span>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-start gap-3 p-3 bg-white rounded border">
                                <div className="font-semibold text-primary min-w-[80px]">2 = High</div>
                                <div className="text-sm">
                                  <p>Availability and sufficient level of detail on:</p>
                                  <ul className="list-disc list-inside mt-1 space-y-1">
                                    <li>Company subsidiaries (including mills, refineries, etc.)</li>
                                    <li>Total landbank and planted land</li>
                                    <li>Location of concessions and mills</li>
                                    <li>Up-to-date supplier lists (at least one quarter before research)</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded border">
                                <div className="font-semibold text-muted-foreground min-w-[80px]">0 = Low</div>
                                <div className="text-sm text-muted-foreground">
                                  <p>Substantial parts of the above mentioned criteria are not clear, not complete, not up-to-date, or there are other reasons to doubt</p>
                                  <p className="mt-2">No or very limited information available on the above mentioned criteria</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {section.name !== "Transparency" && (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>No information available</p>
                      </div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SRASummary;