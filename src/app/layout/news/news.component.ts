import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../backend.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  trendingNews;
  constructor(private backendService: BackendService) { }
  ngOnInit() {
    this.backendService.showNews().subscribe(
      (response)  =>  {
        this.trendingNews = response;
        console.log(this.trendingNews);
      },
      (error)  =>  {
        console.log(error);
      }
    );
  }

}
