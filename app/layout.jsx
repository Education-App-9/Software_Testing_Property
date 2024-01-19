import { Manrope } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "TD Property Management",
  description: "Created by Sinister",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
