import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from './order';

@Component({
  selector: 'app-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  styleUrls: ['./coffeeshop.component.css']
})

export class CoffeeshopComponent implements OnInit {
  order:Order;
  orderForm:FormGroup;
  confirm: Boolean = false;

  drink = [
    { id: 1, name: "Coffee" },
    { id: 2, name: "Matcha Late" },
    { id: 3, name: "Late" },
    { id: 4, name: "Espresso" },
    { id: 5, name: "Caramel Macchiato" }
  ];


  constructor(private fb:FormBuilder) {
    this.order = new Order("","email",1234567890,"drink","hot or cold",true);
    this.orderForm=this.fb.group ({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]],
      drink:[null],
      tempPreference:['',Validators.required],
      sendText:[false]
    });
  }

  ngOnInit(){}
  submitForm() {
    var txt;
    const date = console.log(new Date())
    this.orderForm.value.Date = new Date()

    if (confirm("Please confirm")) {
      this.confirm=true;}



 }
  }



