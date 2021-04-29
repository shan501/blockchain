import React,{useState,useEffect} from 'react';
const {BlockChain,Transaction,Block}=require('./block.js')
const Ec=require('elliptic').ec
const ec= new Ec('secp256k1')


function App() {
  return (
    <div>
     <p1></p1>
    </div>
  )
}

const People=()=>{
  return''
}

const Pendings=()=>{
  
}

const Blocks=()=>{
  const [list,setList]= useState([])
  const myKey=ec.keyFromPrivate('04bb6901ef7ccd4626a83d6487c43f498e69a8d5e89d1e63ecf0d1c2f67b40b0218c6e49af19fb3181ad08f6ea700d9b828f2dbb09b054167b3c2d23ee7408d2ed')
  const myWallet= myKey.getPublic('hex')
  let shancoin= new BlockChain()
  const tx1=new Transaction(myWallet,'public key',"10")
  
  const getList= ()=>{
 
  }
  useEffect(()=>{
    tx1.signTransaction(myKey)
    setList(shancoin)
  },[])

  return<div>
    {list}
  </div>

  
}
export default App;
