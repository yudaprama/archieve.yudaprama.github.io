import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceItem from "../components/service-item"
import PromiseItem from "../components/promise-item"
import FeaturedAppIcon from "../components/featured-app-icon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <section className="welcome-area">
      <div className="welcome-bg"/>
      <div className="welcome-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-sm-12">
              <h1>Check out our mobile apps we're working on.</h1>
              <p>We design and develop mobile apps that delight your users and grow your
                business. Enterprise-grade development combined with outstanding design.</p>
              <a className="btn-white-line" href="#">SEMUA PORTOFOLIO</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="welcome-apps">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p style={{color:'#ffffff', fontSize:20, textAlign:'center', marginBottom:20}}>Beberapa Project Terakhir</p>
            <div className="apps">
              <FeaturedAppIcon src={'https://lh3.googleusercontent.com/fG7qpSvv23ll3ulgoblu3L-6n3PQJW9BTpH2nIvD5sHkuUdxBvJFFpNgqAlElRJPZV8'} />
              <FeaturedAppIcon src={'https://lh3.googleusercontent.com/um3olEPdvd8Jz1_yJb3wZToCqzmCzmdSk9sJxwUY6GDEmrGZiA6-ylSLe-puWI4oog'} />
              <FeaturedAppIcon src={'https://lh3.googleusercontent.com/Xrm6RHpoo4LcRzd45GdBeL5Mk960Sd2BaV7v_NCGNSZuEIibfUC_inTgkra4gKmk3A'} />
              <FeaturedAppIcon src={'https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/33/58/8f/33588f4e-aefe-ddb5-582d-d3bc8f5ce949/source/60x60bb.png'} />
              <FeaturedAppIcon src={'https://lh3.googleusercontent.com/RXxVMSL68-PmqMVQ6zkmyggx3FSPvWczbKkeACT_PHNLb34e5nn48OdpfXlMDRrNVqW1'} />
              <FeaturedAppIcon src={'https://is5-ssl.mzstatic.com/image/thumb/Purple111/v4/18/e7/ef/18e7ef7e-f118-e66b-d8cf-c923ccb5c771/source/60x60bb.jpg'} />
              <FeaturedAppIcon src={'https://is4-ssl.mzstatic.com/image/thumb/Purple117/v4/61/75/66/61756631-350c-47b2-55fd-677eca3ea5e0/source/60x60bb.jpg'} />
              <FeaturedAppIcon src={'https://lh3.googleusercontent.com/ii_u8o0l2VvSeVg8vwNE-0jlNUYzC8bpV7LMiiypamdYd9cMCKZtfhXIBOw19_nCYNI'} />
              <FeaturedAppIcon src={'https://lh3.googleusercontent.com/FzGdJEWMdP5eMBcFrL-HyOpI-iYkvp36NXPH4nljZGB0QoZB7T454tnFihbWE8tQPw'} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Service />
    <Promise />
  </Layout>
)

function Service() {
  return (
    <section className="section services-section pbottom-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">Start-to-end app development agency</h2>
            </div>
            <div className="left-text">
              <p className="dark">Pellentesque posuere vestibulum lorem, ut efficitur erat tristique
                sed. Ut vitae tincidunt ante. </p>
              <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu
                elementum, quis congue risus volutpat. Praesent tortor nulla, ullamcorper.</p>
            </div>
            <a href="#" className="btn-primary-line">SERVICES</a>
          </div>
          <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <ServiceItem
                  title={'Mobility Services Strategy'}
                  icon={'fa-clone'}
                  description={'Morbi pharetra sapien ut mattis viverra. Curabitur sit amet mattis.'} />
                <ServiceItem
                  title={'Native App Development'}
                  icon={'fa-connectdevelop'}
                  description={'Morbi pharetra sapien ut mattis viverra. Curabitur sit amet mattis.'} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <ServiceItem
                  title={'Design & User Experience'}
                  icon={'fa-object-ungroup'}
                  description={'Morbi pharetra sapien ut mattis viverra. Curabitur sit amet mattis.'} />
                <ServiceItem
                  title={'Maintenance & Monitoring'}
                  icon={'fa-line-chart'}
                  description={'Morbi pharetra sapien ut mattis viverra. Curabitur sit amet mattis.'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="section background">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-md-12 col-sm-12 col-xs-12 align-self-center mobile-bottom-fix">
            <img src="../images/mockup/home-mockup.png" className="img-fluid d-block mx-auto" alt=""/>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 align-self-center">
            <ul className="features">
              <PromiseItem
                title={'Design and UX that ensures your app will be loved and used'}
                description={'Quisque nec consectetur arcu. Duis tellus ante, sodales sed molestie at, sagittis id neque. Quisque condimentum libero arcu. Mauris tellus sem, ultrices varius nisl at'}
                icon={'fa-flash'} />
              <PromiseItem
                title={'Enterprise-grade development secures reliability and quality'}
                description={'Quisque nec consectetur arcu. Duis tellus ante, sodales sed molestie at, sagittis id neque. Quisque condimentum libero arcu. Mauris tellus sem, ultrices varius nisl at'}
                icon={'fa-code-fork'} />
              <PromiseItem
                title={'A proven and tested process guarantees your success'}
                description={'Quisque nec consectetur arcu. Duis tellus ante, sodales sed molestie at, sagittis id neque. Quisque condimentum libero arcu. Mauris tellus sem, ultrices varius nisl at'}
                icon={'fa-link'} />
              <PromiseItem
                title={'Start-to-end app development agency'}
                description={'Quisque nec consectetur arcu. Duis tellus ante, sodales sed molestie at, sagittis id neque. Quisque condimentum libero arcu. Mauris tellus sem, ultrices varius nisl at'}
                icon={'fa-code'} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexPage
