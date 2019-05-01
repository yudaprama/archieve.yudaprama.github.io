import React from "react"
import { graphql, StaticQuery } from "gatsby"
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
    screenShotUrls: screenshotUrls
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
      return (
        <DetailApp
          highlights={technicalHighlight.highlights}
          description={android.description}
          icon={android.icon}
          screenShotUrls={ios.screenShotUrls}
          title={android.title}
          androidUrl={android.url}
          iosUrl={ios.url} />
      )
    }}
  />
)

export default AuthorizedPage
