import React from "react";
import FilterItemAcidity from "./FilterItemAcidity";
import {shallow} from 'enzyme';
import beers from "../../data/beers";

describe("FilterItemAcidity tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<FilterItemAcidity beers={beers} />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})