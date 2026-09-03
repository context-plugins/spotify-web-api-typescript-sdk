import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme, oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly oauth20: AuthScheme;
  readonly oauth20ClientCredentials: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    oauth20: oauth2RefreshableScheme(
      options.oauth20,
      options.oauth20Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/authorize"),
          tokenUrl: servers.default("/api/token"),
          rawClient,
          placement: "header",
        }),
    ),
    oauth20ClientCredentials: oauth2Scheme(
      options.oauth20ClientCredentials,
      options.oauth20ClientCredentialsStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.default("/api/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
