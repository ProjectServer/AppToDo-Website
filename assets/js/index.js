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


// Date du jour 

var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0');
var year = today.getFullYear();

var dateAdd = document.getElementById('slctdate');
dateAdd.value = (day+'-'+month+'-'+year);

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
    $('.remodal-task-modify').find('.remodal-task-informations .remodal-task-categories select').append(option);
    categoriesInput.value = "";



  }
}

 // Ajout des catégories dans le select

 //Ajout aussi remodal modify !!!! ------------------------------------------------------------------
 
  var selectCategories = document.getElementById('slct');
    for(i = 0; i < categories.length; i++){
      var opt = document.createElement('option');
      opt.value = categories[i];
      opt.innerHTML = categories[i];
      selectCategories.appendChild(opt);
    }


    var numberTask = 0;

// Ajout des tâches 

  function addTask(){


    var status = 'Pas commencé';

    // Récupération des données 
    var titleTask = document.getElementById('taskTitle').value;
    var titleTaskElement = document.getElementById('taskTitle');
    var categoriesTask = document.getElementById('slct').options[document.getElementById('slct').selectedIndex].text;
    var categoriesTaskElement = document.getElementById('slct');
    var dateTask = document.getElementById('slctdate').value;
    var dateTaskElement = document.getElementById('slcdate');
    var taskDesc = document.getElementById('taskDesc').value;
    var taskDescElement = document.getElementById('taskDesc');

    // Vérification et affichage erreur

    if(titleTaskElement.value == ""){
      titleTaskElement.classList.add('error-title');
    }
    else{
      titleTaskElement.classList.remove('error-title');
    }

    if(categoriesTask == "Catégories"){
      categoriesTaskElement.classList.add('error-categories');
    }
    else{
      categoriesTaskElement.classList.remove('error-categories');
    }


    // Création de la structure

    if(titleTask != "" && categoriesTask != "Catégories" && taskDesc != ""){

      var updateNumberTask = numberTask+1;
      numberTask = updateNumberTask;
      var ID = numberTask;

      var mainContainerTask = document.getElementById('task-cont');

      var taskMainDiv = document.createElement('div');
      taskMainDiv.classList.add('task');
      taskMainDiv.setAttribute('id', 'task'+updateNumberTask);
      mainContainerTask.appendChild(taskMainDiv);

      var taskBrandDiv = document.createElement('div');
      taskBrandDiv.classList.add('task-brand');
      taskMainDiv.appendChild(taskBrandDiv);

      var taskBrandTitle = document.createElement('div');
      taskBrandTitle.classList.add('task-brand-title');
      taskBrandDiv.appendChild(taskBrandTitle);

      var radioContainer = document.createElement('label');
      radioContainer.classList.add('radio-container');
      radioContainer.setAttribute('onclick', '$("#task'+updateNumberTask+'").hide("slow", function(){' + '$("#task'+updateNumberTask+'").remove(); $("[data-remodal-id=taskView'+updateNumberTask+']").remodal().destroy(); $("[data-remodal-id=taskModify'+updateNumberTask+']").remodal().destroy(); });');
      taskBrandTitle.appendChild(radioContainer);

      var inputRadioContainer = document.createElement('input');
      inputRadioContainer.type = 'radio';
      radioContainer.appendChild(inputRadioContainer);

      var spanCheckmark = document.createElement('span');
      spanCheckmark.classList.add('checkmark');
      radioContainer.appendChild(spanCheckmark);

      var taskTitle = document.createElement('a');
      taskTitle.href = ('#taskView'+updateNumberTask); 
      taskBrandTitle.appendChild(taskTitle);

      var taskTitleText = document.createElement('h3');
      taskTitleText.innerHTML = titleTask;
      taskTitle.appendChild(taskTitleText);

      var taskBrandEdit = document.createElement('div');
      taskBrandEdit.classList.add('task-brand-edit');
      taskBrandDiv.appendChild(taskBrandEdit);

      var taskBrandEditLink = document.createElement('a');
      taskBrandEditLink.href=('#taskModify'+updateNumberTask);
      taskBrandEdit.appendChild(taskBrandEditLink);

      var taskBrandEditButton = document.createElement('button');
      taskBrandEditLink.appendChild(taskBrandEditButton);

      var taskBrandEditIcon = document.createElement('i');
      taskBrandEditIcon.classList.add('fa-solid');
      taskBrandEditIcon.classList.add('fa-pen-to-square');
      taskBrandEditButton.appendChild(taskBrandEditIcon);

      var taskContent = document.createElement('div');
      taskContent.classList.add('task-content');
      taskMainDiv.appendChild(taskContent);

      var taskContentDescription = document.createElement('div');
      taskContentDescription.classList.add('task-content-description');
      taskContent.appendChild(taskContentDescription);
      
      var taskContentDescriptionLink = document.createElement('a');
      taskContentDescriptionLink.href=('#taskView'+updateNumberTask);
      taskContentDescription.appendChild(taskContentDescriptionLink);

      var taskContentDescriptionContent = document.createElement('p');
      taskContentDescriptionContent.innerHTML = taskDesc;
      taskContentDescriptionLink.appendChild(taskContentDescriptionContent); 

      var taskContentInformations = document.createElement('div');
      taskContentInformations.classList.add('task-content-informations');
      taskContent.appendChild(taskContentInformations);

      var taskContentInformationsTime = document.createElement('div');
      taskContentInformationsTime.classList.add('task-content-informations-time');
      taskContentInformations.appendChild(taskContentInformationsTime);

      var taskContentInformationsTimeIcon = document.createElement('i');
      taskContentInformationsTimeIcon.classList.add('fa-solid');
      taskContentInformationsTimeIcon.classList.add('fa-hourglass');
      taskContentInformationsTime.appendChild(taskContentInformationsTimeIcon);

      var taskContentInformationsTimeContent = document.createElement('span');
      taskContentInformationsTimeContent.innerHTML = dateTask;
      taskContentInformationsTime.appendChild(taskContentInformationsTimeContent);

      var taskContentInformationsCategories = document.createElement('div');
      taskContentInformationsCategories.classList.add('task-content-informations-categories');
      taskContentInformations.appendChild(taskContentInformationsCategories);

      var taskContentInformationsCategoriesContent = document.createElement('span');
      taskContentInformationsCategoriesContent.innerHTML = categoriesTask;
      taskContentInformationsCategories.appendChild(taskContentInformationsCategoriesContent);

      // Modal structure ( modal view )

      var modalMainDiv = document.createElement('div');
      // modalMainDiv.classList.add('remodal');
      modalMainDiv.classList.add('remodal-task');
      modalMainDiv.setAttribute('data-remodal-id', 'taskView'+updateNumberTask);
      mainContainerTask.appendChild(modalMainDiv);

      var buttonRemodalClose = document.createElement('button');
      buttonRemodalClose.classList.add('remodal-close');
      buttonRemodalClose.setAttribute('data-remodal-action','close');
      modalMainDiv.appendChild(buttonRemodalClose);

      var remodalTaskTitle = document.createElement('div');
      remodalTaskTitle.classList.add('remodal-task-title');
      modalMainDiv.appendChild(remodalTaskTitle);

      var remodalTaskTitleText = document.createElement('h3');
      remodalTaskTitleText.innerHTML = titleTask;
      remodalTaskTitle.appendChild(remodalTaskTitleText);

      var remodalTaskDescription = document.createElement('div');
      remodalTaskDescription.classList.add('remodal-task-description');
      modalMainDiv.appendChild(remodalTaskDescription);

      var remodalTaskDescriptionText = document.createElement('p');
      remodalTaskDescriptionText.innerHTML = taskDesc;
      remodalTaskDescription.appendChild(remodalTaskDescriptionText);

      var remodalTaskInformations = document.createElement('div');
      remodalTaskInformations.classList.add('remodal-task-informations');
      modalMainDiv.appendChild(remodalTaskInformations);
      
      var remodalTaskCategories = document.createElement('div');
      remodalTaskCategories.classList.add('remodal-task-categories');
      remodalTaskInformations.appendChild(remodalTaskCategories);

      var remodalTaskCategoriesIcon = document.createElement('i');
      remodalTaskCategoriesIcon.classList.add('fa-solid');
      remodalTaskCategoriesIcon.classList.add('fa-bookmark');
      remodalTaskCategories.appendChild(remodalTaskCategoriesIcon);
      
      var remodalTaskCategoriesText = document.createElement('span');
      remodalTaskCategoriesText.innerHTML = categoriesTask;
      remodalTaskCategories.appendChild(remodalTaskCategoriesText);

      var remodalTaskDate = document.createElement('div');
      remodalTaskDate.classList.add('remodal-task-date');
      remodalTaskInformations.appendChild(remodalTaskDate);

      var remodalTaskIcon = document.createElement('i');
      remodalTaskIcon.classList.add('fa-solid');
      remodalTaskIcon.classList.add('fa-hourglass');
      remodalTaskDate.appendChild(remodalTaskIcon);

      var remodalTaskDateText = document.createElement('span');
      remodalTaskDateText.innerHTML = dateTask;
      remodalTaskDate.appendChild(remodalTaskDateText);

      var remodalTaskButtons = document.createElement('div');
      remodalTaskButtons.classList.add('remodal-task-buttons');
      modalMainDiv.appendChild(remodalTaskButtons);

      var remodalTaskButtonsStatus = document.createElement('div');
      remodalTaskButtonsStatus.classList.add('remodal-task-buttons-status');
      remodalTaskButtons.appendChild(remodalTaskButtonsStatus);

      var remodalTaskButtonsStatusDiv = document.createElement('div');
      remodalTaskButtonsStatus.appendChild(remodalTaskButtonsStatusDiv);

      var remodalTaskButtonsStatusIcon = document.createElement('i');
      remodalTaskButtonsStatusIcon.classList.add('fa-solid');
      remodalTaskButtonsStatusIcon.classList.add('fa-circle');
      remodalTaskButtonsStatusDiv.innerHTML = status;

      var remodalTaskButtonsAction = document.createElement('div');
      remodalTaskButtonsAction.classList.add('remodal-task-buttons-action');
      remodalTaskButtons.appendChild(remodalTaskButtonsAction);

      var remodalTaskButtonsActionButton = document.createElement('button');
      remodalTaskButtonsActionButton.classList.add('remove-btn');
      remodalTaskButtonsActionButton.innerHTML = 'Supprimer la tâche';
      remodalTaskButtonsActionButton.setAttribute('onclick', '$("#task'+updateNumberTask+'").hide("fast", function(){' + '$("#task'+updateNumberTask+'").remove(); $("[data-remodal-id=taskView'+updateNumberTask+']").remodal().destroy(); $("[data-remodal-id=taskModify'+updateNumberTask+']").remodal().destroy(); });');
      remodalTaskButtonsAction.appendChild(remodalTaskButtonsActionButton);

      var taskView = $('[data-remodal-id='+'taskView'+updateNumberTask+']').remodal();


      // Modal structure ( modal modify )

      var modalModifyMainDiv = document.createElement('div');
      modalModifyMainDiv.classList.add('remodal-task');
      modalModifyMainDiv.classList.add('remodal-task-modify');
      modalModifyMainDiv.setAttribute('data-remodal-id','taskModify'+updateNumberTask);
      mainContainerTask.appendChild(modalModifyMainDiv);

      var modalModifyClose = document.createElement('button');
      modalModifyClose.classList.add('remodal-close');
      modalModifyClose.setAttribute('data-remodal-action', 'close');
      modalModifyMainDiv.appendChild(modalModifyClose);

      var modalModifyTaskTitle = document.createElement('div');
      modalModifyTaskTitle.classList.add('remodal-task-title');
      modalModifyMainDiv.appendChild(modalModifyTaskTitle);

      var modalModifyTaskTitleInput = document.createElement('input');
      modalModifyTaskTitleInput.type = 'text';
      modalModifyTaskTitleInput.value = titleTask;
      modalModifyTaskTitleInput.setAttribute('id', 'taskTitleInput'+updateNumberTask);
      modalModifyTaskTitle.appendChild(modalModifyTaskTitleInput);

      var modalModifyTaskDescription = document.createElement('div');
      modalModifyTaskDescription.classList.add('remodal-task-description');
      modalModifyMainDiv.appendChild(modalModifyTaskDescription);

      var modalModifyTaskDescriptionText = document.createElement('textarea');
      modalModifyTaskDescriptionText.innerHTML = taskDesc;
      modalModifyTaskDescriptionText.setAttribute('id', 'taskDescriptionInput'+updateNumberTask);
      modalModifyTaskDescription.appendChild(modalModifyTaskDescriptionText);

      var modalModifyTaskInformations = document.createElement('div');
      modalModifyTaskInformations.classList.add('remodal-task-informations');
      modalModifyMainDiv.appendChild(modalModifyTaskInformations);

      var modalModifyTaskCategories = document.createElement('div');
      modalModifyTaskCategories.classList.add('remodal-task-categories');
      modalModifyTaskInformations.appendChild(modalModifyTaskCategories);

      var modalModifyTaskCategoriesIcon = document.createElement('i');
      modalModifyTaskCategoriesIcon.classList.add('fa-solid');
      modalModifyTaskCategoriesIcon.classList.add('fa-bookmark');
      modalModifyTaskCategories.appendChild(modalModifyTaskCategoriesIcon);

      var modalModifyTaskCategoriesInput = document.createElement('label');
      modalModifyTaskCategoriesInput.classList.add('select');
      modalModifyTaskCategoriesInput.setAttribute('for', 'slct'+updateNumberTask);
      modalModifyTaskCategories.appendChild(modalModifyTaskCategoriesInput);

      var modalModifyTaskCategoriesSelect = document.createElement('select');
      modalModifyTaskCategoriesSelect.setAttribute('id', 'slct'+updateNumberTask);
      modalModifyTaskCategoriesSelect.setAttribute('required', 'required');
      modalModifyTaskCategoriesInput.appendChild(modalModifyTaskCategoriesSelect);


      /////// Initialiser catégories dans select  ///////////

      var selectCategoriesM = document.getElementById('slct'+ID);
      for(i = 0; i < categories.length; i++){
        var opt = document.createElement('option');
        opt.value = categories[i];
        opt.innerHTML = categories[i];
        selectCategoriesM.appendChild(opt);
      }

      $(modalModifyTaskCategoriesSelect).find('option[value = '+ categoriesTask +']').attr('selected', 'selected'); 

      var modalModifyTaskDate = document.createElement('div');
      modalModifyTaskDate.classList.add('remodal-task-date');
      modalModifyTaskInformations.appendChild(modalModifyTaskDate);

      var modalModifyTaskDateIcon = document.createElement('i');
      modalModifyTaskDateIcon.classList.add('fa-solid');
      modalModifyTaskDateIcon.classList.add('fa-calendar-check');
      modalModifyTaskDate.appendChild(modalModifyTaskDateIcon);

      var modalModifyTaskDateButton = document.createElement('input');
      modalModifyTaskDateButton.setAttribute('id', 'slctdateModify'+ID);
      modalModifyTaskDateButton.setAttribute('value', dateTask);
      modalModifyTaskDateButton.setAttribute('readonly', 'readonly');
      modalModifyTaskDateButton.innerHTML = dateTask;
      modalModifyTaskDate.appendChild(modalModifyTaskDateButton);


      $( function() {
        $( "slctdateModify"+ID  ).datepicker( $.datepicker.regional[ "fr" ] );
        $( "#slctdateModify"+ID ).datepicker({
          dateFormat: "dd-mm-yy",        
        });      
      } );

      var modalModifyTaskButtons = document.createElement('div');
      modalModifyTaskButtons.classList.add('remodal-task-buttons');
      modalModifyMainDiv.appendChild(modalModifyTaskButtons);

      var modalModifyTaskButtonsStatus = document.createElement('div');
      modalModifyTaskButtonsStatus.classList.add('remodal-task-buttons-status');
      modalModifyTaskButtons.appendChild(modalModifyTaskButtonsStatus);

      var modalModifyTaskButtonsStatusLabel = document.createElement('label');
      modalModifyTaskButtonsStatusLabel.classList.add('select');
      modalModifyTaskButtonsStatusLabel.setAttribute('for', 'slctstatus');
      modalModifyTaskButtonsStatus.appendChild(modalModifyTaskButtonsStatusLabel);

      var modalModifyTaskButtonsStatusSelect = document.createElement('select');
      modalModifyTaskButtonsStatusSelect.setAttribute('id','slctstatus'+updateNumberTask);
      modalModifyTaskButtonsStatusSelect.setAttribute('required', 'required');
      modalModifyTaskButtonsStatusLabel.appendChild(modalModifyTaskButtonsStatusSelect);

      var modalModifyTaskButtonsStatusOptionDefault = document.createElement('option');
      modalModifyTaskButtonsStatusOptionDefault.value = "";
      modalModifyTaskButtonsStatusOptionDefault.setAttribute('id', 'selectStatus');
      modalModifyTaskButtonsStatusOptionDefault.setAttribute('selected', 'selected');
      modalModifyTaskButtonsStatusOptionDefault.setAttribute('value', status);
      modalModifyTaskButtonsStatusOptionDefault.innerHTML = status;
      modalModifyTaskButtonsStatusSelect.appendChild(modalModifyTaskButtonsStatusOptionDefault);

      var modalModifyTaskButtonsStatusOption1 = document.createElement('option');
      modalModifyTaskButtonsStatusOption1.value = "En cours";
      modalModifyTaskButtonsStatusOption1.innerHTML = "En cours";
      modalModifyTaskButtonsStatusSelect.appendChild(modalModifyTaskButtonsStatusOption1);

      var modalModifyTaskButtonsStatusOption2 = document.createElement('option');
      modalModifyTaskButtonsStatusOption2.value = "Fini";
      modalModifyTaskButtonsStatusOption2.innerHTML = "Fini";
      modalModifyTaskButtonsStatusSelect.appendChild(modalModifyTaskButtonsStatusOption2);

      var modalModifyTaskButtonsAction = document.createElement('div');
      modalModifyTaskButtonsAction.classList.add('remodal-task-buttons-action');
      modalModifyTaskButtons.appendChild(modalModifyTaskButtonsAction);

      var modalModifyTaskButtonsActionButton = document.createElement('button');
      modalModifyTaskButtonsActionButton.classList.add('modif-btn');
      modalModifyTaskButtonsActionButton.setAttribute('onclick', 'modifyTask('+ID+');');
      modalModifyTaskButtonsActionButton.innerHTML = 'Sauvegarder';
      modalModifyTaskButtonsAction.appendChild(modalModifyTaskButtonsActionButton);

      var taskModify = $('[data-remodal-id='+'taskModify'+updateNumberTask+']').remodal();
      
      // Reset du form à l'envoi
      titleTaskElement.value = "";
      document.getElementById('taskDesc').value = "";

    }

  }

     // modification

     function modifyTask(ID){

      // Récupération id

      var idMod = document.getElementById('task'+ID);

      var taskTitle1 =  document.getElementById('taskTitleInput'+ID).value; 
      var taskDescription1 = document.getElementById('taskDescriptionInput'+ID).value; 
      var taskCategories1 = document.getElementById('slct'+ID).options[document.getElementById('slct'+ID).selectedIndex].text;
      var slctDateModify1 = document.getElementById('slctdateModify'+ID).value;  
      var slctstatus1 = document.getElementById('slctstatus'+ID).value;

      $(idMod).find('.task-brand .task-brand-title a h3').text(taskTitle1);
      $('[data-remodal-id=taskView'+ID+']').find('.remodal-task-title h3').text(taskTitle1);
      $('[data-remodal-id=taskModify'+ID+']').find('.remodal-task-title input').val(taskTitle1);

      $(idMod).find('.task-content .task-content-description a p').text(taskDescription1);
      $('[data-remodal-id=taskView'+ID+']').find('.remodal-task-description p').text(taskDescription1);
      $('[data-remodal-id=taskModify'+ID+']').find('.remodal-task-description textarea').val(taskDescription1);

      $(idMod).find('.task-content .task-content-informations .task-content-informations-categories span').text(taskCategories1);
      $('[data-remodal-id=taskView'+ID+']').find('.remodal-task-informations .remodal-task-categories span').text(taskCategories1);
      $('[data-remodal-id=taskModify'+ID+']').find('.remodal-task-informations .remodal-task-categories label select :selected').val(taskCategories1);

      $(idMod).find('.task-content .task-content-informations .task-content-informations-time span').text(slctDateModify1);
      $('[data-remodal-id=taskView'+ID+']').find('.remodal-task-informations .remodal-task-date span').text(slctDateModify1);
      $('[data-remodal-id=taskModify'+ID+']').find('.remodal-task-informations .remodal-task-date input').text(slctDateModify1);  
      
      $('[data-remodal-id=taskView'+ID+']').find('.remodal-task-buttons .remodal-task-buttons-status div').text(slctstatus1);
      $('[data-remodal-id=taskModify'+ID+']').find('.remodal-task-informations .remodal-task-buttons .remodal-task-buttons-status label select :selected').val(slctstatus1);

      $('[data-remodal-id='+'taskModify'+ID+']').remodal().close();
      console.log(slctstatus1);
    }
 
  
// Initialisation du calendrier

   $( function() {
    $( "slctdate"  ).datepicker( $.datepicker.regional[ "fr" ] );
    $( "#slctdate" ).datepicker({
      dateFormat: "dd-mm-yy",
      
    });
    
  } );




  