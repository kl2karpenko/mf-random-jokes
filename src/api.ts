import axios from 'axios';

interface AxiosResponse {
  data: any;
  status: number;
}

export default class Api {
  constructor() {
    // no-op
  }

  async getRandomJoke(): Promise<AxiosResponse> {
    return axios.get(`https://official-joke-api.appspot.com/random_joke`);
  }
}
