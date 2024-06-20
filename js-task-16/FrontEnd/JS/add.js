const url = "http://localhost:3000/users";
const form = document.getElementById("form");
const imageInput = document.getElementById("imageInput");
const nameInput = document.getElementById("nameInput");
const positionInput = document.getElementById("positionInput");
const numberInput = document.getElementById("numberInput");
const submitInput = document.getElementById("submitInput");
submitInput.onclick = () => {
    console.log("salam");
    const image = imageInput.value;
    const name = nameInput.value;
    const position = positionInput.value;
    const number = numberInput.value;
    const newPlayer = {
        image,
        name,
        position,
        number,
    };

    if (image && name && position && number) {
        axios.post(url, newPlayer).then((res) => {
            if (res.statusText === "Created") {
                alert('Futbolçu əlavə edildi')
                location.reload();
            }
        })
    } else {
        alert("xanaları boş buraxmaq olmaz");
    }
};