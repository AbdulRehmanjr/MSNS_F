import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  myForm: FormGroup; // Declare a FormGroup instance

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      developerType: [''], // Initialize with an empty string
    });
  }

  onSubmit() {
    // Handle form submission here
    const developerType = this.myForm.value.developerType;
    console.log('Submitted developer type: ' + developerType);
    // You can perform further actions, like making an HTTP request, here.
  }
}
