// 移除模型載入的相關程式碼，模型變數也不再需要。
// let model;
// mobilenet.load().then(m => {
//   model = m;
//   console.log("模型載入完成🌱");
// });

document.getElementById("plantImage").addEventListener("change", function() {
  const file = this.files[0];
  if (!file) return;

  const img = document.getElementById("preview");
  img.src = URL.createObjectURL(file);
  img.classList.remove("hidden");
});

document.getElementById("analyzeBtn").addEventListener("click", async function () {
  const img = document.getElementById("preview");
  const resultBox = document.getElementById("result");
  const name = document.getElementById("plantName").value.trim();
  // 這裡的 customName 仍可保留，用於顯示在靜態結果中
  const customName = name ? `「${name}」` : "你的植物";

  if (!img.src || img.src.includes("data:image/gif;base64")) {
    resultBox.classList.remove("hidden");
    resultBox.innerText = "請先上傳植物照片喔 🌱";
    return;
  }

  resultBox.classList.remove("hidden");
  // 因為沒有模型辨識，這裡可以立即顯示結果，不需要「分析中」的等待提示。
  // resultBox.innerText = "分析中，請稍等...🌿";

  // -------------------------------------------------------------
  // **已移除 AI 辨識功能**
  // const predictions = await model.classify(img);
  // const top = predictions[0];
  // const identifiedPlant = top.className;
  // const confidence = (top.probability * 100).toFixed(1);
  // -------------------------------------------------------------

  // 顯示固定的靜態結果，不再依賴模型辨識的結果
  resultBox.innerText =
`${customName} 的狀況分析：

📌 -基本推測與觀察-
• 狀態：照片看起來生長良好，請持續觀察。  

🌿 -通用狀態推測-
• 葉色正常，若有變黃可能是光照或水分不均  
• 整體可再觀察 2-3 天，或根據植物特性調整  

🌱 -通用改善建議-
• 澆水：每 5–7 天檢查土是否乾燥再澆水  
• 陽光：明亮散射光最佳，避免長時間直射  
• 施肥：1 個月一次稀釋通用肥即可  

需要更深入的照顧建議，請根據植物實際種類上網查詢喔！`;
});