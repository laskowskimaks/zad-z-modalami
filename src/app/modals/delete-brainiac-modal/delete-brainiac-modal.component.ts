import { Component, Input } from '@angular/core';
import { User } from '../../user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-delete-brainiac-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-brainiac-modal.component.html',
  styleUrl: './delete-brainiac-modal.component.scss'
})
export class DeleteBrainiacModalComponent {

  @Input() user!: User;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) { }



  deleteUser() {
    this.userService.deleteUserFromList(this.user);
    this.activeModal.close('Modal Closed');
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
