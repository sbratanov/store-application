import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent{
  createItemFg: FormGroup = new FormGroup({
    available: new FormControl(false),
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required)
  });
  constructor(private _dialogRef: MatDialogRef<CreateItemComponent>) { }

  createItem(){
    this.createItemFg.markAllAsTouched();
    if(this.createItemFg.invalid) return;


    this._dialogRef.close(this.createItemFg.getRawValue());
  }
}
