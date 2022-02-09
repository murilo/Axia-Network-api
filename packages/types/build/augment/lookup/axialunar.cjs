"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Auto-generated via `yarn axia-types-from-defs`, do not edit

/* eslint-disable */

/* eslint-disable sort-keys */
var _default = {
  /**
   * Lookup75: axctest_runtime::ProxyType
   **/
  AxiaTestRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement', 'CancelProxy', 'Auction']
  },

  /**
   * Lookup86: axcaxc_primitives::v1::CandidateReceipt<primitive_types::H256>
   **/
  AxiaaxcPrimitivesV1CandidateReceipt: {
    descriptor: 'AxiaaxcPrimitivesV1CandidateDescriptor',
    commitmentsHash: 'H256'
  },

  /**
   * Lookup87: axcaxc_primitives::v1::CandidateDescriptor<primitive_types::H256>
   **/
  AxiaaxcPrimitivesV1CandidateDescriptor: {
    paraId: 'u32',
    relayParent: 'H256',
    collator: 'AxiaaxcPrimitivesV0CollatorAppPublic',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    signature: 'AxiaaxcPrimitivesV0CollatorAppSignature',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },

  /**
   * Lookup89: axcaxc_primitives::v0::collator_app::Public
   **/
  AxiaaxcPrimitivesV0CollatorAppPublic: 'SpCoreSr25519Public',

  /**
   * Lookup90: axcaxc_primitives::v0::collator_app::Signature
   **/
  AxiaaxcPrimitivesV0CollatorAppSignature: 'SpCoreSr25519Signature',

  /**
   * Lookup99: xcm::v2::traits::Outcome
   **/
  XcmV2TraitsOutcome: {
    _enum: {
      Complete: 'u64',
      Incomplete: '(u64,XcmV2TraitsError)',
      Error: 'XcmV2TraitsError'
    }
  },

  /**
   * Lookup100: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Undefined: 'Null',
      Overflow: 'Null',
      Unimplemented: 'Null',
      UnhandledXcmVersion: 'Null',
      UnhandledXcmMessage: 'Null',
      UnhandledEffect: 'Null',
      EscalationOfPrivilege: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      DestinationBufferOverflow: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      FailedToDecode: 'Null',
      BadOrigin: 'Null',
      ExceedsMaxMessageSize: 'Null',
      FailedToTransactAsset: 'Null',
      WeightLimitReached: 'u64',
      Wildcard: 'Null',
      TooMuchWeightRequired: 'Null',
      NotHoldingFees: 'Null',
      WeightNotComputable: 'Null',
      Barrier: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      TooExpensive: 'Null',
      AssetNotFound: 'Null',
      DestinationUnsupported: 'Null',
      RecursionLimitReached: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownWeightRequired: 'Null',
      Trap: 'u64',
      UnknownClaim: 'Null',
      InvalidLocation: 'Null'
    }
  },

  /**
   * Lookup102: axcaxc_allychain::primitives::HrmpChannelId
   **/
  AxiaaxcAllychainPrimitivesHrmpChannelId: {
    sender: 'u32',
    recipient: 'u32'
  },

  /**
   * Lookup108: xcm::v1::multilocation::MultiLocation
   **/
  XcmV1MultiLocation: {
    parents: 'u8',
    interior: 'XcmV1MultilocationJunctions'
  },

  /**
   * Lookup109: xcm::v1::multilocation::Junctions
   **/
  XcmV1MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV1Junction',
      X2: '(XcmV1Junction,XcmV1Junction)',
      X3: '(XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X4: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X5: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X6: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X7: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X8: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)'
    }
  },

  /**
   * Lookup110: xcm::v1::junction::Junction
   **/
  XcmV1Junction: {
    _enum: {
      Allychain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]'
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>'
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]'
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },

  /**
   * Lookup112: xcm::v0::junction::NetworkId
   **/
  XcmV0JunctionNetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Axiaaxc: 'Null',
      AxiaTest: 'Null'
    }
  },

  /**
   * Lookup114: xcm::v0::junction::BodyId
   **/
  XcmV0JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null'
    }
  },

  /**
   * Lookup115: xcm::v0::junction::BodyPart
   **/
  XcmV0JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>'
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },

  /**
   * Lookup116: xcm::v2::Xcm<Call>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',

  /**
   * Lookup118: xcm::v2::Instruction<Call>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV1MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV1MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV1MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>'
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation'
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm'
      },
      Transact: {
        _alias: {
          call_: 'call'
        },
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call_: 'XcmDoubleEncoded'
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>'
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>'
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>'
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV1MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        maxResponseWeight: 'Compact<u64>'
      },
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV1MultiLocation'
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm'
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets'
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm'
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>'
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weightLimit: 'XcmV2WeightLimit'
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        ticket: 'XcmV1MultiLocation'
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>'
      },
      UnsubscribeVersion: 'Null'
    }
  },

  /**
   * Lookup119: xcm::v1::multiasset::MultiAssets
   **/
  XcmV1MultiassetMultiAssets: 'Vec<XcmV1MultiAsset>',

  /**
   * Lookup121: xcm::v1::multiasset::MultiAsset
   **/
  XcmV1MultiAsset: {
    id: 'XcmV1MultiassetAssetId',
    fun: 'XcmV1MultiassetFungibility'
  },

  /**
   * Lookup122: xcm::v1::multiasset::AssetId
   **/
  XcmV1MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV1MultiLocation',
      Abstract: 'Bytes'
    }
  },

  /**
   * Lookup123: xcm::v1::multiasset::Fungibility
   **/
  XcmV1MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV1MultiassetAssetInstance'
    }
  },

  /**
   * Lookup124: xcm::v1::multiasset::AssetInstance
   **/
  XcmV1MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },

  /**
   * Lookup126: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV1MultiassetMultiAssets',
      ExecutionResult: 'Result<Null, (u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },

  /**
   * Lookup129: xcm::v0::OriginKind
   **/
  XcmV0OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },

  /**
   * Lookup130: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },

  /**
   * Lookup131: xcm::v1::multiasset::MultiAssetFilter
   **/
  XcmV1MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV1MultiassetMultiAssets',
      Wild: 'XcmV1MultiassetWildMultiAsset'
    }
  },

  /**
   * Lookup132: xcm::v1::multiasset::WildMultiAsset
   **/
  XcmV1MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV1MultiassetAssetId',
        fun: 'XcmV1MultiassetWildFungibility'
      }
    }
  },

  /**
   * Lookup133: xcm::v1::multiasset::WildFungibility
   **/
  XcmV1MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },

  /**
   * Lookup134: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },

  /**
   * Lookup136: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      V0: 'Vec<XcmV0MultiAsset>',
      V1: 'XcmV1MultiassetMultiAssets'
    }
  },

  /**
   * Lookup138: xcm::v0::multi_asset::MultiAsset
   **/
  XcmV0MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: {
        id: 'Bytes'
      },
      AllAbstractNonFungible: {
        class: 'Bytes'
      },
      AllConcreteFungible: {
        id: 'XcmV0MultiLocation'
      },
      AllConcreteNonFungible: {
        class: 'XcmV0MultiLocation'
      },
      AbstractFungible: {
        id: 'Bytes',
        amount: 'Compact<u128>'
      },
      AbstractNonFungible: {
        class: 'Bytes',
        instance: 'XcmV1MultiassetAssetInstance'
      },
      ConcreteFungible: {
        id: 'XcmV0MultiLocation',
        amount: 'Compact<u128>'
      },
      ConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
        instance: 'XcmV1MultiassetAssetInstance'
      }
    }
  },

  /**
   * Lookup139: xcm::v0::multi_location::MultiLocation
   **/
  XcmV0MultiLocation: {
    _enum: {
      Null: 'Null',
      X1: 'XcmV0Junction',
      X2: '(XcmV0Junction,XcmV0Junction)',
      X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)'
    }
  },

  /**
   * Lookup140: xcm::v0::junction::Junction
   **/
  XcmV0Junction: {
    _enum: {
      Parent: 'Null',
      Allychain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]'
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>'
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]'
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },

  /**
   * Lookup141: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      V0: 'XcmV0MultiLocation',
      V1: 'XcmV1MultiLocation'
    }
  },

  /**
   * Lookup237: axctest_runtime::SessionKeys
   **/
  AxiaTestRuntimeSessionKeys: {
    grandpa: 'SpFinalityGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    paraValidator: 'AxiaaxcPrimitivesV0ValidatorAppPublic',
    paraAssignment: 'AxiaaxcPrimitivesV1AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },

  /**
   * Lookup360: axctest_runtime::NposCompactSolution24
   **/
  AxiaTestRuntimeNposCompactSolution24: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>',
    votes17: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);16],Compact<u16>)>',
    votes18: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);17],Compact<u16>)>',
    votes19: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);18],Compact<u16>)>',
    votes20: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);19],Compact<u16>)>',
    votes21: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);20],Compact<u16>)>',
    votes22: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);21],Compact<u16>)>',
    votes23: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);22],Compact<u16>)>',
    votes24: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);23],Compact<u16>)>'
  },

  /**
   * Lookup448: axcaxc_primitives::v1::InherentData<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  AxiaaxcPrimitivesV1InherentData: {
    bitfields: 'Vec<AxiaaxcPrimitivesV1SignedUncheckedSigned>',
    backedCandidates: 'Vec<AxiaaxcPrimitivesV1BackedCandidate>',
    disputes: 'Vec<AxiaaxcPrimitivesV1DisputeStatementSet>',
    parentHeader: 'SpRuntimeGenericHeader'
  },

  /**
   * Lookup450: axcaxc_primitives::v1::signed::UncheckedSigned<axcaxc_primitives::v1::AvailabilityBitfield, axcaxc_primitives::v1::AvailabilityBitfield>
   **/
  AxiaaxcPrimitivesV1SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'AxiaaxcPrimitivesV0ValidatorAppSignature'
  },

  /**
   * Lookup453: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',

  /**
   * Lookup455: axcaxc_primitives::v0::validator_app::Signature
   **/
  AxiaaxcPrimitivesV0ValidatorAppSignature: 'SpCoreSr25519Signature',

  /**
   * Lookup457: axcaxc_primitives::v1::BackedCandidate<primitive_types::H256>
   **/
  AxiaaxcPrimitivesV1BackedCandidate: {
    candidate: 'AxiaaxcPrimitivesV1CommittedCandidateReceipt',
    validityVotes: 'Vec<AxiaaxcPrimitivesV0ValidityAttestation>',
    validatorIndices: 'BitVec'
  },

  /**
   * Lookup458: axcaxc_primitives::v1::CommittedCandidateReceipt<primitive_types::H256>
   **/
  AxiaaxcPrimitivesV1CommittedCandidateReceipt: {
    descriptor: 'AxiaaxcPrimitivesV1CandidateDescriptor',
    commitments: 'AxiaaxcPrimitivesV1CandidateCommitments'
  },

  /**
   * Lookup459: axcaxc_primitives::v1::CandidateCommitments<N>
   **/
  AxiaaxcPrimitivesV1CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<AxiaaxcCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },

  /**
   * Lookup461: axcaxc_core_primitives::OutboundHrmpMessage<axcaxc_allychain::primitives::Id>
   **/
  AxiaaxcCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },

  /**
   * Lookup465: axcaxc_primitives::v0::ValidityAttestation
   **/
  AxiaaxcPrimitivesV0ValidityAttestation: {
    _enum: {
      Unused0: 'Null',
      Implicit: 'AxiaaxcPrimitivesV0ValidatorAppSignature',
      Explicit: 'AxiaaxcPrimitivesV0ValidatorAppSignature'
    }
  },

  /**
   * Lookup467: axcaxc_primitives::v1::DisputeStatementSet
   **/
  AxiaaxcPrimitivesV1DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(AxiaaxcPrimitivesV1DisputeStatement,u32,AxiaaxcPrimitivesV0ValidatorAppSignature)>'
  },

  /**
   * Lookup471: axcaxc_primitives::v1::DisputeStatement
   **/
  AxiaaxcPrimitivesV1DisputeStatement: {
    _enum: {
      Valid: 'AxiaaxcPrimitivesV1ValidDisputeStatementKind',
      Invalid: 'AxiaaxcPrimitivesV1InvalidDisputeStatementKind'
    }
  },

  /**
   * Lookup472: axcaxc_primitives::v1::ValidDisputeStatementKind
   **/
  AxiaaxcPrimitivesV1ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null'
    }
  },

  /**
   * Lookup473: axcaxc_primitives::v1::InvalidDisputeStatementKind
   **/
  AxiaaxcPrimitivesV1InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },

  /**
   * Lookup485: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },

  /**
   * Lookup486: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',

  /**
   * Lookup492: xcm::VersionedXcm<Call>
   **/
  XcmVersionedXcm: {
    _enum: {
      V0: 'XcmV0Xcm',
      V1: 'XcmV1Xcm',
      V2: 'XcmV2Xcm'
    }
  },

  /**
   * Lookup493: xcm::v0::Xcm<Call>
   **/
  XcmV0Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>'
      },
      ReserveAssetDeposit: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>'
      },
      TeleportAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>'
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV0Response'
      },
      TransferAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation'
      },
      TransferReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>'
      },
      Transact: {
        _alias: {
          call_: 'call'
        },
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call_: 'XcmDoubleEncoded'
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>'
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>'
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>'
      },
      RelayedFrom: {
        who: 'XcmV0MultiLocation',
        message: 'XcmV0Xcm'
      }
    }
  },

  /**
   * Lookup495: xcm::v0::order::Order<Call>
   **/
  XcmV0Order: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation'
      },
      DepositReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>'
      },
      ExchangeAsset: {
        give: 'Vec<XcmV0MultiAsset>',
        receive: 'Vec<XcmV0MultiAsset>'
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<XcmV0MultiAsset>',
        reserve: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>'
      },
      InitiateTeleport: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV0MultiLocation',
        assets: 'Vec<XcmV0MultiAsset>'
      },
      BuyExecution: {
        fees: 'XcmV0MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0Xcm>'
      }
    }
  },

  /**
   * Lookup497: xcm::v0::Response
   **/
  XcmV0Response: {
    _enum: {
      Assets: 'Vec<XcmV0MultiAsset>'
    }
  },

  /**
   * Lookup498: xcm::v1::Xcm<Call>
   **/
  XcmV1Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>'
      },
      ReserveAssetDeposited: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>'
      },
      ReceiveTeleportedAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>'
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV1Response'
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation'
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>'
      },
      Transact: {
        _alias: {
          call_: 'call'
        },
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call_: 'XcmDoubleEncoded'
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>'
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>'
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>'
      },
      RelayedFrom: {
        who: 'XcmV1MultilocationJunctions',
        message: 'XcmV1Xcm'
      },
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>'
      },
      UnsubscribeVersion: 'Null'
    }
  },

  /**
   * Lookup500: xcm::v1::order::Order<Call>
   **/
  XcmV1Order: {
    _enum: {
      Noop: 'Null',
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        beneficiary: 'XcmV1MultiLocation'
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>'
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets'
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>'
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>'
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter'
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        instructions: 'Vec<XcmV1Xcm>'
      }
    }
  },

  /**
   * Lookup502: xcm::v1::Response
   **/
  XcmV1Response: {
    _enum: {
      Assets: 'XcmV1MultiassetMultiAssets',
      Version: 'u32'
    }
  },

  /**
   * Lookup563: axctest_runtime::OriginCaller
   **/
  AxiaTestRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSystemRawOrigin',
      Unused1: 'Null',
      Unused2: 'Null',
      Unused3: 'Null',
      Unused4: 'Null',
      Void: 'SpCoreVoid',
      Unused6: 'Null',
      Unused7: 'Null',
      Unused8: 'Null',
      Unused9: 'Null',
      Unused10: 'Null',
      Unused11: 'Null',
      Unused12: 'Null',
      Unused13: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      Unused16: 'Null',
      Unused17: 'Null',
      Unused18: 'Null',
      Unused19: 'Null',
      Unused20: 'Null',
      Unused21: 'Null',
      Unused22: 'Null',
      Unused23: 'Null',
      Unused24: 'Null',
      Unused25: 'Null',
      Unused26: 'Null',
      Unused27: 'Null',
      Unused28: 'Null',
      Unused29: 'Null',
      Unused30: 'Null',
      Unused31: 'Null',
      Unused32: 'Null',
      Unused33: 'Null',
      Unused34: 'Null',
      Unused35: 'Null',
      Unused36: 'Null',
      Unused37: 'Null',
      Unused38: 'Null',
      Unused39: 'Null',
      Unused40: 'Null',
      Unused41: 'Null',
      Unused42: 'Null',
      Unused43: 'Null',
      Unused44: 'Null',
      Unused45: 'Null',
      Unused46: 'Null',
      Unused47: 'Null',
      Unused48: 'Null',
      Unused49: 'Null',
      AllychainsOrigin: 'AxiaaxcRuntimeAllychainsOriginPalletOrigin',
      Unused51: 'Null',
      Unused52: 'Null',
      Unused53: 'Null',
      Unused54: 'Null',
      Unused55: 'Null',
      Unused56: 'Null',
      Unused57: 'Null',
      Unused58: 'Null',
      Unused59: 'Null',
      Unused60: 'Null',
      Unused61: 'Null',
      Unused62: 'Null',
      Unused63: 'Null',
      Unused64: 'Null',
      Unused65: 'Null',
      Unused66: 'Null',
      Unused67: 'Null',
      Unused68: 'Null',
      Unused69: 'Null',
      Unused70: 'Null',
      Unused71: 'Null',
      Unused72: 'Null',
      Unused73: 'Null',
      Unused74: 'Null',
      Unused75: 'Null',
      Unused76: 'Null',
      Unused77: 'Null',
      Unused78: 'Null',
      Unused79: 'Null',
      Unused80: 'Null',
      Unused81: 'Null',
      Unused82: 'Null',
      Unused83: 'Null',
      Unused84: 'Null',
      Unused85: 'Null',
      Unused86: 'Null',
      Unused87: 'Null',
      Unused88: 'Null',
      Unused89: 'Null',
      Unused90: 'Null',
      Unused91: 'Null',
      Unused92: 'Null',
      Unused93: 'Null',
      Unused94: 'Null',
      Unused95: 'Null',
      Unused96: 'Null',
      Unused97: 'Null',
      Unused98: 'Null',
      XcmPallet: 'PalletXcmOrigin'
    }
  },

  /**
   * Lookup567: axcaxc_runtime_allychains::origin::pallet::Origin
   **/
  AxiaaxcRuntimeAllychainsOriginPalletOrigin: {
    _enum: {
      Allychain: 'u32'
    }
  },

  /**
   * Lookup568: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV1MultiLocation',
      Response: 'XcmV1MultiLocation'
    }
  },

  /**
   * Lookup607: axcaxc_runtime_allychains::configuration::HostConfiguration<BlockNumber>
   **/
  AxiaaxcRuntimeAllychainsConfigurationHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeFrequency: 'u32',
    validationUpgradeDelay: 'u32',
    maxPovSize: 'u32',
    maxDownwardMessageSize: 'u32',
    umpServiceTotalWeight: 'u64',
    hrmpMaxAllychainOutboundChannels: 'u32',
    hrmpMaxParathreadOutboundChannels: 'u32',
    hrmpSenderDeposit: 'u128',
    hrmpRecipientDeposit: 'u128',
    hrmpChannelMaxCapacity: 'u32',
    hrmpChannelMaxTotalSize: 'u32',
    hrmpMaxAllychainInboundChannels: 'u32',
    hrmpMaxParathreadInboundChannels: 'u32',
    hrmpChannelMaxMessageSize: 'u32',
    codeRetentionPeriod: 'u32',
    parathreadCores: 'u32',
    parathreadRetries: 'u32',
    groupRotationFrequency: 'u32',
    chainAvailabilityPeriod: 'u32',
    threadAvailabilityPeriod: 'u32',
    schedulingLookahead: 'u32',
    maxValidatorsPerCore: 'Option<u32>',
    maxValidators: 'Option<u32>',
    disputePeriod: 'u32',
    disputePostConclusionAcceptancePeriod: 'u32',
    disputeMaxSpamSlots: 'u32',
    disputeConclusionByTimeOutPeriod: 'u32',
    noShowSlots: 'u32',
    nDelayTranches: 'u32',
    zerothDelayTrancheWidth: 'u32',
    neededApprovals: 'u32',
    relayVrfModuloSamples: 'u32',
    umpMaxIndividualWeight: 'u64'
  },

  /**
   * Lookup611: axcaxc_runtime_allychains::inclusion::AvailabilityBitfieldRecord<N>
   **/
  AxiaaxcRuntimeAllychainsInclusionAvailabilityBitfieldRecord: {
    bitfield: 'BitVec',
    submittedAt: 'u32'
  },

  /**
   * Lookup612: axcaxc_runtime_allychains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  AxiaaxcRuntimeAllychainsInclusionCandidatePendingAvailability: {
    _alias: {
      hash_: 'hash'
    },
    core: 'u32',
    hash_: 'H256',
    descriptor: 'AxiaaxcPrimitivesV1CandidateDescriptor',
    availabilityVotes: 'BitVec',
    backers: 'BitVec',
    relayParentNumber: 'u32',
    backedInNumber: 'u32',
    backingGroup: 'u32'
  },

  /**
   * Lookup616: axcaxc_runtime_allychains::scheduler::ParathreadClaimQueue
   **/
  AxiaaxcRuntimeAllychainsSchedulerParathreadClaimQueue: {
    queue: 'Vec<AxiaaxcRuntimeAllychainsSchedulerQueuedParathread>',
    nextCoreOffset: 'u32'
  },

  /**
   * Lookup618: axcaxc_runtime_allychains::scheduler::QueuedParathread
   **/
  AxiaaxcRuntimeAllychainsSchedulerQueuedParathread: {
    claim: 'AxiaaxcPrimitivesV1ParathreadEntry',
    coreOffset: 'u32'
  },

  /**
   * Lookup619: axcaxc_primitives::v1::ParathreadEntry
   **/
  AxiaaxcPrimitivesV1ParathreadEntry: {
    claim: 'AxiaaxcPrimitivesV1ParathreadClaim',
    retries: 'u32'
  },

  /**
   * Lookup620: axcaxc_primitives::v1::ParathreadClaim
   **/
  AxiaaxcPrimitivesV1ParathreadClaim: '(u32,AxiaaxcPrimitivesV0CollatorAppPublic)',

  /**
   * Lookup623: axcaxc_primitives::v1::CoreOccupied
   **/
  AxiaaxcPrimitivesV1CoreOccupied: {
    _enum: {
      Parathread: 'AxiaaxcPrimitivesV1ParathreadEntry',
      Allychain: 'Null'
    }
  },

  /**
   * Lookup626: axcaxc_runtime_allychains::scheduler::CoreAssignment
   **/
  AxiaaxcRuntimeAllychainsSchedulerCoreAssignment: {
    core: 'u32',
    paraId: 'u32',
    kind: 'AxiaaxcRuntimeAllychainsSchedulerAssignmentKind',
    groupIdx: 'u32'
  },

  /**
   * Lookup627: axcaxc_runtime_allychains::scheduler::AssignmentKind
   **/
  AxiaaxcRuntimeAllychainsSchedulerAssignmentKind: {
    _enum: {
      Allychain: 'Null',
      Parathread: '(AxiaaxcPrimitivesV0CollatorAppPublic,u32)'
    }
  },

  /**
   * Lookup628: axcaxc_runtime_allychains::paras::ParaLifecycle
   **/
  AxiaaxcRuntimeAllychainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Allychain', 'UpgradingParathread', 'DowngradingAllychain', 'OffboardingParathread', 'OffboardingAllychain']
  },

  /**
   * Lookup630: axcaxc_runtime_allychains::paras::ParaPastCodeMeta<N>
   **/
  AxiaaxcRuntimeAllychainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<AxiaaxcRuntimeAllychainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },

  /**
   * Lookup632: axcaxc_runtime_allychains::paras::ReplacementTimes<N>
   **/
  AxiaaxcRuntimeAllychainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },

  /**
   * Lookup634: axcaxc_primitives::v1::UpgradeGoAhead
   **/
  AxiaaxcPrimitivesV1UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },

  /**
   * Lookup635: axcaxc_primitives::v1::UpgradeRestriction
   **/
  AxiaaxcPrimitivesV1UpgradeRestriction: {
    _enum: ['Present']
  },

  /**
   * Lookup636: axcaxc_runtime_allychains::paras::ParaGenesisArgs
   **/
  AxiaaxcRuntimeAllychainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    allychain: 'bool'
  },

  /**
   * Lookup639: axcaxc_runtime_allychains::initializer::BufferedSessionChange
   **/
  AxiaaxcRuntimeAllychainsInitializerBufferedSessionChange: {
    validators: 'Vec<AxiaaxcPrimitivesV0ValidatorAppPublic>',
    queued: 'Vec<AxiaaxcPrimitivesV0ValidatorAppPublic>',
    sessionIndex: 'u32'
  },

  /**
   * Lookup641: axcaxc_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  AxiaaxcCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },

  /**
   * Lookup644: axcaxc_runtime_allychains::hrmp::HrmpOpenChannelRequest
   **/
  AxiaaxcRuntimeAllychainsHrmpHrmpOpenChannelRequest: {
    confirmed: 'bool',
    age: 'u32',
    senderDeposit: 'u128',
    maxMessageSize: 'u32',
    maxCapacity: 'u32',
    maxTotalSize: 'u32'
  },

  /**
   * Lookup646: axcaxc_runtime_allychains::hrmp::HrmpChannel
   **/
  AxiaaxcRuntimeAllychainsHrmpHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>',
    senderDeposit: 'u128',
    recipientDeposit: 'u128'
  },

  /**
   * Lookup649: axcaxc_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  AxiaaxcCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },

  /**
   * Lookup654: axcaxc_primitives::v1::SessionInfo
   **/
  AxiaaxcPrimitivesV1SessionInfo: {
    validators: 'Vec<AxiaaxcPrimitivesV0ValidatorAppPublic>',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<AxiaaxcPrimitivesV1AssignmentAppPublic>',
    validatorGroups: 'Vec<Vec<u32>>',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },

  /**
   * Lookup656: axcaxc_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  AxiaaxcRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'bool'
  },

  /**
   * Lookup666: axcaxc_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
   **/
  AxiaaxcRuntimeCommonCrowdloanFundInfo: {
    depositor: 'AccountId32',
    verifier: 'Option<SpRuntimeMultiSigner>',
    deposit: 'u128',
    raised: 'u128',
    end: 'u32',
    cap: 'u128',
    lastContribution: 'AxiaaxcRuntimeCommonCrowdloanLastContribution',
    firstPeriod: 'u32',
    lastPeriod: 'u32',
    trieIndex: 'u32'
  },

  /**
   * Lookup667: axcaxc_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  AxiaaxcRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32'
    }
  },

  /**
   * Lookup669: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32'
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool'
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },

  /**
   * Lookup672: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      V0: 'XcmV0Response',
      V1: 'XcmV1Response',
      V2: 'XcmV2Response'
    }
  },

  /**
   * Lookup678: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },

  /**
   * Lookup690: axctest_runtime::Runtime
   **/
  AxiaTestRuntimeRuntime: 'Null'
};
exports.default = _default;