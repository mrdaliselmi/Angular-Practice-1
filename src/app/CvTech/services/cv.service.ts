import { Injectable } from '@angular/core';
import { Person } from '../../models/person.model';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private persons: Person[] = [];
  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
  ) {
    this.apiService.getUsers("").subscribe({
      next: (data) => {
        this.handleApiSuccess(data);
      },
      error: (error) => {
        this.handleError(error);
      },
    });
  }
  handleError(error: any) {
    this.toastr.warning(
      'An error occurred while fetching user data.',
      'Error',
      {
        timeOut: 1000,
        toastClass:
          'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-red-300',
      },
    );
    console.log('Error fetching user data:', error);
    this.persons = [
      new Person(
        1,
        'John',
        'Smith',
        45,
        'Developer',
        'assets/images/smith.png',
        123456,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      ),
      new Person(
        2,
        'Jane',
        'Doe',
        25,
        'Designer',
        'assets/images/doe.png',
        654321,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ),
      new Person(
        3,
        'Lightning',
        'McQueen',
        5,
        'Racer',
        'assets/images/mcQueen.png',
        987654,
        'KA-CHOW!',
      ),
      new Person(
        4,
        'Buzz',
        'Lightyear',
        10,
        'Space Ranger',
        'assets/images/buzz.jpg',
        456789,
        'To infinity, and beyond!',
      ),
      new Person(
        5,
        'Ken',
        'Carson',
        35,
        'Beach',
        'assets/images/ken.jpg',
        159357,
        "I'm trained to stand confidently here.",
      ),
    ];
  }
  handleApiSuccess(data: any) {
    for (const user of data) {
      this.persons.push(
        new Person(
          user.id,
          user.firstname,
          user.name,
          user.age,
          user.job,
          user.path,
          user.cin,
        ),
      );
    }
  }

   getPersons(search: string): any {
   this.apiService.getUsers(search).subscribe({
        next: (data) => {
          return data;
        },
        error: (error) => {
          console.log(this.persons);
        },
      });
     return this.persons;
  }

  getPersonById(id: number): Person | undefined {
    return this.persons.find((person) => person.id == id);
  }

  deletePersonById(id: number): boolean {
    const index = this.persons.findIndex((person) => person.id == id);
    if (index === -1) {
      return false;
    } else {
      this.toastr.success(
        `${this.persons[index]['firstName']}'s cv deleted successfully`,
        '',
        {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-300',
        },
      );
      this.persons.splice(index, 1);
      return true;
    }
  }
}
