import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef

  openModal() {
    this.modalRef = this.modalService.show(LoginComponent)
  }
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

}
