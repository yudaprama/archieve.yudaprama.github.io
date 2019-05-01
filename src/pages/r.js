import React from "react"
import { graphql, StaticQuery } from "gatsby"
import DetailApp from "../components/detail-app"

const query = graphql`
query {
  ios: appStoreJson(
    bundleId: {
      eq: "com.yudapramadjunaedi.r"
    }
  ) {
    title: trackName
    url: trackViewUrl
    icon: artworkUrl60
    screenShotUrls: screenshotUrls
    description
  }
  technicalHighlight: technicalHighlightJson(
    id: {
      eq: "com.yudapramadjunaedi.r"
    }
  ) {
    highlights
  }
}
`

const Page = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const {ios, technicalHighlight} = data;
      return (
        <DetailApp
          highlights={technicalHighlight.highlights}
          description={ios.description.replace(/\n/g,'<br/>')}
          icon={ios.icon}
          screenShotUrls={ios.screenShotUrls}
          title={ios.title}
          iosUrl={ios.url} />
      )
    }}
  />
)

export default Page
