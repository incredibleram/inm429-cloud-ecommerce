import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productName: string | undefined;
  @Input() productPrice: number | undefined;
  @Input() productQuantity: number | undefined;
  @Input() productImageUrl: string | undefined;
}
