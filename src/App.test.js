import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('render the button and handle the click event', () => {
    // write the logic of testing 
   const handleClick = jest.fn(); // mock fun. 
   
   render(<button onClick={handleClick}>click</button>) // handleClick is provide by jest.fn function.

   const renderedButton = screen.getByText('click');
    fireEvent.click(renderedButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
   
});

