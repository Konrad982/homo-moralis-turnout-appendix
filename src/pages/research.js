import * as React from "react"

import SiteLayout from "../components/siteLayout"
import Seo from "../components/seo"

const ResearchPage = () => (
  <SiteLayout>
    <section>
      <h1>Research</h1>
    </section>
    <section className="research-list">
      <article className="research-item">
        <h2>Optimal storage capacity with intermittent wind energy</h2>
        <h3><i>Work in progress</i></h3>
        <p>
          I study the optimal operation and capacity of grid-scale storage in a strongly wind-dominated electricity system with or without fossil backup. Wind generation follows a continuous-time stochastic process calibrated to German wind production data. A social planner with isoelastic preferences chooses charge and discharge rates to maximize intertemporal welfare subject to storage constraints. The model delivers a simple feedback policy and enables efficient numerical solution. Absent any fossil backup, the price elasticity of demand is a primary driver of the marginal value and optimal size of storage.
          <br />
          An optimal wind-plus-batteries system without backup in Germany features more than ten times the 2023 installed wind capacity and storage energy covering hours to days of average German demand, with a levelized cost of more than twice current wholesale electricity prices. By contrast, an optimal wind-plus-hydrogen system features less extreme wind capacities and storage energy covering weeks to months of average demand, despite storage losses. The wind-plus-hydrogen levelized cost is well below gas or coal levels when discounting with 2% annually. A deterministic benchmark confirms the first-order relevance of uncertain wind output: storage needs are driven by the risk of prolonged low-wind spells. Hydrogen's far lower energy capacity cost dominates efficiency losses and power capacity costs in this setting.
          <br />
          Allowing for a fossil backup sharply reduces optimal storage. Marginal abatement costs are initially negative, then spike when near zero emissions: it is very costly to avoid using an already present fossil backup even in the rarest events of prolonged low renewable production.
        </p>
        <p>
          <b>Links:</b> Coming soon.
          <br />
          <b>Presented at (selection):</b>
          <br />
          2025: EAERE conference (Bergen), FAERE conference (Nantes), ENTER Jamboree (Stockholm), UAB (Barcelona, ENTER exchange seminar), University of Leipzig (Lunchtime seminar).
        </p>
      </article>
      <article className="research-item">
        <h2>Does universalization ethics justify participation in large elections?</h2>
        <h3>
          With Ingela Alger and Jean-François Laslier
        </h3>
        <p>
          We analyze the turnout decisions of ethical voters, equipped with (semi-)Kantian preferences: a voter considers the election outcome that would arise if other voters behaved like him. The “others” can be limited to co-partisans (“partisan ethics”) or not (“non-partisan ethics”). In a standard model with two candidates, a known underdog, a continuum of voters, and a continuous power-sharing rule, we introduce two novel elements: core constituent groups, and distinct election stakes for the two partisan groups. Under partisan ethics, when an equilibrium exists, turnout is positive for both sides if the election is not of the winner-take-all kind. Under non-partisan ethics an equilibrium always exists and turnout is positive for one side only. There sometimes exist equilibria where the underdog wins. Moreover, multiple equilibria sometimes arise, possibly with different winners. Voters further face a coordination problem under equilibrium multiplicity in the non-partisan case.
        </p>
        <p>
          <b>Links:</b> <a href="/turnout-paper/">Bonus content</a> ·{" "}
          <a href="https://github.com/konrad-dierks/homo-moralis-turnout">
            GitHub repository
          </a>{" "}
          ·{" "}
          <a href="https://www.tse-fr.eu/publications/does-universalization-ethics-justify-participation-large-elections-0">
            Paper
          </a>
          <br />
          <b>Presented at:</b>
          <br />
          2025: QMUL Economics and Finance PhD workshop (London).
          <br />
          2024: EEA-ESEM Congress (Rotterdam), ESA European Meeting (Helsinki).
        </p>
      </article>
    </section>
  </SiteLayout>
)

export const Head = () => <Seo title="Research" />

export default ResearchPage
