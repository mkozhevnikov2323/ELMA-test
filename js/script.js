const usersList = new Section({
  items: users,
  renderer: (userItem) => {
    const userElement = createUserCard(userItem);
    usersList.addItem(userElement);
  }
},
'.scedule__users'
);

const createUserCard = (userItem) => {
  const userCard = new Card(
    userItem,
    '#users-template'
  );
  const userElement = userCard.generateUserCard();
  return userElement;
}

dates = [
  {date: '01.06'},
  {date: '02.06'},
  {date: '03.06'},
  {date: '04.06'},
];

const datesList = new Section({
  items: dates,
  renderer: (dateItem) => {
    const dateElement = createDateCard(dateItem);
    datesList.addItem(dateElement);
  }
},
'.scedule__dates'
);

const createDateCard = (dateItem) => {
  const dateCard = new Card(
    dateItem,
    '#dates-template'
  );
  const dateElement = dateCard.generateDateCard();
  return dateElement;
}

// const tasksList = new Section({
//   items: tasks,
//   renderer: (taskItem) => {
//     const taskElement = createTaskCard(taskItem);
//     tasksList.addItem(taskElement);
//   }
// },
// '.backlog__tasks'
// );

const createTaskCard = (taskItem) => {
  const taskCard = new Card(
    taskItem,
    '#tasks-template'
  );
  const taskElement = taskCard.generateTaskCard();
  console.log(taskElement)
  return taskElement;
}

const newTask = new Card(
  {subject: '456'},
  '#tasks-template'
);
console.log(newTask);
const taskElement = newTask.generateTaskCard();
console.log(taskElement);

const tasksList = new Section({
  items: newTask,
  renderer: (taskItem) => {
    const taskElement = createTaskCard(taskItem);
    tasksList.addItem(taskElement);
  }
},
'.backlog__tasks'
);
console.log(tasksList)

const dragAndDrop = () => {
  const cards = document.querySelectorAll('.backlog__task');
  const cells = document.querySelectorAll('.js-cell');

  const dragStart = function() {
    setTimeout(() => {
      this.classList.add('hide');
    }, 200)
  }
  const dragEnd = function() {
    setTimeout(() => {
      this.classList.remove('hide');
    }, 200)
  }

  cards.forEach((card) => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
  });
}

usersList.renderItems();
dragAndDrop();
