const cb = document.getElementById("toggleBypass");
const btnAns = document.getElementById("btnShowAnswers");
const btnScore = document.getElementById("btnShowScore");

// Khởi tạo checkbox theo storage
chrome.storage.local.get("bypassEnabled", res => {
  cb.checked = !!res.bypassEnabled;
});

// Toggle bypass
cb.addEventListener("change", () => {
  chrome.storage.local.set({ bypassEnabled: cb.checked });
});

// Gửi message showAnswers
btnAns.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "showAnswers" });
  });
});

// Gửi message showScore
btnScore.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "showScore" });
  });
});
