import * as React from "react"
import { withPrefix } from "gatsby"
import { DocumentPdfIcon } from "@sanity/icons"
import "@fontsource/libertinus-serif/400.css"
import "@fontsource/libertinus-serif/700.css"

import SiteLayout from "../components/siteLayout"
import Seo from "../components/seo"

const CvPage = ({ pageContext }) => {
  const pdfHref = withPrefix("/cv_konrad_dierks.pdf")
  const cvHtml = pageContext?.cvHtml || ""

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
