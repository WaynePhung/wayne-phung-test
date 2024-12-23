import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Header from "./ui/nav-bar/header";
import Footer from "./ui/footer/footer";
import { handleStickyHeaders } from "./utils/ts/scroll-to-h2-main";
import adjustFooterBottomMargin from "./utils/js/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const contentRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // Run on initial load
      adjustFooterBottomMargin();
      handleStickyHeaders(contentRef);
  
      // Run on window resize
      const handleResize = () => {
        adjustFooterBottomMargin();
        handleStickyHeaders(contentRef);
      };
      window.addEventListener('resize', handleResize);
  
      // Run on scroll
      const handleScroll = () => handleStickyHeaders(contentRef);
      window.addEventListener('scroll', handleScroll);
  
      // Run on route change
      router.events.on('routeChangeComplete', adjustFooterBottomMargin);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
        router.events.off('routeChangeComplete', adjustFooterBottomMargin);
      };
    }, [router.events]);
  
    return (
      <>
        <Header page="home"/>
        <div ref={contentRef}>
        {children}
        </div>
        <Footer />
      </>
    );
  };
  
  export default Layout;

