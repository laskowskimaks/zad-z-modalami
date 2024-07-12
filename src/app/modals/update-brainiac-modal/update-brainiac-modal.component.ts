import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-brainiac-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-brainiac-modal.component.html',
  styleUrl: './update-brainiac-modal.component.scss'
})
export class UpdateBrainiacModalComponent {
  @Input() user!: User;

  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
  ) {
    this.form = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit() {
    if (this.form.valid) {
      const updatedUser: User = {
        ...this.user,
        ...this.form.value,
      };
      this.activeModal.close(updatedUser);
    }
  }
}
