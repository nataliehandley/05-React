import React from "react";
import FilterList from "./FilterList";
import {shallow} from 'enzyme';
import beers from "../../data/beers";

describe("FilterList tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<FilterList beers={beers} />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})