import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CitiesApp from './CitiesApp';
import SelectedCitiesApp from './SelectedCitiesApp';
import { Row, Col, Nav, NavItem, Tab, Panel, Alert } from 'react-bootstrap';
import toastr from 'toastr';
import { connect } from 'react-redux'
import { loadLanguageDispatch } from '../actions/languageAction'
import logo from '../media/images/clock.gif'

class App extends Component {

  constructor(props) {
    super(props);
    toastr.options = {
      "closeButton": true,
      "positionClass": "toast-bottom-right"
    };
    this.fullDisplayString = "";
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadLanguageDispatch())
  }


  getUTCTimeString = () => {
    const { languagesValue, currentUTCDateTime } = this.props

    let currentDateTime = new Date(currentUTCDateTime);
    let languageCode = (languagesValue == null ? "" : languagesValue.LanguageCode);

    if (languageCode !== "") {
      this.fullDisplayString = currentDateTime.toLocaleString(languageCode, { year: "numeric", day: "numeric", month: "long" }) + "  :  "
        + currentDateTime.toLocaleTimeString(languageCode)
    }
    else {
      this.fullDisplayString = ""
    }
  }

  render() {
    const { languagesValue, isLoading } = this.props

    this.getUTCTimeString();

    return (
      <div style={{ textAlign: 'center' }}>
        <Alert bsStyle="warning" justified>
          <h1>{languagesValue == null ? "" : languagesValue.AppTitle}</h1>
          <h2><img src={logo} alt={"logo"} height="300" width="300" /></h2>
          <Alert bsStyle="danger" justified>
            <h3>{languagesValue == null ? "" : languagesValue.UTCTiming}</h3>
            <h3>{isLoading ? languagesValue == null ? "" : languagesValue.Loading : this.fullDisplayString}</h3></Alert>
        </Alert>
        <Tab.Container id="WorkClockTab" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="pills" justified >
                <NavItem eventKey="first"><h4>{languagesValue == null ? "" : languagesValue.Clocks}</h4></NavItem>
                <NavItem eventKey="second"><h4>{languagesValue == null ? "" : languagesValue.SelectCity}</h4></NavItem>
              </Nav>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <Panel bsStyle="warning">
                    <SelectedCitiesApp />
                  </Panel>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Panel bsStyle="warning">
                    <CitiesApp />
                  </Panel>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    languagesValue: state.language.languages,
    currentUTCDateTime: state.UTCDateTime.current,
    isLoading: state.loading.isLoading
  }
}

export default connect(mapStateToProps)(App)
