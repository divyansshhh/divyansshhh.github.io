import React from "react"
import Img from "gatsby-image"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"

function WorkExCards(props) {
  return (
    <>
      <Card
        style={{
          height: "300px",
          background: "#8d99ae",
          width: "350px",
        }}
      >
        <CardMedia style={{ padding: "10% 10%", height: "170px" }}>
          <Img fluid={props.image} />
        </CardMedia>
        <hr />
        <CardContent>
          <h5>{props.jobTitle}</h5>
          <p className="workExCard-duration">{props.duration}</p>
          <p className="workExCard-description">{props.description}</p>
        </CardContent>
      </Card>
    </>
  )
}

export default WorkExCards
