import { Schema } from 'mongoose';

export default new Schema(
  {
    value: {
      type: String,
      required: true,
    },
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

    owner: {
      name: String,
      publicKey: String,
    },

    // boolean stats
    isMinted: Boolean,
    isTransferred: Boolean,
    isBurned: Boolean,
    isReceived: Boolean,
    isChange: Boolean,
    isBatchTransferred: Boolean,
    isConsolidateTransferred: Boolean,

    // boolean stats - correctness checks
    commitmentReconciles: Boolean,

    // does commitment exist on-chain?
    commitmentExistsOnchain: Boolean,
  },
  { timestamps: true },
);
