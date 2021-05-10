const {BlockChain,Transaction}=require('./block.js')
const Ec=require('elliptic').ec
const ec= new Ec('secp256k1')

const key =ec.genKeyPair()
const myKey2=key.getPublic('hex')
const myWallet2=key.getPrivate('hex')

const myKey=ec.keyFromPrivate('04bb6901ef7ccd4626a83d6487c43f498e69a8d5e89d1e63ecf0d1c2f67b40b0218c6e49af19fb3181ad08f6ea700d9b828f2dbb09b054167b3c2d23ee7408d2ed')
const myWallet= myKey.getPublic('hex')

let shancoin= new BlockChain()

tx=new Transaction(myWallet,myWallet2,10,1)
tx.signTransaction(myKey)
//shancoin.minePending(myWallet)

shancoin.addTransaction(tx)
console.log(shancoin.pendingTransaction)
console.log(shancoin.badTransaction)
//shancoin.filterTransaction()
//console.log(JSON.stringify(shancoin.badTransaction,null,4))
//tx2= new Transaction(myWallet,myWallet2,1,1)
//tx2.signTransaction(myKey)
//shancoin.addTransaction(tx2)
//shancoin.minePending(myWallet2)
//shancoin.minePending(myWallet2)
//console.log(shancoin.getBalance(myWallet2))
//console.log(shancoin.chain)
//shancoin.minePending(myWallet)
//shancoin.minePending(myWallet)
//console.log(shancoin.getBalance(myWallet))
//console.log(shancoin.getBalance(myWallet))
//shancoin.filterTransaction()
//console.log(JSON.stringify(shancoin.pendingTransaction,null,10))

//tx1=new Transaction(myWallet,'good','0')
//tx1.signTransaction(myKey)
//shancoin.addTransaction(tx1)
//console.log(JSON.stringify(shancoin.pendingTransaction,null,10))
//shancoin.filterTransaction()
//console.log(JSON.stringify(shancoin.pendingTransaction,null,10))

//console.log(JSON.stringify(shancoin.endingTransaction,null.10))
//tx5=new Transaction(myWallet,'bad','100')
//tx5.signTransaction(myKey)
//shancoin.addTransaction(tx5)

//shancoin.filterTransaction()
//console.log(JSON.stringify(shancoin.badTransaction,null,10))
//``console.log(JSON.stringify(shancoin.chain,null,10))

//console.log(shancoin.getBalance(myKey))
//console.log(JSON.stringify(shancoin.chain,null,10))
//console.log(JSON.stringify(shancoin.pendingTransaction))
//console.log(JSON.stringify(shancoin.chain))
//console.log(JSON.stringify(shancoin.endingTransaction))
//shancoin.minePending(myWallet)

//console.log(JSON.stringify(shancoin.chain))
// const txt2=new Transaction(myWallet,"public key","10")
// txt2.signTransaction(myKey)
// shancoin.addTransaction(txt2)
// shancoin.minePending(myWallet)

// console.log(shancoin.getBalance(myWallet))


//console.log(shancoin)

// const tx2=new Transaction(myWallet,'public key',10)
// tx2.signTransaction(myKey)
// shancoin.addTransaction(tx2)

// shancoin.minePending(myWallet)

// console.log(JSON.stringify(shancoin,null,4))
// shancoin.chain[1].transaction[0].amount=5

// console.log(shancoin.verifyBlock())
// const tx3=new Transaction(myWallet,'public ket',10)
// tx3.signTransaction(myKey)
// shancoin.addTransaction(tx3)

// console.log(shancoin.endingTransaction)




