export default {
  'navbar': {
    'times': 'Время',
    'weekly': 'Еженедельно',
    'monthly': 'Ежемесячно',
    'contracts': 'Контракты',
    'sign-out': 'Выйти'
  },
  'timer': {
    'start-timer': 'Включить таймер',
    'stop-timer': 'Остановить таймер',
    'display': '{{duration}} часов'
  },
  'log-time': {
    'title': 'Время лога',
    'start': 'Запустить',
    'end': 'Остановить',
    'comment': 'Комментарий',
    'contract': 'Контракт',
    'cancel': 'Отменить',
    'action': 'Время лога',
    'success-message': 'Записано!',
    'error-message': 'Не удалось выполнить регистрацию!'
  },
  'login': {
    'title': 'Войти',
    'username': 'Логин',
    'password': 'Пароль',
    'action': 'Войти',
    'success-message': 'Вы вошли!',
    'error-message': 'Войти не удалось!'
  },
  'weekly': {
    'title': 'Неделя {{from}} - {{to}}',
    'cw': 'KW {{week}}',
    'worked': 'Вы проработали {{hours}} часов на этой неделе.',
    'not-worked': 'На этой неделе вы еще ничего не сделали.'
  },
  'monthly': {
    'title': 'Месяц {{from}} - {{to}}',
    'info': '{{name}} {{year}}',
    'worked': 'Вы проработали {{hours}} часов в этом месяце.',
    'not-worked': 'В этом месяце вы еще ничего не сделали.'
  },
  'period-table': {
    'start': 'Начало',
    'end': 'Конец',
    'duration': 'Продолжительность',
    'contract': 'Контракт',
    'comment': 'Комментарий',
    'entry': {
      'duration': '{{hours}} часов',
      'success-message': 'Запись удалена!',
      'error-message': 'Удаление записи не удалось!',
      'edit-title': 'Редактировать запись',
      'edit-action': 'Редактировать запись',
      'delete-title': 'Удалить запись',
      'delete-message': 'Вы действительно хотите удалить эту запись?',
      'delete-action': 'Удалить'
    }
  },
  'contract': {
    'title': 'Контракты',
    'no-contracts': 'У вас еще нет контрактов.',
    'add': 'Добавить контракт',
    'detail': {
      'title': 'Контракт: {{name}}',
      'info': '{{from}} - {{to}}: {{hours}} часов в неделю',
      'time': 'Рабочее время: '
    }
  },
  'contract-table': {
    'name': 'Имя',
    'start': 'Начало',
    'end': 'Конец',
    'hours-per-week': 'Часов в неделю',
    'statistics': 'Статистика'
  },
  'contract-time-info': {
    'text': '({{hours}}) часов'
  },
  'contract-dialog': {
    'name': 'Имя',
    'start': 'Начало',
    'end': 'Конец',
    'hours-per-week': 'Часов в неделю',
    'cancel': 'Отменить',
    'save': 'Сохранить',
    'success-message': 'Контракт сохранен!',
    'error-message': 'Сохранение контракта прошло неуспешно!'
  },
  'contract-edit-buttons': {
    'edit-title': 'Редактировать контракт',
    'delete-title': 'Удалить контракт',
    'delete-message': 'Вы действительно хотите удалить этот контракт? Это приведет к удалению всех записей, которые были зарегистрированы в ' +
      'этом контракте.',
    'delete-confirm': 'Удалить',
    'success-message': 'Контракт удален!',
    'error-message': 'Не удалось удалить контракт!'
  },
  'add-contract-component': {
    'name': 'Контракт {{number}}'
  },
  'confirm-dialog': {
    'cancel': 'Отменить'
  },
  'select-language': {
    'name': {
      'ru': 'Русский',
      'en': 'Englisch'
    }
  },
  'itoast': {
    'success-title': 'Успешно',
    'error-title': 'Ошибка'
  },
  'errors': {
    'description': 'Это поле',
    'inclusion': '{{description}} не входит в список',
    'exclusion': '{{description}} зарезервировано',
    'invalid': '{{description}} неверно',
    'confirmation': '{{description}} не соответствует {{on}}',
    'accepted': '{{description}} должно быть принято',
    'empty': '{{description}} не может быть пустым',
    'blank': '{{description}} не может быть пустым',
    'present': '{{description}} должно быть пустым',
    'collection': '{{description}} должно быть коллекцией',
    'singular': '{{description}} не может быть коллекцией',
    'tooLong': '{{description}} слишком длинное (максимум {{max}} символов)',
    'tooShort': '{{description}} слишком короткое (минимум {{min}} символов)',
    'before': '{{description}} должно быть до {{before}}',
    'after': '{{description}} должно быть после {{after}}',
    'wrongDateFormat': '{{description}} должна быть в формате: {{format}}',
    'wrongLength': '{{description}} - неправильная длина (должно быть {{is}} символов)',
    'notANumber': '{{description}} должно быть числом',
    'notAnInteger': '{{description}} должно быть целым числом',
    'greaterThan': '{{description}} должно быть больше, чем {{gt}}',
    'greaterThanOrEqualTo': '{{description}} должно быть больше либо равно {{gte}}',
    'equalTo': '{{description}} должно быть равно {{is}}',
    'lessThan': '{{description}} должно быть меньше, чем {{lt}}',
    'lessThanOrEqualTo': '{{description}} должно быть меньше либо равно {{lte}}',
    'otherThan': '{{description}} должно быть другим, нежели {{value}}',
    'odd': '{{description}} должно быть нечетным',
    'even': '{{description}} должно быть четным',
    'positive': '{{description}} должно быть положительным',
    'date': '{{description}} должно быть корректной датой',
    'email': '{{description}} должно быть правильным e-mail адресом',
    'phone': '{{description}} должно быть правильным номером телефона',
    'url': '{{description}} должно быть правильной url-ссылкой',
    'no-whitespace-around': '{{description}} не должно содержать пробелов в начале и в конце'
  }
};
