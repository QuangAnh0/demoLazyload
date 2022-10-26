import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private customerService: CustomerService) {
    const customer = this.customerService.customers;
    this.customerForm = new FormGroup({
      id: new FormControl(customer.id),
      name: new FormControl(customer.name),
      age: new FormControl(customer.age),
      address: new FormControl(customer.address),

    })
  }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.editCustomer(customer.id, customer);
    this.customerForm.reset();
  }
}
