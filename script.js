
const destinations = [
  {id:'d1', name:'Goa', country:'India', price:4999, desc:'Sun & sand'},
  {id:'d2', name:'Shimla', country:'India', price:3999, desc:'Hills & pine'},
  {id:'d3', name:'Udaipur', country:'India', price:5599, desc:'Lakes & palaces'}
];

function render(list = destinations){
  const g = document.getElementById('destGrid'); g.innerHTML = '';
  list.forEach(d=>{
    const el = document.createElement('div'); el.className = 'dest';
    el.innerHTML = `<h3>${d.name}</h3><p>${d.desc}</p><div>From ₹${d.price}</div><div style="margin-top:0.5rem"><button class="btn view" data-id="${d.id}">View</button></div>`;
    g.appendChild(el);
  });
}

document.addEventListener('click', e=>{
  if(e.target.matches('.view')){ const id = e.target.dataset.id; const d = destinations.find(x=>x.id===id); alert(`${d.name} — ${d.desc}\n\n(Implement detail modal + booking flow)`); }
});

document.getElementById('search').addEventListener('input', e=>{
  const q = e.target.value.toLowerCase();
  render(destinations.filter(d => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)));
});

render();

// TODOs:
// - Implement destination detail modal with gallery and map embed placeholder.
// - Build booking form with datepicker and validation, and store bookings locally.
// - Add filters (price range, tags) and a favorites/wishlist feature.
// - Improve UI/UX with better styles and animations.