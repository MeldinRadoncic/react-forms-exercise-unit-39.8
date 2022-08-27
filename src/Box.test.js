import { render } from "@testing-library/react";
import React from "react";
import Box from './Box.js'


it('Renders without crashing', () => {
    render(<Box/>)
})

it('Matches snapshot', () => {
    const {asFragment} = render(<Box/>)
    expect(asFragment()).toMatchSnapshot();
})