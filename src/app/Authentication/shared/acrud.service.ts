import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcrudService {

  constructor() { }

  createPost(value: any) {
    this.postdata = {
      title: value.title,
      nameToSearch: value.title.toLowerCase(),
      desc: value.desc,
      category: value.category,
      subcategory: value.subcategory,
      name: value.name,
      created_date: this.ucrud.currentDate,
      imgurl: this.ucrud.downloadURL,
      privacy: value.privacy,
      uid: this.id,
      uname: this.uname,
    }

    this.http.post(
      `https://write-your-heart-out-b338b.firebaseio.com/post/public.json`, this.postdata)
      .subscribe(responseData => {
        this.router.navigate(['']);
        this.showSuccess();
      }, err => {
        console.log(err)
      });


    getPublicPost(): Observable < UPost[] > {
      return this.http.get<UPost[]>(`https://write-your-heart-out-b338b.firebaseio.com/post/public.json`)
        .subscribe(data => {
          let result = data
          console.log(d)
        })

    }



    update( Oldvalue, formvalue) {


      this.postdata = {
        title: formvalue.title,
        nameToSearch: formvalue.title.toLowerCase(),
        desc: formvalue.desc,
        category: formvalue.category,
        subcategory: formvalue.subcategory,
        name: formvalue.name,
        imgurl: formvalue.imgurl,
        privacy: formvalue.privacy,
        created_date: this.ucrud.currentDate,
        uid: value.uid,
        uname: value.uname
  
      }
   let key = this.GetFirebaseKey(FromValue)
   this.Edit_Public_Post(this.postdata, key)
  }
  
  GetFirebaseKey(FromValue) {
      return this.http.get<UPost[]>(`https://write-your-heart-out-b338b.firebaseio.com/post/public.json`)
        .pipe(
          map(responseData => {
            for (const key in responseData) {
              if (responseData[key].title == FromValue.title) {
                this.db_key = key
              }
              else {
                console.log("no KeyFound")
              }
            }
          })
        )
    }
        
  EditPublicPost(postdata,key){
        key.subscribe(x => {
        this.http.patch(
          `https://write-your-heart-out-b338b.firebaseio.com/post/public/${this.db_key}.json`, postdata)
          .subscribe(d => {
            this.router.navigate([``]);
           
          })
      })
  
    }
  
  




  }
