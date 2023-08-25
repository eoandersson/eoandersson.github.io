import React, { Component } from 'react'
import {Grid, Header, Placeholder, Segment} from 'semantic-ui-react'

export default class Projects extends Component {
  render() {
    return (
      <Grid.Row columns={3}>
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
