// Dicee – orijinal mantık korunur, sadece topladım ve düzelttim

function rollDice() {
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const title = document.querySelector("h1");

  // 1–6
  const n1 = Math.floor(Math.random() * 6) + 1;
  const n2 = Math.floor(Math.random() * 6) + 1;

  // Görselleri güncelle
  img1.setAttribute("src", `images/dice${n1}.png`);
  img2.setAttribute("src", `images/dice${n2}.png`);
  img1.setAttribute("alt", `Player 1 dice (${n1})`);
  img2.setAttribute("alt", `Player 2 dice (${n2})`);

  // Başlığı güncelle
  if (n1 > n2) {
    title.textContent = "🚩 Player 1 Wins!";
  } else if (n2 > n1) {
    title.textContent = "Player 2 Wins! 🚩";
  } else {
    title.textContent = "Draw! 🎲🎲";
  }
}

// Sayfa yüklenince zarları ata (orijinal davranış: refresh’te değişsin)
document.addEventListener("DOMContentLoaded", rollDice);

// Opsiyonel buton: yenilemeden zar at
const rollBtn = document.getElementById("rollButton");
if (rollBtn) {
  rollBtn.addEventListener("click", rollDice);
}

// İsteğe bağlı: Space ile at
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    rollDice();
  }
});
