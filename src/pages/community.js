import React from "react"
import LayoutWithoutParticles from '../components/layout_without_particles'
import { graphql } from "gatsby"
import '../styles/_community.scss'

const community = ({ data }) =>
{
return(
<LayoutWithoutParticles>
    <main role="main" class="main community">
    <div class="container main-content">
        <h1 class="page-title"></h1>
        <div class="row community-row community-section">
            <div class="col-md-4">
                    <h3 class="title">Meetings</h3>
                    <p class="content">
                        Community meetings for Open Data Hub are conducted regularly.  Get the meeting information and find out more on the
                        <a target="_blank" rel="noreferrer" href="https://gitlab.com/opendatahub/opendatahub-community">Open Data Hub Community Repo</a>.
                        Meetings are scheduled on
                        <a target="_blank" rel="noreferrer" href="https://calendar.google.com/calendar?cid=cmVkaGF0LmNvbV92bW1pMW5tdHQyZGJjdXVqcmJ1aGo5N2pya0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"> Google Calender</a>
                    </p>

            </div>
            <div id="calendar-container" class="col-md-8 img-container"></div>
        </div>
        <div class="row community-row community-section">
            <div class="col-md-4">
                    <h3 class="title">Source Code</h3>
                    <p class="content">
                        Browse the source code for various projects that form the Open Data Hub.
                    </p>
                    <a target="_blank" rel="noreferrer" href={data.site.siteMetadata.repo}>Visit GitLab Now
                    </a>
            </div>
            <div class="col-md-8 img-container">
                <img src="assets/img/community_gitlab.png" alt="source code" />
            </div>
        </div>
        <div class="row community-row community-section">
            <div class="col-md-4">
                <h3 class="title">Mailing List</h3>
                <p class="content">
                    Stay up to date with the latest announcements and discussion about the Open Data Hub.
                </p>
                <a target="_blank" rel="noreferrer" href={data.site.siteMetadata.email_list}> Subscribe to the Mailing List</a>
            </div>
            <div class="col-md-8 img-container">
                <img src="assets/img/community_mailing_list.png" alt="mailing list" />
            </div>
        </div>
    </div>
</main>
</LayoutWithoutParticles>
)    
}

export const query = graphql`
{
    site {
      siteMetadata {
        email_list
        repo
      }
    }
  }
`

export default community