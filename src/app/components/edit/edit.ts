import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  imports: [],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  constructor(public router: ActivatedRoute,private service :ProductService,public http: HttpClient,public route:Router) {}
  id = signal('');
  email = signal('');
  name = signal('');
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id.set(params['id']);
    });
    this.service.getProducts().subscribe((data)=>{
      data.filter((item)=>{
        if(item.id == parseInt(this.id())){
          this.email.set(item.email);
          this.name.set(item.name);
        }
      });

    });
  }
  update(){
    this.service.editUser({id:parseInt(this.id()),email:this.email(),name:this.name()}).subscribe((resp)=>{
      if(resp){
        console.log(`User with ID ${this.id()} updated successfully.`);
        this.route.navigate(['/']); // Redirect to the user list after update
        this.service.getProducts()
      }
    
  }
)}
}
