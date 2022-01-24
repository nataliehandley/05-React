import React from "react";
import NavBar from "./NavBar";
import {shallow} from 'enzyme';
import beers from "../../data/beers";

describe("NavBar tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<NavBar beers={beers} />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})