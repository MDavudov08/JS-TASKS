const url = "http://localhost:3000/users";
const cards = document.querySelector(".cards")
const writeData = async() => {
    const {data} = await axios(url)
    data.forEach(({image,Name,Position,Number})=>{
        cards.innerHTML += `
        <div class="card">
        <div class="image">
            <img src="${image}"
                alt="image">
        </div>
        <div class="text">
            <h2>Name: ${Name}</h2>
            <h3>Position: ${Position}</h3>
            <h4>Number: ${Number}</h4>
        </div>
    </div>
        `
    })
}
writeData()