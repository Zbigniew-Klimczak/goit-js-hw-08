import _ from 'lodash';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
function collectInputData() {
  let inputData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}
[input, textarea].forEach(element =>
  element.addEventListener(
    'input',
    _.throttle(() => {
      collectInputData();
    }, 500)
  )
);
const outputStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
function updateOutput() {
  if (outputStorage !== null) {
    input.value = outputStorage.email;
    textarea.value = outputStorage.message;
  } else {
    input.value = '';
    textarea.value = '';
  }
}
updateOutput();

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const submitStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  form.reset();
  console.log(submitStorage);
});
