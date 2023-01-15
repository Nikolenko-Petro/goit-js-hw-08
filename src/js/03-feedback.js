import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

function handleSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  const userDetails = { email: email.value, message: message.value };
  console.log(userDetails);

  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
form.addEventListener('submit', handleSubmit);

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}
