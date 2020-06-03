import { Component } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  name: string;
  email: string;
  message: string;

  constructor(private http: HttpClient) {

  }

  onSubmit(f: NgForm){
    //this is bad practice but its ok since it can only insert into my dynamo db. 
    const cred = new AWS.Credentials(environment.pk, environment.sk);
    AWS.config.credentials = cred;
    AWS.config.update({region: 'us-east-1'});

    var ddb = new AWS.DynamoDB();

    var params = {
      TableName: 'portfolio-contact',
      Item: {
        'email'  : {S : this.email},
        'name'   : {S : this.name},
        'message': {S : this.message}
      }
    };

    console.log(f.value);

    ddb.putItem(params, function(err, data){
      if(err){
        console.log("Error", err);
        alert("Message could not be sent. Please try again later.");
      }else{
        console.log("Success", data);
        f.reset();
        alert("Message sent. I'll be in touch soon!");
      }
    });
  }
}