export const abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [
        
      ],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 16,
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
          "name": "NFTAlreadyListed",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NFTNotListed",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderCannotSetAccessControl",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderNotAdmin",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderNotOwner",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderNotOwnerOrApproved",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SenderDidNotMakeOffer",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BuyerSameAsSeller",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum InputError",
      "components": [
        {
          "name": "AdminDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "PriceCantBeZero",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OffererNotExists",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "LessPriceThanPreviousOffer",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
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
      "typeId": 8,
      "type": "struct AdminChangedEvent",
      "components": [
        {
          "name": "mew_admin",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
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
      "typeId": 10,
      "type": "struct NFTBoughtEvent",
      "components": [
        {
          "name": "buyer",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "seller",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "nft_contract",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct NFTDeListedEvent",
      "components": [
        {
          "name": "owner",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "nft_contract",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct NFTListedEvent",
      "components": [
        {
          "name": "owner",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "nft_contract",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct NFTOfferAcceptEvent",
      "components": [
        {
          "name": "offerer",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "nft_contract",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct NFTOfferEvent",
      "components": [
        {
          "name": "offerer",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "nft_contract",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct NFTPriceChangeEvent",
      "components": [
        {
          "name": "owner",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "nft_contract",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "old_price",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "new_price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "accept_offer",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        
      ],
      "name": "admin",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "buy_nft",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "new_price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "change_nft_price",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "delist_nft",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "set",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "get_all_listed_nft",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "get_listed_nft_seller",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "user",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "get_users_listed_nft",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "list_nft",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "make_offer",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 16,
          "typeArguments": null
        }
      ],
      "name": "nft_price",
      "output": {
        "name": "",
        "type": 16,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "admin",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "set_admin",
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
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 13,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 15,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 11,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 15,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 16,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 17,
      "loggedType": {
        "name": "",
        "type": 12,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 18,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 19,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 20,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 21,
      "loggedType": {
        "name": "",
        "type": 14,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 22,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 23,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": [
          
        ]
      }
    }
  ],
  "messagesTypes": [
    
  ]
}

export const address = "0x2a6fca40237fbea73d5cffea76e056c69fb74eac4388840fbc1200c891e7a0f5";