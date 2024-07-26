chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes('linkedin.com/analytics/search-appearances')) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js'],
    });
  }
});
