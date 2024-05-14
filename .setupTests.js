import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({
    subsets: ["latin"],
    variable: "--font-sans",
  }),
}));
