import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required, ɵNgFieldDirective } from '@angular/forms/signals';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormField, CommonModule, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
