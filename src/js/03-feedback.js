import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  textarea'),
  message: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(event) {
  formData[event.target.name] = event.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// ============проверка ==============//
isTextarea();
function isTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage.email);
  console.log(savedMessage.message);
  console.log(savedMessage);
  if (savedMessage) {
    refs.email.value = savedMessage.email;
    refs.message.value = savedMessage.message;
  }
}
