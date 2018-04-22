const fetch = require('node-fetch');

const doFetch = async (path) => {
  const fetchOptions = {
    headers: {
      'PRIVATE-TOKEN': process.env.GITLAB_TOKEN,
    },
  };

  return fetch(`https://${process.env.GITLAB_DOMAIN}/api/v4/${path}`, fetchOptions);
};

module.exports = {
  doFetch,
};
