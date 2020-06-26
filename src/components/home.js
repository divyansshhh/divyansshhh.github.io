import React from "react"
import Typist from "react-typist"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"
import Jump from "react-reveal/Jump"
import scrollTo from "gatsby-plugin-smoothscroll"

function Home() {
  return (
    <section>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
        style={{ width: "100%" }}
      >
        <Grid item>
          <h1 className="home-heading color-primary text-center">
            Divyansh Choudhary
          </h1>
        </Grid>

        <Grid item>
          <Typist cursor={{ show: false }}>
            <p className="home-subtext text-center">
              <span className="color-secondary text-center">console.log('</span>
              <span className="color-highlight1 text-center">Hello World!</span>
              <span className="color-secondary text-center">')</span>
            </p>
          </Typist>
        </Grid>

        <Grid item>
          <ul className="home-links text-center">
            <li>
              <span
                className="cursor-pointer color-highlight2"
                onClick={() => {
                  scrollTo("#about")
                }}
              >
                About
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer color-highlight2"
                onClick={() => {
                  scrollTo("#skills")
                }}
              >
                Skills
              </span>
            </li>
            <li>
              <span
                className="cursor-pointer color-highlight2"
                onClick={() => {
                  scrollTo("#about")
                }}
              >
                Contact
              </span>
            </li>
            <li>
              <a
                className="color-highlight2"
                href="https://drive.google.com/file/d/1VJnh8QfCKr-U4KFfekJ_jvGMZsSPqzyr/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </Grid>

        <Grid item>
          <Jump>
            <IconButton className="home-down-icon">
              <KeyboardArrowDownIcon
                fontSize="large"
                className="color-primary text-center"
                onClick={() => scrollTo("#about")}
              />
            </IconButton>
          </Jump>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
