import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
import { Albums } from "./resources/albums.js";
import { Artists } from "./resources/artists.js";
import { Audiobooks } from "./resources/audiobooks.js";
import { CategoriesApi } from "./resources/categories-api.js";
import { Chapters } from "./resources/chapters.js";
import { Episodes } from "./resources/episodes.js";
import { Genres } from "./resources/genres.js";
import { Library } from "./resources/library.js";
import { MarketsApi } from "./resources/markets-api.js";
import { Player } from "./resources/player.js";
import { Playlists } from "./resources/playlists.js";
import { Search } from "./resources/search.js";
import { Shows } from "./resources/shows.js";
import { Tracks } from "./resources/tracks.js";
import { Users } from "./resources/users.js";
import { buildServers, type Servers } from "./servers.js";

export class SpotifyWebApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #albums?: Albums;
  #tracks?: Tracks;
  #library?: Library;
  #artists?: Artists;
  #audiobooks?: Audiobooks;
  #chapters?: Chapters;
  #categoriesApi?: CategoriesApi;
  #episodes?: Episodes;
  #genres?: Genres;
  #marketsApi?: MarketsApi;
  #player?: Player;
  #playlists?: Playlists;
  #users?: Users;
  #search?: Search;
  #shows?: Shows;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get albums(): Albums {
    return (this.#albums ??= new Albums(this.#rawClient, this.#servers, this.#auth));
  }

  get tracks(): Tracks {
    return (this.#tracks ??= new Tracks(this.#rawClient, this.#servers, this.#auth));
  }

  get library(): Library {
    return (this.#library ??= new Library(this.#rawClient, this.#servers, this.#auth));
  }

  get artists(): Artists {
    return (this.#artists ??= new Artists(this.#rawClient, this.#servers, this.#auth));
  }

  get audiobooks(): Audiobooks {
    return (this.#audiobooks ??= new Audiobooks(this.#rawClient, this.#servers, this.#auth));
  }

  get chapters(): Chapters {
    return (this.#chapters ??= new Chapters(this.#rawClient, this.#servers, this.#auth));
  }

  get categoriesApi(): CategoriesApi {
    return (this.#categoriesApi ??= new CategoriesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get episodes(): Episodes {
    return (this.#episodes ??= new Episodes(this.#rawClient, this.#servers, this.#auth));
  }

  get genres(): Genres {
    return (this.#genres ??= new Genres(this.#rawClient, this.#servers, this.#auth));
  }

  get marketsApi(): MarketsApi {
    return (this.#marketsApi ??= new MarketsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get player(): Player {
    return (this.#player ??= new Player(this.#rawClient, this.#servers, this.#auth));
  }

  get playlists(): Playlists {
    return (this.#playlists ??= new Playlists(this.#rawClient, this.#servers, this.#auth));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get shows(): Shows {
    return (this.#shows ??= new Shows(this.#rawClient, this.#servers, this.#auth));
  }
}
