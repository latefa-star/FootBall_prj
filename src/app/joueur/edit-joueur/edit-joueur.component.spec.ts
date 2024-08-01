import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJoueurComponent } from './edit-joueur.component';

describe('EditJoueurComponent', () => {
  let component: EditJoueurComponent;
  let fixture: ComponentFixture<EditJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditJoueurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
