
const btn = document.getElementById('btn');
btn.addEventListener("click", searchAlbum)

async function searchAlbum() {
    const id = document.getElementById('inputId').value.trim(); 
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error'); 
    
    errorDiv.innerHTML = "";
    resultDiv.innerHTML = "";


    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    const album = await res.json()

    resultDiv.innerHTML = `
    <h3>Natija:</h3>
          <p><b>ID:</b> ${album.id}</p>
          <p><b>Title:</b> ${album.title}</p>
          <p><b>User ID:</b> ${album.userId}</p>
    `
}