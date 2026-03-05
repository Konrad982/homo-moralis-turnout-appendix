import * as React from "react"

import SiteLayout from "../components/siteLayout"
import Seo from "../components/seo"

const IndexPage = () => (
  <SiteLayout>
    <section className="home-intro">
      <div className="home-text">
        <h1>Konrad Dierks</h1>
        <p>
          Hi, I am a fifth-year PhD student in the Environmental Group at Toulouse School of Economics.
        </p>
        <h2>Research interests</h2>
        <p>
          <b>Main: </b>Environmental Economics, Energy Economics
          <br></br>
          <b>Secondary: </b>Political Economics, Optimization Theory, Numerical Methods
        </p>
        <p>
          Currently, my main project is on storage in a fully (or mostly) renewable electricity grid, using stochastic control in continuous time.
        <br></br>
           My advisor is Christian Gollier.
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
