
// New function to copy text to clipboard
function copyLink() {
  let copyText = document.getElementById("copyText")

  var selection = window.getSelection();

  var range = document.createRange();

 range.selectNodeContents(copyText);

 selection.removeAllRanges();

selection.addRange(range);

document.execCommand('copy');
}

// function copyPasswordToClipboard(password) {
//   const el = document.createElement('textarea');
//   el.value = password;
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
//   alert('Password copied to clipboard!');
// }



