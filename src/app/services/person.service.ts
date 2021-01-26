import { Injectable } from '@angular/core';

export interface Person {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private persons: Person[] = [];

  constructor() {}

  getPersons(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.persons);
      }, 1500);
    });
  }

  private randomIntFromInterval(min, max): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addPerson(): void {
    if (this.persons.length < 6) {
      const randomId = this.randomIntFromInterval(1000, 9999).toString();
      const randomName = 'Person ' + this.randomIntFromInterval(100, 999);

      const tempPerson: Person = {
        id: randomId,
        name: randomName,
      };

      this.persons.push(tempPerson);
    }
  }

  deletePerson(): void {
    if (this.persons.length > 0) {
      this.persons.pop();
    }
  }
}
