import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CompanyCard from "@/components/CompanyCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const mockCompanies = [
  {
    name: "PT KALIMANTAN HAMPARAN SAWIT",
    location: "Indonesia, Central Kalimantan",
    address: "JL. DANAU SUNTER SELATAN, BLOK. O-4, NO. 29, JAKARTA UTARA, JAKARTA",
    type: "PT" as const,
  },
  {
    name: "ARUS SAWIT SDN BHD",
    location: "Malaysia, Sabah",
    address: "JL. ISTIADAT, LOT 34, 1ST FLOOR, LIKAS SQUARE COMMERCIAL CENTRE, KOTA KINABALU, SABAH, MALAYSIA (88400)",
    type: "PT" as const,
  },
  {
    name: "PT BIMA DESA SAWITA",
    location: "Indonesia, Aceh",
    address: "DUSUN LUBUK BATANG, KEL. LUBUK SIDUP, KEC. SEKERAK, ACEH TAMIANG, ACEH (24476)",
    type: "PT" as const,
  },
  {
    name: "PT AGRO INDO SAWIT",
    location: "Indonesia, East Kalimantan",
    address: "GEDUNG DBS BANK TOWER LT. 28, CIPUTRA WORLD 1, JL. PROF. DR. SATRIO KAV. 3-5, KEL. KARET KUNINGAN, KEC. SETIA BUDI, JAKARTA SELATAN, DKI JAKARTA",
    type: "PT" as const,
  },
  {
    name: "PT SINAR INTI SAWIT",
    location: "Indonesia, Riau",
    address: "JL. RINTIS, NO. 12, RINTIS, KEC. LIMAPULUH, PEKANBARU, RIAU",
    type: "PT" as const,
  },
  {
    name: "PT SAWIT JAYA MAKMUR",
    location: "Indonesia, West Kalimantan",
    address: "JL. ADI SUTJIPTO, KM 5.3, DESA SUNGAI RAYA, KUBU RAYA, KALIMANTAN BARAT",
    type: "PT" as const,
  },
];

const CompanySearch = () => {
  const [searchResults, setSearchResults] = useState(mockCompanies);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Filter companies based on search query
    const filtered = mockCompanies.filter(
      (company) =>
        company.name.toLowerCase().includes(query.toLowerCase()) ||
        company.location.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResults = searchResults.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">COMPANY</h1>
          <p className="text-muted-foreground mb-6">
            Search results for "{searchQuery || "sawit"}"
          </p>
          
          <div className="max-w-2xl mx-auto">
            <SearchBar
              placeholder="Search for other subsidiary company"
              onSearch={handleSearch}
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {paginatedResults.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CompanySearch;