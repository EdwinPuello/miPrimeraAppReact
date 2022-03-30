export const getGif = async (categoria) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=UrdqiM3pEp65PRTTZfKRqBwtjyQhc476`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized.url,
      };
    });
    return gifs
  };