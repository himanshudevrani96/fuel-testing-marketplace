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
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 26,
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
          "type": 26,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "[_; 5]",
      "components": [
        {
          "name": "__array_element",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum AccessError",
      "components": [
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
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 19,
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
          "name": "AdminIsNone",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "CannotReinitialize",
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
          "name": "AdminDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "ApprovedDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotEnoughTokensToMint",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OwnerDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "TokenDoesNotExist",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "TokenSupplyCannotBeZero",
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
          "type": 11,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        11
      ]
    },
    {
      "typeId": 11,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "str[35]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "str[46]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct AdminEvent",
      "components": [
        {
          "name": "admin",
          "type": 10,
          "typeArguments": [
            {
              "name": "",
              "type": 7,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct ApprovalEvent",
      "components": [
        {
          "name": "approved",
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
          "name": "owner",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct BurnEvent",
      "components": [
        {
          "name": "owner",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct MintEvent",
      "components": [
        {
          "name": "owner",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "token_id_start",
          "type": 26,
          "typeArguments": null
        },
        {
          "name": "total_tokens",
          "type": 26,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "struct OperatorEvent",
      "components": [
        {
          "name": "approve",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "operator",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 22,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 26,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        11
      ]
    },
    {
      "typeId": 23,
      "type": "struct TokenMetaData",
      "components": [
        {
          "name": "metadata_uri",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "name",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "creators",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 24,
      "type": "struct TransferEvent",
      "components": [
        {
          "name": "from",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "sender",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "to",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 25,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 22,
          "typeArguments": [
            {
              "name": "",
              "type": 11,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 26,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        11
      ]
    },
    {
      "typeId": 26,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        
      ],
      "name": "admin",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "approved",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "approve",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "approved",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "owner",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "balance_of",
      "output": {
        "name": "",
        "type": 26,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "from",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "to",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "token_ids",
          "type": 25,
          "typeArguments": [
            {
              "name": "",
              "type": 26,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "bundle_transfer_from",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "burn",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "access_control",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "admin",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "max_supply",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "constructor",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        
      ],
      "name": "get_tokens_minted_nfts",
      "output": {
        "name": "",
        "type": 26,
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
          "name": "set",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "get_user_nfts",
      "output": {
        "name": "",
        "type": 1,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "operator",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "is_approved_for_all",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        
      ],
      "name": "max_supply",
      "output": {
        "name": "",
        "type": 26,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "meta_data",
      "output": {
        "name": "",
        "type": 23,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "amount",
          "type": 26,
          "typeArguments": null
        },
        {
          "name": "to",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "name",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "metadata_uri",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "creators",
          "type": 3,
          "typeArguments": null
        }
      ],
      "name": "mint",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "owner_of",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "admin",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "set_admin",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "approve",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "operator",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "set_approval_for_all",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        
      ],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 26,
        "typeArguments": null
      }
    },
    {
      "inputs": [
        {
          "name": "from",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "to",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 26,
          "typeArguments": null
        }
      ],
      "name": "transfer_from",
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
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 9,
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
        "type": 9,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 18,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 15,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 16,
      "loggedType": {
        "name": "",
        "type": 20,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 17,
      "loggedType": {
        "name": "",
        "type": 9,
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
        "type": 16,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 20,
      "loggedType": {
        "name": "",
        "type": 21,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 21,
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 22,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": [
          
        ]
      }
    },
    {
      "logId": 23,
      "loggedType": {
        "name": "",
        "type": 24,
        "typeArguments": [
          
        ]
      }
    }
  ],
  "messagesTypes": [
    
  ]
}

export const address = "0xcf0a7696fb6c2615766acf7f04fce1bc05d5df1cc7a86ca50af758e6c077ba6a";