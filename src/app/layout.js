import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "../components/navbar";
import CustomFooter from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Putra Pratama",
  description: "Adit's Personal Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNavbar/>
        {children}
        <CustomFooter/>
      </body>
    </html>
  );
}
