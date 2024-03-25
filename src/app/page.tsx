"use client";

import { useRef } from "react";
import Image from "next/image";
import MapImage from "@/assets/homepage.png";

export default function Home() {
  return (
    <>
      <section className="flex w-full flex-col gap-6 px-60 pt-40">
        <h1 className="font-fugaz w-[55rem] text-8xl uppercase">
          Plan your trips in <span className="text-primary">seconds</span>
        </h1>

        <p className="w-[55rem] text-2xl">
          With Tripify, select a start and a destination, we handle the rest for
          you. Routing, Events, Hotels...{" "}
        </p>
      </section>

      <AnimatedMap />

      <section className="flex">
        <div className="flex w-1/2 flex-col gap-4 border p-10">
          <h2 className="font-fugaz inline-block w-max bg-gradient-to-r from-foreground to-primary bg-clip-text text-5xl uppercase text-transparent">
            Automation
          </h2>

          <p className="text-2xl">Tripify automates many things such as:</p>

          <ul className="list-disc">
            <li>Routing between your start and destination waypoints.</li>
            <li>
              Finding events for you around every waypoint so you can enjoy the
              trip.
            </li>
            <li>Finding a place to sleep such as Hotels, RB&B...</li>
          </ul>
        </div>

        <div className="flex w-1/2 flex-col gap-4 border-y p-10">
          <h2 className="font-fugaz inline-block w-max bg-gradient-to-r from-foreground to-primary bg-clip-text text-5xl uppercase text-transparent">
            Customization
          </h2>

          <p className="text-2xl">Tripify allows you to customize your trip:</p>

          <ul className="list-disc">
            <li>Chose a list of locations you want to visit.</li>
            <li>Select events and hotels.</li>
          </ul>
        </div>
      </section>

      <footer className="h-80"></footer>
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
      className="flex w-full flex-col gap-6 px-60 py-12"
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
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
