'use strict'
// this file contains the functions that make requests to the API
// import our apiUrl from the config file
const config = require('../config')
const store = require('../store')

const addWorkout = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/workouts',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const editWorkout = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/workouts/${id}`,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteWorkout = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/workouts/${id}`,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewAllWorkouts = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/workouts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  addWorkout,
  editWorkout,
  deleteWorkout,
  viewAllWorkouts
}
