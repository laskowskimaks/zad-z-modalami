import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-brainiac-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-brainiac-modal.component.html',
  styleUrls: ['./add-brainiac-modal.component.scss'],
})
export class AddBrainiacModalComponent {
  form: FormGroup;

  usersList!: User[];

  newBrainiac: User = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    avatar: 'https://reqres.in/img/faces/11-image.jpg', // defaultowy avatar
  };

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) {
    console.log('dupa ' + this.usersList)
    this.form = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit() {
    this.usersList = this.userService.usersListService
    if (this.form.valid) {
      this.newBrainiac.first_name = this.form.value.first_name;
      this.newBrainiac.last_name = this.form.value.last_name;
      this.newBrainiac.email = this.form.value.email;

      this.userService.createUser(this.newBrainiac).subscribe(
        (response) => {
          this.usersList.push(response);
          this.activeModal.close('Save click');
        },
        (error) => {
          console.error('Error creating user', error);
        }
      );
    }
  }
}
