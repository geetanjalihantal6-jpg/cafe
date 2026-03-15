// Smooth scroll to sections
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Menu switching
function switchMenu(menuKey) {
  const panes = document.querySelectorAll(".Menu-pane");
  const buttons = document.querySelectorAll(".Menu-btn");

  panes.forEach((pane) => {
    pane.classList.remove("active");
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  const activePane = document.getElementById(`menu-${menuKey}`);
  const activeBtn = document.querySelector(`.Menu-btn[data-menu="${menuKey}"]`);

  if (activePane) activePane.classList.add("active");
  if (activeBtn) activeBtn.classList.add("active");
}

// Fake submit handler (you can connect this to backend / WhatsApp later)
function handleOrderSubmit(event) {
  event.preventDefault();

  const btn = document.getElementById("order-btn");
  const message = document.getElementById("order-message");
  const name = document.getElementById("name").value.trim();

  if (!name) return;

  btn.classList.add("loading");
  btn.disabled = true;
  message.textContent = "";

  setTimeout(() => {
    btn.classList.remove("loading");
    btn.disabled = false;
    message.textContent =
      "Thank you, " +
      name +
      ". Your Satvik meal request has been received. We will call you shortly to confirm.";
    message.classList.add("success");
  }, 1600);
}

function switchDish(key) {
  const panes = document.querySelectorAll(".Menu-pane");
  const buttons = document.querySelectorAll(".Menu-btn");

  panes.forEach((pane) => pane.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  const activePane = document.getElementById(`dish-${key}`);
  const activeBtn = document.querySelector(`.Menu-btn[data-menu="${key}"]`);

  if (activePane) activePane.classList.add("active");
  if (activeBtn) activeBtn.classList.add("active");
}


// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
