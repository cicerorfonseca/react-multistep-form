import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    //-----------------------------------
    //Process Form. Send date to the API.
    //-----------------------------------

    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem
              primaryText="First Name" //label
              secondaryText={firstName} //actual data
            />
            <ListItem
              primaryText="Last Name" //label
              secondaryText={lastName} //actual data
            />
            <ListItem
              primaryText="Email" //label
              secondaryText={email} //actual data
            />
            <ListItem
              primaryText="Occupation" //label
              secondaryText={occupation} //actual data
            />
            <ListItem
              primaryText="City" //label
              secondaryText={city} //actual data
            />
            <ListItem
              primaryText="Bio" //label
              secondaryText={bio} //actual data
            />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true} //blue color
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false} //white color
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Confirm;
