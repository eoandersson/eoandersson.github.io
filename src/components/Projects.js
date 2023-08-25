import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid.Row>
          <div className='section-header'>Projects</div>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className='card-wrapper'>
              <div className='card-header'>
                <div className='card-header-main'>
                  <h4>Astra Project Management</h4>
                </div>
                <div className='card-header-sub'>
                  <h5>Full-Stack Development</h5>
                </div>
              </div>
              <div className='card-content'>
                <ul>
                  <li>Micro services application built with React, Redux and Java Spring.</li>
                  <li>Fully containerized using Docker and docker-compose.</li>
                </ul>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div className='card-wrapper'>
              <div className='card-header'>
                <div className='card-header-main'>
                  <h4>React Contribution</h4>
                </div>
                <div className='card-header-sub'>
                  <h5>Framework Development</h5>
                </div>
              </div>
              <div className='card-content'>
                <ul>
                  <li>Minor contribution to React, as part of a course on contributing to large codebases.</li>
                </ul>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
         <Grid.Column>
            <div className='card-wrapper'>
              <div className='card-header'>
                <div className='card-header-main'>
                  <h4>Crisis Management Application</h4>
                </div>
                <div className='card-header-sub'>
                  <h5>Android Application</h5>
                </div>
              </div>
              <div className='card-content'>
                <ul>
                  <li>Developed an android application using NFC authentication, Google Maps for location- based tasks and WebRTC for video and voice communication.</li>
                </ul>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }
}
