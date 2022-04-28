import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.scss'],
})
export class Solution1Component implements OnInit {
  constructor(private service:ApiServiceService) {}
  str1: string = '';
  str2: string = '';
  no_of_char = 256;
  UserId: number = 1;
  userData: any;
  ngOnInit(): void {


  }

  getCountArray(str2: any) {
    var count = new Array(this.no_of_char).fill(0);
    for (var i = 0; i < str2.length; i++) {
      count[str2.charCodeAt(i)]++;
    }
    return count;
  }

  removeDuplicatesValues(str1: any, str2: any) {
    var count = this.getCountArray(str2);
    var result = '';
    var index = 0;

    while (index < str1.length) {
      var temp = str1[index];
      if (count[temp.charCodeAt(0)] == 0) {
        result = result.concat(temp);
      }
      index++;
    }
    return result;
  }
  result1: any;
  result2: any;
  callTwoTimes(str1: any, str2: any) {
    if (str1.length == 0 || str2.length == 0) {
      return;
    }
    this.result1 = this.removeDuplicatesValues(str1, str2);
    this.result2 = this.removeDuplicatesValues(str2, str1);
  }

  getUserData(id: number) {

    this.service.getUser(id).subscribe((data:any) => {
      console.log(data);
      this.userData = data.data;

    });
  }

}
