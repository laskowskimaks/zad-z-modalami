import { Component, inject } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faPlus,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { AddBrainiacModalComponent } from '../../modals/add-brainiac-modal/add-brainiac-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',

})
export class TableComponent {
  faUserGroup = faUserGroup;
  faPlus = faPlus;

  usersListTable: User[] = [];


  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.usersListTable = this.userService.getUsersListFromService();
  }

  createUser() {
    const modalRef = this.modalService.open(AddBrainiacModalComponent);

    modalRef.result.then((user) => {
      if (user) {
        console.log(user);
        this.userService.addNewUserToList(user);
      }
    });
  }




}
