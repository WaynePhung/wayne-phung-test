import Link from "next/link";
import { literata, noto_sans } from "../../utils/text-styling/fonts";
import type { Metadata } from "next";
import TitleContainerDefault from "../../ui/section-containers/title-container-default";

import AutoPG from "../../ui/case-study-previews/automation-playground";
import TTVReel from "../../ui/case-study-previews/triton-television-reel";
import TCLCVideo from "../../ui/case-study-previews/tclc-video";

export const metadata: Metadata = {
  title: 'Electric Stride',
};

export default function Page() {
  return (
    <>
      <main>
        <TitleContainerDefault>
          <section id="title">
            <h1 className={literata.className}>Wayne Phung</h1>
            <p className={noto_sans.className}>
              <b>My last role:</b> small academic group at the University of California - San Diego
              <br/>
              worked to improve how they communicated their <Link href="https://thelab.ucsd.edu/" rel="external" target="_blank">open-source hearing research toolkit</Link>
            </p>
          </section>
        </TitleContainerDefault>
        <section className="work-previews" id="design-work">
          <h2 className={`${literata.className} h2-sticky`}>Design Work</h2>
          <article>
            <AutoPG />
          </article>
        </section>
        <section className="work-previews" id="media-work">
          <h2 className={`${literata.className} h2-sticky`}>Media Work</h2>
          <article>
            <TTVReel />
            <TCLCVideo />
          </article>
        </section>
      </main>
      {/* <script 
        type="module" 
        src="./../js/global-layout.js"
        // strategy="beforeInteractive"
      ></script> */}
    </>
  );
}
