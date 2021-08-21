import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import FtService from '../../services/ft.service';
import { Router } from '@angular/router';
import { UtilService } from '../../services/utils/util.service';
/**
 * Mint fungible token component, which is used for rendering the page of mint ERC-20 token.
 */
@Component({
  selector: 'app-ft-mint',
  templateUrl: './index.html',
  providers: [FtService, UtilService],
  styleUrls: ['./index.css']
})
export default class FtMintComponent implements OnInit {

  /**
   * Flag for http request
   */
  isRequesting = false;

   /**
   * Amount to Mint ERC-20 token
   */
  amount: number;

  /**
   * Fungeble Token name , read from ERC-20 contract.
   */
  ftName: string;

  constructor(
    private toastr: ToastrService,
    private ftService: FtService,
    public utilService: UtilService,
    private router: Router
  ) {

  }

  ngOnInit () {
    this.ftName = localStorage.getItem('ftName');
  }

  /**
   * Method to mint ERC-20 token.
   */
  mintFToken() {
    this.isRequesting = true;
    this.ftService.mintFToken(this.amount).subscribe(transaction => {
      this.isRequesting = false;
      this.toastr.success('Fungible token(s) minted successfully.', 'Success');
      this.router.navigate(['/overview'], { queryParams: { selectedTab: 'ft' } });
    }, error => {
        this.isRequesting = false;
        this.toastr.error('Please try again.', 'Error');
    });
  }

}

