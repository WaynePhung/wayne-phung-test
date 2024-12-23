import { noto_sans } from "@/app/utils/text-styling/fonts";
import { LinkComponent } from "../link";
import ButtonComponent from "../buttons/button";

interface Header {
    page?: "home";
}

export default function defaultHeader({page} : Header) {
    return(
        <header className={noto_sans.className} role="banner" aria-label="navigation header">
            {/* navigation tab: Container for all of the buttons, but not the progress bar. */}
            <nav className="navigationBar" role="navigation" aria-label="group of navigation links">
                {/* "Wayne Phung" button to redirect to the home page. */}
                <LinkComponent type="home" />
                {/* Buttons to direct to general sections of the website, including design work, media work, description about me, and contact section.
                The "Contact Me" button appears contained only in the mobile view. */}
                <nav className="anchorLinks" role="anchorLinks" aria-label="group of main mavigation links">
                    <LinkComponent page={page && "home"} type="design" />
                    <LinkComponent page={page && "home"} type="media" />
                    <LinkComponent page={page && "home"} type="about" />
                    <LinkComponent type="timeline" />
                </nav>
                {/* The "Contact Me" button here appears on the lower/upper-right side of the screen for tablet and desktop screen sizes. */}
                <ButtonComponent type="contact" />
                <div className="contactButtons">
                    <ButtonComponent type="linkedIn" />
                    <ButtonComponent type="email" />
                </div>
            </nav>
            {/* Horizontal progress bar that only appears on tablet/desktop screen sizes. */}
            <div className="progressContainer" aria-label="progress bar container">
                {/* Indicator that dynamically changes in length based on how far down the person has scrolled down the web page. */}
                <div className="progressBar"></div>
            </div>
        </header>
    );
}