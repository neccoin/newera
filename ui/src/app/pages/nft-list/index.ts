import { Component, OnInit } from '@angular/core';
import NftService from '../../services/nft.service';
import { ToastrService } from 'ngx-toastr';

/**
 * Component for listing all ERC-721 tokens
 */
@Component({
  selector: 'app-nft-list',
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
  providers: [NftService],
})
export default class NftListComponent implements OnInit {
  /**
   * Flag for http request
   */
  isRequesting =  false;

  /**
   *  Transaction list
   */
  transactions: any;

  /**
   * For pagination purpose
   */
  pageNo = 1;
  /**
   * For pagination purpose, initial value for page size is set it as 12
   */
  pageSize = 12;
  /**
   * Total collection of objects to calculate pages for pagination.
   */
  totalCollection: Promise<number>;

  /**
   * Non Fungeble Token name , read from ERC-721 contract.
   */
  nftName: string;

  constructor(
    private nftService: NftService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.fetchTokens();
    this.nftName = localStorage.getItem('nftName');
  }

  /**
   * Method to handle pagination.
   *
   * @param pageN {Number} Page number
   */
  pageChanged (pageNo) {
    if (isNaN(pageNo)) { return; }
    this.pageNo = pageNo;
    this.fetchTokens();
  }

  /**
   * Method list down all ERC-721 tokens.
   */
  fetchTokens () {
    this.transactions = null;
    this.isRequesting = true;
    this.nftService.getNFTokens(this.pageNo, this.pageSize)
    .subscribe( data => {
      this.isRequesting = false;
      if (data &&
        data['data'] &&
        data['data']['data'] &&
        data['data']['data'].length) {
        this.transactions = data['data']['data'];

      if (this.totalCollection) { return; }
        this.totalCollection = Promise.resolve(parseInt(data['data']['totalCount'], 10));
      }
    }, error => {
      this.isRequesting = false;
      this.toastr.error('Please try again.', 'Error');
    });
  }

}
