class Card {
  constructor(data, cardSelector) {
    this._name = data.firstName;
    this._surname = data.surname;
    this._cardSelector = cardSelector;
    this._date = data.date;
    this._subject = data.subject;
    this._description = data.description;
    this._executor = data.executor;
  }

  _getTemplateUserCard() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.scedule__user').cloneNode(true);
    return cardElement;
  }

  _getTemplateDateCard() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.scedule__date').cloneNode(true);
    return cardElement;
  }

  _getTemplateTaskCard() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.backlog__task').cloneNode(true);
    return cardElement;
  }

  generateUserCard() {
    this._element = this._getTemplateUserCard();
    this._element.textContent = `${this._name} ${this._surname}`;

    return this._element;
  }

  generateDateCard() {
    this._element = this._getTemplateDateCard();
    this._element.querySelector('.backlog__task-title').textContent = `${this._subject}`;

    return this._element;
  }

  generateTaskCard() {
    this._element = this._getTemplateTaskCard();
    this._element.textContent = `${this._date}`;

    return this._element;
  }
}
