import AddCategory from '../../src/components/AddCategory'
import { fireEvent, render, screen } from "@testing-library/react";


describe('Pruebas en <AddCategory />', ()=>{
  
  test('debe cambiar el valor de la caja de texto', ()=>{
    //Arrange
    render( <AddCategory onNewCategory={ ()=>{} } /> );
    const input = screen.getByRole('textbox');
    
    // Act
    fireEvent.input( input, {target: {value: 'Saitama'}});

    // Assert
    expect( input.value ).toBe('Saitama');

  });

  test('should call onNewCategory if input has a value', () => { 
    
    //Arrange
    const inputValue = 'Holi';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory }/>);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);

   });

  test('should not call onNewCategory of the input is empty', () => { 
    //Arrange
    const inputValue = '';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory }/>);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);
    fireEvent.submit(form);

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();

  });
});