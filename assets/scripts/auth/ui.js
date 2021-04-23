'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#sign-up').trigger('reset')
  $('.navbar').hide()
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#messages').text('Successfully signed in!')
  $('#change-password').show()
  $('#sign-out').show()
  $('.navbar').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
  $('#add-workout').show()
  $('#all-workouts-table').show()
}

const onChangePasswordSuccess = function () {
  $('#messages').text('Password changed successfully!')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#messages').text('Signed out successfully!')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.navbar').hide()
  $('#add-workout').hide()
  $('#all-workouts-table').hide()
  store.user = null
}

// const onNavbarSuccess = function () {
//   $('#add-workout').show()
// }

const onAddWorkoutSuccess = function () {
  store.workout = response.workout
  const workoutHTML = `
  <p>Name: ${response.workout.name}</p>
  <p>Description: ${response.workout.description}</p>
  <p>Duration: ${response.workout.duration}<p>
  <p>Date: ${response.workout.date}</p>
  `
  $('#messages').text('Successfully added workout!')
  $('#add-workout').show()
  $('#add-workout').trigger('reset')
}

const onAllWorkoutsTableSuccess = function () {
  $('#messages').text('You can now view all workouts!')
  $('#all-workouts-table').show()
}

// displays error message
const onError = function (err) {
  console.error(err)
  $('#messages').text('Hmm...something went wrong. Please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onAddWorkoutSuccess,
  onAllWorkoutsTableSuccess,
  onError
}
