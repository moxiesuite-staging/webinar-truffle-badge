const TruffleBadge = artifacts.require("TruffleBadge");

const main = async (cb) => {
  try {
    const acc1 = '0x0828b5ae9e9835E85f4f0FF1C07f66F51b50283f';
    const acc2 = '0x045299Db35B2135f43695453687844Af1A8f7d78';
    const acc3 = '0xB221726f76FdB319e9C7602Cd03C5C2446E9F8F9';
    const acc4 = '0x5023EDB338fC62149e8D7489E51594098582A08F';

    const meta1 = "https://ipfs.infura-ipfs.io/ipfs/QmP6AFJbppxmebAgsQJ6mNeBKe22VZGhMzBsSU143XfmiB/meta1.json";
    const meta2 = "https://ipfs.infura-ipfs.io/ipfs/QmP6AFJbppxmebAgsQJ6mNeBKe22VZGhMzBsSU143XfmiB/meta2.json";
    const meta3 = "https://ipfs.infura-ipfs.io/ipfs/QmP6AFJbppxmebAgsQJ6mNeBKe22VZGhMzBsSU143XfmiB/meta3.json";
    const meta4 = "https://ipfs.infura-ipfs.io/ipfs/QmP6AFJbppxmebAgsQJ6mNeBKe22VZGhMzBsSU143XfmiB/meta4.json";

    badge = await TruffleBadge.deployed();
    await badge.awardBadge(acc1, meta1);
    await badge.awardBadge(acc2, meta2);
    await badge.awardBadge(acc3, meta3);
    await badge.awardBadge(acc4, meta4);
  } catch(err) {
    console.log('oops', err.message);
  }
  cb();
}

module.exports = main
