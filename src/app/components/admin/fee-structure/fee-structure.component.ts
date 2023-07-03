import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Fee } from 'src/app/classes/fee';
import { FeeService } from 'src/app/services/fee.service';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.css']
})
export class FeeStructureComponent implements OnInit {


  editDialog: boolean = false
  addDialog: boolean = false
  fees: Fee[] = []
  fee: Fee
  feeForm: FormGroup


  constructor(private fb: FormBuilder,
    private feeService: FeeService,
    private message: MessageService) { }

  ngOnInit(): void {
    this.fetchFees()
    this.createForm()

  }

  createForm() {
    this.feeForm = this.fb.group({
      amount: [, [Validators.required]],
      tag: ['', Validators.required],
    })
  }



  fetchFees() {
    this.feeService.getAllFees().subscribe({
      next: (response: Fee[]) => this.fees = response,
      error: (error: any) => { },
      complete: () => { }
    })
  }

  editSubmit() {
    this.feeService.updateFee(this.fee).subscribe({
      next: (response: Fee) => this.message.add({
        severity: 'success',
        summary: 'Success!'
      }),
      error: (error: any) => this.message.add({
        severity: 'warn',
        summary: 'Failed!'
      }),
      complete:()=> {
        this.editDialog = false
        this.fetchFees()
      }
    })
  }
  addFee() {
    this.addDialog = true
  }

  updateFee(fee: any) {
    this.fee = fee
    this.editDialog = true
  }

  onSubmit() {

    let data = new Fee()

    data.amount = this.feeForm.get('amount').value
    data.tag = this.feeForm.get('tag').value

    this.feeService.createFee(data).subscribe({
      next: (response: Fee) =>
        this.message.add({
          severity: 'success',
          summary: 'Success!',
        })
      ,
      error: (error: any) =>
        this.message.add({
          severity: 'warn',
          summary: 'Failed!'
        })
      ,
      complete: () => {
        this.addDialog = false
        this.fetchFees()
      }
    })
  }
}
