import fetchFunc from './FetchFunc';
import qs from 'qs'

const baseUrl = 'https://ruby-lms.herokuapp.com/api';

const login = async (email, password) => fetchFunc({
  method: 'POST',
  url: `${baseUrl}/auth/login/student`,
  headers: {

  },
  body: {
    phone: email,
    password: password
  },
});

const forgetPassword = async ({ username }) => fetchFunc({
  method: 'POST',
  url: `${baseUrl}auth/forgetPassword`,
  headers: {

  },
  body: {
    username,
  },
});
const getStudent = async (studentId, populate = undefined) => {
  const url = new URL(`${baseUrl}/students/${studentId}`)
  populate = qs.stringify(populate)
  url.searchParams.append('populate', populate);

  console.log('url.search: ', url.search);

  return fetchFunc({
    url,
    method: 'GET'
  })
}

const getCourseDetails = async (courseId, populate = undefined) => {
  const url = new URL(`${baseUrl}/courses/${courseId}`)
  populate = qs.stringify(populate)
  url.searchParams.append('populate', populate);

  console.log('url.search: ', url.search);

  return fetchFunc({
    url,
    method: 'GET'
  })
}

const getTaskDetails = async (taskId, populate = undefined) => {
  const url = new URL(`${baseUrl}/tasks/${taskId}`)
  populate = qs.stringify(populate)
  url.searchParams.append('populate', populate);

  console.log('url.search: ', url.search);

  return fetchFunc({
    url,
    method: 'GET'
  })
}

const createSolution = async (answers, student, task) => {
  const url = new URL(`${baseUrl}/solutions/`)
  return fetchFunc({
    url,
    method:'POST',
    body: {
      answers, student, task
    },
  })
}



const MyLibRequests = {
  login,
  forgetPassword,
  getStudent,
  getCourseDetails,
  getTaskDetails,
  createSolution
};

export default MyLibRequests;