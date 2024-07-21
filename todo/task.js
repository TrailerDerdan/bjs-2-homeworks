const tasksInput = document.querySelector('#task__input');
const tasksAdd = document.querySelector('#tasks__add');
const tasksList = document.querySelector('#tasks__list');
const tasksForm = document.querySelector('#tasks__form');

tasksAdd.addEventListener('click', function (event) {
  event.preventDefault();

  const inputValue = tasksInput.value;
  createTask(inputValue);
  tasksInput.value = '';
});

const createTask = (title) => {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  taskElement.innerHTML = `
        <div class="task__title">${title}</div>
        <a href="#" class="task__remove">&times;</a>
    `;
  tasksList.appendChild(taskElement);

  const removeBtn = taskElement.querySelector('.task__remove');
  removeBtn.addEventListener('click', function () {
    taskElement.remove();
  });
};

tasksForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputValue = tasksInput.value;

  if (inputValue.trim() !== '') {
    createTask(inputValue);
    tasksInput.value = '';
  }
});
