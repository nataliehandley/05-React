import React from "react";
import FilterItemHighABV from "./FilterItemHighABV";
import {shallow} from 'enzyme';
import beers from "../../data/beers";

describe("FilterItemHighABV tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<FilterItemHighABV beers={beers} />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})