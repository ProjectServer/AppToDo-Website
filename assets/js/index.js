// Mini popup pour ajout de catégories

function openSideCategories(){
  var x = document.getElementById("task-pop");
  if (x.style.display === "flex") {
    x.style.display = "none";
    x.classList.remove('active');
  } else {
    x.style.display = "flex";
    x.classList.add('active');
  }
  window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        x.style.display = "none";
        x.classList.remove('active');
    }
};
}

// Initialisation du DarkModeJS ( options )

const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#FAFAFA',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: false, // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

// Initiation ajout catégories

var categories = ['Travail', 'Événement', 'Cours'];

function addCategories(){

  var categoriesInput = document.getElementById('categoriesInput');
  var categoriesInputText = document.getElementById('categoriesInput').value;

  if(categoriesInputText != ""){
    categories.push(categoriesInputText);
    var option = document.createElement('option');
    option.text = categoriesInputText;
    option.value = categoriesInputText;
    selectCategories.add(option);
    categoriesInput.value = "";
  }
}
 // Ajout des catégories dans le select
    var selectCategories = document.getElementById('slct');
    for(i = 0; i < categories.length; i++){
      var opt = document.createElement('option');
      opt.value = categories[i];
      opt.innerHTML = categories[i];
      selectCategories.appendChild(opt);
    }





function addTask(){
  var titleTask = document.getElementById('taskTitle').value;
  var categoriesTask = document.getElementById("slct").options[document.getElementById('slct').selectedIndex].text;
  var dateTask = document.getElementById("slctdate").options[document.getElementById('slctdate').selectedIndex].text;
  var taskDesc = document.getElementById('taskDesc').value;



  // alert(titleTask + ' ' + categoriesTask + ' ' + dateTask + ' ' + taskDesc);
}

jQuery(document).ready(function($){


  // $('.what-container').each(function(){ 
  //   var parent=$(this).parent()
  //   var sliderContainer=document.createElement('div')
  //   sliderContainer.classList.add('swiper');
  //   var sliderWrapper = document.createElement('div');
  //   sliderWrapper.classList.add('swiper-wrapper');

  //   $(this).find('.what-block').each(function(){
  //     var slide=document.createElement('div')
  //     slide.classList.add('swiper-slide')
  //     slide.innerHTML=$(this).html()
  //     sliderWrapper.appendChild(slide)
  //   })
    
  //   sliderContainer.appendChild(sliderWrapper)
  //   var sliderPagination = document.createElement('div');
  //   sliderPagination.classList.add('swiper-pagination');
  //   sliderContainer.appendChild(sliderPagination)
    
  //   $(parent).append(sliderContainer)

  //   const swiper = new Swiper('.swiper', {
  //     // Optional parameters
  //     direction: 'horizontal',
  //     loop: true,
  //     slidesPerView: 1,
    
  //     // If we need pagination
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
    
  
  //   });
    
  // })
  
  
});
  