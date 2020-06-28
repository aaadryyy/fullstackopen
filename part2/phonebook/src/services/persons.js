import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch(error => error)
}

const newPerson = (personObj) => {
    const request = axios.post(baseUrl, personObj)
    return request.then(response => response.data).catch(error => error)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data).catch(error => "error")
}

const editPerson = (id,personObj) => {
    const request = axios.put(`${baseUrl}/${id}`, personObj)
    return request.then(response => response.data).catch(error => "error")
}

export default { getAll, newPerson, deletePerson, editPerson}