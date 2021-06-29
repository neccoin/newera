<br>
<br>

## 什么是 New era？



```
New era 是一个为了解决以太坊在商业应用时遇到瓶颈的应用链，New era 100%和以太坊的公链保持兼容。
同时为了能加速链上的成交，New era 全新设计了一个新的 Layer-2 的交易解决方案，将以太坊的上链数据进行交易加速。

欢迎更多愿意提升以太坊生态质量的人加入我们，参与这个对以太坊来说意义重大的项目。
```

<br>
<br>
[项目主页](http://necoin.io)   

[English README](/README_EN.md) 
<br>
<br>

#### New era 架构视图

<br>
<br>
<br>

<div align="center">
<img src=https://github.com/neccoin/resource/blob/main/img/architecture.png />
</div>

<br>
<br>

#### New era 的链下验证示意图

<br>
<br>
<br>

<div align="left">
<img src=https://github.com/neccoin/resource/blob/main/img/layer2.png />
</div>

<br>
<br>

```
基层以太坊区块链的吞吐量是相同的，第二层解决方案都是通过链下操作而不是在以太坊
区块链上运行的，同时仍然保证了足够的安全性和不可更改性。
```

<br>
<br>

#### New era 的跨链资产桥介绍

<br>
<br>

__NEC利用 L1、L2 之间的通信能力，无须信任的将任意形式的以太坊资产（包括 Ether、ERC20、ERC721 等）在 L1、L2 之间转移。__

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


####  New era 技术特性


```
- 1 有效解决链拥堵
- 2 低交易费率
- 3 多链互联
- 4 交易 TPS 是以太坊的10 倍
- 5 与以太坊 100% 兼容
```
<br>
<br>

#### New era 开发授权
```
- 除非特别说明，New era 的源码遵守 以太坊  LGPL-3.0 License 和  MIT License 协议
```

