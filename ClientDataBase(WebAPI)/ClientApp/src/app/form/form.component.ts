import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../models/client';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent {

  form: FormGroup;
   
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      Name: ['', Validators.required],
      Phone: ['', Validators.required],
      Address: ['', Validators.required],
      Email: ['', Validators.required],
    });
  }

  onSubmit() {

    let tempUser = <Client>{};
    tempUser.name = this.form.value.Name;
    tempUser.phone = this.form.value.Phone;
    tempUser.address = this.form.value.Address;
    tempUser.email = this.form.value.Email;

 
    this.dataService.SaveClient(tempUser)
      .subscribe(res => {
        if (res) this.dataService.newClient.next(res),
          error => console.log(error)
      });
    
  }

}
