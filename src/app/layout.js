import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/redux/reduxProvider";
import MainNavbar from "@/components/navigation/MainNavbar";
import Sidebar from "@/components/navigation/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

// Yekan Bakh (Variable)
const yekanBakh = localFont({
  src: [
    {
      path: "../assets/fonts/YekanBakhFaNum-VF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-yekanBakh",
});

// One family: IRANSans with multiple weights
const iranSans = localFont({
  src: [
    {
      path: "../assets/fonts/IRANSansX-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansWeb_Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
});

export const metadata = {
  title: "Portfolio demo",
  description: "Next.js demo",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`
        ${yekanBakh.variable}
        ${iranSans.variable}
      `}
    >
      <body className="font-[var(--font-yekanBakh)]">
        <ReduxProvider>
        
          <MainNavbar />
          <Sidebar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
