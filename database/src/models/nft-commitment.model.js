import { Schema } from 'mongoose';

export default new Schema(
  {
    tokenUri: {
      type: String,
      required: true,
    },
    tokenId: {
      type: String,
      required: true,
    },
    shieldContractAddress: String,
    salt: {
      type: String,
      required: true,
    },
    commitment: {
      type: String,
      unique: true,
      required: true,
    },
    commitmentIndex: {
      type: Number,
      required: true,
    },

    // receiver info
    owner: {
      name: String,
      publicKey: String,
    },

    // boolean stats
    isMinted: Boolean,
    isTransferred: Boolean,
    isBurned: Boolean,
    isReceived: Boolean,

    // boolean stats - correctness checks
    commitmentReconciles: Boolean,

    // does commitment exist on-chain?
    commitmentExistsOnchain: Boolean,
  },
  { timestamps: true },
);
