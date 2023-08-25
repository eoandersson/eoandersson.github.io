import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import '../../styles/Homepage.css'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Projects from '../../components/Projects'

export default class Homepage extends Component {
  render() {
    return (
      <div id='page-content'>
        <Grid divided='vertically' id='home-content' inverted stackable>
          <About/>
          <Experience/>
          <Projects/>
        </Grid>
      </div>
    )
  }
}
