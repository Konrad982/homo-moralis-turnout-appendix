import * as React from "react"
import { GithubIcon } from "@sanity/icons"

const SiteFooter = () => (
  <footer className="site-footer">
    <p>
      © {new Date().getFullYear()} Konrad Dierks &middot; Hosted on GitHub Pages
      &middot; Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
    </p>
    <p>
      Source code:{" "}
      <span className="inline-link-with-icon">
        <GithubIcon className="link-icon" aria-hidden="true" />
        <a href="https://github.com/konradecon/homo-moralis-turnout-appendix">
          https://github.com/KonradEcon/homo-moralis-turnout-appendix
        </a>
      </span>
    </p>
    <p>
      The webpage icon "
      <a href="https://commons.wikimedia.org/w/index.php?curid=157180000">
        Arcticons-black emoji ballot box with ballot
      </a>
      " by Arcticons Team is licensed under{" "}
      <a
        rel="noopener noreferrer"
        href="https://creativecommons.org/licenses/by-sa/4.0/?ref=openverse"
      >
        CC BY-SA 4.0{" "}
      </a>
      . Modified for greater line width. On dark browser theme: further modified for color inversion.
    </p>
    <p>
      Third party packages: <a href="/notice">Notice</a>
    </p>
    <p>
      Contact: <a href="mailto:konrad.dierks@ecomail.fr">konrad.dierks@ecomail.fr</a>
    </p>
  </footer>
)

export default SiteFooter
