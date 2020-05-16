// Creating Class named modal, using ES6 
class modal {
    // The class constructor which takes one parameter named button, this button will get the modal
    constructor(button) {
        // Define using "this" so we can use the parameter in all the class methods
        this.mainButton = button;
        // We have four methods
        this.getModalElementsAndClose();
        this.openModalOnButtonClick();
        this.closeModalOnButtonClick();
        this.closeModalOnWindowClick();
    }
    // This method to get all the modal elements and the close button 
    getModalElementsAndClose() {
        // Getting which modal will be opened
        this.modalId = this.mainButton.getAttribute('data-modal');
        // Getting the modal itself by "data-modal"
        this.modal = document.getElementById(this.modalId);
        // Getting the close button which is placed in the modal itself 
        this.span = this.modal.querySelector('.close');
    }
    // Open the modal when the button is clicked
    openModalOnButtonClick() {
        this.mainButton.addEventListener("click", () => {
            this.modal.style.display = "block";
        })
    }
    // Close the modal when the close button is clicked
    closeModalOnButtonClick() {
        this.span.addEventListener("click", () => {
            this.modal.style.display = "none";
        })
    }
    // Close the modal while clicking on any part of the window
    closeModalOnWindowClick() {
        window.addEventListener("click", (event) => {
            if (event.target == this.modal) {
                this.modal.style.display = "none";
            }
        })
    }
}
for (let btn of document.querySelectorAll('.button')) {
    new modal(btn);
}

