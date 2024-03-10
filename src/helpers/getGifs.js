
const getGifs = async ( category, limit = 5 ) => {

  const api_key = 'mLhnKLOuVIp0CVC8qcHUQg2qLQqzjuGZ';

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=${ limit }`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    ({ id, title, images }) => (
      {
        id: id,
        title: title,
        url: images.downsized_medium.url,
      }
    )
  );

  return gifs;
}

export default getGifs;