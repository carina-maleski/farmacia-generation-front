/* eslint-disable @typescript-eslint/ban-types */
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

// Método HTTP Get
export const buscar = async (
  url: string,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

// Método HTTP Post
export const cadastrar = async (
  url: string,
  dados: object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

// Método HTTP Put
export const atualizar = async (
  url: string,
  dados: object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

// Método HTTP Delete
export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};
