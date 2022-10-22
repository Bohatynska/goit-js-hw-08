import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector('.feedback-form input'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

const STORAGE_KEY = 'feedback-form-state';

isTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Все поля должны быть заполнены!');
  }
}

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

// ============проверка ==============//
function isTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  //   if (savedMessage) {
  //     refs.textarea.value = savedMessage;
  //   }
}
