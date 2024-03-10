import  getGifs  from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', ()=>{

  test('debe retornar un arreglo de Gifs', async() => {
    //Arrange
    const gifs = await getGifs('Hola');
    
    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
    
  });
});