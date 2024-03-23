import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "learning next js",
    template: "%s -  learning next js ",
    absolute: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>webs header</h2>
          <nav>
            <Link href={"/contact"}>Link to Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer app</footer>
      </body>
    </html>
  );
}
