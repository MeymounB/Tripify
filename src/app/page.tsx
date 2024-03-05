import Image from "next/image";
import PlanTripButton from "../components/homepage/PlanTripButton"
export default function Home() {
  return (
    <div className = "flex items-center justify-center w-full h-full bg-cover bg-[url('../../public/homepage.jpg')] opacity-100">
      <div className = "w-3/4 mx-auto py-5 flex flex-col items-center justify-center">
        <div className = "text-3xl text-white p-5 font-bold">
          ROAD TRIP PLANNER
        </div>
        <div className = "text-m text-white m-5 p-1 bg-slate-500 rounded-md shadow-xl">
          Let us guide you on your next great adventure
        </div>
        <div className = "bg-slate-500 hover:bg-slate-400 text-white px-2 py-1 rounded-md shadow-xl">
            <PlanTripButton targetPage="/travel/new-trip" buttonText="Plan my roadtrip!" />
        </div>
      </div>  
    </div>
    
  );
}
