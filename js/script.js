class ToDo {
  constructor() {
    this.totalTasks = document.querySelectorAll('.task').length;
  }

  addTask(taskText) {
    //clonando o template todo
    let template = document.querySelector('.task').cloneNode(true);
    //removendo a class hide pra que fique visível
    template.classList.remove('hide');

    //manipular texto pra ele mudar para o que o cara digitou
    let templateText = template.querySelector('.task-title');
    templateText.textContent = taskText;

    //inserir html na lista (template) com o método appendChild
    let list = document.querySelector('#tasks-container');
    list.appendChild(template);

    //adiciona eventos às tasks
    this.addEvents();

    this.checkTasks('add');
  }

  removeTask(task) {
   //achar o elemento pai 
   let parentEl = task.parentElement;

   // remover da lista
   parentEl.remove();

   this.checkTasks('remove');
  }

  completeTask(task) {
    //adiciona a classe de done
    task.classList.add('done');
  }


  //vai verificar a última task adicionada e adicionar os dois eventos
  addEvents() {
    let removeBtns = document.querySelectorAll('.fa-trash');
    let removeBtn = removeBtns[removeBtns.length -1];

    let doneBtns = document.querySelectorAll('.fa-check');
    let doneBtn = doneBtns[doneBtns.length -1];

    //adicionar evento de remover
    removeBtn.addEventListener('click', function() {
      toDo.removeTask(this);
    });

    //adicionar evento de completar tarefa
    doneBtn.addEventListener('click', function() {
      toDo.completeTask(this);
    });
  }

  checkTasks(command) {
    let msg = document.querySelector('#empty-tasks');

    //lógica de adicionar ou remover tasks, verificar quantas tem
    if(command === 'add') {
      this.totalTasks += 1;
    } else if (command === 'remove') {
      this.totalTasks -= 1;
    }

    //checa se tem mais de uma task e adiciona ou remove a classe
    if (this.totalTasks == 1) {
      msg.classList.remove('hide');
    } else {
      msg.classList.add('hide');
    }
  }

}

let toDo = new ToDo;

//EVENTSS

//scroll
let createListBTN = document.querySelector('#create-list');
let woman = document.querySelector('.woman');
let inputText = document.querySelector('#task');


//Tive que usar esta solução para que o focus e funcionasse com o smooth 
createListBTN.addEventListener('click', function() {
  inputText.focus({preventScroll:true});

  woman.scrollIntoView ({
      behavior: 'smooth'
  })
});


//adicionar tarefa 
let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', function(e) {
  console.log(e);
  e.preventDefault(); //pra não submeter o formulário e página subir

  let taskText = document.querySelector('#task');

  //acrescentar a tarefa
  if(taskText.value != '') {
    toDo.addTask(taskText.value);
     //limpar campo de texto
    taskText.value = '';
  }
});





