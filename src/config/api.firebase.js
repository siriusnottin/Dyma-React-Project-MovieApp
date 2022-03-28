import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL:
    'https://movieapp-34d54-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default apiFirebase;
