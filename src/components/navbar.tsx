"use client";

import * as React from "react";
import Link from "next/link";

import { Icon } from "@iconify/react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Feature {
  title: string;
  href: string;
  description: string;
}

const features: Array<Feature> = [
  {
    title: "New trip",
    href: "/travel/new-trip",
    description:
      "Plan a new trip, including the places you want to visit and the routes you want to take.",
  },
  {
    title: "History",
    href: "/travel/history",
    description:
      "Your previous trips, including the places you visited and the routes you took.",
  },
];

export function Navbar() {
  return (
    <div className="relative z-20 w-full p-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} gap-2 `}
              >
                <Icon icon="mdi:home" className="h-5 w-5" />
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Travel</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {features.map((component) => (
                  <NavbarSubItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </NavbarSubItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

type TNavbarSubItem = {
  title: string;
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavbarSubItem = ({
  className,
  title,
  href,
  children,
  ...props
}: TNavbarSubItem) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
