const burger = document.querySelector(".burger");
if(burger) {

  const menu = document.querySelector(".header__nav");
  const menuLinks = menu.querySelectorAll(".nav__list-link");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("nav--active");
  });

  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burger.classList.toggle("burger--active");
      menu.classList.toggle("nav--active");
    });
  });
}


// создание контейнера
let div = document.createElement('div');
div.classList.add('container');

// создание контейнера под дополнение задач
let task = document.createElement('div');
task.classList.add('task');


// создание текстового поля под название задачи
let taskInp = document.createElement('input');
taskInp.classList.add('input-reset', 'task-input');
taskInp.type = 'text';
taskInp.placeholder = 'Добавить новую задачу';


// создание кнопки добавления задачи
let btnAdd = document.createElement('button');
btnAdd.classList.add('btn-reset', 'task-btn');
btnAdd.textContent = 'Создать новую задачу';


// создание списка задач
let taskList = document.createElement('ul');
taskList.classList.add('list-reset', 'task-list');

  // обработка добавления задачи в список
btnAdd.onclick = function () {
  if(taskInp.value) {

    let nameTask = taskInp.value;

    let newTask = createNewTaskItem(nameTask);

    taskInp.value = '';

    taskList.append(newTask);
  }
}


// создание новой задачи
function createNewTaskItem(nameTask) {

  let taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  let taskSpan = document.createElement('span');
  taskSpan.classList.add('task-item-span');
  taskSpan.textContent = nameTask;

  // создание блока с кнопками

  let btnBox = document.createElement('div');
  btnBox.classList.add('task-item-btns');


    // создание кнопки выполнения задачи
    let btnComplete = document.createElement('button');
    btnComplete.classList.add('btn-reset', 'task-item-btns-complete');
    btnComplete.textContent = 'Выполнено';


    // выполнение задачи
    btnComplete.onclick = function () {
      taskSpan.classList.add('task-item-span-complete');
      taskItem.classList.add('task-item-complete');
      btnDelete.classList.add('task-item-btns-delete-complete')

      btnChange.remove();
      btnComplete.remove();

    }


  // создание кнопки изменения названия задачи
  let btnChange = document.createElement('button');
  btnChange.classList.add('btn-reset', 'task-item-btns-change');
  btnChange.textContent = 'Изменить';


  // изменение названия задачи
  btnChange.onclick = function () {

    let newNameTask = prompt('Введите новое название задачи', taskSpan.textContent);
    taskSpan.textContent = newNameTask;

  }


  // создание кнопки удаления задачи
  let btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-reset', 'task-item-btns-delete');
  btnDelete.textContent = 'Удалить';


  // удаление задачи
  btnDelete.onclick = function () {
    taskItem.remove()

  }

  taskItem.append(taskSpan, btnBox);
  btnBox.append(btnComplete, btnChange, btnDelete);
  return taskItem;
}




document.body.append(div);
div.append(task, taskList);
task.append(taskInp, btnAdd);


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnVyZ2VyLmpzIiwiY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xuaWYoYnVyZ2VyKSB7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXZcIik7XG4gIGNvbnN0IG1lbnVMaW5rcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2xpc3QtbGlua1wiKTtcblxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci0tYWN0aXZlXCIpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi0tYWN0aXZlXCIpO1xuICB9KTtcblxuICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJidXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi0tYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuIiwiLy8g0YHQvtC30LTQsNC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsFxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4vLyDRgdC+0LfQtNCw0L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwINC/0L7QtCDQtNC+0L/QvtC70L3QtdC90LjQtSDQt9Cw0LTQsNGHXG5sZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cblxuLy8g0YHQvtC30LTQsNC90LjQtSDRgtC10LrRgdGC0L7QstC+0LPQviDQv9C+0LvRjyDQv9C+0LQg0L3QsNC30LLQsNC90LjQtSDQt9Cw0LTQsNGH0LhcbmxldCB0YXNrSW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRhc2tJbnAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcmVzZXQnLCAndGFzay1pbnB1dCcpO1xudGFza0lucC50eXBlID0gJ3RleHQnO1xudGFza0lucC5wbGFjZWhvbGRlciA9ICfQlNC+0LHQsNCy0LjRgtGMINC90L7QstGD0Y4g0LfQsNC00LDRh9GDJztcblxuXG4vLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQt9Cw0LTQsNGH0LhcbmxldCBidG5BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmJ0bkFkZC5jbGFzc0xpc3QuYWRkKCdidG4tcmVzZXQnLCAndGFzay1idG4nKTtcbmJ0bkFkZC50ZXh0Q29udGVudCA9ICfQodC+0LfQtNCw0YLRjCDQvdC+0LLRg9GOINC30LDQtNCw0YfRgyc7XG5cblxuLy8g0YHQvtC30LTQsNC90LjQtSDRgdC/0LjRgdC60LAg0LfQsNC00LDRh1xubGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbnRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtcmVzZXQnLCAndGFzay1saXN0Jyk7XG5cbiAgLy8g0L7QsdGA0LDQsdC+0YLQutCwINC00L7QsdCw0LLQu9C10L3QuNGPINC30LDQtNCw0YfQuCDQsiDRgdC/0LjRgdC+0LpcbmJ0bkFkZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZih0YXNrSW5wLnZhbHVlKSB7XG5cbiAgICBsZXQgbmFtZVRhc2sgPSB0YXNrSW5wLnZhbHVlO1xuXG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrSXRlbShuYW1lVGFzayk7XG5cbiAgICB0YXNrSW5wLnZhbHVlID0gJyc7XG5cbiAgICB0YXNrTGlzdC5hcHBlbmQobmV3VGFzayk7XG4gIH1cbn1cblxuXG4vLyDRgdC+0LfQtNCw0L3QuNC1INC90L7QstC+0Lkg0LfQsNC00LDRh9C4XG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrSXRlbShuYW1lVGFzaykge1xuXG4gIGxldCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuXG4gIGxldCB0YXNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGFza1NwYW4uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtLXNwYW4nKTtcbiAgdGFza1NwYW4udGV4dENvbnRlbnQgPSBuYW1lVGFzaztcblxuICAvLyDRgdC+0LfQtNCw0L3QuNC1INCx0LvQvtC60LAg0YEg0LrQvdC+0L/QutCw0LzQuFxuXG4gIGxldCBidG5Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbS1idG5zJyk7XG5cblxuICAgIC8vINGB0L7Qt9C00LDQvdC40LUg0LrQvdC+0L/QutC4INCy0YvQv9C+0LvQvdC10L3QuNGPINC30LDQtNCw0YfQuFxuICAgIGxldCBidG5Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZXNldCcsICd0YXNrLWl0ZW0tYnRucy1jb21wbGV0ZScpO1xuICAgIGJ0bkNvbXBsZXRlLnRleHRDb250ZW50ID0gJ9CS0YvQv9C+0LvQvdC10L3Qvic7XG5cblxuICAgIC8vINCy0YvQv9C+0LvQvdC10L3QuNC1INC30LDQtNCw0YfQuFxuICAgIGJ0bkNvbXBsZXRlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0YXNrU3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0tc3Bhbi1jb21wbGV0ZScpO1xuICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtLWNvbXBsZXRlJyk7XG4gICAgICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtLWJ0bnMtZGVsZXRlLWNvbXBsZXRlJylcblxuICAgICAgYnRuQ2hhbmdlLnJlbW92ZSgpO1xuICAgICAgYnRuQ29tcGxldGUucmVtb3ZlKCk7XG5cbiAgICB9XG5cblxuICAvLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDQuNC30LzQtdC90LXQvdC40Y8g0L3QsNC30LLQsNC90LjRjyDQt9Cw0LTQsNGH0LhcbiAgbGV0IGJ0bkNoYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5DaGFuZ2UuY2xhc3NMaXN0LmFkZCgnYnRuLXJlc2V0JywgJ3Rhc2staXRlbS1idG5zLWNoYW5nZScpO1xuICBidG5DaGFuZ2UudGV4dENvbnRlbnQgPSAn0JjQt9C80LXQvdC40YLRjCc7XG5cblxuICAvLyDQuNC30LzQtdC90LXQvdC40LUg0L3QsNC30LLQsNC90LjRjyDQt9Cw0LTQsNGH0LhcbiAgYnRuQ2hhbmdlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgbmV3TmFtZVRhc2sgPSBwcm9tcHQoJ9CS0LLQtdC00LjRgtC1INC90L7QstC+0LUg0L3QsNC30LLQsNC90LjQtSDQt9Cw0LTQsNGH0LgnLCB0YXNrU3Bhbi50ZXh0Q29udGVudCk7XG4gICAgdGFza1NwYW4udGV4dENvbnRlbnQgPSBuZXdOYW1lVGFzaztcblxuICB9XG5cblxuICAvLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDRg9C00LDQu9C10L3QuNGPINC30LDQtNCw0YfQuFxuICBsZXQgYnRuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4tcmVzZXQnLCAndGFzay1pdGVtLWJ0bnMtZGVsZXRlJyk7XG4gIGJ0bkRlbGV0ZS50ZXh0Q29udGVudCA9ICfQo9C00LDQu9C40YLRjCc7XG5cblxuICAvLyDRg9C00LDQu9C10L3QuNC1INC30LDQtNCw0YfQuFxuICBidG5EZWxldGUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrSXRlbS5yZW1vdmUoKVxuXG4gIH1cblxuICB0YXNrSXRlbS5hcHBlbmQodGFza1NwYW4sIGJ0bkJveCk7XG4gIGJ0bkJveC5hcHBlbmQoYnRuQ29tcGxldGUsIGJ0bkNoYW5nZSwgYnRuRGVsZXRlKTtcbiAgcmV0dXJuIHRhc2tJdGVtO1xufVxuXG5cblxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChkaXYpO1xuZGl2LmFwcGVuZCh0YXNrLCB0YXNrTGlzdCk7XG50YXNrLmFwcGVuZCh0YXNrSW5wLCBidG5BZGQpO1xuXG4iXX0=
