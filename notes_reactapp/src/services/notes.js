import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/notes' //when fetching notes from localhost server that is being run from Documents/notes_expressapp
//const baseUrl = 'https://desolate-retreat-80673.herokuapp.com/api/notes' //when fetching notes from heroku server
const baseUrl =  '/api/notes' //when react app's build folder is copied to express app's folder and they're deployed in the same heroku server

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const noteService = { 
  getAll, 
  create, 
  update
}

export default noteService