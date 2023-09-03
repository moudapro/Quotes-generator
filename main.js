let btn = document.getElementById('btn');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let options = {
    method:'Get',
    headers:{
        'X-Api-Key':'oe+ImiXyih470LSIRh3A1A==rgJ9HVVMXXMBIrQ8',
    }
}
async function getQuotes(){
    quote.textContent='louding...'
   author.textContent='loading...'
   let resp = await fetch("https://api.api-ninjas.com/v1/quotes?category=age",options)
   let data = await resp.json()
   localStorage.setItem('quote',data[0].quote)
   localStorage.setItem('author',data[0].author)
   quote.textContent=localStorage.getItem('quote')
   author.textContent=localStorage.getItem('author')
}
window.addEventListener('load',()=>{
    quote.textContent=localStorage.getItem('quote')
   author.textContent=localStorage.getItem('author')
})
btn.addEventListener('click',getQuotes)