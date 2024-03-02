import axios from 'axios';

const API_KEY = '18519763-b48cd53b8f87881ea60fa71d1';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getPhotos = async (query, page) => {
  const { data } = await instance.get('', {
    params: {
      q: query,
      page: page,
    },
  });
  return data;
};
