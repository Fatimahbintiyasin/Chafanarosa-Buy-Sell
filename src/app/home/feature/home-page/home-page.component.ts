import { Component, OnInit } from '@angular/core';
import { AdvertisementsService } from 'src/app/advertisements/data-access/service/advertisements.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public advertsService : AdvertisementsService) { }

  ngOnInit(): void {
  }

}
