import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCitiesDispatch } from '../actions/cityAction'
import { loadSelectedCitiesDispatch, removeSelectedCitiesDispatch } from '../actions/selectedCityAction'
import { loadCurrentUTCDateTimeDispatch } from '../actions/dateTimeAction'
import CitiesAndTime from '../components/CitiesAndTime'
import { Alert } from 'react-bootstrap';
import toastr from 'toastr';

class SelectedCitiesApp extends Component {

    static propTypes = {
        selectedCities: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch, selectedCities } = this.props
        dispatch(loadSelectedCitiesDispatch(selectedCities))

        window.setInterval(function () { dispatch(loadCurrentUTCDateTimeDispatch()) }, 1000);
    }

    handleDeleteSelectedClick = e => {
        e.preventDefault()
        const { dispatch, selectedCities, languagesValue } = this.props

        var city = selectedCities.filter((city) => city.Id == e.target.id).pop()

        if (city != null) {
            dispatch(removeSelectedCitiesDispatch(city.Id))
            new Promise((resolve, reject) => {
                resolve(Object.assign(dispatch, dispatch(addCitiesDispatch(city))));
            }).then(() => { toastr.error(city.City + ' ' + (languagesValue == null ? "" : languagesValue.Removed)) })
                .catch(error => {
                    throw (error);
                });
        }
    }

    render() {
        const { selectedCities, isLoading, currentUTCDateTime, languagesValue } = this.props
        const isEmptySelectedCities = selectedCities.length === 0
        return (
            <div>
                {isEmptySelectedCities
                    ? (isLoading ? <Alert bsStyle="warning" ><h4>{languagesValue == null ? "" : languagesValue.Loading}</h4></Alert>
                        : <Alert bsStyle="danger" > <h4>{languagesValue == null ? "" : languagesValue.SelectCityNotice}</h4></Alert>) : <div style={{ opacity: isLoading ? 0.5 : 1 }}>
                        <CitiesAndTime cities={selectedCities} handleDeleteClick={this.handleDeleteSelectedClick}
                            currentUTCDateTime={currentUTCDateTime}
                            languagesValue={languagesValue}
                        />
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedCities: state.selectedCities.items,
        isLoading: state.loading.isLoading,
        currentUTCDateTime: state.UTCDateTime.current,
        languagesValue: state.language.languages
    }
}

export default connect(mapStateToProps)(SelectedCitiesApp)
