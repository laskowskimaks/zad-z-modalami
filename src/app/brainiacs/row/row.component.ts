import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
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
import { UserService } from '../../user.service';

@Component({
  selector: 'tr[app-row]',
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {

  @Input() user!: User;

  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;

  constructor(private userService: UserService, private modalService: NgbModal, private cdr: ChangeDetectorRef) { }

  updateUser(user: User) {
    const modalRef = this.modalService.open(UpdateBrainiacModalComponent);
    modalRef.componentInstance.user = user;

    modalRef.result.then((updatedUser) => {
      if (user) {
        this.userService.updateUserToList(updatedUser);
      }
    });

  }

  deleteUser(user: User) {
    const modalRef = this.modalService.open(DeleteBrainiacModalComponent);
    modalRef.componentInstance.user = user;
  }


}
