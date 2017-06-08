import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  users;
  listings;
  email;
  $key;
  count1 = 0;
  count2 = 0;
  cfollows;
  splitted : any;
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getUsers().subscribe(users =>{
		  this.users = users;
	  });
	  this.firebaseService.getListings().subscribe(listings =>{
		  this.listings = listings;
	  });
	  
  }
  loop(){
	this.email = this.firebaseService.getUsername();
	for(let user of this.users){
		if(user.name == this.email){
			this.$key = user.$key;	
			this.cfollows = user.follows;
			break;
		}		
	} 
	this.count1 = 1;
  }
  printListings(){
		this.splitted = this.cfollows.split("$"); 
		this.count2 = 1;
  }
  follow(id){
    var sign = "$";
	id = id.concat(sign);
	let user = { 
		name  : this.email,
		follows : this.cfollows.concat(id)
	}
	this.firebaseService.updateUser(this.$key,user);
	this.count1 = 0;
  }

}
