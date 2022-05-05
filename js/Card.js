class Card {
  constructor(data, cardSelector) {
    this._name = data.firstName;
    this._surname = data.surname;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.scedule__user').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.textContent = `${this._name} ${this._surname}`;

    return this._element;
  }
}
