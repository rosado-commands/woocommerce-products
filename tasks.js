const published = document.getElementById("post-status-display").innerText;
if (published != "Published ") {
  alert('O produto não está publicado, pois seu status é: ' + published);
} else {
  console.log(published);
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
  var input = document.querySelector('input[name="post_title"]');

  if (!input) {
    console.error('Input field "post_title" not found');
    return ''; 
  }

  if (!input.value) {
    console.error('Input field "post_title" is empty');
    return ''; 
  }

  writeClipboardText(input.value);

  return input.value;
}

async function ip() {
  const link = document.querySelector('div.inside p.hide-if-no-js a');

  if (link) {
    link.click();
    console.log('Click on picture')
  } else {
    console.error('Link not found');
  }
}

async function pasteVarTitle(varTitle) {
  console.log('pasteVarTitle function called');
  var inputElement = document.getElementById('attachment-details-title');

  if (inputElement) {
    inputElement.value = varTitle;
    console.log('Pasted varTitle');
  } else {
    console.error('Input element not found');
  }
}

function buttonClick() {
  console.log('set product image button click')
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector('button.media-button.button-primary.button-large.media-button-select').click()
}
function clickExit() {
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])').querySelector('button.media-modal-close').click();
  console.log('exit');
}
async function pasteClick(varTitle) {
  document.querySelector('div[id*="__wp-uploader"][style="position: relative;"]:not([aria-hidden="true"])')
    .querySelector('button.media-button.button-primary.button-large.media-button-select')
    .addEventListener('click', (event) => {
      console.log('buttonClick, calling si-function');
      si();
    }, { once: true }
    );
  await pasteVarTitle(varTitle);
  buttonClick();
  console.log('exiting pasteClick function');
}
function si() {

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
    jQuery('.attachments-wrapper').on('click', () => {
      console.log('picture Select Button clicked');
      jQuery('.button.media-button.button-primary.button-large.media-button-select').click();
      console.log('click on media select button calling twitter');
      setTimeout(() => twitterImage(), 1000);
    });
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
}
function socialDescription() {
  document.getElementById("wpseo-meta-tab-social").click();
  const source = document.getElementById('social-description-input-metabox').querySelector('span')
  source.click();
  source.addEventListener('paste', function() {
    twitterDescription()
  }, { once: true });
}
function twitterDescription() {
  document.getElementById("wpseo-meta-tab-social").click();
  document.querySelector('.sc-iMSIvx.ljMQvr button').click();
  document.getElementById('twitter-description-input-metabox').querySelector('span').click();
}
async function descriptionEvents() {
  const iframe = document.getElementById("content_ifr");
  const input = iframe.contentWindow.document.documentElement;
  input.addEventListener('cut', function() {
    window.focus();
    CustomTabs();
  });
}
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
