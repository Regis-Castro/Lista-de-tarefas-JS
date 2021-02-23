class Todo {
  constructor() {
    this.taskTotal = document.querySelectorAll('.task').length;
  }

  addTask(taskText) {
    let template = document.querySelector('.task').cloneNode(true);
    template.classList.remove('hide');

    let templateText = template.querySelector('.task-title');
    template.classList.add('added');
    templateText.textContent = taskText;

    let list = document.querySelector('#tasks-container');
    list.appendChild(template);

    this.addEvents();

    this.checkTasks('add');
  }


  removeTask(task) {
    let parentEl = task.parentElement;
    parentEl.remove();

    this.checkTasks('remove');
  }

  completeTask(taskText2) {

    let template2 = document.querySelector('.completed-task').cloneNode(true);
    template2.classList.remove('hide');

    let templateText2 = template2.querySelector('.completed-task-title');
    templateText2.textContent = taskText2;

    let list2 = document.querySelector('#completed-tasks');
    list2.appendChild(template2);




  }

  addEvents() {
    let removeBtns = document.querySelectorAll('.fa-trash');
    let removeBtn = removeBtns[removeBtns.length -1];

    let doneBtns = document.querySelectorAll('.fa-check');
    let doneBtn = doneBtns[doneBtns.length -1];

    removeBtn.addEventListener('click', function() {
      toDo.removeTask(this);
    });

    doneBtn.addEventListener('click', function() {
      let taskText2 = document.querySelector('.added');
      toDo.completeTask(taskText2.innerText);
  
      console.log(taskText2.innerText);
    

  

      // let completedTask = document.querySelector('.task-title').innerText;
      // toDo.completeTask(completedTask);
      // console.log(completedTask);
      
    })
  }

  checkTasks(command) {
    let msg = document.querySelector('#empty-tasks');
    if (command === 'add') {
      this.taskTotal += 1;
    } else if (command === 'remove') {
      this.taskTotal -= 1;
    }
    
    if (this.taskTotal == 1) {
      msg.classList.remove('hide');
    } else {
      msg.classList.add('hide');
    }
  }


}



let toDo = new Todo;

//ajuda do Furlam



//events
//add
let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let taskText = document.querySelector('#task');
  
  if (taskText.value != '') {
   toDo.addTask(taskText.value);
  }

  taskText.value = '';
})




//complete
// let completeBtn = document.querySelector('.fa-check');
// completeBtn.addEventListener('click', function(e) {
//   let completedTaskText = document.querySelector('#completed-tasks');
//   toDo.completeTask(completedTaskText);
//   console.log('clicou');
   
// })


/*PASSOS PARTE 3
1) Adiciona a classe de done na task no método completeTask
2) Criou um método checkTasks(command) pra verificar se o id empty-tasks recebia um command de add ou remove. Se for add, aumenta o total tasks em 1. Chamou esse método lá nos métodos de adicionar e remover tarefa. Usou a variável msg.
3) ainda no checkTasks, se o total de tasks for == 1, remove a classe hide da msg, caso contrário, adiciona.


//PASSOS PARTE 2
/*
1) usa this pra adicionar eventos (addEvents()) às tasks no método addTask (observer)

2) cria o método removeTask() no constructor e completeTask() também.
3) cria um método addEvents no constructor pra por os eventos que serão adicionados sempre na última task adicionada. Primeiro seleciona todos os botões de lixeira e check e depois o último com array length. Faz ambos para remover e pra done nos botões. Cria o evento de remover e de quando completa a task.
4) o removeTask() deve ter uma variável parentEl que recebe a propriedade de deletar uma task (o conteúdo do template), e também o método de removê-lo.



//PASSOS PARTE 1
//Criou a class Todo 
//Constructor 
//this que vê quantas tarefas tem (título);
//método de adicionar tarefa que recebe o texto da tarefa do evento abaixo, clona o primeiro nó da task (template) e isso é recebido na var template. Remove a classe hide do template. o textContent da var templateText (pega o título da tarefa) recebe o conteúdo do parâmetro texto da tarefa. Por o text-container numa var list e insere html do template nela com appendChild.


//instanciou o objeto 'todo'


//events
/*evento addBtn de click pro botão com prevent, tem variável pra pegar o text da uma task. Manda esse valor de texto pro método de adicionar tafefa. Também limpa o input depois que uma tarefa é adicionada. Não deixar adicionar texto vazio*/