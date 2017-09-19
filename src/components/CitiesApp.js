import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCitiesDispatch, removeCitiesDispatch } from '../actions/cityAction'
import { addSelectedCitiesDispatch } from '../actions/selectedCityAction'
import Cities from '../components/Cities'
import { Alert } from 'react-bootstrap';
import toastr from 'toastr';

class CitiesApp extends Component {

    static propTypes = {
        cities: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch, cities } = this.props
        dispatch(loadCitiesDispatch(cities))
    }

    handleDeleteClick = e => {
        e.preventDefault();
        const { dispatch, cities ,languagesValue} = this.props
        
        var city = cities.filter((city) => city.Id == e.target.id).pop()

        if(city != null)
        {
            dispatch(removeCitiesDispatch(city.Id))

            return new Promise((resolve, reject) => {
                resolve(Object.assign(dispatch, dispatch(addSelectedCitiesDispatch(city))  ));
            }).then(() => { 
                toastr.success(city.City +' '+ 
                (languagesValue == null ? " " :  languagesValue.Added) )})
                .catch(error => {
                    throw (error);
                });
        }  
    }

    render() {
        const { cities, isLoading, languagesValue } = this.props
        const isEmptyCities = cities.length === 0

        return (
            <div>
                {isEmptyCities                    
                    ? (isLoading ?  <Alert bsStyle="warning" ><h4>{languagesValue == null ? " " :  languagesValue.Loading }</h4></Alert> 
                    :<Alert bsStyle="danger" ><h4>{languagesValue == null ? " " :  languagesValue.NoCityNotice }</h4></Alert>)
                    : <div style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <Cities cities={cities} handleDeleteClick={this.handleDeleteClick} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities.items,
        isLoading: state.loading.isLoading,
        languagesValue: state.language.languages
    }
}

export default connect(mapStateToProps)(CitiesApp)
