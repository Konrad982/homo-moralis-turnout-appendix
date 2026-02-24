import * as React from "react"
import { withPrefix } from "gatsby"
import { DocumentPdfIcon } from "@sanity/icons"
import "@fontsource/libertinus-serif/400.css"
import "@fontsource/libertinus-serif/700.css"

import SiteLayout from "../components/siteLayout"
import Seo from "../components/seo"

const normalizeHeading = text => text.replace(/\s+/g, " ").trim().toLowerCase()

const injectResearchLink = (cvRoot, researchHref) => {
  const headings = cvRoot.querySelectorAll("h1, h2, h3, h4, h5, h6")
  const researchHeading = Array.from(headings).find(
    heading => normalizeHeading(heading.textContent || "") === "research interests"
  )

  if (!researchHeading) {
    return
  }

  const existingLink = researchHeading.querySelector("a")
  if (existingLink && /research/i.test(existingLink.textContent || "")) {
    existingLink.setAttribute("href", researchHref)
    return
  }

  const rawText = researchHeading.textContent || ""
  const match = rawText.match(/\bresearch\b/i)
  if (!match || match.index === undefined) {
    return
  }

  const startIndex = match.index
  const endIndex = startIndex + match[0].length
  const nodes = []

  if (startIndex > 0) {
    nodes.push(document.createTextNode(rawText.slice(0, startIndex)))
  }

  const researchLink = document.createElement("a")
  researchLink.setAttribute("href", researchHref)
  researchLink.textContent = rawText.slice(startIndex, endIndex)
  nodes.push(researchLink)

  if (endIndex < rawText.length) {
    nodes.push(document.createTextNode(rawText.slice(endIndex)))
  }

  researchHeading.replaceChildren(...nodes)
}

const CvPage = ({ pageContext }) => {
  const pdfHref = withPrefix("/cv_konrad_dierks.pdf")
  const researchHref = withPrefix("/research/")
  const cvHtml = pageContext?.cvHtml || ""
  const cvContentRef = React.useRef(null)

  React.useEffect(() => {
    if (!cvHtml || !cvContentRef.current) {
      return
    }

    injectResearchLink(cvContentRef.current, researchHref)
  }, [cvHtml, researchHref])

  return (
    <SiteLayout>
      <section className="cv-section">
        <header className="cv-header">
          <h1>Curriculum Vitae</h1>
          <a className="cv-download-link" href={pdfHref} download>
            <DocumentPdfIcon className="cv-download-icon" aria-hidden="true" />
            <span>Download PDF</span>
          </a>
        </header>
        {cvHtml ? (
          <section
            ref={cvContentRef}
            className="cv-html-content"
            dangerouslySetInnerHTML={{ __html: cvHtml }}
          />
        ) : (
          <p>
            The HTML CV could not be loaded. You can still use{" "}
            <a href={pdfHref} download>
              Download PDF
            </a>
            .
          </p>
        )}
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="CV" />

export default CvPage
