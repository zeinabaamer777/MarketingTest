import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-pricing',
  templateUrl: './our-pricing.component.html',
  styleUrls: ['./our-pricing.component.scss']
})
export class OurPricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {
      name: "Platinum Package",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel iaculis dui.",
      price:"$140"
    },
     {
      name: "Gold Package",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel iaculis dui.",
      price:"$140"
    },
     {
      name: "Silver Package",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel iaculis dui.",
      price:"$140"
    },
     {
      name: "Platinum Package",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer elementum at nisi pharetra convallis. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel iaculis dui.",
      price:"$140"
    },
   
   
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "centerMode": true,
    "focusOnSelect": true,
    "arrows":false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          "slidesToShow": 1,
          "slidesToScroll": 1,
        }
      }
    ]
  };


}
