import { literata, noto_sans } from "@/app/utils/text-styling/fonts";
import Image from "next/image";
import Link from "next/link";
import { images } from "../media/media-global";
import ButtonSeeCaseStudy from "../buttons/button-see-case-study";


export default async function AutoPG() {
    return (
        <article className="grid-default-1400 grid-case-study-preview">
            <article>
                <h3 className={literata.className}>Automation Playground</h3>
                <h4 className={`${literata.className} tags`}>Web Design, Prototyping</h4>
                <p className={noto_sans.className}>
                    Automation Playground is a research subgroup of UC San Diego's Design Lab.
                    <br />
                    Helped to spearhead a web design project to showcase the research group for the former founder.
                </p>
                <button>
                    <Link href="/automation-playground" rel="external">
                        <ButtonSeeCaseStudy />
                    </Link>
                </button>
            </article>
            <figure>
                <Link href="/automation-playground" rel="external">
                    <picture>
                        <Image src={images["automation-playground"]["main"]} width={1027} height={501} alt="" loading="lazy" />
                    </picture>
                </Link>
            </figure>
        </article>
    );
}