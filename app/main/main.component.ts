import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app-main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [AppService]
})
export class MainComponent implements OnInit {

  @Input() userId: number;
  constructor(private appService: AppService) {

  }

  items;

  ngOnInit() {
    if (this.userId == undefined) {
      this.appService.getQuestions().subscribe(data => {
        console.log(data);
        this.items = data["items"];
      })

    } else {
      this.appService.getUserQuestions(this.userId).subscribe(data => {
        this.items = data["items"];
      });
    }

  }

}
