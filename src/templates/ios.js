import React from "react"
import { graphql } from "gatsby"
import DetailApp from "../components/detail-app"

export default ({ data }) => {
  const {ios, technicalHighlight} = data;
  let highlights;
  if (technicalHighlight)
    highlights = technicalHighlight.highlights;
  else
    highlights = [
      "Monetization using admob",
      "Monetization using In App Purchase",
      "Google search",
      "Offline browsing",
      "Organize browsing bookmark",
      "Organize search result",
      "Offline reading",
      "Organize reading bookmark",
      "4 themes for reading: light, night, sepia, grey",
      "Change font",
      "Change text size",
      "Open in-app browser to see full web page",
      "In-App Support"
    ];
  return (
    <DetailApp
      highlights={highlights}
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