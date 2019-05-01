import React from "react"
import { graphql } from "gatsby"
import { StaticQuery } from "../../.cache/gatsby-browser-entry"
import DetailApp from "../components/detail-app"

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
      return <DetailApp android={android} ios={ios} highlights={technicalHighlight.highlights} />
    }}
  />
)

export default AuthorizedPage
