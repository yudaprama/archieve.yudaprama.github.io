import React from "react"
import { graphql } from "gatsby"
import DetailApp from "../components/detail-app"

export default ({ data }) => {
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
}

export const query = graphql`
  query(
    $id: String
  ) {
    ios: appStoreJson(bundleId: {eq: $id}) {
      title: trackName
      url: trackViewUrl
      icon: artworkUrl60
      screenShotUrls: screenshotUrls
      description
    }
    technicalHighlight: technicalHighlightJson(id: {eq: $id}) {
      highlights
    }
  }
`