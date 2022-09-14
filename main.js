fetch("http://localhost:3000/google").then(async (serverResponse) => {
  const data = await serverResponse.json();
  console.log(data);

  // const dataEl = {
  //     rogueNinja: [
  //         1,2,3
  //     ]
  // };
  // dataEl.rogueNinja.length
  // const dataEl = [
  //     1,2
  // ]
  // dataEl.forEach
  data.forEach((n) => {
    console.log(n);
    const containerEl = document.querySelector(".container");

    const rowEl = document.createElement("div");
    rowEl.classList.add("row");

    const div1El = document.createElement("div");
    div1El.classList.add("someone");

    const para1El = document.createElement("p");
    para1El.textContent = n.breadcrumbs;
    div1El.appendChild(para1El);

    const h1El = document.createElement("h1");
    const aEl = document.createElement("a");
    aEl.textContent = n.title;
    aEl.href = n.url;
    aEl.target = "_blank";
    h1El.appendChild(aEl);
    div1El.appendChild(h1El);

    const para2El = document.createElement("p");
    para2El.textContent = n.description;
    div1El.appendChild(para2El);

    const imgEl = document.createElement("img");
    imgEl.src = n.imageUrl;

    rowEl.appendChild(div1El);
    rowEl.appendChild(imgEl);
    containerEl.appendChild(rowEl);
  });
});
