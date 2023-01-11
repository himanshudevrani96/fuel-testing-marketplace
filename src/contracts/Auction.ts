export const abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 24,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "[_; 20]",
      "components": [
        {
          "name": "__array_element",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum AccessError",
      "components": [
        {
          "name": "AuctionIsNotClosed",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "AuctionIsNotOpen",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NFTTransferNotApproved",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderIsNotSeller",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum AssetError",
      "components": [
        {
          "name": "AssetsAreNotTheSame",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum AuctionAsset",
      "components": [
        {
          "name": "NFTAsset",
          "type": 20,
          "typeArguments": null
        },
        {
          "name": "TokenAsset",
          "type": 21,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 18,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "enum InitError",
      "components": [
        {
          "name": "AuctionDurationNotProvided",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BidAssetAmountNotZero",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "CannotAcceptMoreThanOneNFT",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InitialPriceCannotBeZero",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "ReserveLessThanInitialPrice",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "enum InputError",
      "components": [
        {
          "name": "AuctionDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InitialPriceNotMet",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "IncorrectAmountProvided",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "IncorrectAssetProvided",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        13
      ]
    },
    {
      "typeId": 11,
      "type": "enum State",
      "components": [
        {
          "name": "Closed",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Open",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "enum UserError",
      "components": [
        {
          "name": "BidderIsSeller",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "UserHasAlreadyWithdrawn",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct Auction",
      "components": [
        {
          "name": "bid_asset",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "end_block",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "highest_bidder",
          "type": 10,
          "typeArguments": [
            {
              "name": "",
              "type": 7,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "initial_price",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "reserve_price",
          "type": 10,
          "typeArguments": [
            {
              "name": "",
              "type": 24,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "sell_asset",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "seller",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "state",
          "type": 11,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct BidEvent",
      "components": [
        {
          "name": "amount",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "user",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct CancelAuctionEvent",
      "components": [
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct CreateAuctionEvent",
      "components": [
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "bid_asset",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "sell_asset",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct NFTAsset",
      "components": [
        {
          "name": "asset_id",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 24,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "struct TokenAsset",
      "components": [
        {
          "name": "amount",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "asset_id",
          "type": 18,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 22,
      "type": "struct UserBidReturnData",
      "components": [
        {
          "name": "bid_amount",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "auction_state",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 23,
      "type": "struct WithdrawEvent",
      "components": [
        {
          "name": "asset",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "user",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 24,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        }
      ],
      "name": "auction_info",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": [
          {
            "name": "",
            "type": 15,
            "typeArguments": null
          }
        ]
      }
    },
    {
      "inputs": [
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "bid_asset",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "bid",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        }
      ],
      "name": "cancel",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "bid_asset",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "duration",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "initial_price",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "reserve_price",
          "type": 10,
          "typeArguments": [
            {
              "name": "",
              "type": 24,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "seller",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "sell_asset",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "create",
      "output": {
        "name": "",
        "type": 24,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        },
        {
          "name": "identity",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "deposit_balance",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": [
          {
            "name": "",
            "type": 6,
            "typeArguments": null
          }
        ]
      }
    },
    {
      "inputs": [
        {
          "name": "user",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "fetch_users_auction_nfts",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "user",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        }
      ],
      "name": "get_users_bid",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": [
          {
            "name": "",
            "type": 22,
            "typeArguments": null
          }
        ]
      }
    },
    {
      "inputs": [],
      "name": "total_auctions",
      "output": {
        "name": "",
        "type": 24,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "auction_id",
          "type": 24,
          "typeArguments": null
        }
      ],
      "name": "withdraw",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 12,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 15,
      "loggedType": {
        "name": "",
        "type": 16,
        "typeArguments": []
      }
    },
    {
      "logId": 16,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 17,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 18,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 19,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 20,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 21,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 22,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 23,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 24,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 25,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 26,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 27,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 28,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 29,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 30,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": 31,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 32,
      "loggedType": {
        "name": "",
        "type": 19,
        "typeArguments": []
      }
    },
    {
      "logId": 33,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 34,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 35,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": 36,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 37,
      "loggedType": {
        "name": "",
        "type": 12,
        "typeArguments": []
      }
    },
    {
      "logId": 38,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 39,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 40,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 41,
      "loggedType": {
        "name": "",
        "type": 23,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": []
}

export const address = "0x4f4b81c23d72074d03781bd8831967a9bfd701c3b60052fd391969e2b2b1111f"
