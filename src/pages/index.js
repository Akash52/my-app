import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn to Design and code React Apps</h1>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.{" "}
          </p>
          <Link to="/page-2/">Watch the video</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
