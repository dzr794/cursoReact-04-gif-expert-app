import {render, screen} from '@testing-library/react'

import GifItem from "../../src/components/GifItem";

describe('Testing <GifItem />', ()=>{
  
  //Arrange
  const url = "https://media3.giphy.com/media/nvzTyGTzU7Xkq5ZF1g/giphy.gif?cid=138a3abfkany7ppigeh3xxws8vxieg8ox7oxjeeyvtehmd76&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  const title = 'Mi título';

  test('Should match Snapshot', ()=>{
    
    //Act
    const { container } = render(<GifItem title={title} url={url} />);

    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect( container ).toMatchSnapshot();
    
  });

  test('Should show image from URL and alt with title prop', () => { 
    
    //Act
    render(<GifItem title={title} url={url} />);

    const {alt, src} = screen.getByRole('img');
    
    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect( alt ).toBe( title );
    expect( src ).toBe( url );

  });

  test('Should match title', () => {
    //Act
    render(<GifItem title={title} url={url} />);

    expect( screen.getByText(title) ).toBeTruthy();

  });

  
});