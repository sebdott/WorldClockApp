import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, Button, Alert, Label } from 'react-bootstrap';
import { connect } from 'react-redux'


class Cities extends Component {

  constructor(props) {
    super(props);
    this.fullDisplayAddedMinusTime = "";
    this.isAddTime = false;
  }

  getAddedMinusTimeString = (addedTime) => {

    const { languagesValue } = this.props

    let languageAddedTime = (languagesValue == null ? " " : languagesValue.AddedTime);
    let languageMinusTime = (languagesValue == null ? " " : languagesValue.MinusTime);
    let languageHours = (languagesValue == null ? " " : languagesValue.Hours);

    if (addedTime >= 0) {
      this.isAddTime = true;
      return languageAddedTime + " " + addedTime + " " + languageHours;
    }
    else {
      return languageMinusTime + " " + addedTime + " " + languageHours;
    }
  }

  render() {
    const { cities, handleDeleteClick, languagesValue } = this.props;

    return (
      <ListGroup>
        {cities.sort((a, b) => a.Id > b.Id).map((cities, i) =>
          <ListGroupItem key={i} bsStyle="warning">
          <Alert bsStyle="info" ><p><h3>{cities.City}</h3></p>
            <p>
              <h2><Label bsStyle={parseInt(cities.TimeZoneAdd, 10) >= 0 ? "success" : "danger"} >{this.getAddedMinusTimeString(parseInt(cities.TimeZoneAdd, 10))}</Label></h2>
            </p>
            <p>
             <h2><Button block bsStyle="success"
              id={cities.Id}
              onClick={handleDeleteClick}>{languagesValue == null ? " " : languagesValue.Select}</Button>
              </h2>
            </p>    
            </Alert>       
          </ListGroupItem>
        )}
      </ListGroup >
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    languagesValue: state.language.languages
  }
}

export default connect(mapStateToProps)(Cities)