import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { ProductService } from '../../services/product-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [FormField,ReactiveFormsModule,RouterLink],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
    name = signal('');
    email = signal('');
    id = signal('');
    constructor(public service: ProductService,public router:Router){}
    addUser(){
      if(this.name()&&this.email()&&this.id()){
        let user = {
          name:this.name(),
          email:this.email(),
          id:parseInt(this.id())
        }
        this.service.addUser(user).subscribe((resp)=>{
          if(resp){
            this.router.navigate(['/']);
          }
        });
      }

    }

}
