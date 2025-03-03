/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <header>
          <h1 style={{ textAlign: "center" }}>
            {data.site.siteMetadata.title}
          </h1>
          <nav>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li style={{ margin: "0 10px" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/plots">Plots</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/notice">Third party package notice</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <p>
            © {new Date().getFullYear()} Konrad Dierks &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
          <p>
            Source code:{" "}
            <a href="https://github.com/Konrad982/homo-moralis-turnout-appendix">
              https://github.com/Konrad982/homo-moralis-turnout-appendix
            </a>
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
            .
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:konrad.dierks@googlemail.com">
              konrad.dierks@googlemail.com
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
