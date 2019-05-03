import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverDetailApp from "../components/cover-detail-app"
import Stars from "../components/stars"
import RoundedIcon from "../components/rounded-icon"

export default ({ data }) => {
  const {ios, android} = data;
  return (
    <Layout headerWhite={true}>
      <SEO title={'Semua Portofolio'} />
      <section className="page">
        <CoverDetailApp appTitle={'Semua Portofolio'} />

        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row">
              {android.nodes.map((item) => {
                const {appId, size, title, icon, summary, price, category} = item;
                return <AppItem
                  id={appId}
                  icon={icon}
                  category={category}
                  title={title}
                  size={size}
                  price={price}
                  summary={summary}/>
              })}
              {ios.nodes.map((item) => {
                const {bundleId, size, title, icon, summary, price, category} = item;
                return <AppItem
                  id={bundleId}
                  icon={icon}
                  category={category.join(',')}
                  title={title}
                  size={bytesToSize(size)}
                  price={price === 0 ? 'Free' : `$${price}`}
                  summary={`${summary.substring(0,150).trim()}...`}/>
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function AppItem({id, size, title, icon, summary, price, category}) {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <Link to={`/works/${id.replace(/\./g, "-")}`} className="page-app">
        <div className="app-top">
          <RoundedIcon src={icon} />
          <div className="app-title">
            <h5 className="title">{title}</h5>
            <Stars />
          </div>
        </div>
        <div className="app-content">
          <div className="text">
            {summary}
          </div>
          <ul className="app-table">
            <li>
              <div className="table-title">Size</div>
              <div className="table-content">{size}</div>
            </li>
            <li>
              <div className="table-title">Kategori</div>
              <div className="table-content">{category}</div>
            </li>
            <li>
              <div className="table-title">Price</div>
              <div className="table-content">{price}</div>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  )
}

function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

export const query = graphql`
query {
  android: allPlayStoreJson {
    nodes {
      appId
      title
      icon
      summary
      category: genre
      price: priceText
      size
    }
  }
  ios: allAppStoreJson {
    nodes {
      bundleId
      title: trackName
      icon: artworkUrl60
      summary: description
      category: genres
      price
      size: fileSizeBytes
    }
  }
}
`