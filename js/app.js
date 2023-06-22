const button=document.getElementById("btn")
const image=document.getElementById("dog")
const dogName=document.getElementById("name")

function fetchDog(){
    fetch("https://dog.ceo/api/breeds/image/random").then(function(response){
        response.json().then(function(response){
            console.log(response)
            console.log(response.message)
            // dogName.appendChild(response.message)
            image.src=response.message
                image.append(response.message)
        })
    })
}


button.addEventListener("click",function(){
    fetchDog()
})
window.addEventListener("DOMContentLoaded",function(){
    fetchDog()
})

