import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'

export default class Experience extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid.Row>
          <div className='section-header'>Professional Experience</div>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className='card-wrapper'>
              <div className='card-header'>
                <div className='card-header-main'>
                  <h4>Software Engineering Intern @ Skira</h4>
                </div>
                <div className='card-header-sub'>
                  <h5>Jun 2019 - Aug 2019</h5>
                </div>
              </div>
              <div className='card-content'>
                <ul>
                  <li>Delivered an automatic bidding feature which aimed to improve bidding frequency by 50%.</li>
                  <li>Communicated with customers in order to adapt project requirements and deliver the best possible end-product.</li>
                </ul>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column>
          <div className='card-wrapper'>
              <div className='card-header'>
                <div className='card-header-main'>
                  <h4>Software Engineering Intern @ Saab Aeronautics</h4>
                </div>
                <div className='card-header-sub'>
                  <h5>Jun 2018 - Aug 2018</h5>
                </div>
              </div>
              <div className='card-content'>
                <ul>
                  <li>Demonstrated adaptability by rapidly familiarizing myself with coding languages other than those I am proficient in.</li>
                  <li>Developed and implemented systems to maintain high code quality utilizing continuous integration.</li>
                  <li>Oversaw other interns in an effort to speed up the on-boarding process.</li>
                </ul>
              </div>
            </div>
          </Grid.Column>

        </Grid.Row>
      </React.Fragment>
    )
  }
}
