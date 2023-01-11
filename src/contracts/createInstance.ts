import { Contract, Interface, JsonAbi } from 'fuels'

const createInstance = (address: string, abi: JsonAbi | Interface, publicKey: string) => {
    const w: any = window

    let contractInstance: any

    if (publicKey && w.fuel) {
        const wallet = w.fuel.getWallet(publicKey)
        contractInstance = new Contract(address, abi, wallet)
    }
    return {
        contractInstance,
    }
}

export default createInstance
