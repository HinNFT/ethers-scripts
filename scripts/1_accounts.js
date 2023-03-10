
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/33094f1fe0654244b940cc178603f382`)

const address = ''

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()