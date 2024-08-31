import type { Metadata, Viewport } from "next";
import "./ui/globals.css";
import "./page.css";
import Script from "next/script";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  title: {
    template: "%s | Wayne Phung's Portfolio", 
    default: "Wayne Phung's Portfolio"
  },
  description: "I'm a UX Designer who has experience with project management, front-end web development, UX research, and media production. I'm currently interested in Product Design, UX Design, and UI Design and Front-End Web Development. My last role was from a small academic group at the University of California - San Diego that was working on improving their open-source hearing research toolkit.",
  keywords: "Wayne Phung, portfolio, UX design, case studies", 
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <body>
          {children}
          <Script 
            type="module" 
            src="./js/global-layout.js"
            strategy="beforeInteractive"
          />
        </body>
      </html>
    </>
  );
}
