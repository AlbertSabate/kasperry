import styled from 'styled-components';

export const LayoutWrap = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
`;

export const NavWrap = styled.nav`
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
  overflow-x: hidden;
  background-color: ${props => props.theme.white};
  box-shadow: inset 0 .2rem .75rem rgba(0, 0, 0, .15);

  h3 {
    padding: 10px 0 5px;
  }

  > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    ul {
      list-style: square;
      padding-inline-start: 30px;
    }
  }

  header {
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: 20px;
    padding: 15px;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #f8f9fa;
    background-color: rgba(0, 0, 0, .75);
    box-shadow: 0 .2rem 1rem rgba(0, 0, 0, .15);

    .gatsby-image-wrapper {
      vertical-align: bottom;
      margin-right: 10px;
    }
  }
  
  footer {
    font-size: .7rem;
    margin-top: 20px;
  }
`;

export const ContentWrap = styled.main`
  padding-left: 15px;
  padding-right: 15px;
  overflow: auto;
  overflow-x: hidden;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export default { LayoutWrap, NavWrap, ContentWrap };
