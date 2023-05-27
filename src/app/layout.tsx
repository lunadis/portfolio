import "./globals.css";
import { Catamaran } from "next/font/google";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Luis Portifolio",
  description: "Wellcome! That is the Luis Lopes Portifolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={catamaran.className}>{children}</body>
    </html>
  );
}
