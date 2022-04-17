const winston = require("winston");

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    colorize: true,
    maxsize:5242880, //5MBs
    transports: [
        new winston.transports.File({
            filename: 'Logs/logs.log', level: 'info'
        })
    ]
});

module.exports = logger