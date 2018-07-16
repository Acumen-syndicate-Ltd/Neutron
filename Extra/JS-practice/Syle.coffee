class PasswordGenerator
  initialize: (settings) ->
    @settings = settings
    @errors = []
  generate: ->
    @errors = @validate()
    return false if @errors.length != 0
    return new_password()
  validate: -> true
  new_password: -> 'TODO'

my_new_password = new PasswordGenerator({length: 5, underscores: true, lowercase: true}).generate()

my_generator = new PasswordGenerator({length: 5, underscores: true})

##########################

new_password = generatePassword(settings)

generatePassword = (settings = {}) ->
  settings.length ||= 8
  settings.underscores = true if settings.underscores == undefined
  settings.lowercase ||= false
  errors = []

  if settings.length == 0
    errors.push "Length can't be zero"
  if settings.underscores == false and settings.lowercase == false
    errors.push "At least one variable must be true"

  if errors.length > 0
    result =
      status: 'failure',
      errors: [....]
  else
    result =
      status: 'success',
      value: 'TODO'

  return result

showResults = ->
  new_password = generatePassword({underscores: getElementById(..).value, })
  if new_password.status == 'success'
    alert new_password.value
  else
    alert new_password.errors

  Vue.js
