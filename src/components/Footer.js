import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
      configJson {
        footer {
          copyright_text
          copyright_link
        }
      }
    }
  `);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-inner">
              <h3 className="footer-title">{data.site.siteMetadata.title}</h3>
              {/* <ul>
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li key={node.name}>
                    <Link to={node.url}>{node.name}</Link>
                  </li>
                ))}
              </ul> */}
              <div className="copyright">
                <span style={{color: "#FFF"}}>{data.configJson.footer.copyright_text}</span>
                {data.configJson.footer.copyright_link && (
                  <a href={data.configJson.footer.copyright_link}>{data.configJson.footer.copyright_link}</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
