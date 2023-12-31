// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");

// ボタンがクリックされたらイベント処理を実行する
btn.addEventListener("click", () => {
  document.getElementById("text").textContent = "ボタンをクリックしました";
});
