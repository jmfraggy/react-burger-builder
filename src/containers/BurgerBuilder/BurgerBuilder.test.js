import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Use export to test the container
import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()}); // Enzime connected

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}} />); // Shallow renders the component without the content
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});