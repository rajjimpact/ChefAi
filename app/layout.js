import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"] });

export const metadata = {
  title: "AI Chef | Generate Delicious Recipes",
  description: "AI Chef - AI-Powered Recipe Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
