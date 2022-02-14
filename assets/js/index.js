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

