fetch("http://localhost:3000/google").then(async (serverResponse) => {
  const data = await serverResponse.json();
  console.log(data);

  //   if (data.google.length === 0) {
  //     const containerEl = document.querySelector(".container");
  //     const errText = document.createElement("h1");
  //     errText.textContent = "Sir, we have a problem";
  //     containerEl.appendChild(errText);
  //   } else {

  data.google.forEach((n) => {
    console.log(n);
    const containerEl = document.querySelector(".container");

    const rowEl = document.createElement("div");
    rowEl.classList.add("row");

    const div1El = document.createElement("div");

    const para1El = document.createElement("p");
    para1El.src = n.url;
    div1El.appendChild(para1El);

    const h1El = document.createElement("h1");
    h1El.textContent = `${n.title}`;
    div1El.appendChild(h1El);

    // const anchorEl = documenbt.createElement("a");
    // anchorEl.getAttribute("href");
    // anchorEl.textContent = "Ziggurat - Wikipedia";
    // h1El.appendChild(anchorEl);

    const para2El = document.createElement("p");
    para2El.textContent = `${n.description}`;
    div1El.appendChild(para2El);

    const imgEl = document.createElement("img");
    imgEl.classList.add("row");
    imgEl.textContent = `${n.imageUrl}`;
    rowEl.appendChild(imgEl);

    rowEl.appendChild(div1El);
    containerEl.appendChild(rowEl);
  });
  //   }s
});
