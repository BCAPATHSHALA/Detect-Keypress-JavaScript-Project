const textData = document.querySelector(".textData");

window.addEventListener("keydown", (e) => {
  console.log(e.key, e.code, e.keyCode);
  textData.innerHTML = `
                        <p id="Key">${e.key === " " ? "Space" : e.key}</p>
                        <p id="KeyCode">${e.keyCode}</p>
                        <p id="Code">${e.code}</p>
                    `;
});
