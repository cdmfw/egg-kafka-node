'use strict';

// const Subscription = require('egg').Subscription;

const asyncTask = (topic, key, value) => {
  return new Promise(resolve => {
    resolve(`[Consumer] test message: ${topic} : ${key} : ${value} : ${new Date()}`);
  });
};

class CommonSubscription {
  async subscribe(message = {}) {
    const { topic, key, value } = message;
    const msg = await asyncTask(topic, key, value);
    console.log(msg);
  }
}

module.exports = CommonSubscription;
