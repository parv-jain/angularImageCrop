import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';
import fileDialog from 'file-dialog';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _DomSanitizationService: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  public selectedFile: any = '';
  public imageChangedEvent: any = '';
  public croppedImage: any = '';

  fileChangeEvent(event: any): void {
    console.log(event);
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this._DomSanitizationService.bypassSecurityTrustUrl(URL.createObjectURL(event.file));
    console.log(this.croppedImage)
  }

  imageLoaded() {
    // show cropper
  }

  loadImageFailed() {
    // show message
  }

  selectFile() {
  console.log("select File")	
  fileDialog({ accept: 'image/*' })
    .then(files => {
        // files contains an array of FileList
	this.selectedFile = files[0];
	console.log(files[0]);
    })
  }

}
