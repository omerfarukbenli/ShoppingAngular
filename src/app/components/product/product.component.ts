import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { BasketModel } from  'src/app/models/basket'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

products:ProductModel[] = [
  {name:"Peynir", price:26.61, imageUrl:"https://www.sanalpeynirci.com/Uploads/UrunResimleri/buyuk/izmir-tulum-peyniri-koyun-kg-b15e.jpg"},
  {name:"Zeytin", price:132.50, imageUrl:"https://www.organikgurmem.com/images/urunler/Mega-Siyah-Zeytin-1-KG-resim-930.jpg"},
  {name:"Tereyağı", price:60.00, imageUrl:"https://st.myideasoft.com/idea/if/83/myassets/products/137/sm-urun-gorselleri-tereyagi-ve-kaymak-412100-tereyagi-yayik-500g.jpg?revision=1638261716"},
  {name:"Lavaş", price:40.60, imageUrl:"https://cdn.yemek.com/mnresize/940/940/uploads/2020/08/lavas-ekmegi-son.jpeg"},
  {name:"Yeşil Zeytin", price:20.50, imageUrl:"https://www.kavlak.com.tr/image/resim/urun/257/kavlak-domat-kirma-yesil-zeytin-1-kg.jpg"},
  {name:"Telefon Kablosu", price:40.20, imageUrl:"https://productimages.hepsiburada.net/s/10/550/9207755767858.jpg/format:webp"},
  {name:"Priz", price:10.40, imageUrl:"https://productimages.hepsiburada.net/s/37/550/10542849523762.jpg/format:webp"},
  {name:"Ekmek", price:2.00, imageUrl:"https://esenlik.com.tr//images/prod/2540.jpg"}
  
  

]
baskets: BasketModel[] = [];


total:number=0;
@Output() myEvent:EventEmitter<any> = new EventEmitter();

  constructor(private toastrService:ToastrService) {
    
   }

  ngOnInit(): void {}

  addBasket(product:ProductModel){
    let basketModel = new BasketModel();
    basketModel.product = product;

    basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-" + product.name)).value);
    (<HTMLInputElement>document.getElementById("quantity-" + product.name)).value = "1";
    
  this.baskets.push(basketModel);
  // this.total = this.total + (basketModel.quantity * product.price);
  
  this.myEvent.emit({data : this.baskets});
  this.toastrService.success(product.name +  "sepete başarıyla eklendi");
  }

}
