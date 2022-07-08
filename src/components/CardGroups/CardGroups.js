import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {CardGroup, Card, } from "react-bootstrap"
import "./CardGroups.css"
export default class CardGroups extends Component {
  render() {
    return (
      <Container className='mg-10'>
        <CardGroup className='mg-10'>
  <Card>
    {/* /public/img/HelloIMG1639785997940.png */}
    <Card.Img variant="top" src="img/HelloIMG1639785997940.png" />
    <Card.Body>
      <Card.Title>Tehran</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Tower Milad</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="img/HelloIMG1639786013472.png" />
    <Card.Body>
      <Card.Title>Shiraz</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Takht-Jamshid</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="img/HelloIMG1639786006171.png" />
    <Card.Body>
      <Card.Title>Esfehan</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Meydan-Emam</small>
    </Card.Footer>
  </Card>
</CardGroup>
      </Container>
    )
  }
}
