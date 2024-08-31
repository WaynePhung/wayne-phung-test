import { literata, noto_sans } from "@/app/utils/text-styling/fonts";
import Link from "next/link";
import ButtonSeeCaseStudy from "../buttons/button-see-case-study";

export default async function TCLCVideo() {
    return (
        <article className="grid-default-1400 grid-case-study-preview">
            <article>
                <h3 className={literata.className}>TCLC Rap Video</h3>
                <h4 className={`${literata.className} tags`}>Video Production, Video Editing, Ethnography</h4>
                <p className={noto_sans.className}>A rap-themed video that demonstrates how kids within an affordable housing community showcase their activities in their afterschool program.</p>
                <button>
                    <Link href="/tclc-video" rel="external">
                        <ButtonSeeCaseStudy />
                    </Link>
                </button>
            </article>
            <figure>
                <Link href="/tclc-video" rel="external" className="ratio-16-9 shadow">
                    <iframe className="ratio-16-9" src="https://www.youtube.com./embed/WQDrVQvYCAQ?si=M9ZOJaEjUJotCbTY&playsinline=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </Link>
            </figure>
        </article>
    );
}