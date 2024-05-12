"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="forground z-30 border-t px-5 md:px-20">
        <div className="flex justify-center py-5 md:hidden">
          <div className="w-max bg-gradient-to-r from-foreground to-primary bg-clip-text font-fugaz text-2xl uppercase text-transparent md:justify-start md:text-2xl">
            <Link href="/">Tripify</Link>
          </div>
        </div>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-5 border-y py-5 md:justify-start md:border-none">
          <li className="hidden md:block">
            <div className="w-max bg-gradient-to-r from-foreground to-primary bg-clip-text font-fugaz text-2xl uppercase text-transparent md:justify-start md:text-2xl">
              <Link href="/">Tripify</Link>
            </div>
          </li>
          <li className="hidden pl-5 md:block md:border-l ">
            <Link href="/commitments" className="flex items-center gap-2">
              <Image src="/France.svg" alt="France" width={25} height={20} />
              <span>France</span>
            </Link>
          </li>
          <li className="">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="">
            <Link href="/contact-us">Help</Link>
          </li>
          <li className="">
            <Link href="/about">About Tripify</Link>
          </li>
          <li className="">
            <Link href="/legal">Legal Notices</Link>
          </li>
          <li className="">
            <Link href="/site-map">Site Map</Link>
          </li>
        </ul>
        <div className="flex justify-center py-5 md:hidden">
          <Link href="/commitments" className="flex items-center gap-2">
            <Image width={25} height={20} src="/France.svg" alt="France" />
            <span>France</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
