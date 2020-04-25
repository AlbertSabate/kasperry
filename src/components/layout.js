/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 sidebar">
          <header>
            { data.site.siteMetadata.title }
          </header>
          <div className="row">
            <div className="col">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/404">Go to 404</Link></li>
              </ul>
            </div>
          </div>
          <footer>
            Albert Sabate © {new Date().getFullYear()}
          </footer>
        </nav>
        <div className="col-md-10 content">
          <div className="container">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
