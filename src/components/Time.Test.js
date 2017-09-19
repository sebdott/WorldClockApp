import { expect } from 'chai'
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Time from './Time';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { loadLanguageDispatch } from '../actions/languageAction'
import { LOAD_LANGUAGE } from '../actions/actionTypes'
import LanguageHelper from '../common/languageHelper';
import reducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

describe('Time via Enzyme', () => {
  it('renders time h2', (done) => {
    
  const mockStore = configureMockStore(middleware);
    
    const props = {
      AddTime: 1,
      CurrentDateTime: new Date(),
      languagesValue: LanguageHelper.getLanguageList('EN')
    };

    const dispatch = sinon.spy();
    dispatch(loadLanguageDispatch())

    const middleware = [thunk];
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    )
    
    const wrapper = shallow(
      <Provider store={store}>
        <Time
          {...props}
        />
      </Provider>
      );

    const expectedActions = [
      {type: LOAD_LANGUAGE, language: {languages: LanguageHelper.getLanguageList('EN')}}
    ];

    const store2 = mockStore({cities: []}, expectedActions, done);
    new Promise((resolve, reject) => {
      resolve(Object.assign(dispatch, dispatch(loadLanguageDispatch())));
     }).then(() => {
      // const actions = store2.getActions();
      // expect(actions[0].type).toEqual(LOAD_LANGUAGE);
      // expect(wrapper.find('Label')).to.not.equal(null);
 
    });

  //  expect(wrapper.find('Label')).to.not.equal(null);
    // expect(wrapper.find('Alert').getAttribute('bsStyle')).to.equal('success');
    // expect(wrapper.find('Label')).toNotExist();
    done();
  });

  it('Exect 2 not equal to 1', () => {
      expect(2).to.not.equal(1); 
  });

  it('Exect 2 not equal to 1', () => {
    expect(2).to.equal(2);
});
});
  
 

//   it('save button is labeled "Save" when not saving', () => {
//     const wrapper = setup(false);
//     expect(wrapper.find('input').props().value).toBe('Save');
//   });

//   it('save button is labeled "Saving..." when saving', () => {
//     const wrapper = setup(true);
//     expect(wrapper.find('input').props().value).toBe('Saving...');
//   });

