import * as React from "react"
import "./layout.css"
import SiteNav from "./siteNav"
import SiteFooter from "./siteFooter"

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteNav />
      <div className="site-shell">
        <main>{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}

export default SiteLayout
