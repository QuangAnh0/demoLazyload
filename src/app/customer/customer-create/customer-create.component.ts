import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    age:new FormControl(),
    address:new FormControl(),
  })

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  submit(){
    const customer=this.customerForm.value;
    this.customerService.addCustomer(customer);
    this.customerForm.reset();
    console.log(customer)

  }
}
