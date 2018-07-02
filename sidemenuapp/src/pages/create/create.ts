import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { Nav } from 'ionic-angular/navigation/nav-interfaces';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage implements OnInit{
  public signinform: FormGroup

  constructor(public navParams: NavParams, private fb: FormBuilder, private nav:NavController, private toastCtrl:ToastController) {
  }
ngOnInit() {
  this.signinform = this.fb.group({
    username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(10)])],
    password:['',Validators.compose([Validators.required, Validators.maxLength(10)])],
    confirmpassword:['', Validators.compose([ Validators.required, Validators.maxLength(10)])]
        })
}
  ionViewDidLoad() {

  }
  signin(signinform) {
    if(signinform.value.username === ''){
      let empty = 'Username is required';
      this.presentToast(empty);
   }else if(signinform.value.username.length > 10) {
      let text = 'Username should not exceed 10 charecters';
      this.presentToast(text);
    }else if(signinform.value.password === '') {
      let text = 'Password is required';
      this.presentToast(text);
    }else if(signinform.value.password.length > 10) {
      let text = 'Password should not exceed 10 charecters';
      this.presentToast(text);
    }else if(signinform.value.confirmpassword === ''){
      let text = 'Confirm password is required';
      this.presentToast(text);
    }else if(signinform.value.password !== signinform.value.confirmpassword){
      let text = 'Password and confirm password should be same';
      this.presentToast(text);
    }else if(!signinform.valid) {
      let text = 'Username should contain only alphabets';
      this.presentToast(text);
    }else {
      localStorage.setItem('username', signinform.value.username);
      localStorage.setItem('password', signinform.value.password);
      this.nav.setRoot(HomePage);
    }
  }
  presentToast(text) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      cssClass:'background_toast_usename'
    });
    toast.present(toast);
  }

}
