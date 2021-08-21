import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import UserService from '../../services/user.service';
import {Config} from '../../config/config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { UtilService } from '../../services/utils/util.service';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Overview component, which is used for rendering the overview page.
 * Here user can see the total count of ERC-20 tokens, ERC-20 token commitments, ERC-721 tokens and ERC-721 token commitments.
 * Also user can see all the token transaction history.
 */
@Component({
  selector: 'app-overview',
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
  providers: [UserService, UtilService]
})
export default class OverviewComponent extends Config implements OnInit {
  /**
   * Flag for http request
   */
  isRequesting =  false;
  /**
   *  To store ERC-721 token commitment transaction objects
   */
  nftCommitmentTransactions: any;
  /**
   *  To store ERC-721 token transaction objects
   */
  nftTransactions: any = [];
  /**
   *  To store ERC-20 token transaction objects
   */
  ftTransactions: any = [];
  /**
   *  To store ERC-20 token commitment transaction objects
   */
  ftCommitmentTransactions: any;
  /**
   * ERC-20 token commitment count
   */
  ftBalance;
  /**
   * ERC-721 token count
   */
  nftBalance;
  /**
   * ERC-721 token commitment count
   */
  count = {};

  /**
   * For pagination purpose
   */
  pageNo: number;
  /**
   * For pagination purpose, initial value for page size is set it as 4
   */
  pageSize = 4;
  /**
   * Total collection of objects to calculate pages for pagination.
   */
  totalCollection: Promise<number>;
  /**
   * Current selected type in the Tab component.
   */
  currentType: string;
  /**
   * Flag to show the pagination component.
   */
  isPagination = false;
  /**
   *  Non Fungeble Token name , read from ERC-721 contract.
   */
  nftName: string;
  /**
   *  Non Fungeble Token Symbol , read from ERC-721 contract.
   */
  nftSymbol: string;
  /**
   *  Fungeble Token name , read from ERC-20 contract.
   */
  ftName: string;
  /**
   *  Fungeble Token Symbol , read from ERC-20 contract.
   */
  ftSymbol: string;

  /**
   * Current selected tab
   */
  selectedTab = 'nft';

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private utilService: UtilService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super('ERC-20');
  }

  ngOnInit(): void {
    this.getUserERC20AndERC721TokenCount();
    this.route
      .queryParams
      .subscribe(params => {
        this.selectedTab = params['selectedTab'] || 'nft';
        if (this.selectedTab === 'nft') {
          this.getTransactions('nft');
        }if (this.selectedTab === 'nft-commitment') {
          this.getTransactions('nft-commitment');
        }if (this.selectedTab === 'ft') {
          this.getTransactions('ft');
        }if (this.selectedTab === 'ft-commitment') {
          this.getTransactions('ft-commitment');
        } else {
          this.getTransactions('nft');
        }
      });

  }

  /**
   * Method to retrive the count and symbols of ERC-20 token, ERC-20 token commitments, ERC-721 token & ERC-721 token commitments.
   */
  getUserERC20AndERC721TokenCount() {
    const ftCount = this.userService.getFTokenInfo();
    const tokenCount = this.userService.getTokenCommitmentCounts();
    const nftBalance = this.userService.getNFTBalance();
    Observable.forkJoin([ftCount, tokenCount, nftBalance]).subscribe(
      responseList  => {
        this.count = responseList[1]['data'];
        this.ftBalance =  responseList[0]['data']['balance'];
        this.ftName = responseList[0]['data']['name'];
        localStorage.setItem('ftName', this.ftName);
        this.ftSymbol = responseList[0]['data']['symbol'];
        localStorage.setItem('ftSymbol', this.ftSymbol);
        this.nftBalance = parseInt(responseList[2]['data']['balance'], 16);
        this.nftName = responseList[2]['data']['nftName'];
        localStorage.setItem('nftName', this.nftName);
        this.nftSymbol = responseList[2]['data']['nftSymbol'];
        localStorage.setItem('nftSymbol', this.nftSymbol);
        this.isRequesting = false;
      },
      error => {
        this.isRequesting = false;
        console.log('Error in retrieving FT and NFT counts', error);
      });
  }


  /**
   * Method to fetch the token transaction based on type user click on the tab.
   *
   * @param type {String} Possible types are nft-commitment, nft, ft-commitment, ft
   */
  getTransactions(type: string) {
    this.nftCommitmentTransactions = [];
    this.nftTransactions = [];
    this.ftTransactions = [];
    this.ftCommitmentTransactions = [];

    this.pageNo = 1; // reset page number to 1
    this.isPagination = false;
    this.userService.getTransactions(type, this.pageNo, this.pageSize).subscribe(
      data => {
        if (type === 'nft-commitment') {
          this.currentType = 'nft-commitment';
          this.nftCommitmentTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
          const totalCount = parseInt(data['data']['totalCount'], 10);
          const totalPages = this.getTotalPages(totalCount);
          if (totalPages > 1) {
            this.isPagination = true;
          }
          this.totalCollection = Promise.resolve(totalCount); // should be a promise for ngb pagination component
        } else if (type === 'nft') {
          this.currentType = 'nft';
          this.nftTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
          const totalCount = parseInt(data['data']['totalCount'], 10);
          const totalPages = this.getTotalPages(totalCount);
          if (totalPages > 1) {
            this.isPagination = true;
          }
          this.totalCollection = Promise.resolve(totalCount); // should be a promise for ngb pagination component
        } else if (type === 'ft') {
          this.currentType = 'ft';
          this.ftTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
          const totalCount = parseInt(data['data']['totalCount'], 10);
          const totalPages = this.getTotalPages(totalCount);
          if (totalPages > 1) {
            this.isPagination = true;
          }
          this.totalCollection = Promise.resolve(totalCount); // should be a promise for ngb pagination component
        } else {
          this.currentType = 'ft-commitment';
          this.ftCommitmentTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
          const totalCount = parseInt(data['data']['totalCount'], 10);
          const totalPages = this.getTotalPages(totalCount);
          if (totalPages > 1) {
            this.isPagination = true;
          }
          this.totalCollection = Promise.resolve(totalCount); // should be a promise for ngb pagination component
        }
      },
      error => {
        console.log('Error in fetching token transaction', error);
      }
    );
  }

  /**
   * Method to find total pages.
   *
   * @param totalCount {Number} returns total pages
   */
  getTotalPages(totalCount) {
    const totalPages = Math.ceil(totalCount / this.pageSize);
    return totalPages;
  }

  /**
   * Method to retrive transactions based on pages.
   */
  getTransactionList(type, pageN, pageSize) {
    this.userService.getTransactions(type, pageN, pageSize).subscribe(
      data => {
        if (type === 'nft-commitment') {
          this.currentType = 'nft-commitment';
          this.nftCommitmentTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
        } else if (type === 'nft') {
          this.currentType = 'nft';
          this.nftTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
        } else if (type === 'ft') {
          this.currentType = 'ft';
          this.ftTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
        } else {
          this.currentType = 'ft-commitment';
          this.ftCommitmentTransactions = data['data']['data'].length > 0 ? data['data']['data'] : [];
        }
      },
      error => {
        console.log('Error in fetching transaction list', error);
      }
    );
  }


  /**
   * Method to handle pagination.
   *
   * @param pageN {Number} Page number
   */
  pageChanged(pageN) {
    this.pageNo = pageN;
    this.getTransactionList(this.currentType, this.pageNo, this.pageSize);
  }
}
