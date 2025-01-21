export class Modal {
  
  private readonly id: string;

  public static currentModal: Modal = undefined;

  constructor(id: string) {

    if(Modal.currentModal) {
      Modal.removeCurrentModal()
    }
    
    Modal.currentModal = this;
    console.log('Modal.modals', Modal.currentModal);
    this.id = id
  }
  
  public open(template: string): void {
    const divWrap = document.createElement("div");
    divWrap.innerHTML = template;
    divWrap.id = this.id;
    divWrap.setAttribute('modal-id', this.id);
    divWrap.classList.add('modal-element');
    const closeBtn = divWrap.querySelector('.close-modal');
    if(closeBtn) {
      closeBtn.addEventListener('click', () => {
        Modal.removeCurrentModal();
      })
    }
    document.body.appendChild(divWrap);
  }

  public remove(): void {
    const modalEl = document.getElementById(this.id);
    modalEl.parentNode.removeChild(modalEl);
  }

  public static removeCurrentModal(): void {
    if(Modal.currentModal) {
      Modal.currentModal.remove();
      Modal.currentModal = undefined;
    }
  }
}