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
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  // $('#change-password').show()
  $('#sign-out').show()
  $('.navbar').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
  $('#edit-workout').show()
  $('#delete-workout').show()
  $('#view-all-workouts').show()
  $('#display-workouts').show()
}

const onChangePasswordSuccess = function () {
  $('#messages').text('Password changed successfully!')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Signed out successfully!')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#add-workout').hide()
  $('#edit-workout').hide()
  $('#delete-workout').hide()
  $('#view-all-workouts').hide()
  $('#view-edit-delete').hide()
  $('#display-workouts').hide()
  $('#display-workouts').empty()
  $('.navbar').hide()
  store.user = null
}

// displays error message
const onError = function (err) {
  console.error(err)
  $('#messages').text('Hmm...something went wrong. Please try again!')
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
