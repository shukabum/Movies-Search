let movieNameRef = document.getElementById("movie-name");
let searchBtn= document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie =()=>{
    let MovieName = movieNameRef.value;
    let url = `https://www.omdbapi.com/?t=${MovieName}&apikey=${key}`;



    if(MovieName.length<=0){
        result.innerHTML = `<h3 class="msg">Enter the movie name</h3>`;
    }
    else{
        fetch(url).then((resp)=>resp.json()).then((data)=>{
            if(data.Response= "True")
            {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster"">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="./star.png">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Runtime}</span>
                                <span>${data.Year}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("<div></div>")}
                                </div>
                            </div>
                        </div>
                    </div>
                           <h3>Plot:</h3>
                           <p>${data.Plot}</p>
                           <h3>Cast:</h3>
                           <p>${data.Actors}</p>
                `;
            }
            else{
                result.innerHTML=`<h3 class="msg">${data.Error}</h3>`;
            }

            
        })
        .catch(()=>{
            result.innerHTML =`<h3 class="msg">Error Occured</h3>`;
        })

    }
}
let k;
searchBtn.addEventListener("click",getMovie);
window.addEventListener("load", getMovie);
window.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        k=="Enter";
        getMovie();
    }
})
