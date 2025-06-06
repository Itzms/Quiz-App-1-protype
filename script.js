 

function menuTog(){

   const menu = document.querySelector('.menu-slide');

   menu.classList.toggle('menu-active');

}
function drop(id, caretNo)
{
   const carets = document.querySelectorAll('.caret');
   const drops = document.querySelectorAll('.menu-space');
   let target = document.getElementById(id);
  
   if(target.classList.contains('drop'))
   {
      target.classList.remove('drop');
      carets[caretNo].classList.remove('rotate');
   }
   else
   {
  
      drops.forEach(drop=>{
          drop.classList.remove('drop');
      })
      target.classList.toggle('drop');
     
      carets.forEach(caret=>{
          caret.classList.remove('rotate');
      });
      carets[caretNo].classList.toggle('rotate');
     
    }
}

document.addEventListener('DOMContentLoaded',() =>{

    const xTrack = document.querySelector('.x-list-track');

    const cards = xTrack.querySelectorAll('.card');

    const nextbtn = document.getElementById('c1');

    const prevbtn = document.getElementById('c2');

    let cardIndex = 0;

    

    nextbtn.addEventListener('click', () =>{

        if(cardIndex < cards.length-1){

            cardIndex++;

            showCardOnly(cardIndex, cards);

        }

    })

    prevbtn.addEventListener('click', () =>{

        if(cardIndex>0){

            cardIndex--;

            showCardOnly(cardIndex, cards);

        }

    })

});



function showCardOnly(index, cards) {

    cards.forEach((card, i) => {

        card.style.display = i === index ? 'block' : 'none';

    });

}
