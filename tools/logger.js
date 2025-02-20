const { createLogger, format, transports } = require('winston')

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.prettyPrint()
  ),
  defaultMeta: { service: 'Machettes' },
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    }),
    new transports.File({ filename: '../logs/logs.txt' })
  ]
})

module.exports = logger