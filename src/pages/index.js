import * as React from "react"

import SiteLayout from "../components/siteLayout"
import Seo from "../components/seo"

const IndexPage = () => (
  <SiteLayout>
    <section className="home-intro">
      <div className="home-text">
        <h1>Konrad Dierks</h1>
        <p>
          Hi, I am a fifth-year PhD student in Environmental Economics at Toulouse School of Economics. My advisor is Christian Gollier.
        </p>
        <h2>Research interests</h2>
        <p>
          I mainly work on storage in a fully (or mostly) renewable electricity grid, using stochastic control in continuous time.
        </p>
        <p>
          I am also interested in optimization theory, numerical methods and political economics. 
        </p>
      </div>
      <div className="home-photo" role="img" aria-label="Portrait placeholder">
        Photo coming soon
      </div>
    </section>
  </SiteLayout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
