import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, Button, Alert } from 'react-bootstrap';
import Time from './Time'

class CitiesAndTime extends Component {

  render() {
    const { cities, handleDeleteClick, currentUTCDateTime, languagesValue } = this.props;
    return (
      <div>
        <ListGroup>
          {cities.sort((a, b) => a.Id > b.Id).map((cities, i) =>

            <ListGroupItem key={i} bsStyle="warning">
              <Alert bsStyle="info" ><p><h3>{cities.City}</h3></p>
                <p><Time AddTime={cities.TimeZoneAdd} CurrentDateTime={currentUTCDateTime} /></p>
                <p><h4><Button block
                 bsStyle="danger"
                 id={cities.Id}
                 onClick={handleDeleteClick}>{languagesValue == null ? " " : languagesValue.Delete}</Button></h4></p>
                 </Alert>
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    );
  }
}

CitiesAndTime.propTypes = {
  cities: PropTypes.array.isRequired
}

export default CitiesAndTime