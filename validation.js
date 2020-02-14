// validation script here
const inputs = document.querySelectorAll('input');

//regex patterns
const patterns = {
  telephone: /^[0,5]{2}\d{8}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-_]+)@([a-z\d_\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

//validation function
function validate(field, pattern) {
  if (pattern.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach(input => {
  input.addEventListener('keyup', event =>
    validate(event.target, patterns[event.target.name])
  );
});
