fetch("https://jsonplaceholder.typicode.com/posts")
.then ((res)=>res.json())
.then ((data) => {
    console.log(data);
}); 
for (let i = 0; i < dataUser.length; i++) {
  let item = document.createElement("div");
item.className = "item";
  item.innerHTML = `"
        <h1 class="title">${title[i].name}</h1>
        <h1 class="body">${title[i].name}</h1>
        
    `;
    info[0].appendChild(card);
}
