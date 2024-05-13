function filmAra() {
    var api_key = "149c01c9";
    var filmAdi = document.getElementById("filmAdi").value;
    var url = "https://www.omdbapi.com/?i=tt3896198&apikey=149c01c9";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") 
            {
                var filmBilgileriHTML = `
                    <h2>${data.Title}</h2>
                    <p><strong>Yıl:</strong> ${data.Year}</p>
                    <p><strong>Yönetmen:</strong> ${data.Director}</p>
                    <p><strong>Oyuncular:</strong> ${data.Actors}</p>
                    <p><strong>IMDb Puanı:</strong> ${data.imdbRating}</p>
                `;
                document.getElementById("filmBilgileri").innerHTML = filmBilgileriHTML;
            } 
            else 
            {
                document.getElementById("filmBilgileri").innerHTML = "<p>Film bulunamadı!</p>";
            }
        })
        .catch(error => console.log("Hata:", error));
}