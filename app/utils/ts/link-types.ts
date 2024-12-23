import { size_space_num } from "../size-spacing/nums-size-space";

export interface LinkProps {
    text: string;
    href?: string | 
    { 
        [key: string]: string 
    };
    ariaLabel?: string;
    id?: string;
    role?: string;
    rel?: string;
    target?: string;
    icon?: {
        imageSrc: string;
        imageClasses: `icon ratio-${string}`
        width: number;
        height: number;
        alt: string | "";
        loading: "lazy" | "eager";
    }
    // children: React.ReactNode;
}

export interface SeeCaseStudyProps extends Omit<LinkProps, 'href'> {
    href: {
      [key: string]: string;
    };
  }

const
    slash = "/",
    designHref = "#design-work",
    mediaHref = "#media-work",
    aboutHref = "#about-me-section";

export function getLinkProps(navBarType?: string) : { [key: string]: LinkProps | SeeCaseStudyProps } {
    return {
        home: {
            text: "Wayne Phung",
            href: slash,
            id: "waynephung",
            role: "link",
            ariaLabel: "back to home"
        },
        design: {
            text: "Design",
            href: (navBarType == "home" ? designHref : slash + designHref),
            role: "link",
            ariaLabel: "anchor link to design section of the homepage"
        },
        media: {
            text: "Media",
            href: (navBarType == "home" ? mediaHref : slash + mediaHref),
            role: "link",
            ariaLabel: "anchor link to media section of the homepage"
        },
        about: {
            text: "About Me",
            href: (navBarType == "home" ? aboutHref : slash + aboutHref),
            role: "link",
            ariaLabel: "anchor link to media section of the homepage"
        },
        timeline: {
            text: "Timeline",
            href: "timeline",
            role: "link",
            ariaLabel: "anchor link to cv page",
        },
        contact: {
            text: "Contact Me",
            href: "#conversation",
            role: "link",
            ariaLabel: "anchor link to contact Wayne Phung via email or LinkedIn"
        },
        email: {
            text: "Email",
            href: "#conversation",
            role: "link",
            ariaLabel: "anchor link to contact Wayne Phung via email",
            rel: "external",
            target: "_blank",
            icon: {
                imageSrc: "icons/email.svg",
                imageClasses: "icon ratio-4-3",
                width: size_space_num["l-num"],
                height: size_space_num["l-num"],
                alt: "email icon",
                loading: "lazy"
            }
        },
        linkedIn: {
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/wayne-phung-8a8242102/",
            role: "link",
            ariaLabel: "anchor link to contact Wayne Phung via LinkedIn",
            rel: "external",
            target: "_blank",
            icon: {
                imageSrc: "icons/linkedIn.svg",
                imageClasses: "icon ratio-1-1",
                width: size_space_num["l-num"],
                height: size_space_num["l-num"],
                alt: "linkedin icon",
                loading: "lazy"
            }
        },
        seeCaseStudy: {
            text: "See Case Study",
            href: {
                es: slash + "electric-stride",
                ap: slash + "automation-playground",
                tclc: slash + "tclc-video",
                ttvr: slash + "triton-television-reel"
            },
            rel: "external",
            role: "link",
            ariaLabel: "see case study",
            icon: {
                imageSrc: "icons/arrow-right.svg",
                imageClasses: "icon ratio-1-1",
                width: size_space_num["l-num"],
                height: size_space_num["l-num"],
                alt: "see case study icon as a right arrow",
                loading: "lazy"
            }
        },
        topOfPage: {
            text: "Top of Page",
            href: "#title",
            role: "link",
            ariaLabel: "anchor link to top of the page"
        }
    }
}