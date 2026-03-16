import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  imports: [ReactiveFormsModule],
  templateUrl: './delete-user.html',
  styleUrl: './delete-user.css',
})
export class DeleteUser {
  constructor(public service: ProductService,public router:Router) {}
  id = new FormControl('');
  deleteUser() {
    if (this.id.value) {
      console.log(`User with ID ${this.id.value} deleted.`);
      this.service.deleteUser((this.id.value)).subscribe((resp) => {
        if(resp){
          console.log(`User with ID ${this.id.value} deleted successfully.`);
          this.router.navigate(['/']); // Redirect to the user list after deletion
          this.service.getProducts()
        }
      });
    }
  }
}
