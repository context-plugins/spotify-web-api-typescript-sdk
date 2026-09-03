import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { typeSchema, type Type } from "./type.js";

export type SimplifiedArtistObject = {
  externalUrls?: ExternalUrlObject;
  href?: string;
  id?: string;
  name?: string;
  type?: Type;
  uri?: string;
};

export const simplifiedArtistObjectSchema: Schema<SimplifiedArtistObject> = s.object<SimplifiedArtistObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
