const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;
const SELECT_DEFAULT = 'email isActive profileId profile accessToken refreshToken';

const schema = new Schema({
  profileId: {
    type: String,
    required: true,
  },
  profile: {
    type: Schema.Types.Mixed,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  accessToken: {
    type: String,
    trim: true,
  },
  refreshToken: {
    type: String,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

schema.method({
  securedInfo() {
    const { _id, email, isActive, profileId, profile, accessToken, refreshToken } = this;

    return {
      id: _id,
      email,
      isActive,
      profileId,
      profile,
      accessToken,
      refreshToken,
    };
  },
});

schema.statics = {
  get({ select, query }) {
    return this.findOne(query)
    .select(select || SELECT_DEFAULT);
  },
  list({ query, page, sort, limit, select }) {
    return this.find(query || {})
    .sort(sort || '-created.at')
    .select(select || SELECT_DEFAULT)
    .skip((limit || 0) * (page || 0))
    .limit(limit || 0);
  },
};

module.exports = Mongoose.model('User', schema);
