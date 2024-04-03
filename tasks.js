function pauseExecution() {
  // Pause for 1 second (1000 milliseconds)
  setTimeout(function() {
    // Code to execute after the pause
    console.log("Pause finished. Resuming execution...");

    // Place any code you want to execute after the pause inside this function
  }, 1000); // 1000 milliseconds = 1 second
};

function ct() {
  // Get the input field by its name attribute
  var input = document.querySelector('input[name="post_title"]');

  // Check if the input field exists
  if (!input) {
    console.error('Input field "post_title" not found');
    return ''; // Return an empty string if input field is not found
  }

  // Check if the input field has a value
  if (!input.value) {
    console.error('Input field "post_title" is empty');
    return ''; // Return an empty string if input field is empty
  }

  // Return the value of the input field
  return input.value;
};

function ip() {
  // Select the anchor element using its class name
  var link = document.querySelector('div.inside p.hide-if-no-js a');

  // Check if the link exists
  if (link) {
    // Simulate a click event on the link
    link.click();
  } else {
    console.error('Link not found');
  }
};

function pasteVarTitle(varTitle) {
  // Select the input element by its id
  var inputElement = document.getElementById('attachment-details-title');

  // Check if the input element exists
  if (inputElement) {
    // Set the value of the input field to varTitle
    inputElement.value = varTitle;
  } else {
    console.error('Input element not found');
  }
};

function imgSoc() {
  document.getElementById("social-select-button-metabox").click();
};

function pt(varTitle) {
  // Select the input element by its id

  var inputElement = document.getElementById('media-search-input');
  // Check if the input element exists
  if (inputElement) {
    // Set the value of the input field to the variable value
    inputElement.value = varTitle;
  } else {
    console.error('Input element not found');
  }
};
function buttonClick() {
  document.querySelector('button.button.media-button.button-primary.button-large.media-button-select').click();
  console.log('click')
};
function pasteClick(varTitle) {
pasteVarTitle(varTitle);
setTimeout(buttonClick, 1000);
}
var varTitle = ct();

console.log(varTitle);

ip();

window.addEventListener('load', pasteClick(varTitle), { once: true });
setTimeout(function() {
  console.log('meta');
  document.getElementById("wpseo-meta-tab-social").click();
}, 2000);
setTimeout(imgSoc(), 3000);

// window.removeEventListener('load');
// window.addEventListener('load', pt(varTitle));

// setTimeout(imgSoc(),9000);
}, { once: true });
// window.removeEventListener('load');
// window.addEventListener('load', pt(varTitle));

