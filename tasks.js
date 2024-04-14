const published = document.getElementById("post-status-display").innerText;
if (published != "Published ") {
  alert('O produto não está publicado, pois seu status é: ' + published);
} else {
  console.log(published);
  // window.focus();
  const TitleCopied = ct();
  console.log(TitleCopied);
  descriptionEvents();
  img(TitleCopied);
}

async function img(TitleCopied) {
  await ip();
  setTimeout(() => {
    window.addEventListener('load', pasteClick(TitleCopied), { once: true });
    console.log('timeout for pasteClick');
  }, 6000);

}

async function paste(input) {
  const text = await navigator.clipboard.readText();
  input.value = text;
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}
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
}

async function ip() {
  // Select the anchor element using its class name
  const link = document.querySelector('div.inside p.hide-if-no-js a');

  // Check if the link exists
  if (link) {
    // Simulate a click event on the link
    link.click();
    console.log('Click on picture')
  } else {
    console.error('Link not found');
  }
}

async function pasteVarTitle(varTitle) {
  // Select the input element by its id
  console.log('pasteVarTitle function called');
  var inputElement = document.getElementById('attachment-details-title');

  // Check if the input element exists
  if (inputElement) {
    // Set the value of the input field to varTitle
    // await setTimeout(async () => { 
    inputElement.value = varTitle;
    console.log('Pasted varTitle');
    // }, 3000);
  } else {
    console.error('Input element not found');
  }
}

// function pt(varTitle) {
//   const pasteInput = document.getElementById('media-search-input');
//   jQuery("#media-search-input").focus();
//   navigator.clipboard
//     .readText()
//     .then((clipText) => (pasteInput.innerText = clipText));

//   // Loop through each character in the input string
//   // for (let i = 0; i < varTitle.length; i++) {
//   //   // Create a new InputEvent for the current character
//   //   const event = new InputEvent('input', {
//   //     inputType: 'insertText',
//   //     data: varTitle[i],
//   //     dataTransfer: null,
//   //     isComposing: false,
//   //     bubbles: true,
//   //     cancelable: false,
//   //     composed: true
//   //   });

//   // Dispatch the event on the input element
//   // pasteInput.dispatchEvent(event);

// }
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
  console.log('set product image button click')
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector('button.media-button.button-primary.button-large.media-button-select').click()
}
// setTimeout(() => clickExit(), 1000);
// document.querySelectorAll('div[id*="__wp-uploader"][style="position: relative;"]')[0].querySelector('button.media-button.button-primary.button-large.media-button-select').click()
// document.querySelector('div[id="__wp-uploader-id-3"]').querySelectorAll('button.media-button.button-primary.button-large.media-button-select')[0].click()
// document.querySelector("[id^=__wp-uploader-id-]").querySelector('button.media-button.button-primary.button-large.media-button-select').click() 
function clickExit() {
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector('button.media-modal-close').click();
  console.log('exit');
}
async function pasteClick(varTitle) {
  // event listener on media button
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])')
    .querySelector('button.media-button.button-primary.button-large.media-button-select')
    .addEventListener('click', (event) => {
      console.log('buttonClick, calling si-function');
      si();
    }, { once: true }
    );
  // setTimeout(clickExit(), 3000);
  await pasteVarTitle(varTitle);
  buttonClick();
  console.log('exiting pasteClick function');
}
function si() {
  // function socialImage() {
  // develop click function on id="media-search-input" 
  // click function on div.thumbnail"
  // #__attachments-view-607 > li:nth-child(1) > div:nth-child(1) > div:nth-child(1)
  // document.querySelectorAl('li.attachment.save-ready').click()
  // document.getElementById('__wp-uploader-id-3').querySelector('li.attachment.save-ready').click()  
  // title = ct();

  document.getElementById("wpseo-meta-tab-social").click();
  console.log('social tab click');
  setTimeout(() => {
    document.getElementById("social-select-button-metabox").click();
    console.log('social image click');
  }, 1000);
  setTimeout(() => {
    console.log('click media search')
    document.execCommand('paste');
    document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector("#media-search-input").focus();
    // event listener autoclick on Select button after picture choice
    jQuery('.attachments-wrapper').on('click', () => {
      console.log('picture Select Button clicked');
      jQuery('.button.media-button.button-primary.button-large.media-button-select').click();
      console.log('click on media select button calling twitter');
      setTimeout(() => twitterImage(), 1000);
    });
    // event listener on select button to open twitter image
    // document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector("button.media-button.button-primary.button-large.media-button-select").addEventListener('click', (event) => {
    // }, { once: true });
  }, 5000);
}
function twitterImage() {
  document.querySelector('.sc-iMSIvx.ljMQvr button').click();
  setTimeout(() => {
    document.getElementById("twitter-select-button-metabox").click();
    console.log('click tiwitter image');
  }, 1000);
  setTimeout(() => {
    const actualPage = document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])');
    actualPage.querySelector("#media-search-input").focus();
    // event listener autoclick on Select button after picture choice
    actualPage.querySelector('.attachments-wrapper').addEventListener('click', () => {
      console.log('picture Select Button clicked');
      actualPage.querySelector('.button.media-button.button-primary.button-large.media-button-select').click();
    });
  }, 2000);

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
function pasteMetaDescription() {
  document.getElementById("wpseo-meta-tab-content").click();
  const source = document.getElementById('yoast-google-preview-description-metabox').querySelectorAll('span')[0];
  source.addEventListener('copy', function() {
    const selection = document.getSelection(event);
    event.clipboardData.setData("text/plain", selection.toString());
    event.preventDefault();
    console.log(navigator.clipboard.readText());
    socialDescription();
  }, { once: true });

  source.click();
  // source.addEventListener("copy", (event) => {
  // }
  // );
} // setTimeout(() => {document.getElementById('yoast-google-preview-description-metabox').querySelector('span').innerText = varDescript;
// document.getElementById('yoast-google-preview-description-metabox').querySelector('span').focus();
// },1000);
function socialDescription() {
  document.getElementById("wpseo-meta-tab-social").click();
  // setTimeout(function() {
  const source = document.getElementById('social-description-input-metabox').querySelector('span')
  source.click();
  source.addEventListener('paste', function() {
    twitterDescription()
  }, { once: true });
  // document.getElementById('social-description-input-metabox').querySelector('span').innerText = varDescript;
  // console.log('socialDescription');
  // }, 10000);
}
function twitterDescription() {
  document.getElementById("wpseo-meta-tab-social").click();
  document.querySelector('.sc-iMSIvx.ljMQvr button').click();
  // setTimeout(() => {
  document.getElementById('twitter-description-input-metabox').querySelector('span').click();
  // console.log('twitterDescription');
  // }, 1000);
}
// function cp1() {
//   // const varDescript = copyDescription();
//   // console.log(varDescript)
//   pasteMetaDescription();
//   jumpSocial();
// }
// function cp2() {
//   socialDescription();
//   setTimeout(() => twitterDescription(), 5000);
// }
// function jumpSocial() {
// }
async function descriptionEvents() {
  const iframe = document.getElementById("content_ifr");
  const input = iframe.contentWindow.document.documentElement;
  // document.getElementById("content_ifr").contentWindow.document.documentElement;
  input.addEventListener('cut', function() {
    // const selection = document.getSelection(event);
    // event.clipboardData.setData("text/plain", selection.toString());
    // event.preventDefault();
    window.focus();
    // let materialList = function() {
    //   navigator.clipboard.readText()
    //     .then(clipText => {
    //       console.log(clipText);
    //     })
    //     .catch(err => {
    //       console.error('Failed to read clipboard contents: ', err);
    //     })
    // }
    // console.log('MaterialList: ', materialList());
    CustomTabs();
  });
}


// copy the first lines to copy to meta and social
// input.addEventListener('copy', function() {
//   pasteMetaDescription();
//   console.log('copied')
// }
// );


async function CustomTabs() {
  console.log('CustonTabs');
  async function createSavedTab() {
    document.querySelector('li.yikes_wc_product_tabs_tab a').click();
    document.getElementById("_yikes_wc_apply_a_saved_tab").click();
    setTimeout(() => {
      document.getElementById('saved_tab_container_1').querySelector('span.yikes_woo_saved_tab_selector_lity.dashicons.dashicons-plus-alt').click();
    }, 4000);
  }
  await createSavedTab();
  console.log('Saved tab created');
  setTimeout(function() {
    window.scroll({
      top: 3000,
      left: 0,
      behavior: "instant",
    });
    document.getElementById('_yikes_wc_custom_repeatable_product_tabs_tab_content_1_ifr').contentWindow.focus();
    document.getElementById('_yikes_wc_custom_repeatable_product_tabs_tab_content_1_ifr').contentWindow.document.documentElement.querySelector('p').textContent = '';
    document.getElementById('_yikes_wc_custom_repeatable_product_tabs_tab_content_1_ifr').contentWindow.document.execCommand('paste');
    paste(document.getElementById('_yikes_wc_custom_repeatable_product_tabs_tab_content_1_ifr').contentWindow.document.documentElement.querySelector('p').textContent);
  }, 10000);
  document.getElementById('yikes_woo_save_custom_tabs').addEventListener('click', function() {
    writeClipboardText(document.URL);
    setTimeout(() => document.getElementById('publish').click(), 3000);
  })
}
// setTimeout((tabsCuted) => {
//   document.getElementById('_yikes_wc_custom_repeatable_product_tabs_tab_content_1_ifr').contentWindow.document.documentElement.innerText = tabsCuted;
// }, 6000);
// querySelector('p.yikes-custom-woo-tab-title yikes-custom-woo-tab-title-additional-information').innerText();  

