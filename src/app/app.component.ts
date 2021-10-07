import {Component, OnInit} from '@angular/core';
import {ApiServicesService} from "./Services/API/api-services.service";
import {PostModel} from "./Models/Post.model";
import {ApiResponseModel, Code} from "./Models/ApiResponse.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XtraBlogApp';

  constructor(private apiServices: ApiServicesService) {
  }

  ngOnInit() {
  }
}
