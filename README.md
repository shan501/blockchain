# BlockChain

This is a blockchain protype mimicking the Bitcoin protocol

## Digital Signature

The way Bitcoin transactions are send is using Assymettric Key Encryption.There is a private key and a public key.
They are just random strings of numbers and letters that are very large prime numbers that are mathmatically link. 
You can think of the public key as a email address/phone number/name you use when sending people money using venmo or cash app 
and the private key as your login information when you login into those apps to send money.


When you send people Bitcoin , you would send the money to that persons Public Key address.And the way that you would 
write that transaction off is using your private key.Remember how I said public key and private key are mathmatically link.
Only the person with that private key that are mathmatically link to that public key can spend the Bitcoin that are
stored on that public key.


## Book Keeping

We have a way to send Bitcoin securely and making sure that only the people that have access to the private key 
can send Bitcoin stored on that public key.Now we just need a way to store these transaction so we know how many Bitcoin 
each public key hold.We store these on a ledger that everyone can see.We use a hashing algorithm to ensure that nobody 
messes with the ledger and add Bitcoin to public keys that were send to them.A hashing algorithm is a one way function, where
once you hash it , there is no way for you to get the original value.It also has a key feature.If you just change 1 letter in
a 1 million letter word document , the resulting hash will be completly different.This will let us know if anybody change the content
on that ledger.We will store the hash of a ledger on the header of the next ledger.So if someone changes the hash of one ledger , he will
need to change the ledger of all ledger after that , which will be theoratically impossible.Possible but unpractible.


## Consensus

Bitcoin is decentralized , so we need a way to create ledgers without having a central party.We do this by using a consensus algorithm
called Proof of Work.Since each hash of a ledger needs to be stored on the header of the next ledger , the person that gets to create 
the next ledger will need to generate a hash of a ledger that starts will a certain amount of 0s.We call those people Miners.Given that the same data will always
result in the same hash , each ledger will have something call a nonce.The nonce is a number that Miners will keep on generating on that ledger
until the result of that hash have a certain amount of 0 infront of it


## My Javascript Blockchain
I created a Javascript program that incorprates all these characteristics of the Bitcoin Protocol 
