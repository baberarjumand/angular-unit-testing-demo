import { Person, PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-with-service',
  templateUrl: './component-with-service.component.html',
  styleUrls: ['./component-with-service.component.scss'],
})
export class ComponentWithServiceComponent implements OnInit {
  localPersonsArr: Person[] = [];

  constructor(private personService: PersonService) {}

  async ngOnInit(): Promise<void> {
    await this.updateLocalPersonArr();
  }

  async updateLocalPersonArr(): Promise<void> {
    this.localPersonsArr = await this.personService.getPersons();
  }

  async addPerson(): Promise<void> {
    this.personService.addPerson();

    await this.updateLocalPersonArr();
    console.log('Persons Arr:', this.localPersonsArr);
  }

  async deletePerson(): Promise<void> {
    this.personService.deletePerson();

    await this.updateLocalPersonArr();
    console.log('Persons Arr:', this.localPersonsArr);
  }
}
