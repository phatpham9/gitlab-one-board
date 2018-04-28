const { User } = require('../models');

const passportGeneralCallback = async (accessToken, refreshToken, profile, cb) => {
  const { id } = profile;

  try {
    const query = {
      profileId: id,
    };

    let user = await User.get({
      query,
    });

    if (user) {
      await User.update(query, {
        profile,
        accessToken,
        refreshToken,
      });
    } else {
      user = new User({
        profile,
        accessToken,
        refreshToken,
        profileId: id.toString(),
      });

      await user.save();
    }

    return cb(null, user);
  } catch (err) {
    return cb(err, null);
  }
};

module.exports = {
  passportGeneralCallback,
};
