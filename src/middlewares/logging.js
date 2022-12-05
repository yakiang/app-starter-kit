const util = require('util');
const winston = require('winston');
require('winston-daily-rotate-file');

const fileTransport = new winston.transports.DailyRotateFile({
  filename: 'koa-app-%DATE%.log',
  level: 'info',
  maxSize: '20m',
  maxFiles: '30d',
  datePattern: 'YYYY-MM-DD',
  dirname: 'logs',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint(),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
});

const stdoutTransport = new winston.transports.Console({
  level: 'debug',
  format: winston.format.combine(
    winston.format.prettyPrint(),
    winston.format.colorize(),
    winston.format.printf((info) => `${info.level}: ${info.message}`),
  ),
});

// eslint-disable-next-line no-underscore-dangle
const _logger = winston.createLogger({
  transports: [stdoutTransport, fileTransport],
});

const LEVELS = ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'];
const logger = {};
for (const level of LEVELS) {
  logger[level] = (...args) => {
    const errs = args.filter((arg) => arg instanceof Error);
    const nonErrs = args.filter((arg) => !(arg instanceof Error));
    _logger[level](util.format(...nonErrs));
    errs.forEach((err) => _logger[level](err.stack));
  };
}

module.exports.logging = async (ctx, next) => {
  ctx.logger = logger;
  next();
};

module.exports.logger = logger;
