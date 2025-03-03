import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NoticePage = () => (
  <Layout>
    <div>
      The following node.js packages are used in this project:
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style={{ textAlign: "left" }}>Installed version</th>
            <th style={{ textAlign: "left" }}>License type</th>
            <th style={{ textAlign: "left" }}>Link</th>
            <th style={{ textAlign: "left" }}>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>flo-poly</td>
            <td>7.0.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/FlorisSteenkamp/FloPoly.git">Link</a>
            </td>
            <td>Floris Steenkamp</td>
          </tr>
          <tr>
            <td>gatsby</td>
            <td>5.14.1</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/gatsbyjs/gatsby.git">Link</a>
            </td>
            <td>Kyle Mathews</td>
          </tr>
          <tr>
            <td>gatsby-plugin-image</td>
            <td>3.14.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/gatsbyjs/gatsby.git">Link</a>
            </td>
            <td>Matt Kane</td>
          </tr>
          <tr>
            <td>gatsby-plugin-manifest</td>
            <td>5.14.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/gatsbyjs/gatsby.git">Link</a>
            </td>
            <td>Kyle Mathews</td>
          </tr>
          <tr>
            <td>gatsby-plugin-sharp</td>
            <td>5.14.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/gatsbyjs/gatsby.git">Link</a>
            </td>
            <td>Kyle Mathews</td>
          </tr>
          <tr>
            <td>gatsby-source-filesystem</td>
            <td>5.14.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/gatsbyjs/gatsby.git">Link</a>
            </td>
            <td>Kyle Mathews</td>
          </tr>
          <tr>
            <td>gatsby-transformer-sharp</td>
            <td>5.14.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/gatsbyjs/gatsby.git">Link</a>
            </td>
            <td>Kyle Mathews</td>
          </tr>
          <tr>
            <td>plotly.js</td>
            <td>3.0.1</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/plotly/plotly.js.git">Link</a>
            </td>
            <td>Plotly, Inc.</td>
          </tr>
          <tr>
            <td>react</td>
            <td>18.3.1</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/facebook/react.git">Link</a>
            </td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>react-dom</td>
            <td>18.3.1</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/facebook/react.git">Link</a>
            </td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>react-plotly.js</td>
            <td>2.6.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/plotly/react-plotly.js.git">Link</a>
            </td>
            <td>Plotly, Inc.</td>
          </tr>
          <tr>
            <td>react-latex-next</td>
            <td>3.0.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/harunurhan/react-latex-next.git">
                Link
              </a>
            </td>
            <td>harunurhan</td>
          </tr>
          <tr>
            <td>react-tabs</td>
            <td>6.1.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/reactjs/react-tabs.git">Link</a>
            </td>
            <td>Matt Zabriskie</td>
          </tr>
          <tr>
            <td>prettier</td>
            <td>2.8.8</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/prettier/prettier.git">Link</a>
            </td>
            <td>James Long</td>
          </tr>
          <tr>
            <td>@loadable/component</td>
            <td>5.16.4</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/gregberge/loadable-components.git">Link</a>
            </td>
            <td>Greg Bergé</td>
          </tr>
          <tr>
            <td>gh-pages</td>
            <td>6.3.0</td>
            <td>MIT</td>
            <td>
              <a href="https://github.com/tschaub/gh-pages.git">Link</a>
            </td>
            <td>Tim Schaub</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Third party package notice" />

export default NoticePage
