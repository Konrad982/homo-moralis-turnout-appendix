// src/pages/plots.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import ConsistentStrategies from "../components/ConsistentStrategies"
import BenefitFunctions from "../components/BenefitFunctions"

const SecondPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0)

  React.useEffect(() => {
    const hash = window.location.hash.substring(1)
    const tabIndexFromHash = ["tab1", "tab2"].indexOf(hash)
    if (tabIndexFromHash !== -1) {
      setTabIndex(tabIndexFromHash)
    }
  }, [])

  const handleTabSelect = index => {
    setTabIndex(index)
    window.location.hash = ["tab1", "tab2"][index]
  }

  return (
    <Layout>
      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Consistent Strategies</Tab>
          <Tab>Benefit functions</Tab>
        </TabList>

        <TabPanel id="tab1">
          <ConsistentStrategies />
        </TabPanel>
        <TabPanel id="tab2">
          <BenefitFunctions />
        </TabPanel>
      </Tabs>
    </Layout>
  )
}

export const Head = () => <Seo title="Plot page" />

export default SecondPage
