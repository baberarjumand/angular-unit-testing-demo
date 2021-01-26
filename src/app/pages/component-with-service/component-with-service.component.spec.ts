import { PersonService } from './../../services/person.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithServiceComponent } from './component-with-service.component';
import { By } from '@angular/platform-browser';

describe('ComponentWithServiceComponent', () => {
  let component: ComponentWithServiceComponent;
  let fixture: ComponentFixture<ComponentWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentWithServiceComponent],
      providers: [PersonService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    // const fixture = TestBed.createComponent(ComponentWithServiceComponent);
    // fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.page-heading').textContent).toContain(
      'Component With a Service'
    );
  });

  it('should have zero person records initially', () => {
    expect(component.localPersonsArr.length).toEqual(0);
  });

  it('should simulate adding two then removing one person', (done) => {
    // service.addPerson();
    // service.addPerson();
    // service.deletePerson();

    // service.getPersons().then((resArr) => {
    //   // const tempPersonArr = resArr;
    //   expect(resArr.length).toEqual(1);
    //   done();
    // });

    fixture.debugElement
      .query(By.css('.add-person-btn'))
      .triggerEventHandler('click', null);

    fixture.debugElement
      .query(By.css('.add-person-btn'))
      .triggerEventHandler('click', null);

    fixture.debugElement
      .query(By.css('.delete-person-btn'))
      .triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.localPersonsArr.length).toEqual(1);
      done();
    });
  });
});
