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

// change password link in navbar displays `change password` form on page
const onChangePwBtn = function (event) {
  $('#change-password').show()
  $('#add-workout').hide()
  $('#display-workouts').hide()
  $('#view-edit-delete').hide()
  $('#view-all-workouts').hide()
}

// add workout link in navbar displays `add workout` form on page
const onAddWorkoutBtn = function (event) {
  $('#add-workout').show()
  $('#change-password').hide()
  $('#display-workouts').hide()
  $('#view-edit-delete').hide()
  $('#view-all-workouts').hide()
}

// view all workouts link in navbar displays edit and delete forms and view all
// workouts button and logged workouts
const onViewAllWorkoutsBtn = function (event) {
  $('#view-edit-delete').show()
  $('#view-all-workouts').show()
  $('#display-workouts').show()
  $('#change-password').hide()
  $('#add-workout').hide()
}

module.exports = {
  onAddWorkout,
  onEditWorkout,
  onDeleteWorkout,
  onViewAllWorkouts,
  onChangePwBtn,
  onAddWorkoutBtn,
  onViewAllWorkoutsBtn
}
