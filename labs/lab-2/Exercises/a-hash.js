'use strict';

const phonebook =
{ Marcus: '+380445554433',
  John: '+380992303920',
  Bob: '+380678761234' };

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
