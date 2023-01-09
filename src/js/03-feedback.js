import _ from 'lodash';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
input.addEventListener('input', () => {
  let inputData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
});
textarea.addEventListener('input', () => {
  let inputData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
});
storageOutput = JSON.parse(localStorage.getItem('feedback-form-state'));
function updateOutput() {
  if (storageOutput) {
    input.value = storageOutput.email;
    textarea.value = storageOutput.message;
  } else {
    input.value = '';
    textarea.value = '';
  }
}
updateOutput();
form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(storageOutput);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
