import { render } from "@testing-library/react";
import React from "react";
import NewBoxForm from './NewBoxForm'

it('Renders without crashing', () => {
    render(<NewBoxForm/>)
})

it('Matches snapshot', () => {
    const {asFragment} = render(<NewBoxForm/>)
    expect(asFragment()).toMatchSnapshot();
})