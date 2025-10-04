import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectFilterProps {
  industries: string[];
  technologies: string[];
  years: number[];
  selectedIndustry: string;
  selectedTechnology: string;
  selectedYear: string;
  onIndustryChange: (value: string) => void;
  onTechnologyChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onClearFilters: () => void;
}

const ProjectFilter = ({
  industries,
  technologies,
  years,
  selectedIndustry,
  selectedTechnology,
  selectedYear,
  onIndustryChange,
  onTechnologyChange,
  onYearChange,
  onClearFilters,
}: ProjectFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasActiveFilters = selectedIndustry !== "all" || selectedTechnology !== "all" || selectedYear !== "all";

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                Active
              </Badge>
            )}
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onClearFilters();
              }}
              className="h-6 px-2"
            >
              Clear
            </Button>
          )}
        </Button>
      </div>

      {/* Filter Controls */}
      <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:gap-4 space-y-3 md:space-y-0`}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground md:flex-shrink-0">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filter by:</span>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Industry Filter */}
          <Select value={selectedIndustry} onValueChange={onIndustryChange}>
            <SelectTrigger className="bg-card border-border">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Technology Filter */}
          <Select value={selectedTechnology} onValueChange={onTechnologyChange}>
            <SelectTrigger className="bg-card border-border">
              <SelectValue placeholder="Technology" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all">All Technologies</SelectItem>
              {technologies.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Year Filter */}
          <Select value={selectedYear} onValueChange={onYearChange}>
            <SelectTrigger className="bg-card border-border">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all">All Years</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={onClearFilters}
            className="md:flex-shrink-0 border-border"
          >
            <X className="w-4 h-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Active Filter Tags */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedIndustry !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {selectedIndustry}
              <button
                onClick={() => onIndustryChange("all")}
                className="ml-1 hover:text-destructive"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedTechnology !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {selectedTechnology}
              <button
                onClick={() => onTechnologyChange("all")}
                className="ml-1 hover:text-destructive"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedYear !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {selectedYear}
              <button
                onClick={() => onYearChange("all")}
                className="ml-1 hover:text-destructive"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
