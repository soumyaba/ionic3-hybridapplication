import { Component } from '@angular/core';
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
export class CreatePage {
  public signinform: FormGroup

  constructor(public navParams: NavParams, private fb: FormBuilder, private nav:NavController, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    this.signinform = this.fb.group({
username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(10)])],
password:['',Validators.compose([Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'), Validators.maxLength(10)])],
confirmpassword:['', Validators.compose([ Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'), Validators.maxLength(10)])]
    })
  }
  signin(signinform) {
    console.log(signinform);
    if(signinform.value.username === ''){
  let empty = 'Username is required';
  this.presentToast(empty);
   }else if(signinform.value.username !== 'username') {
  let text = 'Username is invalid';
  this.presentToast(text);
    }else if(signinform.value.password === '') {
      let text = 'Password is required';
      this.presentToast(text);
    }else if(signinform.value.password !== 'password') {
      let text = 'Invalid Password';
      this.presentToast(text);
    }else {
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
