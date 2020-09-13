import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  imgLink: string;
  imgs: string[] = [
    "https://images.assetsdelivery.com/compings_v2/funwayillustration/funwayillustration1412/funwayillustration141200140.jpg",
    "https://images.assetsdelivery.com/compings_v2/funwayillustration/funwayillustration1412/funwayillustration141200149.jpg",
  ];

  clickInfo: string = "Click on img to change it";

  constructor() {}

  ngOnInit(): void {
    this.imgLink = this.imgs[0];
  }

  changeImage(): void {
    this.imgLink = this.imgLink === this.imgs[0] ? this.imgs[1] : this.imgs[0];
  }
}
