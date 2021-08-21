import config from 'config';

import { COLLECTIONS } from '../common/constants';
import {
  userSchema,
  nftSchema,
  nftTransactionSchema,
  nftCommitmentSchema,
  nftCommitmentTransactionSchema,
  ftTransactionSchema,
  ftCommitmentSchema,
  ftCommitmentTransactionSchema,
  blacklistSchema,
} from '../models';

const mongo = config.get('mongo');

export default class DB {
  constructor(db, username) {
    this.database = db;
    this.username = username;
    if (!username) return;
    this.createTablesForUser();
  }

  createTablesForUser() {
    const { username, database } = this;
    this.Models = {
      user: database.model(`${username}_${COLLECTIONS.USER}`, userSchema),
      nft: database.model(`${username}_${COLLECTIONS.NFT}`, nftSchema),
      nft_transaction: database.model(
        `${username}_${COLLECTIONS.NFT_TRANSACTION}`,
        nftTransactionSchema,
      ),
      nft_commitment: database.model(
        `${username}_${COLLECTIONS.NFT_COMMITMENT}`,
        nftCommitmentSchema,
      ),
      nft_commitment_transaction: database.model(
        `${username}_${COLLECTIONS.NFT_COMMITMENT_TRANSACTION}`,
        nftCommitmentTransactionSchema,
      ),
      ft_transaction: database.model(
        `${username}_${COLLECTIONS.FT_TRANSACTION}`,
        ftTransactionSchema,
      ),
      ft_commitment: database.model(`${username}_${COLLECTIONS.FT_COMMITMENT}`, ftCommitmentSchema),
      ft_commitment_transaction: database.model(
        `${username}_${COLLECTIONS.FT_COMMITMENT_TRANSACTION}`,
        ftCommitmentTransactionSchema,
      ),
      blacklist: database.model(`${username}_${COLLECTIONS.BLACKLIST}`, blacklistSchema),
    };
  }

  saveData(modelName, data) {
    const Model = this.Models[modelName];
    const modelInstance = new Model(data);
    return modelInstance.save();
  }

  getData(modelName, query = {}, projection) {
    const model = this.Models[modelName];
    return model.find(query, projection).exec();
  }

  async getDbData(
    modelName,
    query,
    projection = { path: '', select: '' },
    sort = {},
    pageNo = 1,
    limit = 5,
  ) {
    try {
      const model = this.Models[modelName];
      const data = await model
        .find(query)
        .limit(limit)
        .skip(limit * (pageNo - 1))
        .sort(sort)
        .populate(projection)
        .exec();
      const totalCount = await model
        .find(query)
        .countDocuments()
        .exec();
      return { data, totalCount };
    } catch (err) {
      return err;
    }
  }

  getDbValues(modelName, query, projection, sort = {}, pageNo, limit) {
    const model = this.Models[modelName];
    const mQuery = model.find(query);
    if (limit) {
      mQuery.limit(limit);
    }
    if (pageNo) {
      mQuery.skip(limit * (pageNo - 1));
    }
    if (sort) {
      mQuery.sort(sort);
    }
    if (projection) {
      mQuery.populate(projection);
    }
    return mQuery.exec();
  }

  findOne(modelName, query) {
    const model = this.Models[modelName];
    return model.findOne(query);
  }

  getListData(modelName, query, page) {
    const model = this.Models[modelName];
    return model
      .find(query)
      .skip(page.index * page.size)
      .limit(page.size)
      .exec();
  }

  updateData(modelName, condition, updateData, options = { upsert: true }) {
    const model = this.Models[modelName];
    return model.updateOne(condition, updateData, options);
  }

  aggregation(modelName, condition, projection, options) {
    const model = this.Models[modelName];
    const pipeline = [{ $match: condition }];

    if (projection) pipeline.push(projection);

    if (options) pipeline.push(options);

    return model.aggregate(pipeline);
  }

  populate(modelName, data, populates) {
    const model = this.Models[modelName];
    return model.populate(data, populates);
  }

  addUser(name, password) {
    return this.database.db.addUser(name, password, {
      roles: [
        {
          role: 'read',
          db: mongo.databaseName,
        },
      ],
    });
  }
}
