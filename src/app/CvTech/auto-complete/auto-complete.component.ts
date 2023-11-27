import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {ToastrService} from "ngx-toastr";
import {DefaultImagePipe} from "../pipes/default-image.pipe";
import {Person} from "../../models/person.model";

@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DefaultImagePipe],
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.css'
})
export class AutoCompleteComponent {
    searchInput=new FormControl();
    searchResults: Person[] | undefined;

    constructor(private apiService: ApiService,private toastr: ToastrService) {
        this.searchInput.valueChanges.subscribe({
            next: (data) => {
                this.apiService.getUsers(data).subscribe({
                    next: (data) => {
                        this.searchResults=data;
                    },
                    error: (error) => {
                        this.toastr.warning(
                            'An error occurred while fetching user data.',
                            'Error',
                            {
                                timeOut: 1000,
                                toastClass:
                                    'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-red-300',
                            },
                        );
                    },
                });
            },
        });

    }
}
