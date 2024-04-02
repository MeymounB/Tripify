import { cn } from "@/lib/utils";
import { Providers } from "@/app/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={cn("h-full w-full")}>
      <Providers>{children}</Providers>
    </section>
  );
}
