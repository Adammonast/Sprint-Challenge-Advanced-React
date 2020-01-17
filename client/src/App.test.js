import React from 'react';
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from "./Components/Navbar";
import InfoCard from "./Components/InfoCard";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("navbar is rendered", () => {
  const { getByText } = render(<Navbar/>);
  getByText("Dark Mode");
})

test("infocard is rendered", () => {
  const {getByTestId} = render(<InfoCard />);
})

test("card title is displayed", () => {
  const {getByTestId} = render("card");
})

