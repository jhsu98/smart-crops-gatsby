import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Call from '../components/Call';

const Contact = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-default-single">
      <div className="container pb-6 pt-6 pt-md-10 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8">
            <h1 className="title">{title}</h1>
            <Call showButton={false} />
            <div className="content mt-4" dangerouslySetInnerHTML={{ __html: html }} />
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <label>
                <span style={{width: '100px', display: 'inline-block'}}>Name: </span>
                <input type="text" name="name" />
              </label>
              <br />
              <label>
                <span style={{width: '100px', display: 'inline-block'}}>Company: </span>
                <input type="text" name="company" />
              </label>
              <br />
              <label>
                <span style={{width: '100px', display: 'inline-block'}}>Email: </span>
                <input type="text" name="email" />
              </label>
              <br />
              <label>
                <span style={{width: '100px', display: 'inline-block'}}>Demo Crop: </span>
                <select required>
                  <option value="">-----</option>
                  <option value="Broccoli">Broccoli</option>
                  <option value="Cauliflower">Cauliflower</option>
                  <option value="Celery">Celery</option>
                  <option value="Onion">Onion</option>
                  <option value="Watermelon">Watermelon</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <br /><br />
              <button type="submit">Request Trial and Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Contact;
