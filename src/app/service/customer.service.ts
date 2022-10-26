import {Injectable} from '@angular/core';
import {Customer} from "../customer/customer";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
// const API_URL=`${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer[] = [
    {
      id: 1,
      name: "Quang Anh",
      age: 18,
      address: "Ha Noi"
    },
    {
      id: 1,
      name: "Trung",
      age: 20,
      address: "Thai Binh"
    },
    {
      id: 1,
      name: "Thai",
      age: 19,
      address: "Yen Bai"
    },

  ];

  // constructor(private http:HttpClient) {
  // }
constructor() {
}
  getAll() {
    return this.customer;
  }

  addCustomer(customer: Customer) {
    this.customer.push(customer);
  }

  deleteCustomer(id: number) {
    const idCustomer = this.customer.findIndex((customer: Customer) => {
      return customer.id === id;
    });
    this.customer.splice(idCustomer, 1);

  }

  editCustomer(id: number | undefined, temp: Customer) {
    const idCustomer = this.customer.findIndex((customer: Customer) => {
      return customer.id === id;
    });
    this.customer[idCustomer] = temp;
  }

  customers: Customer = {};

  findById(id: number) {
    for (let i = 0; i < this.customer.length; i++) {
      if (this.customer[i].id === id) {
        this.customers = this.customer[i];
        console.log(this.customers)
      }
    }
  }
}
