import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  analyzerVersion?: string;
  platform?: string;
  detailedStatus?: string;
  statusCode?: number;
  timestamp?: number;
  analysisTime?: number;
  inputProcess?: string;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  analyzerVersion: s.optional(s.string()),
  platform: s.optional(s.string()),
  detailedStatus: s.optional(s.string()),
  statusCode: s.optional(s.number()),
  timestamp: s.optional(s.number()),
  analysisTime: s.optional(s.number()),
  inputProcess: s.optional(s.string()),
  _keysMap: {
    analyzerVersion: "analyzer_version",
    detailedStatus: "detailed_status",
    statusCode: "status_code",
    analysisTime: "analysis_time",
    inputProcess: "input_process",
  },
});
