import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,mount } from 'enzyme'
import App from './App';
import SearchResult from './SearchResult';
import NavigateHome from './NavigateHome';


const app = shallow(<App/>)


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('initilizes with the right state', () =>{
  expect(app.state().screenName).toEqual("search")
});

it('changes state properly',()=>{
  const navigatehome = shallow(<NavigateHome/>)
  navigatehome.find('.back').first().simulate('click')
  expect(app.state().screenName).toEqual("search")
});
