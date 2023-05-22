//your JS code here. If required.
const container = document.getElementById("container");
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 40; j++) {
    const div = document.createElement("div");
    div.className = "square";
    container.appendChild(div);
  }
  const br = document.createElement("br");
  container.appendChild(br);
}
