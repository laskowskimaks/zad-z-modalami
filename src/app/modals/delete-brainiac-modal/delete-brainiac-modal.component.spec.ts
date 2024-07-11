import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBrainiacModalComponent } from './delete-brainiac-modal.component';

describe('DeleteBrainiacModalComponent', () => {
  let component: DeleteBrainiacModalComponent;
  let fixture: ComponentFixture<DeleteBrainiacModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBrainiacModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBrainiacModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
