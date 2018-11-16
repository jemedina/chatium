import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryLanguageService } from 'src/app/services/country-language.service';
import { SessionService } from 'src/app/services/session-service.service';
import { SearchService } from 'src/app/services/search.service';
import { ChatService } from 'src/app/services/chat.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface NewRoomDialogData {
  languageCode: string;
  roomName: string;
}


@Component({
  selector: 'app-connectpeople',
  templateUrl: './connectpeople.component.html',
  styleUrls: ['./connectpeople.component.scss']
})
export class ConnectpeopleComponent implements OnInit {
  searchMode: string = "users";
  supportedLanguages: any[];
  languageLevels: any;
  userInfo: any;
  GENDERS: any[] = [
    { code: "male", name: "Male" },
    { code: "female", name: "Female" }
  ];

  //Default params
  searchParams: any = {
    "nativeLanguage": "en",
    "learningLanguage": "es",
    "gender": "female"
  };

  roomSearchParams: any = {};


  foundUsers: any;

  foundRooms: any;

  constructor(private sessionService: SessionService,
    private _formBuilder: FormBuilder,
    private countryLanguage: CountryLanguageService,
    private searchService: SearchService,
    public newRoomDialog: MatDialog,
    private chatService: ChatService) { }

  ngOnInit() {
    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
    this.languageLevels = this.countryLanguage.getLanguageLevelValues();

    this.sessionService.getUserInfo().subscribe(resp => {
      if(resp) {
        this.userInfo = resp;
        this.searchParams.nativeLanguage = this.userInfo.languageConfiguration.learningLanguage;
        this.searchParams.learningLanguage = this.userInfo.languageConfiguration.nativeLanguage;
        this.searchParams.gender = this.userInfo.gender == 'male' ? 'female' : 'male';

        this.refreshResults();
      }
    });

  }

  refreshResults() {
    this.searchService.getResultsByLanguagePreferences(this.searchParams).subscribe(res => {
      this.foundUsers = res;
    });
    this.searchService.getRoomsByLanguage(this.roomSearchParams.langCode).subscribe(res => {
      this.foundRooms = res;
    });
  }

  openNewRoomDialog() {
    const dialogRef = this.newRoomDialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was close', result);
      if(result && result.name && result.langCode) {
        this.chatService.createRoom(result).subscribe(res => {
          console.log("Response ", res);
          this.chatService.refreshFriendsList(this.userInfo._id);
          //MOVE TO CHAT VIEW
        });
      }
      
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title>NEW ROOM</h1>
  <div mat-dialog-content>
    <p>Name of the room</p>
    <input type="text" style="margin-bottom: 10px" [(ngModel)]='data.name'>
    <mat-form-field>
    <mat-select placeholder="Room language" [(ngModel)]='data.langCode'>
      <mat-option *ngFor="let language of supportedLanguages" [value]="language.code">
        {{language.name}}
      </mat-option>
    </mat-select>
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Cancel</button>
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Create</button>
  </div>
  `,
})
export class DialogOverviewExampleDialog implements OnInit {

  supportedLanguages: any[];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: NewRoomDialogData,
    private countryLanguage: CountryLanguageService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
  }

}