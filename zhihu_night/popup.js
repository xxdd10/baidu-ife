document.addEventListener('DOMContentLoaded', function () {
  // document.getElementById("night").addEventListener('click',changeColor);
  changeColor();
});

function changeColor(e) {
  chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='black';document.body.style.color='#FFD201'"});
  window.close();
}