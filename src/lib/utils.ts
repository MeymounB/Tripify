import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { POI } from "./utilsTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvents(postalCode: number) {
  const filters: string = `[{isLocatedAt:{schema_address:{schema_postalCode:{_eq:"${postalCode.toString()}"}}}}]`;
  const query: string = `{poi(filters:${filters}){total,results{rdfs_comment{value},isLocatedAt{schema_geo{schema_longitude,schema_latitude},schema_address{schema_postalCode}}}}}`;
  try {
    const res = await fetch(`http://localhost:8080/?query=${query}`);
    const rawData = (await res.json()).data.poi.results;
    const mappedData = rawData.map((pointOfInterest: POI) => {
      return {
        latitude:
          pointOfInterest.isLocatedAt[0]?.schema_geo[0]?.schema_latitude[0],
        longitude:
          pointOfInterest.isLocatedAt[0]?.schema_geo[0]?.schema_longitude[0],
        postalCode: parseInt(
          pointOfInterest.isLocatedAt[0]?.schema_address[0]
            ?.schema_postalCode[0],
        ),
        comment: pointOfInterest.rdfs_comment[0].value,
      };
    });
    console.log(mappedData);
  } catch (e) {
    console.log(e);
  }
}
