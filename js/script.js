const usersList = new Section({
  items: users,
  renderer: (userItem) => {
    const userElement = createCard(userItem);
    usersList.addItem(userElement);
  }
},
'.scedule__users'
);

const createCard = (userItem) => {
  const userCard = new Card(
    userItem,
    '#users-template'
  );
  const userElement = userCard.generateCard();
  return userElement;
}



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
