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
                <li>
                  Raspberry set-up
                  <ul>
                    <li><Link to="/install-raspberry">Install Raspberry</Link></li>
                    <li><Link to="/create-user">Create a new user</Link></li>
                    <li><Link to="/boot-usb">Boot from USB</Link></li>
                  </ul>
                </li>
                <li>
                  Pre-Requisites
                  <ul>
                    <li><Link to="/config-iptables">Prepare IPTables</Link></li>
                    <li><Link to="/disable-swap">Disable SWAP</Link></li>
                    <li><Link to="/enable-cgroup">Enable CGroup</Link></li>
                    <li><Link to="/set-hostname">Set Hostname</Link></li>
                    <li><Link to="/install-docker">Install Docker</Link></li>
                  </ul>
                </li>
                <li>
                  Install Kubernetes
                  <ul>
                    <li><Link to="/install-k8s-pkg">Install kubernetes packages</Link></li>
                    <li><Link to="/init-k8s-calico">Init Kubernetes with Calico</Link></li>
                    <li><Link to="/init-k8s-flannel">Init Kubernetes with Flannel</Link></li>
                  </ul>
                </li>
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
