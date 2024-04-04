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

  writeClipboardText(input.value);
  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

  // input.select();
  //   input.setSelectionRange(0, 99999);
  //   document.execCommand('copy');

  //  const source = document.querySelector("div.source");
  // source.addEventListener("copy", (event) => {
  //   const selection = document.getSelection();
  //   event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  //   event.preventDefault();
  // });
  // input.select();
  // document.execCommand("Copy");
  // async function copyClipboard() {
  //   try {
  //     await navigator.clipboard.writeText(input.value);
  //     console.log('Page URL copied to clipboard');
  //   } catch (err) {
  //     console.error('Failed to copy: ', err);
  //   }
  // }
  // input.select();

  //    // Copy the text inside the text field
  //   navigator.clipboard.writeText(input.value);
  //   var text_to_copy = input.value;

  //   if (!navigator.clipboard) {
  //     // use old commandExec() way
  //     document.execCommand("copy");
  //   } else {
  //     navigator.clipboard.writeText(text_to_copy)
  //   };
  // // Copy the text inside the text field
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
    console.log('Click on picture')
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
    console.log('Pasted varTitle');
  } else {
    console.error('Input element not found');
  }
};

function imgSoc() {
};

function pt(varTitle) {
  const pasteInput = document.getElementById('media-search-input');
  navigator.clipboard
    .readText()
    .then((clipText) => (pasteInput.innerText = clipText));

  // Loop through each character in the input string
  // for (let i = 0; i < varTitle.length; i++) {
  //   // Create a new InputEvent for the current character
  //   const event = new InputEvent('input', {
  //     inputType: 'insertText',
  //     data: varTitle[i],
  //     dataTransfer: null,
  //     isComposing: false,
  //     bubbles: true,
  //     cancelable: false,
  //     composed: true
  //   });

  // Dispatch the event on the input element
  // pasteInput.dispatchEvent(event);

};
// // Loop through each character in the input string

//   // Create a new KeyboardEvent for the current character
//   const event = new KeyboardEvent('keydown', {
//     key: varTitle[i],
//     code: varTitle.charCodeAt(i),
//     which: varTitle.charCodeAt(i),
//     keyCode: varTitle.charCodeAt(i),
//   });

//   // Dispatch the event on the input element
//   pasteInput.dispatchEvent(event);
//   console.log('dispatch')


// Example usage:

// pasteInput.focus();
// // const text = navigator.clipboard.readText();
// document.execCommand('paste');
// // pasteInput.value += text;
// // document.querySelector('textarea').value += text;
// console.log('Text pasted.');
// // Select the input element by its id
// var inputElement = document.getElementById('media-search-input');
// // Check if the input element exists
// if (inputElement) {
//   // Set the value of the input field to the variable value
//   console.log(varTitle)
//   inputElement.value = varTitle;
// } else {
//   console.error('Input element not found');
// }
function buttonClick() {
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector('button.media-button.button-primary.button-large.media-button-select').click()
  // setTimeout(() => clickExit(), 1000);
  // document.querySelectorAll('div[id*="__wp-uploader"][style="position: relative;"]')[0].querySelector('button.media-button.button-primary.button-large.media-button-select').click()
  // document.querySelector('div[id="__wp-uploader-id-3"]').querySelectorAll('button.media-button.button-primary.button-large.media-button-select')[0].click()
  // document.querySelector("[id^=__wp-uploader-id-]").querySelector('button.media-button.button-primary.button-large.media-button-select').click() 
  console.log('click')
};
function clickExit() {
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector('button.media-modal-close').click();
  console.log('exit');
}
function pasteClick(varTitle) {
  // setTimeout(clickExit(), 3000);
  setTimeout(() => pasteVarTitle(varTitle), 2000);
  setTimeout(() => buttonClick(), 5000);
};

function socialImage() {
title = ct();
  document.getElementById("wpseo-meta-tab-social").click();
  console.log('socialImage')
  setTimeout(function() {
    document.getElementById("social-select-button-metabox").click();
    console.log('click image');
  }, 1000);
};
function twitterImage() {
title = ct();
  document.getElementById("wpseo-meta-tab-social").click();
  document.querySelector('.sc-iMSIvx.ljMQvr button').click();
 setTimeout(() => { document.getElementById("twitter-select-button-metabox").click()}, 1000);
  console.log('click tiwitter image');
  // document.querySelector('.sc-iMSIvx.ljMQvr button').click();
}
function copyDescription() {
  const iframe = document.getElementById("content_ifr");
  const input = iframe.contentWindow.document.documentElement;

  writeClipboardText2(input.innerText);
  async function writeClipboardText2(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }
  return input.innerText;
}
function pasteMetaDescription(varDescript) {
  document.getElementById("wpseo-meta-tab-content").click();
  setTimeout(() => {document.getElementById('yoast-google-preview-description-metabox').querySelector('span').innerText = varDescript;
  },1000);
}
function socialDescription(varDescript) {
  document.getElementById("wpseo-meta-tab-social").click();
  setTimeout(function() {
    document.getElementById('social-description-input-metabox').querySelector('span').innerText = varDescript;
    console.log('socialDescription');
  }, 1000);
};
function twitterDescription(varDescript) {
  document.querySelector('.sc-iMSIvx.ljMQvr button').click();
  setTimeout(() => {document.getElementById('twitter-description-input-metabox').querySelector('span').innerText = varDescript;
  console.log('twitterDescription');
  }, 1000);
  document.querySelector('.sc-iMSIvx.ljMQvr button').click();
}
function copyPasteDescription() {
  const varDescript = copyDescription();
  console.log(varDescript)
  pasteMetaDescription(varDescript);
setTimeout(()  => socialDescription(varDescript), 2000);
  setTimeout(() => twitterDescription(varDescript), 2000);
}
const TitleCopied = ct();
console.log(TitleCopied);

var f = [// ip,
  // pasteClick,
  socialImage,
  // pt,
  twitterImage,
  copyDescription,
  // pasteMetaDescription,
  // socialDescription,
  // twitterDescription,
  copyPasteDescription];

ip()
setTimeout(() => {window.addEventListener('load', pasteClick(TitleCopied), { once: true });}, 3000);
