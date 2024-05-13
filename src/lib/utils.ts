import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventsType, POI } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvents(
  latitude: number,
  longitude: number,
  radius: number,
) {
  const filters: string = `[{isLocatedAt:{schema_geo:{_geo_distance:{lng:"${longitude.toString()}",lat:"${latitude.toString()}",distance:"${radius.toString()}"}}}}]`;
  const query: string = `{poi(filters:${filters}){total,results{rdfs_label{value},isLocatedAt{schema_geo{schema_longitude,schema_latitude},schema_address{schema_postalCode}}}}}`;
  try {
    const res = await fetch(`http://localhost:8080/?query=${query}`);
    const rawData = (await res.json()).data.poi.results;
    const mappedData: EventsType[] = rawData.map((pointOfInterest: POI) => {
      return {
        latitude:
          pointOfInterest.isLocatedAt[0].schema_geo[0].schema_latitude[0],
        longitude:
          pointOfInterest.isLocatedAt[0].schema_geo[0].schema_longitude[0],
        postalCode: parseInt(
          pointOfInterest.isLocatedAt[0]?.schema_address[0]
            ?.schema_postalCode[0],
        ),
        label: pointOfInterest?.rdfs_label[0]?.value,
      };
    });
    return mappedData;
  } catch (e) {
    console.log(e);
  }
}
