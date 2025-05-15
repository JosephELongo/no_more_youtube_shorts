
// YouTube Shorts Blocker
// This script identifies and hides YouTube Shorts sections on the homepage

// Function to hide Shorts content
function hideShortsContent() {
  console.log("YouTube Shorts Blocker: Looking for Shorts content to hide...");
  
  // Find all section headers
  const headers = document.querySelectorAll('ytd-rich-section-renderer');
  
  headers.forEach(header => {
    // Check if this is a Shorts section
    if (header.innerText.includes("Shorts")) {
      console.log("YouTube Shorts Blocker: Found Shorts section, hiding it");
      header.style.display = "none";
    }
  });
  
  // Find individual Shorts in recommendations (they have specific tags)
  const shortsItems = document.querySelectorAll('ytd-rich-item-renderer:has(a[href*="shorts"])');
  shortsItems.forEach(item => {
    console.log("YouTube Shorts Blocker: Found individual Shorts item, hiding it");
    item.style.display = "none";
  });
}

// Initial run
hideShortsContent();

// Set up a mutation observer to handle dynamically loaded content
const observer = new MutationObserver((mutations) => {
  hideShortsContent();
});

// Start observing the document body for changes
observer.observe(document.body, { 
  childList: true,
  subtree: true
});

// Log that the extension is active
console.log("YouTube Shorts Blocker: Extension active");
