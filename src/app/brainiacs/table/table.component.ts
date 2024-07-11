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

  usersList: User[] = [];

  private modalService = inject(NgbModal);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('lista')
    // this.getUsersFromService();
    this.userService.getUsers().subscribe((users) => {
      this.userService.usersList = users;
    });
    this.userService.subject.subscribe((u) => {
      this.usersList = u;
    });
  }

  createUser() {
    const modalRef = this.modalService.open(AddBrainiacModalComponent);
    // modalRef.componentInstance.usersList = this.usersList;
  }

  getUsersFromService() {
    this.userService.getUsers().subscribe((data) => {
      this.usersList = data;
    });
  }


}
