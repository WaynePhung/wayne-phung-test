import Link from 'next/link';
import { LinkProps, SeeCaseStudyProps, getLinkProps } from "../utils/ts/link-types";
import { noto_sans } from "@/app/utils/text-styling/fonts";
import Image from 'next/image';
import { Url } from "next/dist/shared/lib/router/router";

export interface LinkType {
    type: string;
    page?: "home" | "global";
    href?: Url;
    caseStudy?: string;
    imagePosition?: "before" | "after";
    // children: React.ReactNode;
}

export function LinkComponent({type, page, caseStudy, imagePosition} : LinkType) : React.ReactElement | null {
    // const 
    //     linkPropsObject = getLinkProps("home"),
    //     getPropsHref = linkPropsObject[type];
    
    let linkPropsObject = getLinkProps();
    if (page == "home") {
        linkPropsObject = getLinkProps(page);
    }

    const getPropsHref = linkPropsObject[type];
    if (!getPropsHref) {
        console.warn(`No navigation getPropsHref found for type: ${type}`);
        return null;
    }

    let href: Url = "/";
    if (type == "seeCaseStudy" && caseStudy) {
        const seeCaseStudyItem = getPropsHref as SeeCaseStudyProps;
        href = seeCaseStudyItem.href[caseStudy] || "/";
    } else {
        href = (getPropsHref as LinkProps).href || "/";
    }

    const imageElement = getPropsHref.icon && (
        <picture className={getPropsHref.icon.imageClasses}>
            <Image
            src={getPropsHref.icon.imageSrc}
            width={getPropsHref.icon.width}
            height={getPropsHref.icon.height}
            alt={getPropsHref.icon.alt}
            loading={getPropsHref.icon.loading}
            />
        </picture>
    );
    
    return(
        <Link 
            href={href}
            aria-label={getPropsHref.ariaLabel}
            id={getPropsHref.id}
            role={getPropsHref.role}
            rel={getPropsHref.rel}
            target={getPropsHref.target}
        >
            {imagePosition === "before" && imageElement}
            <span className={noto_sans.className}>
                {getPropsHref.text}
            </span>
            {imagePosition === "after" && imageElement}
        </Link>
    );
}

// export function NavLink ({href, ariaLabel, id, children} : NavLinkProps) {

//     return (
//         <Link href={href} className={`${noto_sans.className} navLink`} id={id && id} role="link" aria-label={ariaLabel}>
//             <span>{children}</span>
//         </Link>
//     );
// }