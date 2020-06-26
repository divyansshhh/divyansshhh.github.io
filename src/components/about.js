import React from "react"
import Grid from "@material-ui/core/Grid"
import { StaticQuery, graphql } from "gatsby"
import WorkExCard from "./workExCards"

function About(props) {
  console.log(props)

  return (
    <section id="about">
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="center"
        spacing={3}
        style={{ width: "100%" }}
      >
        <Grid item container direction="column" lg={6} md={6} sm={12}>
          <h3 className="color-primary text-center">About me?</h3>
          <div className="about-content">
            <p className="color-secondary text-center">
              Well, I'm Divyansh, a 3<sup>rd</sup>-year CS undergraduate student
              at IIT, Indore. I am passionate about Web Development and Hardware
              Design. I also enjoy Competitive Programming and have been
              selected for ICPC Regionals in 2018 and 2019. <br />
              Also, I have interned at the following places -
            </p>
          </div>
          <Grid container justify="center" alignItems="center">
            <StaticQuery
              query={graphql`
                query {
                  allFile{
                    edges {
                      node {
                        id
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={data => {
                return (
                  <>
                    <Grid item className="workExCard">
                      <WorkExCard
                        image={data.allFile.edges[1].node.childImageSharp.fluid}
                        jobTitle="Software Engineering Intern"
                        duration="April, 2020 - June, 2020"
                        description={
                          <>
                            <span>Worked on Gatsby, GraphQL and Pandas</span>
                            <br />
                          </>
                        }
                      />
                    </Grid>

                    <Grid item className="workExCard">
                      <WorkExCard
                        image={data.allFile.edges[2].node.childImageSharp.fluid}
                        jobTitle="Research Intern"
                        duration="June, 2020 - Present"
                        description={
                          <>
                            <span>
                              Working on Reinforcement Learning and Hardware
                              Design
                            </span>
                            <br />
                          </>
                        }
                      />
                    </Grid>
                  </>
                )
              }}
            />
          </Grid>
        </Grid>

       
      </Grid>
    </section>
  )
}

export default About
