import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";


describe("Header component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("renders without crashing", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists());
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

/*
Add a test that mounts the Header component with a default context value. Verify that the logoutSection is not created
Add a test that mounts the Header component with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created
Add a test that mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy
*/
describe("Header component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("mounts the Header component with a default context value. Verify that the logoutSection is not created", () => {
        expect(wrapper.find(".logoutSection")).toHaveLength(0);
    });
    it("mounts the Header component with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created", () => {
        wrapper.setProps({ user: { email: "", password: "", isLoggedIn: true } });
        expect(wrapper.find(".logoutSection")).toHaveLength(1);
    });
    it("mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy", () => {
        const logOut = jest.fn(() => undefined);
        wrapper.setProps({ user: { email: "", password: "", isLoggedIn: true }, logOut });
        expect(logOut).toHaveBeenCalledTimes(0);
        wrapper.find(".logoutSection a").simulate("click", { preventDefault: () => undefined });
        expect(logOut).toHaveBeenCalledTimes(1);
    });
});