"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { ReactNode, useMemo, useState } from "react";
import { searchQuery } from "@/lib/actions/map";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useDebounceCallback } from "usehooks-ts";
import { SearchResult } from "@/lib/types";

interface ISearch {
  onSelect: (result: SearchResult) => void;
  children?: ReactNode;
}

const Search = ({ onSelect, children }: ISearch) => {
  const provider = useMemo(() => new OpenStreetMapProvider(), []);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);

  const handleSearch = async (query: string) => {
    const results = await searchQuery(provider, query);

    setResults(results);
  };

  const handleSelect = (value: string) => {
    const result = results.find((r) => r.label === value);

    if (!result) return;

    onSelect(result);
    setOpen(false);
  };

  return (
    <div className="flex w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full p-0">
            {children}
          </Button>
        </PopoverTrigger>
        <PopoverContent asChild className="w-full" side="bottom" align="start">
          <Command>
            <CommandInput
              placeholder="Change status..."
              onValueChange={useDebounceCallback(handleSearch, 300)}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {results.map((result: SearchResult, index: number) => (
                  <CommandItem
                    key={index}
                    value={result.label}
                    onSelect={handleSelect}
                  >
                    <span>{result.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Search;
