import React, { Component } from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import '../../styles/Homepage.css'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Projects from '../../components/Projects'

export default class Homepage extends Component {
  render() {
    return (
      <div id='page-content'>
        <Grid id='home-content' inverted stackable>
          <About/>
          <Divider/>
          <Experience/>
          <Divider/>
          <Projects/>
        </Grid>
      </div>
    )
  }
}
