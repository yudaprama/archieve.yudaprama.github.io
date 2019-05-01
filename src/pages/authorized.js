import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverDetailApp from "../components/cover-detail-app"
import { StaticQuery } from "../../.cache/gatsby-browser-entry"
import {graphql} from 'gatsby'

const query = graphql`
query {
  android: playStoreJson(
    appId: {
      eq: "com.yudapramadjunaedi.authorized"
    }
  ) {
    id
    title
    icon
    url
    description: descriptionHTML
  }
  ios: appStoreJson(
    bundleId: {
      eq: "com.yudapramadjunaedi.authorized"
    }
  ) {
    url: trackViewUrl
    screenshotUrls
  }
  technicalHighlight: technicalHighlightJson(
    id: {
      eq: "com.yudapramadjunaedi.authorized"
    }
  ) {
    highlights
  }
}
`

const AuthorizedPage = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const {android, ios, technicalHighlight} = data;
      const {title, icon, description} = android;
      return (
        <Layout headerWhite={true}>
          <SEO title={title} />
          <section className="page">
            <CoverDetailApp appTitle={title} />

            <div className="page-bottom pbottom-70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="app-single">
                      <AppHeader
                        title={title}
                        icon={icon}
                        androidUrl={android.url}
                        iosUrl={ios.url} />

                      <div className="item">
                        <div className="content">
                          <h5 className="title">Deskripsi</h5>
                          <div className="text" dangerouslySetInnerHTML={{__html: description}} />
                        </div>
                      </div>

                      <div className="item">
                        <div className="content">
                          <h5 className="title">Screenshots</h5>
                          <div className="row gallery">
                            {ios.screenshotUrls.map((screenshotUrl) => (
                              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <a className="gallery-item" href={screenshotUrl} title={title}>
                                  <img src={screenshotUrl} className="img-fluid" alt=""/>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="content">
                          <h5 className="title">Technical Highlight</h5>
                          <div className="text">
                            <div className="version">
                              <ul>
                                {technicalHighlight.highlights.map((highlight) => (
                                  <li>{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </Layout>
      );
    }}
  />
)

const AppHeader = ({title, icon, androidUrl, iosUrl}) => (
  <div className="header">
    <div className="row">
      <div className="col-lg-1 col-md-2 col-sm-12">
        <div className="icon">
          <img src={icon} className="img-fluid" alt=""/>
        </div>
      </div>
      <div className="col-lg-5 col-md-4 col-sm-12">
        <div className="title">
          <h2>{title}</h2>
          <ul className="stars">
            <li><i className="fa fa-star active"/></li>
            <li><i className="fa fa-star active"/></li>
            <li><i className="fa fa-star active"/></li>
            <li><i className="fa fa-star"/></li>
            <li><i className="fa fa-star"/></li>
            <li>(144)</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="download-buttons">
          <a target={'_blank'} href={androidUrl}><img src="../images/download-apple-store.svg" alt=""/></a>
          <a target={'_blank'} href={iosUrl}><img src="../images/download-google-play.svg" alt=""/></a>
        </div>
      </div>
    </div>
  </div>
)

export default AuthorizedPage
