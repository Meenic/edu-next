import ServerNavbar from "@/components/navbar/ServerNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <ServerNavbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
