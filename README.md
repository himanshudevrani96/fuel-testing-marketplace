# BUG REPRODUCE

This is a public repo for reproducing the broken decoding issue in fuel blockchain.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


**Note: For regenerating the issue you need to first mint a NFT then you need to list the nft ie., sell the nft after you sell the nft you will get an error as a response but the nft will get listed !**

## Few Issues

Right now i have added one nft contract where you can mint 1 or 2 nft only beacause iam getting the memoryOverflow error from the blockchain as we have added many read methods to the contracts
