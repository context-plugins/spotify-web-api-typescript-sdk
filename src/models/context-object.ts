import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";

export type ContextObject = {
  type?: string;
  href?: string;
  externalUrls?: ExternalUrlObject;
  uri?: string;
};

export const contextObjectSchema: Schema<ContextObject> = s.object<ContextObject>({
  type: s.optional(s.string()),
  href: s.optional(s.string()),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
