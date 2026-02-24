import * as React from "react"

import SiteLayout from "../components/siteLayout"
import Seo from "../components/seo"
import AppendixTabs from "../components/AppendixTabs"

const AppendixPage = () => (
  <SiteLayout>
    <header className="appendix-header">
      <h1>Does universalization ethics justify participation in large elections?</h1>
      <h2 className="appendix-subtitle">Bonus content</h2>
    </header>
    <AppendixTabs defaultTab={0} />
  </SiteLayout>
)

export const Head = () => (
  <Seo
    title="Turnout Paper"
    faviconLight="/favicon-turnout-light.svg"
    faviconDark="/favicon-turnout-dark.svg"
  />
)

export default AppendixPage
