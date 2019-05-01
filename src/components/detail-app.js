import React from "react"
import PropTypes from "prop-types"
import Layout from "./layout"
import SEO from "./seo"
import CoverDetailApp from "./cover-detail-app"

const DetailApp = ({title, icon, description, androidUrl, iosUrl, screenShotUrls, highlights}) => {

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
                    androidUrl={androidUrl}
                    iosUrl={iosUrl} />

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
                        {screenShotUrls.map((screenShotUrl) => (
                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <a className="gallery-item" href={screenShotUrl} title={title}>
                              <img src={screenShotUrl} className="img-fluid" alt=""/>
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
                            {highlights.map((highlight) => <li>{highlight}</li>)}
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
  )
}

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
          {iosUrl ? <a target={'_blank'} href={iosUrl}><img src="../images/download-apple-store.svg" alt=""/></a> : null}
          {androidUrl ? <a target={'_blank'} href={androidUrl}><img src="../images/download-google-play.svg" alt=""/></a> : null}
        </div>
      </div>
    </div>
  </div>
)

DetailApp.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  androidUrl: PropTypes.string,
  iosUrl: PropTypes.string,
  screenShotUrls: PropTypes.string.isRequired,
  highlights: PropTypes.array.isRequired,
}

export default DetailApp
