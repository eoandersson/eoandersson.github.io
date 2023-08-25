import React, { Component } from 'react'
import {Grid, Placeholder, Segment, Image, Header} from 'semantic-ui-react'

export default class About extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line/>
                <Placeholder.Line/>
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line/>
                <Placeholder.Line/>
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
}
