import { noto_sans } from "@/app/utils/text-styling/fonts";
import Link from "next/link";
import { LinkComponent } from "../link";
import ButtonComponent from "../buttons/button";
// import Button_LinkedIn from "../buttons/button-linkedIn";
// import Button_Email from "../buttons/button-email";

interface Footer {
    page?: "home";
}

export default function Footer({page} : Footer) {
  return (
    <footer role="footer" aria-label="footer">
        <article className={noto_sans.className} id="endMessage">
            <h3>Thank you for visiting.</h3>
            <p className="subtitle">I'm looking for full-time opportunities in UX design, product design, <span className="noWidow">or similar roles.</span></p>
            <p id="conversation">Find me on LinkedIn or email if you're interested <span className="noWidow">to work with me.</span></p>
            {/* Container for contact buttons. */}
            <article className="contactButtons">
                <ButtonComponent type="linkedIn" />
                <ButtonComponent type="email" />
            </article>
        </article>
        {/* Container for navigation buttons. */}
        <article className={noto_sans.className} id="endNavLinks">
            <h4>Navigation</h4>
            <hr />
            <nav className="grid gridType1-320Width">
                <LinkComponent page={page && "home"} type="design" />
                <LinkComponent page={page && "home"} type="media" />
                <LinkComponent page={page && "home"} type="about" />
                <LinkComponent type="timeline" />
                <LinkComponent type="topOfPage" />
            </nav>
        </article>
    </footer>
  );
}