function hideShortsContents() {
  //grab a NodeList of every element that contains the text 'ytd-rich-section-renderer'
  //ytd-rich-section-renderer is a custom element that outlines all the major sections of YouTube
  const richSectionRenderers = document.querySelectorAll('ytd-rich-section-renderer');

  //Create an anonymous function with the syntax =>
  //For every element in headers, apply this function
  //This function looks at the innerText attribute of each header and asks if it contains the word "Shorts"
  //If it does, set that header to be invisible
  richSectionRenderers.forEach(richSectionRenderer => {
    if (!richSectionRenderer) return;
    if (richSectionRenderer.innerText.includes("Shorts")) {
      richSectionRenderer.style.display = "none";
    }
  });

  //Now, grab a NodeList of every element that contains the text 'ytd-rich-item-renderer', but filtered to those that have a link with the word shorts in it
  //Same as before, iterate over those items and set them to be invisible
  const shortsRichItemRenderers = document.querySelectorAll('ytd-rich-item-renderer:has(a[href*="shorts"])');
  shortsRichItemRenderers.forEach(shortsRichItemRenderer => {
    if (!shortsRichItemRenderer) return;
    shortsRichItemRenderer.style.display = "none";
  });
}

//When content.js is called for the first time, run hideShortsContents
hideShortsContents();

//Create an observer that listens for changes in the DOM
//When a change occurs, run hideShortsContents again
const observer = new MutationObserver(on_dom_change_hide_shorts => {
  hideShortsContents();
});


//"Turn on" the observer and have it listen for any changes in the DOM, as well as its children and subtrees
observer.observe(document.body, { 
  childList: true,
  subtree: true
});