import axios from 'axios';
const baseURL = 'http://localhost:3000'
const service = axios.create({ withCredentials: true, baseURL });

const CARD_SERVICE = {
  SIGNUP: async form => {
    const { data } = await service.post('/signup', form)
    return data
  },
  LOGIN: async form => {
    const { data } = await service.post('/login', form)
    return data
  },
  LOGOUT: async () => {
    const { data } = await service.get('/logout')
    return data
  }
}
export default CARD_SERVICE


ALLCARDS = async () => {
  const { data } = await cardsService.get();
  return data;
};
GETCARD = async projectId => {
  const { data } = await service.get(`/${cardId}`);
  return data;
};
CREATE = async (title, description) => {
  const { data } = await service.post("/", { name, description });
  return data;
};
UPDATE = async (id, title, description) => {
  const { data } = await service.put(`/${id}`, { name, description });
  return data;
};
DELETE = async id => {
  const { data } = await service.delete(`/${id}`);
  return data;
};