import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

 


describe("App tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})



Enzyme.configure({ adapter: new Adapter() });