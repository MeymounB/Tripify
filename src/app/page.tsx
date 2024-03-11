import homepage_background from "@/assets/homepage.jpg";
import Image from "next/image";
import PlanTripButton from "../components/homepage/PlanTripButton";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        src={homepage_background}
        alt=""
        className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-[0.6]"
      />
      <div className="relative mx-auto flex w-3/4 flex-col items-center justify-center py-5">
        <div className="items-center p-5 text-[36px] font-bold text-yellow-400">
          <h1 className="text-center">ROAD TRIP PLANNER</h1>
        </div>
        <div className="m-5 rounded-md p-1 text-[20px] text-yellow-300 shadow-xl">
          <h2 className="text-center">
            Let us guide you on your next great adventure!
          </h2>
        </div>
        <PlanTripButton
          targetPage="/travel/new-trip"
          buttonText="Plan my roadtrip!"
        />
      </div>
    </div>
  );
}
