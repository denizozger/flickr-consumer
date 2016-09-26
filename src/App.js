import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import $ from 'jquery'; 
import FlickrImage from './components/FlickrImage';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      items: []
    };
  }

  componentDidMount() {
    this.serverRequest = $.getJSON(
      this.props.source, { format: "json" }
    )
    .done(data => {
      this.setState({
        items: data.items
      });
    })
    .fail(console.error);
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <Grid>
        <Row>
          { 
            this.state.items.map(item => 
              <Col xs={6} md={4} key={item.link}>
                <FlickrImage item={item} key={item.link}/>
              </Col>
            ) 
          } 
        </Row>
      </Grid>
      );
  }

}

export default App;
