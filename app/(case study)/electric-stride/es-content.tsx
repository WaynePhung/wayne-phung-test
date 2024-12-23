'use client';

import dynamic from "next/dynamic";
import Link from "next/link";
import { literata, noto_sans } from "../../utils/text-styling/fonts";
import NavBarHome from "@/app/ui/nav-bar/nav-bar-home";
import "@/app/page.css"
import Footer from "@/app/ui/footer/footer-home";

import ElectricStride from "@/app/ui/case-study-previews/electric-stride";
import AutoPG from "@/app/ui/case-study-previews/automation-playground";
import TTVReel from "@/app/ui/case-study-previews/triton-television-reel";
import TCLCVideo from "@/app/ui/case-study-previews/tclc-video";

export default function ESContent() {
  const DynamicScript = dynamic(() => import("../../utils/js/global-layout"), {ssr: false});
    return (
    <>
      <NavBarHome />
      <main>
        <section id="title">
            <h1 className={literata.className}>Electric Stride</h1>
            <p className={noto_sans.className}>
            <b>My last role:</b> small academic group at the University of California - San Diego
            <br/>
            worked to improve how they communicated their <Link href="https://thelab.ucsd.edu/" rel="external" target="_blank">open-source hearing research toolkit</Link>
            </p>
        </section>
        <section className="work-previews" id="design-work">
            <h2 className={literata.className}>Design Work</h2>
            <article>
            <ElectricStride />
            <AutoPG />
            </article>
        </section>
        <section className="work-previews" id="media-work">
            <h2 className={literata.className}>Media Work</h2>
            <article>
            <TTVReel />
            <TCLCVideo />
            </article>
        </section>
      </main>
      <Footer />
      <DynamicScript />
    </>
    );
}
