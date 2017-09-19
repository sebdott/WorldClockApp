import React, { Component } from 'react';
import { Alert, Label } from 'react-bootstrap';
import { connect } from 'react-redux';

class Time extends Component {

  constructor() {
    super()
    this.fullDisplayString = "";
    this.fullDisplayAddedMinusTime = "";
    this.isAddTime = false;
  }

  setTime = () => {

    const { CurrentDateTime, AddTime, languagesValue } = this.props

    let currentdate = new Date(CurrentDateTime);
    currentdate.setHours(currentdate.getHours() + parseInt(AddTime, 10));

    let languageCode = (languagesValue == null ? " " : languagesValue.LanguageCode);
    let languageAddedTime = (languagesValue == null ? " " : languagesValue.AddedTime);
    let languageMinusTime = (languagesValue == null ? " " : languagesValue.MinusTime);
    let languageHours = (languagesValue == null ? " " : languagesValue.Hours);

    this.fullDisplayString = currentdate.toLocaleString(languageCode, { year: "numeric", day: "numeric", month: "long" }) + "  :  "
      + currentdate.toLocaleTimeString(languageCode)

    if(AddTime >= 0)
    {
      this.isAddTime  = true;
      this.fullDisplayAddedMinusTime = languageAddedTime + " " + AddTime + " " + languageHours;
    }
    else
    {
      this.fullDisplayAddedMinusTime = languageMinusTime + " " + AddTime + " " + languageHours;
    }

  }

  render() {
    this.setTime();
    return (
      <div>
        <Alert bsStyle="success" ><h2>{this.fullDisplayString}</h2>
        <h2><Label bsStyle={this.isAddTime ? "success": "danger"} >{this.fullDisplayAddedMinusTime}</Label></h2>
        </Alert>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    languagesValue: state.language.languages
  }
}

export default connect(mapStateToProps)(Time)