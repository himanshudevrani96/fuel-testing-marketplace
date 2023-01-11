import { Address } from "fuels";
import { useEffect, useState } from "react";
import { abi as nftAbi, address as nftAdd } from "../src/contracts/NFT";
import {
  abi as buySellAbi,
  address as buySellAdd,
} from "../src/contracts/BuyNow";
import createInstance from "./contracts/createInstance";
import "./App.css";

function App() {
  const [publicKey, setPublicKey] = useState<string>("");
  const [nftId, setNftId] = useState<number>();
  const [fetchNftId, setFetchNftId] = useState<boolean>(false);

  useEffect(() => {
    if (publicKey) {
      for (let i = 0; i <= 10; i++) {
        getOwnerNftId(i);
      }
    }
  }, [fetchNftId, publicKey]);

  const connectWallet = async () => {
    const w: any = window
    console.log({ w })
    if (w.fuel) {
      const isConnected = await w.fuel.connect()
      console.log("Connection response", isConnected)
      const accounts = await w.fuel.accounts()
      setPublicKey(accounts[0])
    }
  }

  

  console.log({ nftId })

  const mintNft = async () => {
    try {
      let ethPublicKey = Address.fromString(publicKey).toB256()
      let ethPublicKeyZero = Address.fromString(
        "0x0000000000000000000000000000000000000000000000000000000000000000"
      ).toB256();
      const add: any = {
        Address: { value: `${ethPublicKey}` },
      };
      const zeroAdd: any = {
        Address: { value: `${ethPublicKeyZero}` },
      };
      const { contractInstance } = createInstance(nftAdd, nftAbi, publicKey);
      const res = await contractInstance.functions
        .mint(
          1,
          add,
          "exampleooiiuuyyttrreegjgnbkuygeeena",
          "bafybeigdyrzt5sfp7udm7hu7rrtry26nf3efuylqabf3o",
          [zeroAdd, zeroAdd, zeroAdd, zeroAdd, zeroAdd]
        )
        .txParams({
          gasLimit: 1000000,
          gasPrice: 1,
        })
        .call()
      console.log({ res })
      alert("NFT minted")
    } catch (err) {
      console.error("mint", err)
      alert("Minting nft failed")
    }
  };

  const sellNft = async () => {
    try {
      if (!nftId) {
        alert("NFt not minted yet");
        return;
      }
      let nftAddress = Address.fromString(nftAdd).toB256();
      let buyNowAdd = Address.fromString(buySellAdd).toB256();
      console.log("sell");
      const { contractInstance: nftInstance } = createInstance(
        nftAdd,
        nftAbi,
        publicKey
      );
      const { contractInstance: buySellInstance } = createInstance(
        buySellAdd,
        buySellAbi,
        publicKey
      );
      const approve = await nftInstance.functions
        .approve({ ContractId: { value: `${buyNowAdd}` } }, nftId)
        .call();
      console.log({ approve });
      const sellNft = await buySellInstance.functions
        .list_nft(
          {
            value: `${nftAddress}`,
          },
          nftId,
          1
        )
        .addContracts([Address.fromString(nftAdd)])
        .call();
      console.log({ sellNft })
      setFetchNftId((prev) => !prev)
    } catch (err) {
      console.error("sellnft", err)
      alert("please check the error ")
    }
  };

  const getOwnerNftId = async (id: number) => {
    try {
      const { contractInstance } = createInstance(nftAdd, nftAbi, publicKey)
      const ownerAdd: any = await contractInstance.functions.owner_of(id).get()
      let ethPublicKey = Address.fromString(publicKey).toB256()
      if (ownerAdd?.value?.Address?.value == ethPublicKey) {
        setNftId(id);
      }
    } catch (err) {
      console.error("getId", err)
    }
  }

  return (
    <div className="App">
      {!publicKey ? (
        <button
          className="connect"
          onClick={() => {
            connectWallet();
          }}
        >
          Connect
        </button>
      ) : (
        <div className="connected">Connected: {publicKey}</div>
      )}

      {publicKey && !nftId ? (
        <button
          className="mint"
          onClick={() => {
            mintNft()
          }}
        >
          Mint NFT
        </button>
      ) : nftId ? (
        <button
          className="sellNft"
          onClick={() => {
            sellNft()
          }}
        >
          sellNft
        </button>
      ) : (
        ""
      )}
    </div>
  )
}

export default App;
