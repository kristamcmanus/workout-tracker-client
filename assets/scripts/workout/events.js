'use strict'
// import the functions that make requests to the api
const api = require('./api')
// import the functions that update our webpage's content
const ui = require('./ui')
// import the getFormFields function
const getFormFields = require('../../../lib/get-form-fields')

const store = require('../store')

const onAddWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addWorkout(formData)
    .then(ui.onAddWorkoutSuccess)
    .catch(ui.onError)
}

const onEditWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.workout.id
  api.editWorkout(id, formData)
    .then(ui.onEditWorkoutSuccess)
    .catch(ui.onError)
}

const onDeleteWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.workout.id
  api.deleteWorkout(id)
    .then(ui.onDeleteWorkoutSuccess)
    .catch(ui.onError)
}

const onViewAllWorkouts = function () {
  event.preventDefault()
  api.viewAllWorkouts()
    .then(ui.onViewAllWorkoutsSuccess)
    .catch(ui.onError)
}

const onChangePwBtn = function (event) {
  event.preventDefault()
  $('#change-password').show()
}

const onAddWorkoutBtn = function (event) {
  event.preventDefault()
  $('#add-workout').show()
}

const onViewEditDeleteBtn = function (event) {
  event.preventDefault()
  $('#view-edit-delete').show()
}


module.exports = {
  onAddWorkout,
  onEditWorkout,
  onDeleteWorkout,
  onViewAllWorkouts,
  onChangePwBtn,
  onAddWorkoutBtn,
  onViewEditDeleteBtn
}
