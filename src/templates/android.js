import React from "react"
import { graphql } from "gatsby"
import DetailApp from "../components/detail-app"

export default ({ data }) => {
  const {android, technicalHighlight} = data;
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
      description={android.description}
      icon={android.icon}
      screenShotUrls={android.screenshots}
      title={android.title}
      iosUrl={android.url} />
  )
}

export const query = graphql`
  query(
    $id: String
  ) {
    android: playStoreJson(appId: {eq: $id}) {
      title
      icon
      url
      description: descriptionHTML
      screenshots
    }
    technicalHighlight: technicalHighlightJson(id: {eq: $id}) {
      highlights
    }
  }
`