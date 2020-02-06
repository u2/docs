/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docsSidebar: {
    Docusaurus: ['docs/doc1', 'docs/doc2', 'docs/doc3'],
    Features: ['docs/mdx'],
  },

  rfcsSidebar:{
    Introduction:['rfcs/introduction'],
    Standards_Track:[
      'rfcs/0004-ckb-block-sync/0004-ckb-block-sync',
      'rfcs/0006-merkle-tree/0006-merkle-tree',
      'rfcs/0007-scoring-system-and-network-security/0007-scoring-system-and-network-security',
      'rfcs/0008-serialization/0008-serialization',
      'rfcs/0009-vm-syscalls/0009-vm-syscalls',
      'rfcs/0010-eaglesong/0010-eaglesong',
      'rfcs/0011-transaction-filter-protocol/0011-transaction-filter-protocol',
      'rfcs/0012-node-discovery/0012-node-discovery',
      'rfcs/0013-get-block-template/0013-get-block-template',
      'rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits',
      'rfcs/0017-tx-valid-since/0017-tx-valid-since',
      'rfcs/0021-ckb-address-format/0021-ckb-address-format',
      'rfcs/0023-dao-deposit-withdraw/0023-dao-deposit-withdraw',
    ],
    Information:[
      'rfcs/0001-positioning/0001-positioning',
      'rfcs/0002-ckb/0002-ckb',
      'rfcs/0003-ckb-vm/0003-ckb-vm',
      'rfcs/0005-priviledged-mode/0005-priviledged-mode',
      'rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics',
      'rfcs/0019-data-structures/0019-data-structures',
      'rfcs/0020-ckb-consensus-protocol/0020-ckb-consensus-protocol',
      'rfcs/0022-transaction-structure/0022-transaction-structure',
    ],
    Introduction_简介:['rfcs/introduction.zh'],
    Standards_Track_标准:[
      'rfcs/0004-ckb-block-sync/0004-ckb-block-sync.zh',
      'rfcs/0006-merkle-tree/0006-merkle-tree.zh',
      'rfcs/0007-scoring-system-and-network-security/0007-scoring-system-and-network-security.zh',
      'rfcs/0008-serialization/0008-serialization',
      'rfcs/0009-vm-syscalls/0009-vm-syscalls',
      'rfcs/0010-eaglesong/0010-eaglesong',
      'rfcs/0011-transaction-filter-protocol/0011-transaction-filter-protocol',
      'rfcs/0012-node-discovery/0012-node-discovery',
      'rfcs/0013-get-block-template/0013-get-block-template',
      'rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits',
      'rfcs/0017-tx-valid-since/0017-tx-valid-since',
      'rfcs/0021-ckb-address-format/0021-ckb-address-format',
      'rfcs/0023-dao-deposit-withdraw/0023-dao-deposit-withdraw',
    ],
    Information_信息:[
      'rfcs/0001-positioning/0001-positioning',
      'rfcs/0002-ckb/0002-ckb',
      'rfcs/0003-ckb-vm/0003-ckb-vm.zh',
      'rfcs/0005-priviledged-mode/0005-priviledged-mode.zh',
      'rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics',
      'rfcs/0019-data-structures/0019-data-structures',
      'rfcs/0020-ckb-consensus-protocol/0020-ckb-consensus-protocol',
      'rfcs/0022-transaction-structure/0022-transaction-structure',
    ],
  },

  qaSidebar:{
    介绍:['qa/welcome','qa/contribute'],
    常见问题:[
      {
        type: 'category',
        label:'关于 Nervos',
        items:['qa/nervos/nervos1'],
      },
      {
        type: 'category',
        label:'关于 CKB',
        items:['qa/ckb/ckb1'],
      },
      {
        type: 'category',
        label:'关于 Nervos DAO',
        items:['qa/nervosdao/dao1'],
      }
    ],
    导航:[
      'qa/guide/grants',
    ],
  }
};
