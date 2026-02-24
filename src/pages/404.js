import * as React from "react"

import SiteLayout from "../components/siteLayout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <SiteLayout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist</p>
  </SiteLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
