// const websites = [
//   { name: 'Website 1', password: 'password1' },
//   { name: 'Website 2', password: 'password2' },
//   { name: 'Website 3', password: 'password3' }
// ];

function copyPasswordToClipboard(password) {
  const el = document.createElement('textarea');
  el.value = password;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// Iterate through the list of websites and create a "Copy to Clipboard" button for each
websites.forEach(website => {
  const button = document.createElement('button');
  button.textContent = 'Copy Password';
  button.addEventListener('click', () => {
    copyPasswordToClipboard(website.password);
    alert('Password copied to clipboard!');
  });
  // Append the button to the website information on the webpage
  // For example:
  const websiteElement = document.createElement('div');
  websiteElement.textContent = `${website.name}: ${website.password}`;
  websiteElement.appendChild(button);
  document.body.appendChild(websiteElement);
});
