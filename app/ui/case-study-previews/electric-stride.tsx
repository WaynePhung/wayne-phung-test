import { literata, noto_sans } from "@/app/utils/text-styling/fonts";
import Image from "next/image";
import Link from "next/link";
import { images } from "../media/media-global";
import ButtonSeeCaseStudy from "../buttons/button-see-case-study";

export default async function ElectricStride() {
    return (
        <article className="grid-default-1400 grid-case-study-preview">
            <article>
                <h3 className={literata.className}>Electric Stride</h3>
                <h4 className={`${literata.className} tags`}>UX Design, UX Research, Rapid Ideation</h4>
                <p className={noto_sans.className}>An exercise mat for people with Parkinson's to train their gait and stride length. This was created during the Electrical and Computer Engineering (ECE) Design Competition.</p>
                <button>
                    <Link href="/electric-stride" rel="external">
                        <ButtonSeeCaseStudy />
                    </Link>
                </button>
            </article>
            <figure id="electric-stride">
                <Link href="/electric-stride" rel="external" className="shadow">
                    <picture>
                        <Image src={images["electric-stride"]["main"]} width={400} height={533} alt="" loading="lazy" />
                    </picture>
                </Link>
            </figure>
        </article>
    );
}