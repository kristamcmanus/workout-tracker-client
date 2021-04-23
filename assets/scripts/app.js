'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('.navbar').on('click', events.onSignIn)
  $('.navbar').hide()
  // $('#all-workouts-table').hide()
  $('#all-workouts-table').on('click', events.onAllWorkoutsTable)
  // $('#add-workout').on('click', events.onNavbarSuccess)
  $('#add-workout').on('click', events.onAddWorkout)
  // $('#add-workout').hide()
  // $('#add-workout').on('click', events.onSignIn)
  // $('#all-workouts-table').hide()
  // $('#all-workouts-table').on('click', events.onSignIn)
})
