import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { CreateItemComponent } from 'src/app/components/create-item/create-item.component';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Item[] = [{
    available: true,
    name: 'Keyboard',
    price: 100,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Mouse',
    price: 80,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: false,
    name: 'Printer',
    price: 150,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Monitor',
    price: 300,
    utilities: ['delete', 'modify', 'quickview']
  }];
  columns: string[] = ['id', 'name', 'price', 'utilities']

  search: FormControl = new FormControl();

  constructor(private _dialog: MatDialog, private _dataService: DataService) { }

  @ViewChild(MatTable) table!: MatTable<any>;
  ngOnInit(): void {
    this.listItems();
    this.search.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        map(value => value.trim())
      )
      .subscribe(value => {
        this.listItems(value);
      })
  }

  listItems(search?: string){
    this._dataService.getItemList(search).subscribe(value=>{
      this.items = value;
    })
  }

  deleteItem(item: Item) {
    const deleteDialogRef = this._dialog.open(ConfirmationDialogComponent, {
      minWidth: '300px',
      data: item
    })

    deleteDialogRef.afterClosed().subscribe(value => {
      if (!value) return;

      this.items.splice(this.items.indexOf(item), 1)
      this.table.renderRows();
    })
  }

  createItem() {
    const createDialogRef = this._dialog.open(CreateItemComponent, {
      minWidth: '500px'
    })

    createDialogRef.afterClosed().subscribe(value => {
      if (!value) return;

      this.items.push(value);
      this.table.renderRows();
    })
  }

}
