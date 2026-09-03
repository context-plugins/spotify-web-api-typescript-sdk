import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";

export type LinkedTrackObject = {
  externalUrls?: ExternalUrlObject;
  href?: string;
  id?: string;
  type?: string;
  uri?: string;
};

export const linkedTrackObjectSchema: Schema<LinkedTrackObject> = s.object<LinkedTrackObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
