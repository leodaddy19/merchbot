const {
  GET_STARTED_PAYLOAD,
  GREETING_TEXT,
  PERSISTENT_MENU
} = require('./dist/src/modules/chatbot/chatbot.constants');

module.exports = {
  session: {
    driver: 'mongo',
    stores: {
      mongo: {
        url: process.env.DATABASE_URI,
        collectionName: 'sessions',
      },
    },
  },
  initialState: {},
  channels: {
    messenger: {
      enabled: true,
      fields: ['messages', 'messaging_postbacks'],
      path: '/webhooks/messenger',
      pageId: process.env.MESSENGER_PAGE_ID,
      accessToken: process.env.MESSENGER_ACCESS_TOKEN,
      appId: process.env.MESSENGER_APP_ID,
      appSecret: process.env.MESSENGER_APP_SECRET,
      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
      profile: {
        getStarted: {
          payload: GET_STARTED_PAYLOAD,
        },
        greeting: GREETING_TEXT,
        persistentMenu: PERSISTENT_MENU,
      },
    },
  },
};
