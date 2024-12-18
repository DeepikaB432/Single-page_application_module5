import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HTTP_PROJECT';
  
  products:any=[
    {id:1,name:'Product 1'},
    {id:2,name:'Product 2'},
    {id:3,name:'Product 3'},
    {id:4,name:'Product 4'}
  ];

  constructor( private service: ProductsService) { }

  ngOnInit(){
    this.service.getProducts().subscribe((x)=>{
      this.products = x;
    });
  }

}
