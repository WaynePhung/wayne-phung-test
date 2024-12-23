import Link from "next/link";
import { literata, noto_sans } from "../../utils/text-styling/fonts";

import ElectricStride from "../case-study-previews/electric-stride";
import AutoPG from "../case-study-previews/automation-playground";
import TTVReel from "../case-study-previews/triton-television-reel";
import TCLCVideo from "../case-study-previews/tclc-video";

export default function HomePageContent() {
  return (
    <>
      <main>
        <section id="title">
          <h1 className={literata.className}>Wayne Phung</h1>
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
    </>
  );
}
