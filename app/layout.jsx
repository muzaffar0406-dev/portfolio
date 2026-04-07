import "./globals.css";

export const metadata = {
  title: "Muzaffar | 3D Portfolio",
  description: "A premium 3D portfolio website using Next.js and Three.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
