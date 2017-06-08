import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  id : any;
  listings :any;
  imageUrl : any;
  
  constructor(
	private firebaseService : FirebaseService,
	private router : Router,
	private route : ActivatedRoute) { }

  ngOnInit() {
	this.id  = this.route.snapshot.params['id'];
	
	this.firebaseService.getListings().subscribe(listings =>{
		  //console.log("listings");
		  this.listings = listings;	
		
	}); 
  }

}