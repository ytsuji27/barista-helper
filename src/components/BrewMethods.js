import React from 'react';
// -- ICONS -- //
import aeropress from '../assets/icons/aeropress.svg';
import frenchpress from '../assets/icons/french-press.svg';
import espresso from '../assets/icons/espresso.svg';
// -- SEMANTIC UI -- //
import { Image } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

const icons = {
  'aeropress': aeropress,
  'french press': frenchpress,
  'espresso': espresso
}

class BrewMethods extends React.Component {

  render() {
    return (
      <Grid.Column>
        <div className='brew-methods'>
          <Image src={icons[this.props.method]} />
        </div>
      </Grid.Column>
    )
  }
}

export default BrewMethods;