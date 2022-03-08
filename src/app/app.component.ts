import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="";
  response: boolean = false;
  searchForm = this.formBuilder.group({
    userId: '',
  });

 constructor(private formBuilder: FormBuilder, private http: HttpClient){

 }
 onSubmit(){
      this.http.get("https://gorest.co.in/public/v2/todos").subscribe((data : any)=>{
        console.log(data[0].id);
        debugger;
        if((data[0].status == 'completed')){
          this.response = this.searchForm.valid;
          debugger;
        }
        else{
          this.response = !this.searchForm.valid;
        }
      })
  }
}

