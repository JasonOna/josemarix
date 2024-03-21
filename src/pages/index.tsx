import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import logo from "../images/logo.jpg" 
import artistSmile from "../images/artistSmile.png" 

const pageStyles = {
  alignItems: "baseline",
  display: "flex",
  flexDirection: "column",
  color: "#232129",
  padding: 20,
  paddingTop: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 400,
}
const logoStyles = {
  display: "block",
  marginTop: 0,
  marginBottom: 10,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 100,
  width: "100%",
}
const imageStyles = {
  borderRadius: 10,
  display: "block",
  marginTop: 0,
  marginBottom: 10,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 400,
  width: "100%",
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const paragraphStyles = {
  // TODO
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <img
        alt="josemarix Logo"
        src={logo}
        style={logoStyles}
      />
      <img
        alt="artist smile"
        src={artistSmile}
        style={imageStyles}
      />
      <p style={paragraphStyles}>
        My name is Joe and I’ve been throwing pottery since 2018.  It began as a group birthday event over at 
        <a
          style={linkStyle}
          href={"https://www.clayroomsf.com/"}
        >
          {" Clayroom Studio "}
        </a>
        in Potrero District and then became a passion and hobby.
      </p>
      <p style={paragraphStyles}>
        Much appreciation and love,
      </p>

      <p style={paragraphStyles}>
        Joe
      </p>

      <p style={paragraphStyles}>
        josemarix@gmail.com
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
