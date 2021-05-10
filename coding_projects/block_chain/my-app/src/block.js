const SHA256= require('crypto-js/sha256')
const Ec=require('elliptic').ec
const ec= new Ec('secp256k1')


class Transaction{
    constructor(fromPerson,toPerson,amount,tip){
        this.fromPerson=fromPerson
        this.toPerson=toPerson
        this.amount=amount
				this.tip=tip
    }
		
    calculateHash(){
        return SHA256(this.fromPerson+this.toPerson+this.amount+this.tip).toString()
    }

    signTransaction(signingKey){

        if(signingKey.getPublic('hex') !==this.fromPerson){
            return new Error('this is not your wallet')
        }

        const hashTx=this.calculateHash()
        const sig= signingKey.sign(hashTx,'base64') 
        this.signature=sig.toDER('hex')
            
    }

    isValid(){
        if(this.fromPerson === null) return true 

        if (!this.fromPerson || this.fromPerson===0){
            throw new Error("There is no signature")
        }

        const publicKey=ec.keyFromPublic(this.fromPerson,'hex')
        return publicKey.verify(this.calculateHash(),this.signature)
    }
   
}

class Block{
    constructor(timeStamp,transaction,previousHash=''){
        this.timeStamp=timeStamp
				this.previousHash=previousHash
        this.transaction=transaction
    		this.nonce=0
				this.hash=this.calculateHash()
    }

    calculateHash(){
        return SHA256(this.timeStamp+this.nonce+this.previousHash+JSON.stringify(this.data)).toString()
    }

    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty)!==Array(difficulty+1).join('0')){
            this.hash=this.calculateHash()
            this.nonce++
        }
        console.log("Block mined:",this.hash)
    }

    hasValidTransaction(){
        for(const tx of this.transaction){
            if(!tx.isValid()){
                return false   
            }
        }
    }
}

class BlockChain {
    constructor(){
        this.chain=[this.createGenesis()]
        this.difficulty=4
        this.pendingTransaction=[]
        this.miningReward=100
				this.badTransaction=[]
		}

		createGenesis(genesisRewardAddress){
				return new Block("Genesis Block","No Transaction",'0')
		}

    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }
				
		minePending(miningRewardAddress){
				const reward=new Transaction(null,miningRewardAddress,this.miningReward,this.getTips())
				this.pendingTransaction.push(reward)

				const block=new Block(Date.now(),this.pendingTransaction,this.getLatestBlock().hash)
				block.mineBlock(this.difficulty)

				this.chain.push(block)
				this.pendingTransaction=[]
				return("BlockMined")
	
		}
    addTransaction(transaction){
        if(!transaction.fromPerson || !transaction.toPerson){
            throw new Error('Transaction must include addresses')
        } 
        if(!transaction.isValid()){
            throw new Error('Cannot add invalid transaction')
        }
				if(transaction.amount<=0){
						throw new Error("Transaction should not be 0")
				}
				if(this.getBalance(transaction.fromPerson)<transaction.amount+transaction.tip){
						this.badTransaction.push(transaction)
				}else{
				this.pendingTransaction.push(transaction) 
				}
		}
		getTips(){
					let tipReward=0

					for(const block of this.pendingTransaction){
								if(block.tip > 0){
										tipReward=tipReward + block.tip	
								}
					}
						return tipReward
		}

    getBalance(address){
        let balance=0

        for(const block of this.chain){
						for(const trans of block.transaction){
                if (trans.fromPerson === address){
                    balance -= trans.amount + trans.tip 							
                }
                if (trans.toPerson=== address){
                    balance += trans.amount 
                }
								if (trans.fromPerson === null){
										if(trans.toPerson=== address){
												balance += trans.tip
										}
								}
										
            }
				} 
					return balance
    }
		
    verifyBlock(){
        for(let i = 1;i < this.chain.length;i++){
            const currentBlock=this.chain[i]
            const previousBlock=this.chain[i-1]
            
            if(!currentBlock.hasValidTransaction()){
                return false 
            }

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false
            }

            if(currentBlock.previousHash!== previousBlock.calculateHash()){
                return false
            }
            return true 
 
        }
    
		}

}

module.exports.BlockChain = BlockChain
module.exports.Block = Block
module.exports.Transaction = Transaction







