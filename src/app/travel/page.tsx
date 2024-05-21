import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-56px-73px)] flex-col items-center justify-center gap-5 bg-secondary p-5 sm:flex-row sm:px-10 md:gap-20">
        <Card className="w-[300px]">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl lg:text-4xl">New trip</CardTitle>
            <CardDescription>
              Plan a new trip ? Select a start and a destination, we handle the
              rest.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/travel/new-trip" className="text-[#000000]">
                Plan a trip
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[300px]">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl lg:text-4xl">History</CardTitle>
            <CardDescription>
              Check for your history trips, you can see the details of each
              trip.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/travel/history" className="text-[#000000]">
                All trips
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
