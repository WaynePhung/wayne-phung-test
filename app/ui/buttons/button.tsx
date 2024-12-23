import { getButtonProps } from "@/app/utils/ts/button-types";
import { LinkType, LinkComponent } from "../link";

// interface ButtonType {
//     type: string;
//     caseStudy?: LinkType["caseStudy"];
//     imagePosition?: LinkType["imagePosition"]
//     // children: React.ReactNode;
// }

export default function ButtonComponent({type, caseStudy, imagePosition} : LinkType) : React.ReactElement | null {
    const 
        buttonPropsObject = getButtonProps(),
        getPropsHref = buttonPropsObject[type];
    return(
        <button
            id={getPropsHref.id}
            role={getPropsHref.role}
            aria-label={getPropsHref.ariaLabel}
        >
            <LinkComponent 
                type={type} 
                caseStudy={caseStudy}
                imagePosition={imagePosition} 
            />
        </button>
    );
}