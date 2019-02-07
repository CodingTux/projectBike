import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  reqDataV1: string;
  reqDataV2: string;
  reqDataV3: string;
  reqDataV4: string;
  reqDataV5: string;
  reqDataV6: string;
  auth_token: string = "e976f58873cc4a22839aac37e224928f";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    setInterval(() => {
      this.http.get('http://blynk-cloud.com/' + this.auth_token + '/get/V1')
        .subscribe((req) => {
          this.reqDataV1 = req[0];
          console.log(req);
        });
        this.http.get('http://blynk-cloud.com/' + this.auth_token + '/get/V2')
        .subscribe((req) => {
          this.reqDataV2 = req[0];
          console.log(req);
          });
          this.http.get('http://blynk-cloud.com/' + this.auth_token + '/get/V3')
          .subscribe((req) => {
            this.reqDataV3 = req[0];
            console.log(req);
            });
            this.http.get('http://blynk-cloud.com/' + this.auth_token + '/get/V4')
        .subscribe((req) => {
          this.reqDataV4 = req[0];
          console.log(req);
              });
              this.http.get('http://blynk-cloud.com/' + this.auth_token + '/get/V5')
              .subscribe((req) => {
                this.reqDataV5 = req[0];
                console.log(req);
                });
                this.http.get('http://blynk-cloud.com/' + this.auth_token + '/get/V6')
                .subscribe((req) => {
                  this.reqDataV6 = req[0];
                  console.log(req);
                });
    }, 1000);
  }
}
