
# Getting Started with Spotify Web API

## Introduction

You can use Spotify's Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.

In order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth 2.0</a>.

The base URI for all Web API requests is `https://api.spotify.com/v1`.

Need help? See our <a href="https://developer.spotify.com/documentation/web-api/">Web API</a> for more information, or visit the <a href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">Spotify for Developers community forum</a> to ask questions and connect with other developers.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version >=4.1**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=SpotifyWebApi&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=SpotifyWebApi&workspaceName=spotify-web-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Spotify Web APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add SpotifyWebApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=SpotifyWebApi&workspaceName=spotify-web-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install SpotifyWebApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | [`Environment`](README.md#environments) | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `30000` |
| httpClientOptions | [`Partial<HttpClientOptions>`](doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](doc/partial-logging-options.md) | Logging Configuration to enable logging |
| authorizationCodeAuthCredentials | [`AuthorizationCodeAuthCredentials`](doc/auth/oauth-2-authorization-code-grant.md) | The credential object for authorizationCodeAuth |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import {
  Client,
  Environment,
  LogLevel,
  OauthScope,
} from 'spotify-web-apilib';

const client = new Client({
  authorizationCodeAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthRedirectUri: 'OAuthRedirectUri',
    oauthScopes: [
      OauthScope.AppRemoteControl,
      OauthScope.PlaylistReadPrivate
    ]
  },
  timeout: 30000,
  environment: Environment.Production,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'spotify-web-apilib';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'spotify-web-apilib';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](doc/environment-based-client-initialization.md) section for details.

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | **Default** |
| Environment2 | - |

## Authorization

This API uses the following authentication schemes.

* [`oauth_2_0 (OAuth 2 Authorization Code Grant)`](doc/auth/oauth-2-authorization-code-grant.md)

## List of APIs

* [Albums](doc/controllers/albums.md)
* [Artists](doc/controllers/artists.md)
* [Audiobooks](doc/controllers/audiobooks.md)
* [Categories](doc/controllers/categories.md)
* [Chapters](doc/controllers/chapters.md)
* [Episodes](doc/controllers/episodes.md)
* [Genres](doc/controllers/genres.md)
* [Markets](doc/controllers/markets.md)
* [Player](doc/controllers/player.md)
* [Playlists](doc/controllers/playlists.md)
* [Search](doc/controllers/search.md)
* [Shows](doc/controllers/shows.md)
* [Tracks](doc/controllers/tracks.md)
* [Users](doc/controllers/users.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](doc/http-client-options.md)
* [RetryConfiguration](doc/retry-configuration.md)
* [ProxySettings](doc/proxy-settings.md)
* [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](doc/environment-based-client-initialization.md)
* [PartialLoggingOptions](doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](doc/partial-response-logging-options.md)
* [LoggerInterface](doc/logger-interface.md)

### HTTP

* [HttpRequest](doc/http-request.md)

### Utilities

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

