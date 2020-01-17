import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request;
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

const deleteNum = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => {
    console.log(`Delete Success for number with id: ${id}`);
  });
};

export default { getAll, create, update, deleteNum };
