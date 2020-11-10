import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDataObj: any;
  constructor(
    private dialog:MatDialog
  ) {
    this.userDataObj = [];
   }

  ngOnInit(): void {
    this.userDataObj.push(
      {fullName: 'lorem', dob:'2 jan 1992', languages: ['english', 'hindi', 'marathi'], gender: 'male', about: 'software engineer' },
      {fullName: 'jack', dob:'2 jan 1992', languages: ['english'], gender: 'male', about: 'software engineer' },
      {fullName: 'luke', dob:'2 jan 1992', languages: ['english', 'hindi'], gender: 'male', about: 'software engineer' },
      {fullName: 'mark', dob:'2 jan 1992', languages: ['english'], gender: 'male', about: 'software engineer' })
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result.length) {
        this.userDataObj.push(result);
      }
    })
  }

}
