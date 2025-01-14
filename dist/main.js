"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/../.env" });
const server_1 = __importDefault(require("./infrastructure/http/server"));
const routes_1 = __importDefault(require("./interfaces/routes"));
const logger_1 = __importDefault(require("./infrastructure/logging/logger"));
const morgan_1 = __importDefault(require("morgan"));
const data_source_1 = require("./infrastructure/database/data-source");
const PORT = process.env.PORT || 3000;
(async () => {
    try {
        logger_1.default.info("Starting server...");
        await new data_source_1.AppDataSource().setup();
        logger_1.default.info("Database connected successfully.");
        server_1.default.use((0, morgan_1.default)("combined", {
            stream: {
                write: (message) => logger_1.default.info(message.trim()),
            },
        }));
        // Use routes
        server_1.default.use("/api", routes_1.default);
        logger_1.default.info("API routes were added successfully.");
        // Start server
        server_1.default.listen(PORT, () => {
            logger_1.default.info(`Server running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        logger_1.default.error("Error during Data Source initialization:", error);
        process.exit(1);
    }
})();
