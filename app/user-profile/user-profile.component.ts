import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  userId: number = 0;
  userData = { data : {}, tags : {} };
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = Number.parseInt(params['userid'])
      // console.log("userId", this.userId);
      this.setUserData();
      this.setTopTags();
    })

  }

  setUserData() {
    this.appService.getUserData(this.userId).subscribe(data => {

      this.userData.data = data["items"][0];
      console.log("userdata.data ", this.userData["data"]);
    });
  }

  setTopTags() {
    this.appService.getUserTopTags(this.userId).subscribe(data => {
      console.log(data);
      this.userData.tags = data["items"];
    })
  }
}
