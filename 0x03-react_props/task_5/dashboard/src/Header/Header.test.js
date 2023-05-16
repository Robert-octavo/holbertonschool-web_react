import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";


describe("Header component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Header />);
    });
    it("renders a div with the class App-header", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".App-header")).toHaveLength(1);
    });
    it("renders a div with the class App-header and a child h1 with the text 'Holberton Dashboard'", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".App-header")).toHaveLength(1);
        expect(wrapper.find(".App-header h1")).toHaveLength(1);
        expect(wrapper.find(".App-header h1").text()).toEqual(
        "School Dashboard"
        );
    });
    it("renders a div with the class App-header and a child img with the alt text 'Holberton Logo'", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".App-header")).toHaveLength(1);
        expect(wrapper.find(".App-header img")).toHaveLength(1);
        expect(wrapper.find(".App-header img").prop("alt")).toEqual(
        "Holberton Logo"
        );
    });
});
