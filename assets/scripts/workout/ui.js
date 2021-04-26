'use strict'

const store = require('../store')

const onAddWorkoutSuccess = function (response) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully added workout!')
  // $('#workout-created').html(workoutHtml)
  $('#add-workout').trigger('reset')
}

const onViewAllWorkoutsSuccess = function (response) {
  const workouts = response.workouts
  let workoutsHtml = ''
  workouts.forEach(workout => {
    workoutsHtml += `
      <p>ID: ${workout._id}</p>
      <p>Name: ${workout.name}</p>
      <p>Description: ${workout.description}</p>
      <p>Duration: ${workout.duration}<p>
      <p>Date: ${workout.date}</p>
    `
    $('#display-workouts').html(workoutsHtml)
    setTimeout(() => {
      $('#messages').text('')
    }, 3000)
    $('#messages').text('Here are all your workouts!')
  })
}

// <button id="edit-workout">Edit</button>
// <div id="view-edit-delete">
//   <form id="edit-workout">
//     <h3>Edit Workout</h3>
//     <input type="text" name="workout[name]" placeholder="Enter Name" required>
//     <input type="text" name="workout[description]" placeholder="Enter Description" required>
//     <input type="text" name="workout[duration]" placeholder="Enter Duration" required>
//     <input type="date" name="workout[date]" placeholder="Enter Date" required>
//     <button>Edit Workout</button>
//   </form>
// </div>

// <button id="delete-workout">Delete</button>

const onEditWorkoutSuccess = function (response) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully edited workout! Click View All Workouts button to view new logged workout.')
  $('#edit-workout').trigger('reset')
  // $('#add-workout').trigger('reset')
  }

const onDeleteWorkoutSuccess = function () {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully deleted workout! Click View All Workouts button to view all workouts.')
  $('#delete-workout').trigger('reset')
}

// displays error message
const onError = function (err) {
  console.error(err)
  $('#messages').text('Hmm...something went wrong. Please try again!')
}

module.exports = {
  onAddWorkoutSuccess,
  onEditWorkoutSuccess,
  onDeleteWorkoutSuccess,
  onViewAllWorkoutsSuccess,
  // onChangePwBtnSuccess,
  onError
}
