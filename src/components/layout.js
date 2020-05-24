/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './app.style';
import { LayoutWrap, NavWrap, ContentWrap } from './layout.style';

const theme = {
  black: '#222222',
  white: '#F4F4F4',
  primaryColor: '#007bff',
  secondaryColor: '#c51a4a',
  textColor: '#212529',
};

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
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyle />
      <LayoutWrap>
        <NavWrap>
          <header>
            { data.site.siteMetadata.title }
          </header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <h3>Raspberry set-up</h3>
              <ul>
                <li><Link to="/install-raspberry">Install Raspberry</Link></li>
                <li><Link to="/create-user">Create a new user</Link></li>
                <li><Link to="/boot-usb">Boot from USB</Link></li>
              </ul>
            </li>
            <li>
              <h3>Pre-Requisites</h3>
              <ul>
                <li><Link to="/config-iptables">Prepare IPTables</Link></li>
                <li><Link to="/disable-swap">Disable SWAP</Link></li>
                <li><Link to="/enable-cgroup">Enable CGroup</Link></li>
                <li><Link to="/set-hostname">Set Hostname</Link></li>
                <li><Link to="/install-docker">Install Docker</Link></li>
              </ul>
            </li>
            <li>
              <h3>Install Kubernetes</h3>
              <ul>
                <li><Link to="/install-k8s-pkg">Install kubernetes packages</Link></li>
                <li><Link to="/init-k8s-calico">Init Kubernetes with Calico</Link></li>
                <li><Link to="/init-k8s-flannel">Init Kubernetes with Flannel</Link></li>
              </ul>
            </li>
          </ul>
          <footer>
            Albert Sabate © {new Date().getFullYear()}
          </footer>
        </NavWrap>
        <ContentWrap>
          {children}
        </ContentWrap>
      </LayoutWrap>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
