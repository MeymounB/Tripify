import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={cn("min-h-screen bg-background font-sans antialiased")}>
      {children}
    </section>
  );
}
