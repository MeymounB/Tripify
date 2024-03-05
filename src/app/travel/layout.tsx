import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={cn("bg-background font-sans antialiased")}>
      {children}
    </section>
  );
}
