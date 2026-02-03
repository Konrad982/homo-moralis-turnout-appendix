import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NoticePage = () => {
  const tableStyle = {
    borderCollapse: "separate",
    borderSpacing: "0 8px",
    width: "100%",
  }
  const cellStyle = {
    paddingRight: "16px",
    verticalAlign: "top",
  }
  const headerStyle = { ...cellStyle, textAlign: "left" }

  return (
    <Layout>
      <div>
        The following node.js packages are used in this project:
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>Name</th>
              <th style={headerStyle}>License type</th>
              <th style={headerStyle}>Link</th>
              <th style={headerStyle}>Author</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>flo-poly</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/FlorisSteenkamp/FloPoly.git">
                  Link
                </a>
              </td>
              <td style={cellStyle}>Floris Steenkamp</td>
            </tr>
            <tr>
              <td style={cellStyle}>gatsby</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/gatsbyjs/gatsby.git">Link</a>
              </td>
              <td style={cellStyle}>Kyle Mathews</td>
            </tr>
            <tr>
              <td style={cellStyle}>plotly.js</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/plotly/plotly.js.git">Link</a>
              </td>
              <td style={cellStyle}>Plotly, Inc.</td>
            </tr>
            <tr>
              <td style={cellStyle}>react</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/facebook/react.git">Link</a>
              </td>
              <td style={cellStyle}>n/a</td>
            </tr>
            <tr>
              <td style={cellStyle}>react-dom</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/facebook/react.git">Link</a>
              </td>
              <td style={cellStyle}>n/a</td>
            </tr>
            <tr>
              <td style={cellStyle}>react-plotly.js</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/plotly/react-plotly.js.git">Link</a>
              </td>
              <td style={cellStyle}>Plotly, Inc.</td>
            </tr>
            <tr>
              <td style={cellStyle}>react-latex-next</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/harunurhan/react-latex-next.git">
                  Link
                </a>
              </td>
              <td style={cellStyle}>harunurhan</td>
            </tr>
            <tr>
              <td style={cellStyle}>react-tabs</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/reactjs/react-tabs.git">Link</a>
              </td>
              <td style={cellStyle}>Matt Zabriskie</td>
            </tr>
            <tr>
              <td style={cellStyle}>@fontsource-variable/source-sans-3</td>
              <td style={cellStyle}>OFL-1.1</td>
              <td style={cellStyle}>
                <a href="https://github.com/fontsource/fontsource.git">Link</a>
              </td>
              <td style={cellStyle}>Fontsource</td>
            </tr>
            <tr>
              <td style={cellStyle}>prettier</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/prettier/prettier.git">Link</a>
              </td>
              <td style={cellStyle}>James Long</td>
            </tr>
            <tr>
              <td style={cellStyle}>@loadable/component</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/gregberge/loadable-components.git">
                  Link
                </a>
              </td>
              <td style={cellStyle}>Greg Bergé</td>
            </tr>
            <tr>
              <td style={cellStyle}>gh-pages</td>
              <td style={cellStyle}>MIT</td>
              <td style={cellStyle}>
                <a href="https://github.com/tschaub/gh-pages.git">Link</a>
              </td>
              <td style={cellStyle}>Tim Schaub</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Third party package notice" />

export default NoticePage
