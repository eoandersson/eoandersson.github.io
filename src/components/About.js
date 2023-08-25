import React, { Component } from 'react'
import {Grid, Image} from 'semantic-ui-react'
import '../styles/About.css'

export default class About extends Component {
  render() {
    return (
      <Grid.Row columns={2}>
        <Grid.Column>
          <div className='about-image-wrapper'>
            <Image src={require('../resources/BW-Low-res.png')} size='medium' circular />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='about-content-wrapper'>
            <h3 className='about-header'>Hi! (Page WiP)</h3>
            <p>
              I'm Erik, a budding software engineering student
              with an insatiable appetite for problem-solving, who finds joy 
              in untangling complexities and crafting efficient solutions. Whether it's debugging a
              stubborn piece of code or architecting a novel software 
              application, I approach every problem with
              tenacity and creativity.
            </p>
            <p>
              My passion for problem-solving goes beyond the classroom, 
              as I eagerly explore coding competitions and tricky algorithms (<a href='https://leetcode.com/EOAndersson/' target="_blank">Leetcode Profile</a>), 
              and through continuous learning and a resilient mindset I aim to develop 
              solutions that are both efficient and which simplify the lives of their users.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}
