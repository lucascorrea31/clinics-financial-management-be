import pino from "pino";

const logger = pino({
	level: process.env.LOG_LEVEL || "info",
	transport: {
		target: process.env.NODE_ENV === "production" ? "stdout" : "pino-pretty",
		options: {
			colorize: true,
			translateTime: true,
		},
	},
});

export default logger;
