import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';
import { users } from '../../services/sm';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  constructor(public productService: ProductService) {}
  products= signal<users[]|undefined>(undefined);
  ngOnInit(){
    this.productService.getProducts().subscribe((item)=>{
      console.log(item);
      this.products.set(item);
    })
  }
}
