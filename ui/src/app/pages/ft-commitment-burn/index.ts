import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import FtCommitmentService from '../../services/ft-commitment.service';
import { Router } from '@angular/router';
import {UtilService} from '../../services/utils/util.service';
import { NgSelectComponent } from '@ng-select/ng-select';
import UserService from '../../services/user.service';
import { toastrConfig } from '../../config/config';

/**
 *  Burn ft-commitment component, which is used for rendering the page of burn fungible token commitment.
 */
@Component({
  selector: 'app-ft-commitment-burn',
  templateUrl: './index.html',
  providers: [UserService, FtCommitmentService, UtilService],
  styleUrls: ['./index.css']
})
export default class FtCommitmentBurnComponent implements OnInit , AfterContentInit {
  /**
   * Transaction list
   */
  transactions: Array<Object>;
  /**
   * Seleceted ERC-20 commitment
   */
  selectedCommitment: any;
  /**
   * Seleceted list of ERC-20 commitment
   */
  selectedCommitmentList: any = [];
  /**
   * Flag for http request
   */
  isRequesting = false;
  /**
   * To identify the index of selected ERC-20 commitment.
   */
  index: string;
  /**
   * Fungeble Token name , read from ERC-20 contract.
   */
  ftName: string;

  /**
   *  Fungeble Token Symbol , read from ERC-20 contract.
   */
  ftSymbol: string;

  /**
   * To store all users
   */
  users: any;

/**
 * Name of the receiver
 */
  receiverName: string;

  /**
   * Reference of combo box
   */
  @ViewChild('select') select: NgSelectComponent;

  constructor(
    private toastr: ToastrService,
    private utilService: UtilService,
    private ftCommitmentService: FtCommitmentService,
    private userService: UserService,
    private router: Router
  ) {
    this.getFTCommitments();
    this.customSearchFn = this.customSearchFn.bind(this);
  }

  ngOnInit () {
    this.ftName = localStorage.getItem('ftName');
    this.ftSymbol = localStorage.getItem('ftSymbol');
    this.getAllRegisteredNames();
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.select.focus();
  }, 500);

  }

  /**
   * Method to list down all ERC-20 commitments.
   */
  getFTCommitments() {
    this.transactions = null;
    this.isRequesting = true;
      this.ftCommitmentService.getFTCommitments()
      .subscribe( data => {
        this.isRequesting = false;
        if (data &&
          data['data'] &&
          data['data'].length
         ) {
          this.transactions = data['data'].map((tx, indx) => {
            tx.selected = false;
            tx.id = indx;
            return tx;
          });
        }
      }, error => {
        this.isRequesting = false;
      });
  }

  /**
   * Method to burn a fungilbe token commitment, this will revert back to public
   */
  initiateBurn () {
    this.selectedCommitment = this.selectedCommitmentList[0];
    const commitment = this.selectedCommitment;
    if (!commitment) { return; }
    const { transactions } = this;
    this.isRequesting = true;
    this.ftCommitmentService.burnFTCommitment(commitment, this.receiverName).subscribe( data => {
        this.isRequesting = false;
        this.toastr.show(`Burning fungible token commitment.`, '', toastrConfig, 'burnFTCommitment');

        // delete used commitment from commitment list
        transactions.splice(transactions.indexOf(commitment), 1);
        this.transactions = [ ...this.transactions ];

        // reset the form
        this.selectedCommitmentList = [];
        this.receiverName = null;

        // navigate to overview page if no more commitment left
        if (!transactions.length) {
          this.router.navigate(['/overview'], { queryParams: { selectedTab: 'ft-commitment' } });
        }
      }, error => {
        this.isRequesting = false;
        this.toastr.error((error.error && error.error.error.message) || 'Please try again');
    });
  }

  /**
   * Method removes a commitment from the commitment list.
   * @param item {Object} Item to be removed.
   */
  onRemove(item) {
    const newList = this.selectedCommitmentList.filter((it) => {
      return item._id !== it._id;
    });
    this.selectedCommitmentList = newList;
  }

  /**
   * Method to serach an item from the combobox.
   *
   * @param term {String} Term that user entered
   * @param item {Item} Item which searched by user.
   */
  customSearchFn(term: string, item: any) {
    if (!item) {
      return;
    }
    term = term.toLocaleLowerCase();
    const itemToSearch = this.utilService.convertToNumber(item.ft_commitment_value).toString().toLocaleLowerCase();
    return itemToSearch.indexOf(term) > -1;
  }

  /**
   * Method to retrive all users.
   *
   */
  getAllRegisteredNames() {
    this.isRequesting = true;
    this.userService.getAllRegisteredNames().subscribe(
      data => {
        this.isRequesting = false;
        this.users = data['data'];
      }, error => {
        this.isRequesting = false;
        this.toastr.error('Please try again.', 'Error');
      });
  }

}

