import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    const label = 'Click me';
    fixture.componentRef.setInput('label', label);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(label);
  });

  it('should emit the event', () => {
    spyOn(component.btnClicked, 'emit');
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    expect(component.btnClicked.emit).toHaveBeenCalledTimes(1);
  });
});
