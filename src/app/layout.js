import { Fira_Code } from "next/font/google";
import "./globals.css";
import CustomNavbar from "../components/navbar";
import CustomFooter from "../components/footer";

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code',
});

export const metadata = {
  title: "Aditya Putra Pratama",
  description: "Adit's Personal Blog - Backend Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaCode.variable}>
        <CustomNavbar/>
        {children}
        <CustomFooter/>
      </body>
    </html>
  );
}
