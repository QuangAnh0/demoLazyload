import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customer = this.customerService.getAll();
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id);
    this.customer = this.customerService.getAll();
  }

  findCustomerById(id: number) {
    this.customerService.findById(id);
    console.log(this.customerService.customers);
  }
}
