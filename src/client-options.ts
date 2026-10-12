import type { OAuth2AuthorizationCodeCredentials, OAuth2ClientCredentials } from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Spotify supports OAuth 2.0 for authenticating all API requests. */
  readonly oauth20?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly oauth20Strategy?: OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> | undefined;
  /**
   * Server-to-server OAuth 2.0 client credentials flow. Tokens obtained this way carry no user
   * context and no scopes, so they only work on endpoints that read public catalog data. Verified
   * against the live token endpoint.
   */
  readonly oauth20ClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly oauth20ClientCredentialsStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
