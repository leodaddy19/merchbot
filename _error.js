const { Logger } = require('@nestjs/common');
const { isEnv } = require('./dist/src/common/utils');

module.exports = handleError = async (context, props) => {
  const logger = new Logger(handleError.name);
  logger.error(props.error);

  // await context.sendText(
  //   'There are some unexpected errors happened. Please try again later, sorry for the inconvenience.'
  // );

  if (isEnv('production')) {}
  if (isEnv('development')) {
    await context.sendText(props.error.stack);
  }
};
