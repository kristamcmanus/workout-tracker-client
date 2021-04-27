'use strict'

const store = require('../store')

// displays messaging for when a new workout is successfully added
const onAddWorkoutSuccess = function (response) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully added workout!')
  $('#add-workout').trigger('reset')
}

// displays messaging for when a workout is successfully edited/updated
const onEditWorkoutSuccess = function (response) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully edited workout! Click View All Workouts button to view new logged workout.')
  $('#edit-workout').trigger('reset')
  }

// displays messaging for when a workout is successfully deleted
const onDeleteWorkoutSuccess = function () {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully deleted workout! Click View All Workouts button to view all workouts.')
  $('#delete-workout').trigger('reset')
}

// displays all workouts recorded
const onViewAllWorkoutsSuccess = function (response) {
  const workouts = response.workouts
  let workoutsHtml = ''
  workouts.forEach(workout => {
    workoutsHtml += `
      <div class="workout-item">
        <p>ID: ${workout._id}</p>
        <p>Name: ${workout.name}</p>
        <p>Description: ${workout.description}</p>
        <p>Duration: ${workout.duration}<p>
        <p>Date: ${workout.date}</p>
      </div>
    `
    $('#display-workouts').html(workoutsHtml)
    // displays messaging for when viewing all workouts is successful
    setTimeout(() => {
      $('#messages').text('')
    }, 3000)
    $('#messages').text('Nice! You can now view all your workouts.')
  })
}

// displays error message
const onError = function (err) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Hmm...something went wrong. Please try again!')
}

module.exports = {
  onAddWorkoutSuccess,
  onEditWorkoutSuccess,
  onDeleteWorkoutSuccess,
  onViewAllWorkoutsSuccess,
  onError
}
