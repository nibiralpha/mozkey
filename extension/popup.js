chrome.browserAction.onClicked.addListener(function (tab) {
  console.log(tab);
  
  chrome.tabs.query({ active: true }, function (tabs) {
    console.log(tabs);
    
    chrome.tabs.sendMessage(tabs[0].id, { task: "click" }, function (response) {
      console.log(response);
    });
  });
});


