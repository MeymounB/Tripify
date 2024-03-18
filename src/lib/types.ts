export type SearchResult = {
  label: string;
  bounds: [[number, number], [number, number]];
  raw: SearchResultRaw;
  x: number;
  y: number;
};

export type SearchResultRaw = {
  addresstype: string;
  boundingbox: string[];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: string;
  osm_type: string;
  place_id: string;
  place_rank: string;
  type: string;
};
