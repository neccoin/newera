
# <a name="TOC"></a> New Era Protocol

##  [White Paper in English ](#EN)

##  [White Paper in Chinese ](#CN)

##  [White Paper in Japanese ](#JP)

##  [White Paper in Russian ](#RU)

---

[Return to Table of Content](#TOC)


## <a name="EN"></a>What is the  New Era？



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

### Project Website

[https://necoin.io](https://necoin.io)   


<br>


<br>

#### New Era Architecture View

<br>
<br>
<br>

<div align="center">
<img src=https://github.com/neccoin/resource/blob/main/img/architecture.png />
</div>

<br>
<br>

#### New Era Off-chain Verification Schematic

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

#### New Era's Cross-chain Asset Bridge Introduction

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

#### NFT Casting

<br>
<br>

```
NFT is a unique, non-fungible asset cast on the chain.
NFT is creating interesting use cases in the fields of digital art, collectibles, ticketing, games, digital ownership and more. Each NFT has its own unique attributes that are trackable and immutable. NFT artists can sell their works directly to collectors, and the authenticity and quantity of the cast works can be verified by anyone at any time. The platform can also be set to allow royalties to be collected in future resale events. Proof of ownership is easy to verify and can be applied to records, domain names and other assets.
 
Just like other fungible assets (cryptocurrencies), token owners can fully control and manage their own assets without relying on a third party. The high gas fee on Ethereum makes it too expensive to mint and trade NFT on the mainnet. The platform solves this problem by casting, trading and storing NFTs. Once the value is determined and/or access to Ethereum is required, TokenBridge can be used to transfer the unique asset and all associated metadata to Ethereum. The system provides a fast and cheap way to create and manage NFTs in the entire blockchain ecosystem.
```
<br>
<br>

#### NFT Wallet

<br>
<br>

```
The development team is working to build an easy-to-use Plasma wallet mobile application integrated with WalletConnect to ensure the secure storage of keys, intuitive access to the functions provided by New Era based on Ethereum Layer 2, based on the seamless link of DApps to the browser . Users can interact with DApps on browsers and more devices in the future, while still keeping their keys securely in their mobile wallets.

```
<br>
<br>

#### NFT Community Currency  

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

#### Open New Era - Ethereum Light Client Based on POS Network 

<br>
<br>

```
OpenNew Era is the fastest, lightest, and most secure Ethereum client developed based on a fast PoS network without permission. It has a lightweight identity protocol and a stability protocol. It uses the Rust programming language. It is licensed under GPLv3 and can be used for all Ethereum needs. Specifically, the lightweight identity protocol means that it can match the hash value of the public key and the mobile phone number, thereby allowing encrypted currency to be sent to any mobile phone number, which eliminates many barriers to encrypted currency transactions. A simple smart phone can act as a node in the New Era network, which is achieved through fast synchronization of ultra-light clients.


· Clean, modular code base, easy to customize
· Advanced client based on CLI
· Minimum memory and storage space
· Use WARP Sync to synchronize in hours, not days
· Modular for easy integration into your services or products.  
```
<br>
<br>

#### Network Security Hypothesis 

<br>
<br>

```
This protocol assumes that the network is an asynchronous system with final delivery guarantees, which means that it assumes that all virtual child nodes are connected to each other by a reliable communication link. The link may be very slow, but it will eventually transmit information. This asynchronous model is similar to the Bitcoin and Ethereum blockchains and reflects the state of the modern network. Temporary network divergence is normal, but will eventually be resolved. The final delivery guarantee is realized in practice as follows: when the information suffers exponential return, the virtual child node sending the information will make multiple attempts to deliver the information to the receiving virtual child node until the delivery is successful.
```



####  New Era Technology Advantages


```
- 1 Effectively solve chain congestion
- 2 Low transaction rate
- 3 Many chain connected
- 4 The transaction TPS is 10 times that of Ethereum
- 5 100% compatible with Ethereum
```
<br>
<br>

#### New Era Rights
```
- the source code complies with the Ethereum LGPL-3.0 License and MIT License agreement. 
```

---

[回到目录](#TOC)

## <a name="CN"></a>什么是 New Era？



```
New Era 是一个为了解决以太坊在商业应用时遇到瓶颈的应用链，New Era 100%和以太坊的公链保持兼容。
同时为了能加速链上的成交，New Era 全新设计了一个新的 Layer-2 的交易解决方案，将以太坊的上链数据进行交易加速。

欢迎更多愿意提升以太坊生态质量的人加入我们，参与这个对以太坊来说意义重大的项目。
```

<br>
<br>

### 官方主页

[https://necoin.io](https://necoin.io)   

 
<br>
<br>

#### New Era 架构视图

<br>
<br>
<br>

<div align="center">
<img src=https://github.com/neccoin/resource/blob/main/img/architecture.png />
</div>

<br>
<br>

#### New Era 的链下验证示意图

<br>
<br>
<br>

<div align="left">
<img src=https://github.com/neccoin/resource/blob/main/img/layer2.png />
</div>

<br>
<br>

```
基层以太坊区块链的吞吐量是相同的，第二层解决方案都是通过链下操作而不是在以太坊区块链上运行的，同时仍然保证了足够的安全性和不可更改性。
```

<br>
<br>

#### New Era 的跨链资产桥介绍

<br>
<br>

__NEC利用 L1、L2 之间的通信能力，无需信任的将任意形式的以太坊资产（包括 Ether、ERC20、ERC721 等）在 L1、L2 之间转移。__

<br>
<br>

```


当将资产从 L1 转入 L2 时，资产被存入一个 L1 上的 NEC桥合约中，之后一笔相同数量的资产在 L2 上被铸造并存入指定地址;
而将资产从L2 转回 L1 时，资产将在 L2 上被销毁，随后等量的资产将在 L1 的桥合约中变为可用。

L1 向 L2 发起的交易首先被存入 inbox 中，并附带 calldata、callvalue、gas info 等交易参数。

当这笔交易首次执行失败后，它将被放入 L2 的「重试缓冲区（retry buffer）」中，这意味着在一段时间内（通常为一个挑战期，即大约一周），
任何人都可以通过重新执行这笔交易来赎回票据。

L2 至 L1 的重试交易没有时间限制，争议期结束后的任何时间点都可进行。

这种机制设计主要是为了应对这样的场景：

当某个用户希望将某笔 token 从 L1 存入 L2，首先会将这些 token 存入 L1 的桥合约中，
同时在 L2 上铸造等量的 token。假设 L1 上的交易已经完成，但是 L2 上的交易却因为手续费不足失败了，
这会导致一个严重问题：用户在 L1上的 token 已经转出，但是在 L2 上却没收到 token，实际上，这些 token 被锁在了 L1 的合约里。
通过可重试票据机制，用户（或者其他任何人），可以在一周内，使用足够的手续费重新执行这笔交易，并最终在 L2 上获得 token。

以下是 NEC 资产跨链桥的基本步骤：

L1 ->L2
L1 ->L2

用户从 L1 发起 Deposit 交易
资产存入 L1 合约，交易被批量存入 Inbox 中
交易在 L2 被执行，铸造资产转入指定地址
如果交易失败，则交易被存入 L2 的重试缓冲区，用户可以在一个挑战期内发起重试

用户在 L2 发起 Withdraw 交易

L2 链将在一定时间内收集到的交易打包，生成默克尔树，并将根节点作为 OutboxEntry 发
布到 L1 的 Outbox 中
用户或者任何人可以对根节点和交易信息进行默克尔验证
挑战期结束后，用户即可在 L1 完成交易，如果交易失败，则用户可以发起重试
```

<br>
<br>

#### New Era NFT铸造

<br>
<br>

```
NFT是链上铸造的独特，不可互换的资产。NFT正在数字艺术，收藏品，票务，游戏，数字所有权等领域创造有趣的用例。每个NFT都有其自己的可跟踪和不可变的独特属性。
NFT艺术家可以将其作品直接出售给收藏家，铸造的作品的真实性和数量可以随时由任何人进行验证。
平台还可以设置允许在将来的转售事件中收取特许权使用费。所有权证明易于验证，可以应用与权记录，域名和其他资产。

就像其他可替代资产（加密货币）一样，令牌所有者可以完全控制和管理自己的资产，而无需依赖第三方。以太坊上高昂的gas费使其成本过高，无法在主网上铸造和交易NFT。
平台通过铸造，交易和存储NFT解决了这一问题。一旦确定了价值和/或需要对以太坊进行访问，就可以使用TokenBridge将唯一资产以及所有关联的元数据转移到以太坊。
该系统提供了一种快速而廉价的方式来创建和管理整个区块链生态系统中的NFT。
```

<br>
<br>

#### New Era NEC钱包

<br>
<br>

```
开发团队正在致力于构建一个易于使用的 Plasma 钱包移动应用程序与WalletConnect集成，以确保密钥的安全存储、对 New Era基于以太坊Layer2提供的功能的直观访问
基于DApps 到浏览器的无缝链接。用户可以在浏览器和未来更多设备上与 DApp 交互，同时仍将其密钥安全地保存在移动钱包中。
```
<br>
<br>

#### New Era 社区货币

<br>
<br>

```
社区融入货币（CIC）是用于支付商品的当地货币和服务。CIC不能代替本国货币；他们是用于支持本地贸易的补充货币。
CIC提供日常支出和贸易的媒介同时允许个人节省国民与大型企业互动的货币（可能是波动的或稀缺的）和直接社区之外的政府机构。
CIC支持并赋权社区创造工作，发展社会计划，并通过建立去中心化的本地银行业务来支持贸易基础设施。
区块链技术通过提供基于Web的透明功能来支持CIC本地货币兑换的平台。
当地货币可以用一种进行交易另一个基于汇率的方法-所有用户需要的是一部手机和一个定制的钱包应用程序。速度快，稳定性强。
```
<br>
<br>

#### 基于POS网络的以太坊轻客户端—OpenNew Era

<br>
<br>

```
OpenNew Era是基于无需许可的快速PoS网络而开发的最快、最轻、最安全的以太坊客户端，有轻量级身份协议和稳定性协议。它用Rust 编程语言。它在 GPLv3 下获得许可，并且可以用于所有以太坊需求。具体而言，轻量级身份协议是指它可以将公钥和手机号码的哈希值进行匹配，从而允许向任何手机号码发送加密货币，这就消除了加密货币交易的很多壁垒。一部简单的智能手机就可以充当New Era网络中的节点，这是通过超轻客户端的快速同步实现的。

·干净、模块化的代码库，易于定制
·基于 CLI 的高级客户端
·最少的内存和存储空间
·使用 Warp Sync 以小时为单位进行同步，而不是几天
·模块化，可轻松集成到您的服务或产品中。
```
<br>
<br>

#### 网络安全假设

<br>
<br>

```
此协议假设网络是一个有着最终传递保证的异步系统，意味着它假设所有的虚拟子节点都由一个可靠的通信链接彼此连接着，该链接可能会非常缓慢，但最终还是会把信息传递出去。此异步模型与比特币及以太坊区块链相似，反映了现代网络的状态⸺暂时的网络分歧是正常的，但最终都会迎刃而解。最终的传递保证在实践中实现的方式为：在信息遭受到指数式退回的情况下，发送信息的虚拟子节点会进行多次尝试，向接收虚拟子节点传递信息，直至该传递成功为止。
```
####  New Era 技术特性


```
- 1 有效解决链拥堵
- 2 低交易费率
- 3 多链互联
- 4 交易 TPS 是以太坊的10 倍
- 5 与以太坊 100% 兼容
```
<br>
<br>

#### New Era 开发授权
```
- 除非特别说明，New Era 的源码遵守 以太坊  LGPL-3.0 License 和  MIT License 协议
```

