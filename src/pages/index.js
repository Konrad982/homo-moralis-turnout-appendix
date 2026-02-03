import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
// import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div>
      Welcome to the bonus content page for our paper{" "}
      <cite>
        Does universalization ethics justify participation in large elections?
      </cite>{" "}
      [1]
      <h2>Code for the graphics</h2>
      <p>
        The code for generating the graphics in the paper can be found here:{" "}
        <a href="https://github.com/KonradEcon/homo-moralis-turnout">
          GitHub repository
        </a>
      </p>
      <h2>Interactive plots</h2>
      <p>
        We provide <Link to="/plots#tab1">an interactive plot</Link> showing
        consistent strategies for a wide range of model parameters in our
        partisan case.
      </p>
      <p>
        Moreover, we provide <Link to="/plots#tab2">an interactive plot</Link> that
        compares our choice of the power-sharing function with the one used by
        Herrera, Morelli and Nunnari (2016) [2].
      </p>
      <h2>Authors</h2>
      <p>
        <a href="https://ingelaalger.weebly.com/">Ingela Alger</a>,{" "}
        <a href="https://www.tse-fr.eu/people/konrad-dierks">Konrad Dierks</a>,{" "}
        <a href="https://sites.google.com/site/jflaslierhomepage/">
          Jean-François Laslier
        </a>
      </p>
      <h2>References</h2>
      <p>
        1. Konrad Dierks, Ingela Alger, and Jean-François Laslier, Does
        universalization ethics justify participation in large elections?, TSE
        Working Paper, n. 21-1193, February 2021, revised April 2025.{" "}
        <a href="https://www.tse-fr.eu/publications/does-universalization-ethics-justify-participation-large-elections-0">
          https://www.tse-fr.eu/publications/does-universalization-ethics-justify-participation-large-elections-0
        </a>
      </p>
      <p>
        2. Herrera, H., Morelli, M. and Nunnari, S. (2016), Turnout Across
        Democracies. American Journal of Political Science, 60: 607-624.{" "}
        <a href="https://doi.org/10.1111/ajps.12215">
          https://doi.org/10.1111/ajps.12215
        </a>
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
