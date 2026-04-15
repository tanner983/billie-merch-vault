const merch = [
  { name: "Hit Me Hard and Soft Walmart Exclusive Vinyl", status: "want" },
  { name: "Guitar Songs 7 Vinyl", status: "owned" },
  { name: "Happier Than Ever Hoodie", status: "want" }
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function display(items) {
  grid.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <div>${item.name}</div>
      <div class="${item.status}">
        ${item.status === "owned" ? "✅ Owned" : "⭐ Want"}
      </div>
    `;

    grid.appendChild(div);
  });
}

search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  display(merch.filter(m => m.name.toLowerCase().includes(value)));
});

display(merch);
