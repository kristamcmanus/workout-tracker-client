'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const workoutEvents = require('./workout/events')

$(() => {

  // auth
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').hide()
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // workouts
  $('.navbar').hide()
  $('.navbar').on('click', workoutEvents.onNavbar)
  $('#add-workout').hide()
  $('#add-workout').on('submit', workoutEvents.onAddWorkout)
  $('#add-workout-btn').on('click', workoutEvents.onAddWorkoutBtn)
  $('#view-edit-delete').hide()
  $('#view-edit-delete').on('click', workoutEvents.onViewAllWorkoutsBtn)
  $('#view-all-workouts').hide()
  $('#view-all-workouts').on('click', workoutEvents.onViewAllWorkouts)
  $('#view-all-workouts').on('click', workoutEvents.onViewAllWorkoutsBtn)
  $('#view-all-workouts-btn').on('click', workoutEvents.onViewAllWorkoutsBtn)
  $('#edit-workout').hide()
  $('#edit-workout').on('submit', workoutEvents.onEditWorkout)
  $('#delete-workout').hide()
  $('#delete-workout').on('submit', workoutEvents.onDeleteWorkout)
  $('#display-workouts').on('click', workoutEvents.onViewAllWorkoutsSuccess)
  $('#change-pw-btn').on('click', workoutEvents.onChangePwBtn)
})
