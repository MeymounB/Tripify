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
import { useMemo, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { searchQuery } from "@/lib/actions/map";

const Search = () => {
  const provider = useMemo(() => new OpenStreetMapProvider(), []);
  const [results, setResults] = useState<any>([]);

  const handleSearch = async (query: string) => {
    const results = await searchQuery(provider, query);

    setResults(results);
  };

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder="Search a destination"
        onValueChange={useDebounceCallback(handleSearch, 250)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {results.map((result: any) => (
            <CommandItem key={result.label}>{result.label}</CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Search;
