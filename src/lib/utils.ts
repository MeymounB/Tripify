import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventsType, POI } from "./types";

export interface IGetEvents {
  latitude: number;
  longitude: number;
  radius: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvents(props: IGetEvents[]) {
  try {
    const result = props
      .map(async (prop) => {
        const filters: string = `[{isLocatedAt:{schema_geo:{_geo_distance:{lng:"${prop.longitude.toString()}",lat:"${prop.latitude.toString()}",distance:"${prop.radius.toString()}"}}}}]`;
        const query: string = `{poi(filters:${filters}){total,results{rdfs_label{value},takesPlaceAt{startDate,endDate,startTime,endTime},isLocatedAt{schema_geo{schema_longitude,schema_latitude},schema_address{schema_postalCode}}}}}`;

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
            startDate: pointOfInterest?.takesPlaceAt[0]?.startDate,
            endDate: pointOfInterest?.takesPlaceAt[0]?.endDate,
            startTime: pointOfInterest?.takesPlaceAt[0]?.startTime || "00:00",
            endTime: pointOfInterest?.takesPlaceAt[0]?.endTime || "23:59",
          };
        });
        return mappedData;
      })
      .flat();
    return (await Promise.all(result)).flat();
  } catch (e) {
    console.log(e);
    return [];
  }
}
