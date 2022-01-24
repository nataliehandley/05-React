import React from "react";
import FilterItemClassic from "./FilterItemClassic";
import {shallow} from 'enzyme';
import beers from "../../data/beers";

describe("FilterItemClassic tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<FilterItemClassic beers={beers} />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})