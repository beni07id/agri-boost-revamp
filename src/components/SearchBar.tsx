import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({
  placeholder = "Search for company...",
  onSearch,
  className = "",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10 h-12 text-base border-border focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      </div>
      <Button
        type="submit"
        className="bg-agribiz-cyan hover:bg-agribiz-cyan/90 text-white h-12 px-8 font-medium"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;