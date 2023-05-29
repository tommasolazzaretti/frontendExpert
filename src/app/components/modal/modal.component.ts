import {Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  @Input() modalTitle!: string;
  @ViewChild('content') modalContent!: ElementRef;
  modalRef!: NgbModalRef;


  constructor(private modalService: NgbModal) {
  }

  open() {
    if (!this.modalService.hasOpenModals()) {
      this.modalRef = this.modalService.open(this.modalContent, {centered: true});
    }
  }

  close() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
}
