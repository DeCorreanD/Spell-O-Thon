import client from '../utils/client';

// Api Calls From Words

const endpoint = client.databaseURL;

// TODO: GET Words
const getWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: DELETE Words
const deleteWords = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// TODO: CREATE BOOK
const createWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE BOOK
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
// TODO: GET SINGLE BOOK
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// filter by other
const filterOther = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="type"&equalTo="Other"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const others = Object.values(data).filter((item) => item.type);
      resolve(others);
    })
    .catch(reject);
});
// filter by Computing
const filterComputing = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="type"&equalTo="COMPUTING/TELECOMMUNICATIONS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const computers = Object.values(data).filter((item) => item.type);
      resolve(computers);
    })
    .catch(reject);
});
// filter by Storytelling
const filterStorytelling = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="type"&equalTo="storytelling/Fable"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const fables = Object.values(data).filter((item) => item.type);
      resolve(fables);
    })
    .catch(reject);
});

export {
  updateWord, deleteWords, getWords, createWord, getSingleWord, filterOther, filterComputing, filterStorytelling
};
