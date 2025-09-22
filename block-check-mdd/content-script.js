// Hàm inject code vào context trang
function inject(code) {
  const s = document.createElement("script");
  s.textContent = code;
  document.documentElement.appendChild(s);
  s.remove();
}

// 1️⃣ Bypass check_ip.php nếu bật
chrome.storage.local.get("bypassEnabled", ({ bypassEnabled }) => {
  if (bypassEnabled) {
    inject(`
      (function() {
        const originalFetch = window.fetch;
        window.fetch = function(resource, init) {
          if (typeof resource === "string" && resource.includes("check_ip.php")) {
            return Promise.resolve(
              new Response(
                JSON.stringify({ fingerprintFound: true }),
                { status: 200, headers: { "Content-Type": "application/json" } }
              )
            );
          }
          return originalFetch.apply(this, arguments);
        };
      })();
    `);
  }
});

// 2️⃣ Nghe message từ popup
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "showAnswers") {
    // Load showDapAn.js rồi gọi showDapAn()
    const script = document.createElement("script");
    script.src = "https://ionglong07.github.io/raw/XemDapAn/showDapAn.js";
    script.onload = () => {
      inject("showDapAn();");
    };
    document.documentElement.appendChild(script);
  }

  if (msg.action === "showScore") {
    // Load showDapAn.js rồi gọi showDiemSo()
    const script = document.createElement("script");
    script.src = "https://ionglong07.github.io/raw/XemDapAn/showDapAn.js";
    script.onload = () => {
      inject("showDiemSo();");
    };
    document.documentElement.appendChild(script);
  }
});
