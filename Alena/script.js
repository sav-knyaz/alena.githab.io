
 document.addEventListener('pointerdown', (e) => {

   //for menu burger
     let menuBurger = document.querySelector('.nav__burger'),
         buttonMenu = document.querySelector('.nav__button'),
         headerMenu = document.querySelector('.header__menu'),
         gradient = document.querySelector('.gradient');

    function togglClass (){
      menuBurger.classList.toggle('_active');
      buttonMenu.classList.toggle('_open');
      headerMenu.classList.toggle('_open');
      gradient.classList.toggle('_opened');
      document.body.classList.toggle('_open-burger')
    }
    if(e.target === menuBurger){
      togglClass()
         }



     //scrolling page
     if(e.target === document.getElementById('aboutMe')){
      togglClass()
         document.querySelector('.header__section').scrollIntoView({block: "end", behavior: "smooth"});
     }
     if(e.target === document.getElementById('service')){
      togglClass()
        document.getElementById('serviceTitle').scrollIntoView({block: "center", behavior: "smooth"});
     }
     if(e.target === document.getElementById('process')){
      togglClass()
        document.getElementById('processTitle').scrollIntoView({block: "center", behavior: "smooth"});
     }
     if(e.target === document.getElementById('project')){
      togglClass()
        document.getElementById('projectTitle').scrollIntoView({block: "center", behavior: "smooth"});
     }
     if(e.target === document.getElementById('contacts')){
        togglClass()
        document.getElementById('contactsTitle').scrollIntoView({block: "center", behavior: "smooth"});
     }

   

     let openPrice = document.querySelectorAll("#openPrice"), //button
         closePrice = document.querySelectorAll("#closePrice"), 
         articleService = document.querySelectorAll('.article__service'),
         priceInfo = document.querySelectorAll('.price__info');

   //eventListnere for Icon open\close in section service

    for(let i = 0; i < 8; i++){

      if(e.target === openPrice[i]){
         articleService[i].classList.toggle('openPrice');

         setTimeout(() => {
 
            for(k = 12; k < 310; k += 12){
               if((window.innerWidth - 5) < 680){
                  setTimeout(() => {articleService[i].style.height = articleService[i].offsetHeight + 1 + 'px';}, k)
               } else {
                  setTimeout(() => {articleService[i].style.height = articleService[i].offsetHeight + 2 + 'px';}, k)
               }
               
            }

         },305)

         openPrice[i].classList.toggle('openIcon');
         closePrice[i].classList.toggle('closeIcon');
         setTimeout(() => { priceInfo[i].classList.toggle('openInfo');}, 750);
      }

    }

    for(let i = 0; i < 8; i++){

      if(e.target === closePrice[i]){
         articleService[i].classList.toggle('openPrice');

         setTimeout(() => {

            for(k = 12; k < 310; k += 12){
               if((window.innerWidth - 5) < 680){
                  setTimeout(() => {articleService[i].style.height = (articleService[i].offsetHeight - 1) + 'px';}, k)
               } else {
                  setTimeout(() => {articleService[i].style.height = articleService[i].offsetHeight - 2 + 'px';}, k)
               }
               
            }
         },305)

         priceInfo[i].classList.toggle('openInfo');
         openPrice[i].classList.toggle('openIcon');
         closePrice[i].classList.toggle('closeIcon');
      }

    }    

 });


 let scrollPage;
 document.addEventListener('scroll', () =>{
    scrollPage = window.pageYOffset;
    //btns in header menu
    let service = document.getElementById('service').children, 
        aboutCh = document.getElementById('aboutMe').children,
        process = document.getElementById('process').children,
        project = document.getElementById('project').children,
        contacts = document.getElementById('contacts').children;

        //scrolling to sections

    if(scrollPage < 665){
       aboutCh[0].style.visibility = 'visible'; 
    }
    if(scrollPage >= 665){
       service[0].style.visibility = 'visible'; 
       aboutCh[0].style.visibility = 'hidden';

    }
    if(scrollPage > 1949 || scrollPage < 665){
        service[0].style.visibility = 'hidden';
     }
    if(scrollPage >= 1950){
       process[0].style.visibility = 'visible';
    }
    if(scrollPage > 3499 || scrollPage < 1950){
       process[0].style.visibility = 'hidden';
    }
    if(scrollPage >= 3500){
       project[0].style.visibility = 'visible';
    }
    if(scrollPage < 3500 || scrollPage > 5439){
       project[0].style.visibility = 'hidden';
    }
    if(scrollPage >= 5440){
       contacts[0].style.visibility = 'visible';
    }
    if(scrollPage < 5440){
       contacts[0].style.visibility = 'hidden';
    }
    
 });


 

/*
function poisk (text){
   function delItem(array){
      let arrSort = [];

      for(i = 0; i < array.length; i++){
     let sum = array.filter(item => item === array[i]),
         lengthSum;

         for (i = 0; i < sum.length; i++) {
            lengthSum = +1;
         }

         arrSort.push({name: sum[0], amount: lengthSum});
      }
      console.log(arrSort)
    }
 let array = text
         .match((/[a-z, \s]/ig))
         .join('')
         .split(' ')
         .filter(item => item !== '')
         .sort();
         
         
 
  
}

poisk('  //  / .  dkdkgj ./dkkse99 0000)  dkdkgj /dkkse dkkse');
*/