const list = document.querySelector('.list');
const avgprice = document.querySelector('.average');
const names = ['John', 'Jane', 'Rebecca', 'Courtner', 'Conner', 'Bob', 'Lorem', 'Alice', 'Taylor', 'Carl',`Kyle`,`Danail`,`Becky`,`Chris`,`Sophia`];
const occupations = ['Teacher', 'Writer', 'Programmer','Lawyer','Artist','Journalist','Doctor','Scientist','Pilot','Gamer'];

const listings =[
  {
    name: 'Guy',
    occupation: 'Boxer',
    price: 20}
  ,
  {
    name: 'Bridget',
    occupation: 'Gymnist',
    price: 24}
]
listings.forEach(i =>{
  const html = `<div class="flex"><p>${i.name}</p><p>${i.occupation}</p><p>$${i.price}</p></div>`;
  list.innerHTML += html;
})

function randomListing(){
  const namesIdx = Math.floor(Math.random()*names.length);
  const occupationsIdx = Math.floor(Math.random()*occupations.length);
  const listing = {
    name: names[namesIdx],
    occupation: occupations[occupationsIdx],
    price: 5 + Math.round(Math.random()*145)
  };
  return listing;
}
function getAvg(listng){
  let avg = listings.reduce((accum,current)=>{
    return accum + current.price;
  },0);
  avg = (avg / listings.length).toFixed(2);
  return avg;
}

function render(listng){

  const html = `<div class="flex"><p>${listng.name}</p><p>${listng.occupation}</p><p>$${listng.price}</p></div>`;
  list.innerHTML += html;
  avg = getAvg();
  avgprice.innerHTML = `The average staring price is $${avg}`;
}

setInterval(function(){
  const listing = randomListing();
  listings.push(listing);
  render(listing);
}, 2000);