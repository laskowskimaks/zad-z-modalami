import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrainiacModalComponent } from './add-brainiac-modal.component';

describe('AddBrainiacModalComponent', () => {
  let component: AddBrainiacModalComponent;
  let fixture: ComponentFixture<AddBrainiacModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBrainiacModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBrainiacModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
