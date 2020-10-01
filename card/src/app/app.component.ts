import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 posts=[
   {title:'Neat Tree',
   imageUrl:'assets/tree.jpeg',
   username:'nature',
   content:' I saw this awesome tree during hiking today!'
    },
    {title:'Snowy Mountain',
    imageUrl:'assets/mountain.jpeg',
    username:'smountain_lover',
    content:' Here is the beautifull snowy white mountain! '
     },
     {title:'Mountain Biking',
     imageUrl:'assets/biking.jpeg',
     username:'biking123',
     content:' I did some biking today!'
      },
      {title:'Mountain Biking',
      imageUrl:'assets/biking.jpeg',
      username:'biking123',
      content:' I did some biking today!'
       }
 ]
}
