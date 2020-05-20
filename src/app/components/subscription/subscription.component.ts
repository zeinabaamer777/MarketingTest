import { SubscriptionService } from './../../services/subscription.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor(private subscription:SubscriptionService) { }

  
  formEmail = new FormGroup({

    email:new FormControl('',Validators.required)

  });


  onSubmit(){
    this.subscription.sendEmail(this.formEmail.value);
    
  }

  ngOnInit(): void {
  }


}
