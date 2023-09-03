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
   quote.textContent=data[0].quote
   author.textContent=data[0].author
   console.log(data)
}
btn.addEventListener('click',getQuotes)