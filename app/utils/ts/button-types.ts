export interface ButtonProps {
    id?: string;
    role?: string;
    ariaLabel?: string;
}

export function getButtonProps() : { [key: string]: ButtonProps } {
    return {
        contact: {
            id: "contactButton",
            role: "button",
            ariaLabel: "contact button"
        },
        email: {
            id: "emailButton",
            role: "button",
            ariaLabel: "button with a nested link to contact Wayne Phung via email"
        },
        linkedIn: {
            id: "linkedInButton",
            role: "button",
            ariaLabel: "button with a nested link to contact Wayne Phung via LinkedIn"
        },
        seeCaseStudy: {
            role: "button",
            ariaLabel: "button to view the corresponding case study"
        }
    }
}