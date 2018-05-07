export default {
  'navbar': {
    'times': 'Times',
    'weekly': 'Weekly',
    'monthly': 'Monthly',
    'contracts': 'Contracts',
    'sign-out': 'Sign out'
  },
  'timer': {
    'start-timer': 'Start Timer',
    'stop-timer': 'Stop Timer',
    'display': '{{duration}} hours'
  },
  'log-time': {
    'title': 'Log Time',
    'start': 'Start',
    'end': 'End',
    'comment': 'Comment',
    'contract': 'Contract',
    'cancel': 'Cancel',
    'action': 'Log Time',
    'success-message': 'Logged time!',
    'error-message': 'Logging time failed!'
  },
  'login': {
    'title': 'Sign in',
    'username': 'Username',
    'password': 'Password',
    'action': 'Sign in',
    'success-message': 'Successfully signed in!',
    'error-message': 'Sign in failed!'
  },
  'weekly': {
    'title': 'Week {{from}} - {{to}}',
    'cw': 'CW {{week}}',
    'worked': 'You have worked {{hours}} hours this week.',
    'not-worked': 'You have not done any work yet this week.'
  },
  'monthly': {
    'title': 'Month {{from}} - {{to}}',
    'info': '{{name}} {{year}}',
    'worked': 'You have worked {{hours}} hours this month.',
    'not-worked': 'You have not done any work yet this month.'
  },
  'period-table': {
    'start': 'Start',
    'end': 'End',
    'duration': 'Duration',
    'contract': 'Contract',
    'comment': 'Comment',
    'entry': {
      'duration': '{{hours}} hours',
      'success-message': 'Deleted time!',
      'error-message': 'Deleting time failed!',
      'edit-title': 'Edit time',
      'edit-action': 'Edit time',
      'delete-title': 'Delete time',
      'delete-message': 'Do you really want to delete this time?',
      'delete-action': 'Delete'
    }
  },
  'contract': {
    'title': 'Contracts',
    'no-contracts': 'You have no contracts yet.',
    'add': 'Add Contract',
    'detail': {
      'title': 'Contract: {{name}}',
      'info': '{{from}} - {{to}}: {{hours}} hours per week',
      'time': 'Working time: '
    }
  },
  'contract-table': {
    'name': 'Name',
    'start': 'Start',
    'end': 'End',
    'hours-per-week': 'Hours per Week',
    'statistics': 'Statistics'
  },
  'contract-time-info': {
    'text': '({{hours}}) hours'
  },
  'contract-dialog': {
    'name': 'Name',
    'start': 'Start',
    'end': 'End',
    'hours-per-week': 'Hours per Week',
    'cancel': 'Cancel',
    'save': 'Save',
    'success-message': 'Saved contract!',
    'error-message': 'Saving contract failed!'
  },
  'contract-edit-buttons': {
    'edit-title': 'Edit Contract',
    'delete-title': 'Delete Contract',
    'delete-message': 'Do you really want to delete this contract? This will delete all times that were logged to ' +
      ' this contract.',
    'delete-confirm': 'Delete',
    'success-message': 'Deleted contract!',
    'error-message': 'Deleting contract failed!'
  },
  'add-contract-component': {
    'name': 'Contract {{number}}'
  },
  'confirm-dialog': {
    'cancel': 'Cancel'
  },
  'select-language': {
    'name': {
      'ru': 'Русский',
      'en': 'English'
    }
  },
  'itoast': {
    'success-title': 'Success',
    'error-title': 'Error'
  },
  'errors': {
    'description': 'This field',
    'inclusion': '{{description}} is not included in the list',
    'exclusion': '{{description}} is reserved',
    'invalid': '{{description}} is invalid',
    'confirmation': '{{description}} doesn\'t match {{on}}',
    'accepted': '{{description}} must be accepted',
    'empty': '{{description}} can\'t be empty',
    'blank': '{{description}} can\'t be blank',
    'present': '{{description}} must be blank',
    'collection': '{{description}} must be a collection',
    'singular': '{{description}} can\'t be a collection',
    'tooLong': '{{description}} is too long (maximum is {{max}} characters)',
    'tooShort': '{{description}} is too short (minimum is {{min}} characters)',
    'before': '{{description}} must be before {{before}}',
    'after': '{{description}} must be after {{after}}',
    'wrongDateFormat': '{{description}} must be in the format of {{format}}',
    'wrongLength': '{{description}} is the wrong length (should be {{is}} characters)',
    'notANumber': '{{description}} must be a number',
    'notAnInteger': '{{description}} must be an integer',
    'greaterThan': '{{description}} must be greater than {{gt}}',
    'greaterThanOrEqualTo': '{{description}} must be greater than or equal to {{gte}}',
    'equalTo': '{{description}} must be equal to {{is}}',
    'lessThan': '{{description}} must be less than {{lt}}',
    'lessThanOrEqualTo': '{{description}} must be less than or equal to {{lte}}',
    'otherThan': '{{description}} must be other than {{value}}',
    'odd': '{{description}} must be odd',
    'even': '{{description}} must be even',
    'positive': '{{description}} must be positive',
    'date': '{{description}} must be a valid date',
    'email': '{{description}} must be a valid email address',
    'phone': '{{description}} must be a valid phone number',
    'url': '{{description}} must be a valid url',
    'no-whitespace-around': '{{description}} must not contain surrounding whitespaces'
  }
};
