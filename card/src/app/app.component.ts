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
      {title:'Mountain sunset',
      imageUrl:'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      username:'hiking34',
      content:' I did some hiking on mountain today!'
       },

       {title:'Snow ',
       imageUrl:'https://images.unsplash.com/photo-1477430428568-b07a848ad411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
       username:'snowfall',
       content:' wonderlost in snow!'
        },
        {title:'Heaven',
        imageUrl:'https://images.unsplash.com/photo-1470460646591-f776668990f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
        username:'Naturelove',
        content:' somewhere lost in nature! '
         },
         {title:'Sunset Camping',
         imageUrl:'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
         username:'camping',
         content:' This Camping is kind of Memorable!'
          },
          {title:'Rock Climbing',
          imageUrl:'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
          username:'climbing34',
          content:' Today i did awesome climbing on Rock!'
           }
 ]
}
