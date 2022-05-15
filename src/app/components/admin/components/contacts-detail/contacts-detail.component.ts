import { Component, OnInit } from '@angular/core';
import {map, Observable, Subscription} from "rxjs";
import {User} from "../../user";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})

export class ContactsDetailComponent implements OnInit {
  id!:number
  user!:Observable<User>
  constructor(private adminService:AdminService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
   // this.activeRoute.params.subscribe((params)=>this.id=params?.['id'])
   //  this.user=this.adminService.getPerson(this.id)
   this.user= this.activeRoute.data.pipe(map((data)=>data?.['user']))
  }

}
