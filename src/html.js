import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}

        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/orange.css" rel="stylesheet" type="text/css"/>
      </head>
      <body className={'home-body'}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>

      <script src="js/jquery-2.1.0.min.js"/>
      <script src="js/popper.js"/>
      <script src="js/bootstrap.min.js"/>
      <script src="js/scrollreveal.min.js"/>
      <script src="js/parallax.min.js"/>
      <script src="js/waypoints.min.js"/>
      <script src="js/jquery.counterup.min.js"/>
      <script src="js/imgfix.min.js"/>
      <script src="js/custom.js"/>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
