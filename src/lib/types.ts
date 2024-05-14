export type SearchResult = {
  label: string;
  bounds: [[number, number], [number, number]];
  raw: SearchResultRaw;
  x: number; // longitude
  y: number; // latitude
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

export type POI = {
  isLocatedAt: {
    schema_geo: { schema_latitude: number[]; schema_longitude: number[] }[];
    schema_address: { schema_postalCode: string[] }[];
  }[];
  takesPlaceAt: {
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
  }[];
  rdfs_label: { value: string }[];
};

export type EventsType = {
  label?: string;
  latitude: string;
  longitude: string;
  city?: string;
  postalCode?: number;
  address?: string;
  endDate: string | null;
  endTime: string | null;
  startDate: string | null;
  startTime: string | null;
};
