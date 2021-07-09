<br>
<br>

## What is the  New era？



```
New Era is an application chain to solve the bottleneck of Ethereum in commercial applications. 
New Era is 100% compatible with Ethereum's public chain. 
Meanwhile, in order to accelerate the transactions on the chain.
New Era designs a New Layer 2 trading solution to accelerate the transactions on the upper chain data of Ethereum.

Welcome more people who are willing to improvethe ecological quality of Ethereum to join us 
in this project that means a lot to Ethereum. 
```

<br>
<br>
[project](http://necoin.io)   

[中文说明](/README.md) 
<br>
<br>

#### New era architecture view

<br>
<br>
<br>

<div align="center">
<img src=https://github.com/neccoin/resource/blob/main/img/architecture.png />
</div>

<br>
<br>

#### New Era off-chain verification schematic

<br>
<br>
<br>

<div align="left">
<img src=https://github.com/neccoin/resource/blob/main/img/layer2.png />
</div>

<br>
<br>

```
The throughput of the underlying Ethereum blockchain is the same, and the second layer solutions are all operating down the chain rather than on Ethereum Blockchain runs while still guaranteeing adequate security and can not be more modified.
```

<br>
<br>

#### New Era's cross-chain asset bridge introduction

<br>
<br>

__NEC uses the communication capability between L1 and L2 to transfer any form of Ethereum assets (including Ether, ERC20, ERC721, etc.) between L1 and L2 without trust.__

<br>
<br>

```


When an asset is transferred from L1 to L2, the asset is deposited into a NEC bridge contract on L1, and then an equal amount of the asset is cast on L2 and deposited at the specified address;
When an asset is transferred from L2 back to L1, the asset is destroyed on L2 and then the equivalent asset becomes available in L1's bridge contract.
The transaction initiated by L1 to L2 is first stored in the Inbox with calldata, callvalue, gas info and other transaction parameters.
When the transaction fails to execute for the first time, it is placed in L2's "retry buffer," which means that for a period of time (usually a challenge period, i.e., about a week),
Anyone can redeem the note by reexecuting the transaction.
There is no time limit for retry transactions from L2 to L1, and they can take place at any point after the end of the dispute period.
This mechanism is designed to deal with situations such as:
When a user wants to deposit a token from L1 to L2, it will first deposit these tokens into the bridge contract of L1.
An equal number of tokens are cast simultaneously on L2. Suppose the transaction on L1 has been completed, but the transaction on L2 has failed due to insufficient fees,
This leads to a serious problem: the user's tokens on L1 have been transfered out, but they have not been received on L2. In effect, these tokens are locked in L1's contract.
With the retrialable ticket mechanism, the user (or anyone else) can re-execute the transaction within a week, with sufficient fees, and eventually get the token on L2.



The following are the basic steps for NEC assets to cross the chain bridge:

L1 ->L2
L1 ->L2

The user initiates the Deposit transaction from L1

Assets are stored in the L1 contract and transactions are bulk stored in the Inbox
The transaction is executed at L2 and the cast asset is transferred to the specified address
If the transaction fails, the transaction is placed in the retry buffer of L2, and the user can initiate a retry during a challenge period


The user initiates the Withdraw transaction on L2

The L2 chain packages the transactions collected within a certain amount of time, generates a Merkle tree, and posts the root node as an OutboxEntry put it in the Outbox of L1
The user or anyone can perform Merkel verification on the root node and transaction information
At the end of the challenge period, the user can complete the transaction at L1, and if the transaction fails, the user can initiate a retry

```

<br>
<br>

#### NFT casting

<br>
<br>

```
NFT is a unique, non-fungible asset cast on the chain.
NFT is creating interesting use cases in the fields of digital art, collectibles, ticketing, games, digital ownership and more. Each NFT has its own unique attributes that are trackable and immutable. NFT artists can sell their works directly to collectors, and the authenticity and quantity of the cast works can be verified by anyone at any time. The platform can also be set to allow royalties to be collected in future resale events. Proof of ownership is easy to verify and can be applied to records, domain names and other assets.
 
Just like other fungible assets (cryptocurrencies), token owners can fully control and manage their own assets without relying on a third party. The high gas fee on Ethereum makes it too expensive to mint and trade NFT on the mainnet. The platform solves this problem by casting, trading and storing NFTs. Once the value is determined and/or access to Ethereum is required, TokenBridge can be used to transfer the unique asset and all associated metadata to Ethereum. The system provides a fast and cheap way to create and manage NFTs in the entire blockchain ecosystem.
```
<br>
<br>

#### NFT wallet

<br>
<br>

```
The development team is working to build an easy-to-use Plasma wallet mobile application integrated with WalletConnect to ensure the secure storage of keys, intuitive access to the functions provided by NEW ERA based on Ethereum Layer 2, based on the seamless link of DApps to the browser . Users can interact with DApps on browsers and more devices in the future, while still keeping their keys securely in their mobile wallets.

```
<br>
<br>

#### NFT Community currency  

<br>
<br>

```
Community Integration Currency (CIC) is the local currency and services used to pay for goods.  CIC is not a substitute for the local currency;  They are supplementary currencies used to support local trade.  
CIC provides a medium for daily spending and trade while allowing individuals to save money in which citizens interact with large corporations (which may be volatile or scarce) and government agencies outside the immediate community.  
CIC supports and empowers communities to create jobs, develop social programs, and support trade infrastructure by establishing decentralized local banking.  
Blockchain technology supports CIC's platform for local currency exchange by providing Web-based transparency.  
Local currency can be traded one way and another based on exchange rates - all users need is a phone and a custom wallet app.  Fast speed, strong stability.  

```
<br>
<br>

#### OpenNew Era - Ethereum Light Client Based on POS Network 

<br>
<br>

```
OpenNEW ERA is the fastest, lightest, and most secure Ethereum client developed based on a fast PoS network without permission. It has a lightweight identity protocol and a stability protocol. It uses the Rust programming language. It is licensed under GPLv3 and can be used for all Ethereum needs. Specifically, the lightweight identity protocol means that it can match the hash value of the public key and the mobile phone number, thereby allowing encrypted currency to be sent to any mobile phone number, which eliminates many barriers to encrypted currency transactions. A simple smart phone can act as a node in the NEW ERA network, which is achieved through fast synchronization of ultra-light clients.


· Clean, modular code base, easy to customize
· Advanced client based on CLI
· Minimum memory and storage space
· Use WARP Sync to synchronize in hours, not days
· Modular for easy integration into your services or products.  
```


####  New era 技术特性


```
- 1 Effectively solve chain congestion
- 2 Low transaction rate
- 3 Many chain connected
- 4 The transaction TPS is 10 times that of Ethereum
- 5 100% compatible with Ethereum
```
<br>
<br>

#### New era 开发授权
```
- the source code complies with the Ethereum LGPL-3.0 License and MIT License agreement. 
```
