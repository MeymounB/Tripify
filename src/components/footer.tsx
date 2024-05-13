"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="forground z-30 border-t px-5 md:px-20">
        <div className="flex w-full justify-center border-b md:justify-start">
          <div className="w-max bg-gradient-to-r from-foreground to-primary bg-clip-text py-8 font-fugaz text-2xl uppercase text-transparent md:justify-start md:text-2xl">
            <Link href="/">Tripify</Link>
          </div>
        </div>
        <ul className="flex flex-row flex-wrap items-stretch justify-center border-b py-4 md:justify-start md:border-none md:py-8">
          <li className="mb-2 mr-4 hidden pt-4 md:mx-4 md:mb-8 md:block md:pt-8">
            <Link href="/commitments" className="flex items-center gap-2">
              <Image src="/France.svg" alt="France" width={25} height={20} />
              <span>France</span>
            </Link>
          </li>
          <li className="mb-2 mr-4 pt-4 md:mx-4 md:mb-8 md:pt-8">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="mb-2 mr-4 pt-4 md:mx-4 md:mb-8 md:pt-8">
            <Link href="/contact-us">Help</Link>
          </li>
          <li className="mb-2 mr-4 pt-4 md:mx-4 md:mb-8 md:pt-8">
            <Link href="/about">About Tripify</Link>
          </li>
          <li className="mb-2 mr-4 pt-4 md:mx-4 md:mb-8 md:pt-8">
            <Link href="/legal">Legal Notices</Link>
          </li>
          <li className="mb-2 mr-4 pt-4 md:mx-4 md:mb-8 md:pt-8">
            <Link href="/site-map">Site Map</Link>
          </li>
        </ul>
        <a
          href="https://www.flaticon.com/fr/icones-gratuites/epingle"
          title="épingle icônes"
        >
          Épingle icônes créées par Freepik - Flaticon
        </a>
        <div className="flex justify-center py-10 md:hidden">
          <Link href="/commitments" className="flex items-center gap-2">
            <Image width={25} height={20} src="/France.svg" alt="France" />
            <span>France</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
