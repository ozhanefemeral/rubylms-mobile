import {getData} from "../providers/AsyncStorage"


const fetchFunc = async (fetchData, form = false) => {
  const token=await getData('token');
  console.log('apiRequest', JSON.stringify(fetchData), JSON.stringify(form));
  const response = await fetch(fetchData.url, {
    method: fetchData.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': (form) ? 'multipart/form-data' : 'application/json',
      ...fetchData.headers,
        Authorization: "Bearer " + token
    },
    body: createBody(fetchData.body, form),
  }).catch((error) => alert('işlem gerçekleştirilemiyor'));

  console.log('apiResponse', response);

  const status = response.status;
  const body = await response.json();
  const headers = response.headers;

  //console.log('apiResBody', res);
  //console.log('apiHeaders', headers);

  return {
    status,
    body,
    headers,
  };
};

export const createBody = (object, form) => {
  if (object === undefined) {
    return undefined;
  }
  if (form) {
    const formData = new FormData();

    Object.keys(object).forEach(key => formData.append(key, object[key]));

    return formData;
  }

  return JSON.stringify(object);
};

export default fetchFunc;