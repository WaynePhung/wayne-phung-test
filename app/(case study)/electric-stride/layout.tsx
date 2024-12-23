import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Footer from "../../ui/footer/footer";
import "./../../ui/globals.css";
import "./../../page.css";
import NavBarGlobal from "../../ui/nav-bar/header";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  title: {
    template: "%s | Case Study | Wayne Phung's Portfolio", 
    default: "Case Study | Wayne Phung's Portfolio"
  },
  authors: [{
    name:"Wayne Phung", 
    url:"https://waynephung.com"
  }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport: Viewport = {
  width: 'device-width, shrink-to-fit=no',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
