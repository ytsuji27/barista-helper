import React from 'react';
import { BREW_METHODS } from '../constants';
import BrewMethods from '../components/BrewMethods';
import { Grid } from 'semantic-ui-react';
// -- ICONS -- //
import aeropress from '../assets/icons/aeropress.svg';
import frenchpress from '../assets/icons/french-press.svg';
import espresso from '../assets/icons/espresso.svg';

class BrewMethodContainer extends React.Component {

  renderBrewMethods = () => {
    return BREW_METHODS.map(method => {
      return (
        <BrewMethods method={method} />
      )
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Row centered columns={2}>
          {this.renderBrewMethods()}
        </Grid.Row>
      </Grid>
    )
  }

  // render() {
  //   return (
  //     <Grid>
  //       <Grid.Row columns={2}>
  //         <Grid.Column>
  //           <img src={aeropress} />
  //         </Grid.Column>
  //         <Grid.Column>
  //           <img src={frenchpress} />
  //         </Grid.Column>
  //         <Grid.Column>
  //           <img src={espresso} />
  //         </Grid.Column>
  //       </Grid.Row>
  //     </Grid>
  //   )
  // }
}

export default BrewMethodContainer;