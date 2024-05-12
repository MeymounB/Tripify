"use client";

import { useRef } from "react";
import Image from "next/image";
import MapImage from "@/assets/homepage.png";

export default function Home() {
  return (
    <>
      <div className="px-6 py-6 sm:px-20 lg:px-40 lg:py-12">
        <section className="flex w-full flex-col gap-6">
          <h1 className="sm:text-start text-center font-fugaz text-5xl uppercase md:text-6xl lg:text-7xl">
            Plan your trips in{" "}
            <span className="underlineEffect text-primary">seconds</span>
          </h1>

          <p className="text-xl lg:text-2xl text-center sm:text-start">
            With Tripify, select a start and a destination, we handle the rest
            for you. Routing, Events, Hotels...
          </p>
        </section>

        <AnimatedMap />
      </div>
      <section className="flex flex-col md:flex-row py-20">
        <div className="flex  md:w-1/2 flex-col gap-4 border p-10">
          <h2 className="underlineEffect inline-block w-max bg-gradient-to-r from-foreground to-primary bg-clip-text font-fugaz text-3xl sm:text-4xl lg:text-5xl uppercase text-transparent">
            Automation
          </h2>

          <p className="text-xl lg:text-2xl">Tripify automates many things such as:</p>

          <ul className="list-disc">
            <li>Routing between your start and destination waypoints.</li>
            <li>
              Finding events for you around every waypoint so you can enjoy the
              trip.
            </li>
            <li>Finding a place to sleep such as Hotels, RB&B...</li>
          </ul>
        </div>

        <div className="flex md:w-1/2 flex-col gap-4 border-y p-10">
          <h2 className="underlineEffect inline-block w-max bg-gradient-to-r from-foreground to-primary bg-clip-text font-fugaz text-3xl sm:text-4xl lg:text-5xl uppercase text-transparent">
            Customization
          </h2>

          <p className="text-xl lg:text-2xl">Tripify allows you to customize your trip:</p>

          <ul className="list-disc">
            <li>Chose a list of locations you want to visit.</li>
            <li>Select events and hotels.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function AnimatedMap() {
  const cardRef = useRef<HTMLDivElement>(null);
  const lastMouseMove = useRef<number>(performance.now());

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (performance.now() - lastMouseMove.current < 60) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 35;
    const y = (e.clientY - top - height / 2) / 25;

    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

    lastMouseMove.current = performance.now();
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section
      className="flex w-full flex-col gap-6 py-6 lg:py-12"
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "2000px",
      }}
    >
      <div
        ref={cardRef}
        className="relative flex aspect-video w-full transform-gpu overflow-hidden rounded-lg shadow-xl transition duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={MapImage}
          alt="map"
          width={1920}
          height={1080}
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
