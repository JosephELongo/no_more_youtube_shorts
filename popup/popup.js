// Handle the refresh button click
document.getElementById('refresh').addEventListener('click', () => {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        // Reload the tab
        chrome.tabs.reload(tabs[0].id);
      }
    });
  });