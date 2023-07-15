const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const selectOperationNode = document.querySelector(".js-select-operation");
const btnResultNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");

btnResultNode.addEventListener("click", function () {
  const a = parseInt(inputANode.value);
  const b = parseInt(inputBNode.value);
  const operation = selectOperationNode.value;

  const result = calculate({
    a,
    b,
    operation,
  });

  outputNode.textContent = result;
});

class FocusManager {
  constructor(elements) {
    this.elements = Array.from(elements);
    this.currentIndex = 0;

    this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowRight":
        this.focusNext();
        break;
      case "ArrowLeft":
        this.focusPrevious();
        break;
      default:
        break;
    }
  }

  focusNext() {
    this.currentIndex = (this.currentIndex + 1) % this.elements.length;
    this.elements[this.currentIndex].focus();
  }

  focusPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.elements.length) % this.elements.length;
    this.elements[this.currentIndex].focus();
  }
}

const inputFields = [inputANode, inputBNode];
const focusManager = new FocusManager(inputFields);

// Решта коду...
