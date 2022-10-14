import { Component } from '@angular/core';







@Component({



  selector: 'app-root',



  templateUrl: './app.component.html',



  styleUrls: ['./app.component.css'],



})



export class AppComponent {



  title = 'first_project';



  list:any[]=[];

  list2:any[]=[];



 



  EnterSubmit(item:String,bo:any,bi:any)



    {



     



      if(item!="")



this.list.push({item});

this.list2.push({bi});



bo.value=""





}



  remove(i:number)



  {



this.list.splice(i,1);



  }
}
