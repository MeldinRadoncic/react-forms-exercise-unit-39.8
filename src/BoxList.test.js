import {fireEvent, render, screen } from '@testing-library/react';

import React from "react";
import BoxList from "./BoxList";


it('Renders without crashing', () => {
    render(<BoxList/>)
})


it('matches snapshot', () => {
    const {asFragment} = render(<BoxList/>)
    expect (asFragment()).toMatchSnapshot();
} )


it('Display Alert message if inputs are empty', function() {

     render(<BoxList/>)
     const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

    // Get inputs by label text
  const color =screen.getByLabelText('Color')
  const width = screen.getByLabelText('Width')
  const height = screen.getByLabelText('Height')

  const addBoxBtn = screen.getByText('Add Box')
    expect (screen.queryByText('Color:red')).not.toBeInTheDocument();
    
    // If one or more inputs are empty display alert after submitting form
    fireEvent.change(width, {target:{value:'100'}});
    fireEvent.change(height, {target:{value:''}});

    fireEvent.change(color, {target:{value:'red'}});

    fireEvent.click(addBoxBtn);
    expect(alertMock).toHaveBeenCalledTimes(1)

})

it('Add new Bpx', function() {

    render(<BoxList/>)

   // Get inputs by label text
 const color =screen.getByLabelText('Color')
 const width = screen.getByLabelText('Width')
 const height = screen.getByLabelText('Height')

 const addBoxBtn = screen.getByText('Add Box')
   
   fireEvent.change(width, {target:{value:'100'}});
   fireEvent.change(height, {target:{value:'100'}});
   fireEvent.change(color, {target:{value:'red'}});

   fireEvent.click(addBoxBtn);

   const newBox = screen.getByTestId('box')
   const removeBtn = screen.getByTestId('removeBtn')


   expect(newBox).toBeInTheDocument();
   expect(removeBtn).toBeInTheDocument();
})

it('Removes a box', () => {
    render(<BoxList/>)

    const color = screen.getByLabelText('Color')
    const width = screen.getByLabelText('Width')
    const height = screen.getByLabelText('Height')

    const addBox = screen.getByText('Add Box')

    fireEvent.change(color, {target:{value:'red'}})
    fireEvent.change(width, {target:{value:'300'}})
    fireEvent.change(height, {target:{value:'300'}})

    fireEvent.click(addBox)
    const newBox = screen.getByTestId('box')
    expect(newBox).toBeInTheDocument();

    const removeBtn = screen.getByTestId('removeBtn')


    fireEvent.click(removeBtn)
    expect(newBox).not.toBeInTheDocument();


})