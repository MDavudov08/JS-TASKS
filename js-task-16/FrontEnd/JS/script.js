const url = "http://localhost:3000/users";
const cards = document.querySelector(".cards")
const writeData = async () => {
    const { data } = await axios(url)
    data.forEach(({ image, Name, Position, Number, id }) => {
        cards.innerHTML += `<div class="card">
        <div class="image">
            <img src="${image}"
                alt="image">
        </div>
        <div class="text">
            <h2>Name: ${Name}</h2>
            <h3>Position: ${Position}</h3>
            <h4>Number: ${Number}</h4>
            <button onclick="DeleteBtn('/${id}')">Delete</button>
        </div>
    </div>`
    })
}
const DeleteBtn = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#z3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(url + id).then((res) => {
                if (res.statusText === "OK") {
                    location.reload();
                }
            })
        }
    });
}
writeData()
