import { noto_sans } from "@/app/utils/text-styling/fonts";
import Link from "next/link";
import Button_LinkedIn from "../buttons/button-linkedIn";
import Button_Email from "../buttons/button-email";

export default async function Footer() {
  return (
    <footer role="footer" aria-label="footer">
        <article className={noto_sans.className} id="endMessage">
            <h3>Thank you for visiting.</h3>
            <p className="subtitle">I'm looking for full-time opportunities in UX design, product design, <span className="noWidow">or similar roles.</span></p>
            <p id="conversation">Find me on LinkedIn or email if you're interested <span className="noWidow">to work with me.</span></p>
            {/* Container for buttons. */}
            <article className="contactButtons">
                <Button_LinkedIn />
                <Button_Email />
            </article>
        </article>
        <article className={noto_sans.className} id="endNavLinks">
            <h4>Navigation</h4>
            <hr />
            <nav className="grid gridType1-320Width">
                <Link className="gridContent anchorLink" role="link" aria-label="anchor link to design section of the homepage" href="#designWork">
                    <span className={noto_sans.className}>Design Work</span>
                </Link>
                <Link className="gridContent anchorLink" role="link" aria-label="anchor link to media section of the homepage" href="#mediaWork">
                    <span className={noto_sans.className}>Media Work</span>
                </Link>
                {/* <Link className="gridContent anchorLink" role="link" aria-label="anchor link to media section of the homepage" href="">
                    <span className={noto_sans.className}>Other Work</span>
                </Link> */}
                <Link className="gridContent anchorLink" role="link" aria-label="anchor link to about me section of the homepage" href="#aboutMeSection">
                    <span className={noto_sans.className}>About Me</span>
                </Link>
                <Link className="gridContent anchorLink" role="link" aria-label="anchor link to career timeline section of the homepage" rel="external" href="timeline.html">
                    <span className={noto_sans.className}>Timeline</span>
                </Link>
                <Link className="gridContent anchorLink" role="link" aria-label="anchor link to top of the homepage" href="#title">
                    <span className={noto_sans.className}>Top of Page</span>
                </Link>
            </nav>
        </article>
    </footer>
  );
}