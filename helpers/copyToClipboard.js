

function copyPasswordToClipboard(password) {
  const el = document.createElement('textarea');
  el.value = password;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Password copied to clipboard!');
}



