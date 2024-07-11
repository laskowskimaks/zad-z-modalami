import { Component, inject, Input } from '@angular/core';
import { User } from '../../user.model';
import {
  faPlus,
  faUserGroup,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateBrainiacModalComponent } from '../../modals/update-brainiac-modal/update-brainiac-modal.component';
import { DeleteBrainiacModalComponent } from '../../modals/delete-brainiac-modal/delete-brainiac-modal.component';

@Component({
  selector: 'tr[app-row]',
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {

  @Input() user!: User;
  usersList: User[] = [];

  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;

  private modalService = inject(NgbModal);

  updateUser(user: User) {
    const modalRef = this.modalService.open(UpdateBrainiacModalComponent);
    modalRef.componentInstance.user = user;
    // modalRef.componentInstance.usersList = this.usersList;
  }

  deleteUser(user: User) {
    const modalRef = this.modalService.open(DeleteBrainiacModalComponent);
    modalRef.componentInstance.user = user;
  }


}
