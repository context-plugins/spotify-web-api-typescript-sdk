# Reference

> Source: [SpotifyWebApiClient](src/client.ts)

## Albums

> Source: [Albums](src/resources/albums.ts)

<details>
<summary><code>checkUsersSavedAlbums(request: Albums.CheckUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Albums.CheckUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.checkUsersSavedAlbums({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Albums.CheckUsersSavedAlbumsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Albums.CheckUsersSavedAlbumsError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAlbum(request: Albums.GetAnAlbumRequest, options?: RequestOptions): ApiPromise&lt;AlbumObject, Albums.GetAnAlbumError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single album.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getAnAlbum({ id });
  // TODO: Handle 'response' of type AlbumObject
} catch (err) {
  if (err instanceof Albums.GetAnAlbumError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlbumObject](src/models/album-object.ts)</code>

**OnError**: <code>[Albums.GetAnAlbumError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAlbumsTracks(request: Albums.GetAnAlbumsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedTrackObject, Albums.GetAnAlbumsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getAnAlbumsTracks({ id });
  // TODO: Handle 'response' of type PagingSimplifiedTrackObject
} catch (err) {
  if (err instanceof Albums.GetAnAlbumsTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedTrackObject](src/models/paging-simplified-track-object.ts)</code>

**OnError**: <code>[Albums.GetAnAlbumsTracksError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsAlbums(request: Albums.GetAnArtistsAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistDiscographyAlbumObject, Albums.GetAnArtistsAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's albums.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getAnArtistsAlbums({ id });
  // TODO: Handle 'response' of type PagingArtistDiscographyAlbumObject
} catch (err) {
  if (err instanceof Albums.GetAnArtistsAlbumsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>includeGroups?</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistDiscographyAlbumObject](src/models/paging-artist-discography-album-object.ts)</code>

**OnError**: <code>[Albums.GetAnArtistsAlbumsError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleAlbums(request: Albums.GetMultipleAlbumsRequest, options?: RequestOptions): ApiPromise&lt;ManyAlbums, Albums.GetMultipleAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for multiple albums identified by their Spotify IDs.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getMultipleAlbums({ ids });
  // TODO: Handle 'response' of type ManyAlbums
} catch (err) {
  if (err instanceof Albums.GetMultipleAlbumsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyAlbums](src/models/many-albums.ts)</code>

**OnError**: <code>[Albums.GetMultipleAlbumsError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNewReleases(request: Albums.GetNewReleasesRequest, options?: RequestOptions): ApiPromise&lt;PagedAlbums, Albums.GetNewReleasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getNewReleases();
  // TODO: Handle 'response' of type PagedAlbums
} catch (err) {
  if (err instanceof Albums.GetNewReleasesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagedAlbums](src/models/paged-albums.ts)</code>

**OnError**: <code>[Albums.GetNewReleasesError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAlbums(request: Albums.GetUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAlbumObject, Albums.GetUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the albums saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getUsersSavedAlbums();
  // TODO: Handle 'response' of type PagingSavedAlbumObject
} catch (err) {
  if (err instanceof Albums.GetUsersSavedAlbumsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAlbumObject](src/models/paging-saved-album-object.ts)</code>

**OnError**: <code>[Albums.GetUsersSavedAlbumsError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAlbumsUser(request: Albums.RemoveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Albums.RemoveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more albums from the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.albums.removeAlbumsUser({ ids });
} catch (err) {
  if (err instanceof Albums.RemoveAlbumsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveAlbumsRequest](src/models/remove-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Albums.RemoveAlbumsUserError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAlbumsUser(request: Albums.SaveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Albums.SaveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more albums to the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.albums.saveAlbumsUser({ ids });
} catch (err) {
  if (err instanceof Albums.SaveAlbumsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveAlbumsRequest](src/models/save-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Albums.SaveAlbumsUserError](src/resources/albums.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tracks

> Source: [Tracks](src/resources/tracks.ts)

<details>
<summary><code>addTracksToPlaylist(request: Tracks.AddTracksToPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Tracks.AddTracksToPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more items to a user's playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.addTracksToPlaylist({ playlistId });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  if (err instanceof Tracks.AddTracksToPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>position?</code> | <code>number</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest](src/models/playlists-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>

**OnError**: <code>[Tracks.AddTracksToPlaylistError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedTracks(request: Tracks.CheckUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Tracks.CheckUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.checkUsersSavedTracks({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Tracks.CheckUsersSavedTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Tracks.CheckUsersSavedTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAlbumsTracks(request: Tracks.GetAnAlbumsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedTrackObject, Tracks.GetAnAlbumsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAnAlbumsTracks({ id });
  // TODO: Handle 'response' of type PagingSimplifiedTrackObject
} catch (err) {
  if (err instanceof Tracks.GetAnAlbumsTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedTrackObject](src/models/paging-simplified-track-object.ts)</code>

**OnError**: <code>[Tracks.GetAnAlbumsTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsTopTracks(request: Tracks.GetAnArtistsTopTracksRequest, options?: RequestOptions): ApiPromise&lt;ManyTracks, Tracks.GetAnArtistsTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's top tracks by country.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAnArtistsTopTracks({ id });
  // TODO: Handle 'response' of type ManyTracks
} catch (err) {
  if (err instanceof Tracks.GetAnArtistsTopTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyTracks](src/models/many-tracks.ts)</code>

**OnError**: <code>[Tracks.GetAnArtistsTopTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudioAnalysis(request: Tracks.GetAudioAnalysisRequest, options?: RequestOptions): ApiPromise&lt;AudioAnalysisObject, Tracks.GetAudioAnalysisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAudioAnalysis({ id });
  // TODO: Handle 'response' of type AudioAnalysisObject
} catch (err) {
  if (err instanceof Tracks.GetAudioAnalysisError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudioAnalysisObject](src/models/audio-analysis-object.ts)</code>

**OnError**: <code>[Tracks.GetAudioAnalysisError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudioFeatures(request: Tracks.GetAudioFeaturesRequest, options?: RequestOptions): ApiPromise&lt;AudioFeaturesObject, Tracks.GetAudioFeaturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audio feature information for a single track identified by its unique
Spotify ID.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAudioFeatures({ id });
  // TODO: Handle 'response' of type AudioFeaturesObject
} catch (err) {
  if (err instanceof Tracks.GetAudioFeaturesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudioFeaturesObject](src/models/audio-features-object.ts)</code>

**OnError**: <code>[Tracks.GetAudioFeaturesError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylistsTracks(request: Tracks.GetPlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistTrackObject, Tracks.GetPlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of the items of a playlist owned by a Spotify user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getPlaylistsTracks({ playlistId });
  // TODO: Handle 'response' of type PagingPlaylistTrackObject
} catch (err) {
  if (err instanceof Tracks.GetPlaylistsTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistTrackObject](src/models/paging-playlist-track-object.ts)</code>

**OnError**: <code>[Tracks.GetPlaylistsTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecommendations(request: Tracks.GetRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;RecommendationsObject, Tracks.GetRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getRecommendations();
  // TODO: Handle 'response' of type RecommendationsObject
} catch (err) {
  if (err instanceof Tracks.GetRecommendationsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>seedArtists?</code> | <code>string</code> | - |
| <code>seedGenres?</code> | <code>string</code> | - |
| <code>seedTracks?</code> | <code>string</code> | - |
| <code>minAcousticness?</code> | <code>number</code> | - |
| <code>maxAcousticness?</code> | <code>number</code> | - |
| <code>targetAcousticness?</code> | <code>number</code> | - |
| <code>minDanceability?</code> | <code>number</code> | - |
| <code>maxDanceability?</code> | <code>number</code> | - |
| <code>targetDanceability?</code> | <code>number</code> | - |
| <code>minDurationMs?</code> | <code>number</code> | - |
| <code>maxDurationMs?</code> | <code>number</code> | - |
| <code>targetDurationMs?</code> | <code>number</code> | - |
| <code>minEnergy?</code> | <code>number</code> | - |
| <code>maxEnergy?</code> | <code>number</code> | - |
| <code>targetEnergy?</code> | <code>number</code> | - |
| <code>minInstrumentalness?</code> | <code>number</code> | - |
| <code>maxInstrumentalness?</code> | <code>number</code> | - |
| <code>targetInstrumentalness?</code> | <code>number</code> | - |
| <code>minKey?</code> | <code>number</code> | - |
| <code>maxKey?</code> | <code>number</code> | - |
| <code>targetKey?</code> | <code>number</code> | - |
| <code>minLiveness?</code> | <code>number</code> | - |
| <code>maxLiveness?</code> | <code>number</code> | - |
| <code>targetLiveness?</code> | <code>number</code> | - |
| <code>minLoudness?</code> | <code>number</code> | - |
| <code>maxLoudness?</code> | <code>number</code> | - |
| <code>targetLoudness?</code> | <code>number</code> | - |
| <code>minMode?</code> | <code>number</code> | - |
| <code>maxMode?</code> | <code>number</code> | - |
| <code>targetMode?</code> | <code>number</code> | - |
| <code>minPopularity?</code> | <code>number</code> | - |
| <code>maxPopularity?</code> | <code>number</code> | - |
| <code>targetPopularity?</code> | <code>number</code> | - |
| <code>minSpeechiness?</code> | <code>number</code> | - |
| <code>maxSpeechiness?</code> | <code>number</code> | - |
| <code>targetSpeechiness?</code> | <code>number</code> | - |
| <code>minTempo?</code> | <code>number</code> | - |
| <code>maxTempo?</code> | <code>number</code> | - |
| <code>targetTempo?</code> | <code>number</code> | - |
| <code>minTimeSignature?</code> | <code>number</code> | - |
| <code>maxTimeSignature?</code> | <code>number</code> | - |
| <code>targetTimeSignature?</code> | <code>number</code> | - |
| <code>minValence?</code> | <code>number</code> | - |
| <code>maxValence?</code> | <code>number</code> | - |
| <code>targetValence?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecommendationsObject](src/models/recommendations-object.ts)</code>

**OnError**: <code>[Tracks.GetRecommendationsError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSeveralAudioFeatures(request: Tracks.GetSeveralAudioFeaturesRequest, options?: RequestOptions): ApiPromise&lt;ManyAudioFeatures, Tracks.GetSeveralAudioFeaturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audio features for multiple tracks based on their Spotify IDs.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getSeveralAudioFeatures({ ids });
  // TODO: Handle 'response' of type ManyAudioFeatures
} catch (err) {
  if (err instanceof Tracks.GetSeveralAudioFeaturesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyAudioFeatures](src/models/many-audio-features.ts)</code>

**OnError**: <code>[Tracks.GetSeveralAudioFeaturesError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSeveralTracks(request: Tracks.GetSeveralTracksRequest, options?: RequestOptions): ApiPromise&lt;ManyTracks, Tracks.GetSeveralTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for multiple tracks based on their Spotify IDs.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getSeveralTracks({ ids });
  // TODO: Handle 'response' of type ManyTracks
} catch (err) {
  if (err instanceof Tracks.GetSeveralTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyTracks](src/models/many-tracks.ts)</code>

**OnError**: <code>[Tracks.GetSeveralTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTrack(request: Tracks.GetTrackRequest, options?: RequestOptions): ApiPromise&lt;TrackObject, Tracks.GetTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single track identified by its
unique Spotify ID.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getTrack({ id });
  // TODO: Handle 'response' of type TrackObject
} catch (err) {
  if (err instanceof Tracks.GetTrackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrackObject](src/models/track-object.ts)</code>

**OnError**: <code>[Tracks.GetTrackError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedTracks(request: Tracks.GetUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedTrackObject, Tracks.GetUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the songs saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getUsersSavedTracks();
  // TODO: Handle 'response' of type PagingSavedTrackObject
} catch (err) {
  if (err instanceof Tracks.GetUsersSavedTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedTrackObject](src/models/paging-saved-track-object.ts)</code>

**OnError**: <code>[Tracks.GetUsersSavedTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopTracks(request: Tracks.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingTrackObject, Tracks.GetUsersTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getUsersTopTracks();
  // TODO: Handle 'response' of type PagingTrackObject
} catch (err) {
  if (err instanceof Tracks.GetUsersTopTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>

**OnError**: <code>[Tracks.GetUsersTopTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksPlaylist(request: Tracks.RemoveTracksPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Tracks.RemoveTracksPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more items from a user's playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.removeTracksPlaylist({ playlistId });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  if (err instanceof Tracks.RemoveTracksPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest2](src/models/playlists-tracks-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>

**OnError**: <code>[Tracks.RemoveTracksPlaylistError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksUser(request: Tracks.RemoveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tracks.RemoveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tracks from the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.tracks.removeTracksUser({ ids });
} catch (err) {
  if (err instanceof Tracks.RemoveTracksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveTracksRequest](src/models/remove-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Tracks.RemoveTracksUserError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reorderOrReplacePlaylistsTracks(request: Tracks.ReorderOrReplacePlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Tracks.ReorderOrReplacePlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.reorderOrReplacePlaylistsTracks({ playlistId });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  if (err instanceof Tracks.ReorderOrReplacePlaylistsTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest1](src/models/playlists-tracks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>

**OnError**: <code>[Tracks.ReorderOrReplacePlaylistsTracksError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveTracksUser(request: Tracks.SaveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tracks.SaveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more tracks to the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.tracks.saveTracksUser({ ids });
} catch (err) {
  if (err instanceof Tracks.SaveTracksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveTracksRequest](src/models/save-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Tracks.SaveTracksUserError](src/resources/tracks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Library

> Source: [Library](src/resources/library.ts)

<details>
<summary><code>changePlaylistDetails(request: Library.ChangePlaylistDetailsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.ChangePlaylistDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.changePlaylistDetails({ playlistId });
} catch (err) {
  if (err instanceof Library.ChangePlaylistDetailsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsRequest](src/models/playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.ChangePlaylistDetailsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkCurrentUserFollows(request: Library.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckCurrentUserFollowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkCurrentUserFollows({ type, ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Library.CheckCurrentUserFollowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Library.CheckCurrentUserFollowsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedAlbums(request: Library.CheckUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedAlbums({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Library.CheckUsersSavedAlbumsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Library.CheckUsersSavedAlbumsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedAudiobooks(request: Library.CheckUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more audiobooks are already saved in the current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedAudiobooks({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Library.CheckUsersSavedAudiobooksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Library.CheckUsersSavedAudiobooksError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedEpisodes(request: Library.CheckUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedEpisodes({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Library.CheckUsersSavedEpisodesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Library.CheckUsersSavedEpisodesError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedShows(request: Library.CheckUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more shows is already saved in the current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedShows({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Library.CheckUsersSavedShowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Library.CheckUsersSavedShowsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedTracks(request: Library.CheckUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedTracks({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Library.CheckUsersSavedTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Library.CheckUsersSavedTracksError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPlaylist(request: Library.CreatePlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistObject, Library.CreatePlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.createPlaylist({ userId });
  // TODO: Handle 'response' of type PlaylistObject
} catch (err) {
  if (err instanceof Library.CreatePlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UsersPlaylistsRequest](src/models/users-playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistObject](src/models/playlist-object.ts)</code>

**OnError**: <code>[Library.CreatePlaylistError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followArtistsUsers(request: Library.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.FollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.followArtistsUsers({ type, ids });
} catch (err) {
  if (err instanceof Library.FollowArtistsUsersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType2](src/models/item-type2.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[FollowArtistsOrUsersRequest](src/models/follow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.FollowArtistsUsersError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAListOfCurrentUsersPlaylists(request: Library.GetAListOfCurrentUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Library.GetAListOfCurrentUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by the current Spotify
user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getAListOfCurrentUsersPlaylists();
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  if (err instanceof Library.GetAListOfCurrentUsersPlaylistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>

**OnError**: <code>[Library.GetAListOfCurrentUsersPlaylistsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowed(request: Library.GetFollowedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagedArtists, Library.GetFollowedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getFollowed({ type });
  // TODO: Handle 'response' of type CursorPagedArtists
} catch (err) {
  if (err instanceof Library.GetFollowedError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType1](src/models/item-type1.ts)</code> | - |
| <code>after?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>

**OnError**: <code>[Library.GetFollowedError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAlbums(request: Library.GetUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAlbumObject, Library.GetUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the albums saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedAlbums();
  // TODO: Handle 'response' of type PagingSavedAlbumObject
} catch (err) {
  if (err instanceof Library.GetUsersSavedAlbumsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAlbumObject](src/models/paging-saved-album-object.ts)</code>

**OnError**: <code>[Library.GetUsersSavedAlbumsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAudiobooks(request: Library.GetUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAudiobookObject, Library.GetUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedAudiobooks();
  // TODO: Handle 'response' of type PagingSavedAudiobookObject
} catch (err) {
  if (err instanceof Library.GetUsersSavedAudiobooksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAudiobookObject](src/models/paging-saved-audiobook-object.ts)</code>

**OnError**: <code>[Library.GetUsersSavedAudiobooksError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedEpisodes(request: Library.GetUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedEpisodeObject, Library.GetUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedEpisodes();
  // TODO: Handle 'response' of type PagingSavedEpisodeObject
} catch (err) {
  if (err instanceof Library.GetUsersSavedEpisodesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedEpisodeObject](src/models/paging-saved-episode-object.ts)</code>

**OnError**: <code>[Library.GetUsersSavedEpisodesError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedShows(request: Library.GetUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedShowObject, Library.GetUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedShows();
  // TODO: Handle 'response' of type PagingSavedShowObject
} catch (err) {
  if (err instanceof Library.GetUsersSavedShowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedShowObject](src/models/paging-saved-show-object.ts)</code>

**OnError**: <code>[Library.GetUsersSavedShowsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedTracks(request: Library.GetUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedTrackObject, Library.GetUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the songs saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedTracks();
  // TODO: Handle 'response' of type PagingSavedTrackObject
} catch (err) {
  if (err instanceof Library.GetUsersSavedTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedTrackObject](src/models/paging-saved-track-object.ts)</code>

**OnError**: <code>[Library.GetUsersSavedTracksError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopArtists(request: Library.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistObject, Library.GetUsersTopArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersTopArtists();
  // TODO: Handle 'response' of type PagingArtistObject
} catch (err) {
  if (err instanceof Library.GetUsersTopArtistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>

**OnError**: <code>[Library.GetUsersTopArtistsError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopTracks(request: Library.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingTrackObject, Library.GetUsersTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersTopTracks();
  // TODO: Handle 'response' of type PagingTrackObject
} catch (err) {
  if (err instanceof Library.GetUsersTopTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>

**OnError**: <code>[Library.GetUsersTopTracksError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAlbumsUser(request: Library.RemoveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more albums from the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.removeAlbumsUser({ ids });
} catch (err) {
  if (err instanceof Library.RemoveAlbumsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveAlbumsRequest](src/models/remove-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.RemoveAlbumsUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAudiobooksUser(request: Library.RemoveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more audiobooks from the Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.removeAudiobooksUser({ ids });
} catch (err) {
  if (err instanceof Library.RemoveAudiobooksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.RemoveAudiobooksUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeEpisodesUser(request: Library.RemoveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.removeEpisodesUser({ ids });
} catch (err) {
  if (err instanceof Library.RemoveEpisodesUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveEpisodesRequest](src/models/remove-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.RemoveEpisodesUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeShowsUser(request: Library.RemoveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one or more shows from current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.removeShowsUser({ ids });
} catch (err) {
  if (err instanceof Library.RemoveShowsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveShowsRequest](src/models/remove-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.RemoveShowsUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksUser(request: Library.RemoveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tracks from the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.removeTracksUser({ ids });
} catch (err) {
  if (err instanceof Library.RemoveTracksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveTracksRequest](src/models/remove-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.RemoveTracksUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAlbumsUser(request: Library.SaveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more albums to the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.saveAlbumsUser({ ids });
} catch (err) {
  if (err instanceof Library.SaveAlbumsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveAlbumsRequest](src/models/save-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.SaveAlbumsUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAudiobooksUser(request: Library.SaveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more audiobooks to the current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.saveAudiobooksUser({ ids });
} catch (err) {
  if (err instanceof Library.SaveAudiobooksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.SaveAudiobooksUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveEpisodesUser(request: Library.SaveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.saveEpisodesUser({ ids });
} catch (err) {
  if (err instanceof Library.SaveEpisodesUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveEpisodesRequest](src/models/save-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.SaveEpisodesUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveShowsUser(request: Library.SaveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more shows to current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.saveShowsUser({ ids });
} catch (err) {
  if (err instanceof Library.SaveShowsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveShowsRequest](src/models/save-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.SaveShowsUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveTracksUser(request: Library.SaveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more tracks to the current user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.saveTracksUser({ ids });
} catch (err) {
  if (err instanceof Library.SaveTracksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveTracksRequest](src/models/save-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.SaveTracksUserError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowArtistsUsers(request: Library.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.UnfollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.library.unfollowArtistsUsers({ type, ids });
} catch (err) {
  if (err instanceof Library.UnfollowArtistsUsersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UnfollowArtistsOrUsersRequest](src/models/unfollow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Library.UnfollowArtistsUsersError](src/resources/library.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Artists

> Source: [Artists](src/resources/artists.ts)

<details>
<summary><code>checkCurrentUserFollows(request: Artists.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Artists.CheckCurrentUserFollowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.checkCurrentUserFollows({ type, ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Artists.CheckCurrentUserFollowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Artists.CheckCurrentUserFollowsError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followArtistsUsers(request: Artists.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Artists.FollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.artists.followArtistsUsers({ type, ids });
} catch (err) {
  if (err instanceof Artists.FollowArtistsUsersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType2](src/models/item-type2.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[FollowArtistsOrUsersRequest](src/models/follow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Artists.FollowArtistsUsersError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtist(request: Artists.GetAnArtistRequest, options?: RequestOptions): ApiPromise&lt;ArtistObject, Artists.GetAnArtistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single artist identified by their unique Spotify ID.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtist({ id });
  // TODO: Handle 'response' of type ArtistObject
} catch (err) {
  if (err instanceof Artists.GetAnArtistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArtistObject](src/models/artist-object.ts)</code>

**OnError**: <code>[Artists.GetAnArtistError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsAlbums(request: Artists.GetAnArtistsAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistDiscographyAlbumObject, Artists.GetAnArtistsAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's albums.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtistsAlbums({ id });
  // TODO: Handle 'response' of type PagingArtistDiscographyAlbumObject
} catch (err) {
  if (err instanceof Artists.GetAnArtistsAlbumsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>includeGroups?</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistDiscographyAlbumObject](src/models/paging-artist-discography-album-object.ts)</code>

**OnError**: <code>[Artists.GetAnArtistsAlbumsError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsRelatedArtists(request: Artists.GetAnArtistsRelatedArtistsRequest, options?: RequestOptions): ApiPromise&lt;ManyArtists, Artists.GetAnArtistsRelatedArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtistsRelatedArtists({ id });
  // TODO: Handle 'response' of type ManyArtists
} catch (err) {
  if (err instanceof Artists.GetAnArtistsRelatedArtistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyArtists](src/models/many-artists.ts)</code>

**OnError**: <code>[Artists.GetAnArtistsRelatedArtistsError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsTopTracks(request: Artists.GetAnArtistsTopTracksRequest, options?: RequestOptions): ApiPromise&lt;ManyTracks, Artists.GetAnArtistsTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's top tracks by country.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtistsTopTracks({ id });
  // TODO: Handle 'response' of type ManyTracks
} catch (err) {
  if (err instanceof Artists.GetAnArtistsTopTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyTracks](src/models/many-tracks.ts)</code>

**OnError**: <code>[Artists.GetAnArtistsTopTracksError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowed(request: Artists.GetFollowedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagedArtists, Artists.GetFollowedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getFollowed({ type });
  // TODO: Handle 'response' of type CursorPagedArtists
} catch (err) {
  if (err instanceof Artists.GetFollowedError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType1](src/models/item-type1.ts)</code> | - |
| <code>after?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>

**OnError**: <code>[Artists.GetFollowedError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleArtists(request: Artists.GetMultipleArtistsRequest, options?: RequestOptions): ApiPromise&lt;ManyArtists, Artists.GetMultipleArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several artists based on their Spotify IDs.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getMultipleArtists({ ids });
  // TODO: Handle 'response' of type ManyArtists
} catch (err) {
  if (err instanceof Artists.GetMultipleArtistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyArtists](src/models/many-artists.ts)</code>

**OnError**: <code>[Artists.GetMultipleArtistsError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopArtists(request: Artists.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistObject, Artists.GetUsersTopArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getUsersTopArtists();
  // TODO: Handle 'response' of type PagingArtistObject
} catch (err) {
  if (err instanceof Artists.GetUsersTopArtistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>

**OnError**: <code>[Artists.GetUsersTopArtistsError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowArtistsUsers(request: Artists.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Artists.UnfollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.artists.unfollowArtistsUsers({ type, ids });
} catch (err) {
  if (err instanceof Artists.UnfollowArtistsUsersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UnfollowArtistsOrUsersRequest](src/models/unfollow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Artists.UnfollowArtistsUsersError](src/resources/artists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Audiobooks

> Source: [Audiobooks](src/resources/audiobooks.ts)

<details>
<summary><code>checkUsersSavedAudiobooks(request: Audiobooks.CheckUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Audiobooks.CheckUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more audiobooks are already saved in the current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.checkUsersSavedAudiobooks({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Audiobooks.CheckUsersSavedAudiobooksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Audiobooks.CheckUsersSavedAudiobooksError](src/resources/audiobooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAudiobook(request: Audiobooks.GetAnAudiobookRequest, options?: RequestOptions): ApiPromise&lt;AudiobookObject, Audiobooks.GetAnAudiobookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getAnAudiobook({ id });
  // TODO: Handle 'response' of type AudiobookObject
} catch (err) {
  if (err instanceof Audiobooks.GetAnAudiobookError && err.payload.kind === "badRequest1") {
    // TODO: Handle 'err.payload.body' of type BadRequest1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudiobookObject](src/models/audiobook-object.ts)</code>

**OnError**: <code>[Audiobooks.GetAnAudiobookError](src/resources/audiobooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudiobookChapters(request: Audiobooks.GetAudiobookChaptersRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedChapterObject, Audiobooks.GetAudiobookChaptersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getAudiobookChapters({ id });
  // TODO: Handle 'response' of type PagingSimplifiedChapterObject
} catch (err) {
  if (err instanceof Audiobooks.GetAudiobookChaptersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedChapterObject](src/models/paging-simplified-chapter-object.ts)</code>

**OnError**: <code>[Audiobooks.GetAudiobookChaptersError](src/resources/audiobooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleAudiobooks(request: Audiobooks.GetMultipleAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;ManyAudiobooks, Audiobooks.GetMultipleAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getMultipleAudiobooks({ ids });
  // TODO: Handle 'response' of type ManyAudiobooks
} catch (err) {
  if (err instanceof Audiobooks.GetMultipleAudiobooksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyAudiobooks](src/models/many-audiobooks.ts)</code>

**OnError**: <code>[Audiobooks.GetMultipleAudiobooksError](src/resources/audiobooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAudiobooks(request: Audiobooks.GetUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAudiobookObject, Audiobooks.GetUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getUsersSavedAudiobooks();
  // TODO: Handle 'response' of type PagingSavedAudiobookObject
} catch (err) {
  if (err instanceof Audiobooks.GetUsersSavedAudiobooksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAudiobookObject](src/models/paging-saved-audiobook-object.ts)</code>

**OnError**: <code>[Audiobooks.GetUsersSavedAudiobooksError](src/resources/audiobooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAudiobooksUser(request: Audiobooks.RemoveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Audiobooks.RemoveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more audiobooks from the Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.audiobooks.removeAudiobooksUser({ ids });
} catch (err) {
  if (err instanceof Audiobooks.RemoveAudiobooksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Audiobooks.RemoveAudiobooksUserError](src/resources/audiobooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAudiobooksUser(request: Audiobooks.SaveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Audiobooks.SaveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more audiobooks to the current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.audiobooks.saveAudiobooksUser({ ids });
} catch (err) {
  if (err instanceof Audiobooks.SaveAudiobooksUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Audiobooks.SaveAudiobooksUserError](src/resources/audiobooks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Chapters

> Source: [Chapters](src/resources/chapters.ts)

<details>
<summary><code>getAChapter(request: Chapters.GetAChapterRequest, options?: RequestOptions): ApiPromise&lt;ChapterObject, Chapters.GetAChapterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chapters.getAChapter({ id });
  // TODO: Handle 'response' of type ChapterObject
} catch (err) {
  if (err instanceof Chapters.GetAChapterError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChapterObject](src/models/chapter-object.ts)</code>

**OnError**: <code>[Chapters.GetAChapterError](src/resources/chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudiobookChapters(request: Chapters.GetAudiobookChaptersRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedChapterObject, Chapters.GetAudiobookChaptersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chapters.getAudiobookChapters({ id });
  // TODO: Handle 'response' of type PagingSimplifiedChapterObject
} catch (err) {
  if (err instanceof Chapters.GetAudiobookChaptersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedChapterObject](src/models/paging-simplified-chapter-object.ts)</code>

**OnError**: <code>[Chapters.GetAudiobookChaptersError](src/resources/chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSeveralChapters(request: Chapters.GetSeveralChaptersRequest, options?: RequestOptions): ApiPromise&lt;ManyChapters, Chapters.GetSeveralChaptersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chapters.getSeveralChapters({ ids });
  // TODO: Handle 'response' of type ManyChapters
} catch (err) {
  if (err instanceof Chapters.GetSeveralChaptersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyChapters](src/models/many-chapters.ts)</code>

**OnError**: <code>[Chapters.GetSeveralChaptersError](src/resources/chapters.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesApi

> Source: [CategoriesApi](src/resources/categories-api.ts)

<details>
<summary><code>getACategoriesPlaylists(request: CategoriesApi.GetACategoriesPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingFeaturedPlaylistObject, CategoriesApi.GetACategoriesPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify playlists tagged with a particular category.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesApi.getACategoriesPlaylists({ categoryId });
  // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
} catch (err) {
  if (err instanceof CategoriesApi.GetACategoriesPlaylistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>

**OnError**: <code>[CategoriesApi.GetACategoriesPlaylistsError](src/resources/categories-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getACategory(request: CategoriesApi.GetACategoryRequest, options?: RequestOptions): ApiPromise&lt;CategoryObject, CategoriesApi.GetACategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesApi.getACategory({ categoryId });
  // TODO: Handle 'response' of type CategoryObject
} catch (err) {
  if (err instanceof CategoriesApi.GetACategoryError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoryObject](src/models/category-object.ts)</code>

**OnError**: <code>[CategoriesApi.GetACategoryError](src/resources/categories-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategories(request: CategoriesApi.GetCategoriesRequest, options?: RequestOptions): ApiPromise&lt;PagedCategories, CategoriesApi.GetCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesApi.getCategories();
  // TODO: Handle 'response' of type PagedCategories
} catch (err) {
  if (err instanceof CategoriesApi.GetCategoriesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locale?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagedCategories](src/models/paged-categories.ts)</code>

**OnError**: <code>[CategoriesApi.GetCategoriesError](src/resources/categories-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Episodes

> Source: [Episodes](src/resources/episodes.ts)

<details>
<summary><code>checkUsersSavedEpisodes(request: Episodes.CheckUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Episodes.CheckUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.checkUsersSavedEpisodes({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Episodes.CheckUsersSavedEpisodesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Episodes.CheckUsersSavedEpisodesError](src/resources/episodes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAShowsEpisodes(request: Episodes.GetAShowsEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedEpisodeObject, Episodes.GetAShowsEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getAShowsEpisodes({ id });
  // TODO: Handle 'response' of type PagingSimplifiedEpisodeObject
} catch (err) {
  if (err instanceof Episodes.GetAShowsEpisodesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedEpisodeObject](src/models/paging-simplified-episode-object.ts)</code>

**OnError**: <code>[Episodes.GetAShowsEpisodesError](src/resources/episodes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnEpisode(request: Episodes.GetAnEpisodeRequest, options?: RequestOptions): ApiPromise&lt;EpisodeObject, Episodes.GetAnEpisodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single episode identified by its
unique Spotify ID.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getAnEpisode({ id });
  // TODO: Handle 'response' of type EpisodeObject
} catch (err) {
  if (err instanceof Episodes.GetAnEpisodeError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeObject](src/models/episode-object.ts)</code>

**OnError**: <code>[Episodes.GetAnEpisodeError](src/resources/episodes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleEpisodes(request: Episodes.GetMultipleEpisodesRequest, options?: RequestOptions): ApiPromise&lt;ManyEpisodes, Episodes.GetMultipleEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several episodes based on their Spotify IDs.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getMultipleEpisodes({ ids });
  // TODO: Handle 'response' of type ManyEpisodes
} catch (err) {
  if (err instanceof Episodes.GetMultipleEpisodesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyEpisodes](src/models/many-episodes.ts)</code>

**OnError**: <code>[Episodes.GetMultipleEpisodesError](src/resources/episodes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedEpisodes(request: Episodes.GetUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedEpisodeObject, Episodes.GetUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getUsersSavedEpisodes();
  // TODO: Handle 'response' of type PagingSavedEpisodeObject
} catch (err) {
  if (err instanceof Episodes.GetUsersSavedEpisodesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedEpisodeObject](src/models/paging-saved-episode-object.ts)</code>

**OnError**: <code>[Episodes.GetUsersSavedEpisodesError](src/resources/episodes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeEpisodesUser(request: Episodes.RemoveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Episodes.RemoveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.episodes.removeEpisodesUser({ ids });
} catch (err) {
  if (err instanceof Episodes.RemoveEpisodesUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveEpisodesRequest](src/models/remove-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Episodes.RemoveEpisodesUserError](src/resources/episodes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveEpisodesUser(request: Episodes.SaveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Episodes.SaveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.episodes.saveEpisodesUser({ ids });
} catch (err) {
  if (err instanceof Episodes.SaveEpisodesUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveEpisodesRequest](src/models/save-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Episodes.SaveEpisodesUserError](src/resources/episodes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Genres

> Source: [Genres](src/resources/genres.ts)

<details>
<summary><code>getRecommendationGenres(options?: RequestOptions): ApiPromise&lt;ManyGenres, Genres.GetRecommendationGenresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of available genres seed parameter values for [recommendations](https://developer.spotify.com/documentation/web-api/reference/get-recommendations).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.genres.getRecommendationGenres();
  // TODO: Handle 'response' of type ManyGenres
} catch (err) {
  if (err instanceof Genres.GetRecommendationGenresError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyGenres](src/models/many-genres.ts)</code>

**OnError**: <code>[Genres.GetRecommendationGenresError](src/resources/genres.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarketsApi

> Source: [MarketsApi](src/resources/markets-api.ts)

<details>
<summary><code>getAvailableMarkets(options?: RequestOptions): ApiPromise&lt;Markets, MarketsApi.GetAvailableMarketsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of markets where Spotify is available.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketsApi.getAvailableMarkets();
  // TODO: Handle 'response' of type Markets
} catch (err) {
  if (err instanceof MarketsApi.GetAvailableMarketsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Markets](src/models/markets.ts)</code>

**OnError**: <code>[MarketsApi.GetAvailableMarketsError](src/resources/markets-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Player

> Source: [Player](src/resources/player.ts)

<details>
<summary><code>addToQueue(request: Player.AddToQueueRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.AddToQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an item to the end of the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.addToQueue({ uri });
} catch (err) {
  if (err instanceof Player.AddToQueueError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uri</code> | <code>string</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.AddToQueueError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAUsersAvailableDevices(options?: RequestOptions): ApiPromise&lt;ManyDevices, Player.GetAUsersAvailableDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getAUsersAvailableDevices();
  // TODO: Handle 'response' of type ManyDevices
} catch (err) {
  if (err instanceof Player.GetAUsersAvailableDevicesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyDevices](src/models/many-devices.ts)</code>

**OnError**: <code>[Player.GetAUsersAvailableDevicesError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInformationAboutTheUsersCurrentPlayback(request: Player.GetInformationAboutTheUsersCurrentPlaybackRequest, options?: RequestOptions): ApiPromise&lt;CurrentlyPlayingContextObject, Player.GetInformationAboutTheUsersCurrentPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the user’s current playback state, including track or episode, progress, and active device.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getInformationAboutTheUsersCurrentPlayback();
  // TODO: Handle 'response' of type CurrentlyPlayingContextObject
} catch (err) {
  if (
    err instanceof Player.GetInformationAboutTheUsersCurrentPlaybackError &&
      err.payload.kind === "unauthorized1"
  ) {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CurrentlyPlayingContextObject](src/models/currently-playing-context-object.ts)</code>

**OnError**: <code>[Player.GetInformationAboutTheUsersCurrentPlaybackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQueue(options?: RequestOptions): ApiPromise&lt;QueueObject, Player.GetQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of objects that make up the user's queue.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getQueue();
  // TODO: Handle 'response' of type QueueObject
} catch (err) {
  if (err instanceof Player.GetQueueError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueObject](src/models/queue-object.ts)</code>

**OnError**: <code>[Player.GetQueueError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecentlyPlayed(request: Player.GetRecentlyPlayedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagingPlayHistoryObject, Player.GetRecentlyPlayedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get tracks from the current user's recently played tracks.
_**Note**: Currently doesn't support podcast episodes._


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getRecentlyPlayed();
  // TODO: Handle 'response' of type CursorPagingPlayHistoryObject
} catch (err) {
  if (err instanceof Player.GetRecentlyPlayedError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>after?</code> | <code>number</code> | - |
| <code>before?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagingPlayHistoryObject](src/models/cursor-paging-play-history-object.ts)</code>

**OnError**: <code>[Player.GetRecentlyPlayedError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTheUsersCurrentlyPlayingTrack(request: Player.GetTheUsersCurrentlyPlayingTrackRequest, options?: RequestOptions): ApiPromise&lt;CurrentlyPlayingObject, Player.GetTheUsersCurrentlyPlayingTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the object currently being played on the user's Spotify account.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getTheUsersCurrentlyPlayingTrack();
  // TODO: Handle 'response' of type CurrentlyPlayingObject
} catch (err) {
  if (err instanceof Player.GetTheUsersCurrentlyPlayingTrackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CurrentlyPlayingObject](src/models/currently-playing-object.ts)</code>

**OnError**: <code>[Player.GetTheUsersCurrentlyPlayingTrackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pauseAUsersPlayback(request: Player.PauseAUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.PauseAUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.pauseAUsersPlayback();
} catch (err) {
  if (err instanceof Player.PauseAUsersPlaybackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.PauseAUsersPlaybackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>seekToPositionInCurrentlyPlayingTrack(request: Player.SeekToPositionInCurrentlyPlayingTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SeekToPositionInCurrentlyPlayingTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.seekToPositionInCurrentlyPlayingTrack({ positionMs });
} catch (err) {
  if (
    err instanceof Player.SeekToPositionInCurrentlyPlayingTrackError && err.payload.kind === "unauthorized1"
  ) {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>positionMs</code> | <code>number</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.SeekToPositionInCurrentlyPlayingTrackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setRepeatModeOnUsersPlayback(request: Player.SetRepeatModeOnUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SetRepeatModeOnUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.setRepeatModeOnUsersPlayback({ state });
} catch (err) {
  if (err instanceof Player.SetRepeatModeOnUsersPlaybackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>string</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.SetRepeatModeOnUsersPlaybackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setVolumeForUsersPlayback(request: Player.SetVolumeForUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SetVolumeForUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.setVolumeForUsersPlayback({ volumePercent });
} catch (err) {
  if (err instanceof Player.SetVolumeForUsersPlaybackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>volumePercent</code> | <code>number</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.SetVolumeForUsersPlaybackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>skipUsersPlaybackToNextTrack(request: Player.SkipUsersPlaybackToNextTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SkipUsersPlaybackToNextTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.skipUsersPlaybackToNextTrack();
} catch (err) {
  if (err instanceof Player.SkipUsersPlaybackToNextTrackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.SkipUsersPlaybackToNextTrackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>skipUsersPlaybackToPreviousTrack(request: Player.SkipUsersPlaybackToPreviousTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SkipUsersPlaybackToPreviousTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.skipUsersPlaybackToPreviousTrack();
} catch (err) {
  if (err instanceof Player.SkipUsersPlaybackToPreviousTrackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.SkipUsersPlaybackToPreviousTrackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAUsersPlayback(request: Player.StartAUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.StartAUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.startAUsersPlayback();
} catch (err) {
  if (err instanceof Player.StartAUsersPlaybackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartOrResumePlaybackRequest](src/models/start-or-resume-playback-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.StartAUsersPlaybackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toggleShuffleForUsersPlayback(request: Player.ToggleShuffleForUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.ToggleShuffleForUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.toggleShuffleForUsersPlayback({ state });
} catch (err) {
  if (err instanceof Player.ToggleShuffleForUsersPlaybackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>boolean</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.ToggleShuffleForUsersPlaybackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferAUsersPlayback(request: Player.TransferAUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.TransferAUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.player.transferAUsersPlayback();
} catch (err) {
  if (err instanceof Player.TransferAUsersPlaybackError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[MePlayerRequest](src/models/me-player-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Player.TransferAUsersPlaybackError](src/resources/player.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Playlists

> Source: [Playlists](src/resources/playlists.ts)

<details>
<summary><code>addTracksToPlaylist(request: Playlists.AddTracksToPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Playlists.AddTracksToPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more items to a user's playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.addTracksToPlaylist({ playlistId });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  if (err instanceof Playlists.AddTracksToPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>position?</code> | <code>number</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest](src/models/playlists-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>

**OnError**: <code>[Playlists.AddTracksToPlaylistError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePlaylistDetails(request: Playlists.ChangePlaylistDetailsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.ChangePlaylistDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.playlists.changePlaylistDetails({ playlistId });
} catch (err) {
  if (err instanceof Playlists.ChangePlaylistDetailsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsRequest](src/models/playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Playlists.ChangePlaylistDetailsError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserFollowsPlaylist(request: Playlists.CheckIfUserFollowsPlaylistRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Playlists.CheckIfUserFollowsPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if one or more Spotify users are following a specified playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.checkIfUserFollowsPlaylist({ playlistId, ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Playlists.CheckIfUserFollowsPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Playlists.CheckIfUserFollowsPlaylistError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPlaylist(request: Playlists.CreatePlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistObject, Playlists.CreatePlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.createPlaylist({ userId });
  // TODO: Handle 'response' of type PlaylistObject
} catch (err) {
  if (err instanceof Playlists.CreatePlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UsersPlaylistsRequest](src/models/users-playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistObject](src/models/playlist-object.ts)</code>

**OnError**: <code>[Playlists.CreatePlaylistError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followPlaylist(request: Playlists.FollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.FollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of a playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.playlists.followPlaylist({ playlistId });
} catch (err) {
  if (err instanceof Playlists.FollowPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsFollowersRequest](src/models/playlists-followers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Playlists.FollowPlaylistError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getACategoriesPlaylists(request: Playlists.GetACategoriesPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingFeaturedPlaylistObject, Playlists.GetACategoriesPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify playlists tagged with a particular category.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getACategoriesPlaylists({ categoryId });
  // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
} catch (err) {
  if (err instanceof Playlists.GetACategoriesPlaylistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>

**OnError**: <code>[Playlists.GetACategoriesPlaylistsError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAListOfCurrentUsersPlaylists(request: Playlists.GetAListOfCurrentUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Playlists.GetAListOfCurrentUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by the current Spotify
user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getAListOfCurrentUsersPlaylists();
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  if (err instanceof Playlists.GetAListOfCurrentUsersPlaylistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>

**OnError**: <code>[Playlists.GetAListOfCurrentUsersPlaylistsError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeaturedPlaylists(request: Playlists.GetFeaturedPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingFeaturedPlaylistObject, Playlists.GetFeaturedPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getFeaturedPlaylists();
  // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
} catch (err) {
  if (err instanceof Playlists.GetFeaturedPlaylistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locale?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>

**OnError**: <code>[Playlists.GetFeaturedPlaylistsError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListUsersPlaylists(request: Playlists.GetListUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Playlists.GetListUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by a Spotify user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getListUsersPlaylists({ userId });
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  if (err instanceof Playlists.GetListUsersPlaylistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>

**OnError**: <code>[Playlists.GetListUsersPlaylistsError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylist(request: Playlists.GetPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistObject, Playlists.GetPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a playlist owned by a Spotify user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getPlaylist({ playlistId });
  // TODO: Handle 'response' of type PlaylistObject
} catch (err) {
  if (err instanceof Playlists.GetPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistObject](src/models/playlist-object.ts)</code>

**OnError**: <code>[Playlists.GetPlaylistError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylistCover(request: Playlists.GetPlaylistCoverRequest, options?: RequestOptions): ApiPromise&lt;ImageObject[], Playlists.GetPlaylistCoverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current image associated with a specific playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getPlaylistCover({ playlistId });
  // TODO: Handle 'response' of type ImageObject[]
} catch (err) {
  if (err instanceof Playlists.GetPlaylistCoverError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImageObject](src/models/image-object.ts)[]</code>

**OnError**: <code>[Playlists.GetPlaylistCoverError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylistsTracks(request: Playlists.GetPlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistTrackObject, Playlists.GetPlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of the items of a playlist owned by a Spotify user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getPlaylistsTracks({ playlistId });
  // TODO: Handle 'response' of type PagingPlaylistTrackObject
} catch (err) {
  if (err instanceof Playlists.GetPlaylistsTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistTrackObject](src/models/paging-playlist-track-object.ts)</code>

**OnError**: <code>[Playlists.GetPlaylistsTracksError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksPlaylist(request: Playlists.RemoveTracksPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Playlists.RemoveTracksPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more items from a user's playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.removeTracksPlaylist({ playlistId });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  if (err instanceof Playlists.RemoveTracksPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest2](src/models/playlists-tracks-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>

**OnError**: <code>[Playlists.RemoveTracksPlaylistError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reorderOrReplacePlaylistsTracks(request: Playlists.ReorderOrReplacePlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Playlists.ReorderOrReplacePlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.reorderOrReplacePlaylistsTracks({ playlistId });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  if (err instanceof Playlists.ReorderOrReplacePlaylistsTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest1](src/models/playlists-tracks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>

**OnError**: <code>[Playlists.ReorderOrReplacePlaylistsTracksError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowPlaylist(request: Playlists.UnfollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.UnfollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of a playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.playlists.unfollowPlaylist({ playlistId });
} catch (err) {
  if (err instanceof Playlists.UnfollowPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Playlists.UnfollowPlaylistError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadCustomPlaylistCover(request: Playlists.UploadCustomPlaylistCoverRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.UploadCustomPlaylistCoverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the image used to represent a specific playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.playlists.uploadCustomPlaylistCover({ playlistId, body });
} catch (err) {
  if (err instanceof Playlists.UploadCustomPlaylistCoverError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Playlists.UploadCustomPlaylistCoverError](src/resources/playlists.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>checkCurrentUserFollows(request: Users.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Users.CheckCurrentUserFollowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.checkCurrentUserFollows({ type, ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Users.CheckCurrentUserFollowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Users.CheckCurrentUserFollowsError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserFollowsPlaylist(request: Users.CheckIfUserFollowsPlaylistRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Users.CheckIfUserFollowsPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if one or more Spotify users are following a specified playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.checkIfUserFollowsPlaylist({ playlistId, ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Users.CheckIfUserFollowsPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Users.CheckIfUserFollowsPlaylistError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followArtistsUsers(request: Users.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.FollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.users.followArtistsUsers({ type, ids });
} catch (err) {
  if (err instanceof Users.FollowArtistsUsersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType2](src/models/item-type2.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[FollowArtistsOrUsersRequest](src/models/follow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Users.FollowArtistsUsersError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followPlaylist(request: Users.FollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.FollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of a playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.users.followPlaylist({ playlistId });
} catch (err) {
  if (err instanceof Users.FollowPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsFollowersRequest](src/models/playlists-followers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Users.FollowPlaylistError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrentUsersProfile(options?: RequestOptions): ApiPromise&lt;PrivateUserObject, Users.GetCurrentUsersProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed profile information about the current user (including the
current user's username).


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getCurrentUsersProfile();
  // TODO: Handle 'response' of type PrivateUserObject
} catch (err) {
  if (err instanceof Users.GetCurrentUsersProfileError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PrivateUserObject](src/models/private-user-object.ts)</code>

**OnError**: <code>[Users.GetCurrentUsersProfileError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowed(request: Users.GetFollowedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagedArtists, Users.GetFollowedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getFollowed({ type });
  // TODO: Handle 'response' of type CursorPagedArtists
} catch (err) {
  if (err instanceof Users.GetFollowedError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType1](src/models/item-type1.ts)</code> | - |
| <code>after?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>

**OnError**: <code>[Users.GetFollowedError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListUsersPlaylists(request: Users.GetListUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Users.GetListUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by a Spotify user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getListUsersPlaylists({ userId });
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  if (err instanceof Users.GetListUsersPlaylistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>

**OnError**: <code>[Users.GetListUsersPlaylistsError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersProfile(request: Users.GetUsersProfileRequest, options?: RequestOptions): ApiPromise&lt;PublicUserObject, Users.GetUsersProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get public profile information about a Spotify user.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersProfile({ userId });
  // TODO: Handle 'response' of type PublicUserObject
} catch (err) {
  if (err instanceof Users.GetUsersProfileError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicUserObject](src/models/public-user-object.ts)</code>

**OnError**: <code>[Users.GetUsersProfileError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopArtists(request: Users.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistObject, Users.GetUsersTopArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersTopArtists();
  // TODO: Handle 'response' of type PagingArtistObject
} catch (err) {
  if (err instanceof Users.GetUsersTopArtistsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>

**OnError**: <code>[Users.GetUsersTopArtistsError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopTracks(request: Users.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingTrackObject, Users.GetUsersTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersTopTracks();
  // TODO: Handle 'response' of type PagingTrackObject
} catch (err) {
  if (err instanceof Users.GetUsersTopTracksError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>

**OnError**: <code>[Users.GetUsersTopTracksError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowArtistsUsers(request: Users.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.UnfollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.users.unfollowArtistsUsers({ type, ids });
} catch (err) {
  if (err instanceof Users.UnfollowArtistsUsersError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UnfollowArtistsOrUsersRequest](src/models/unfollow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Users.UnfollowArtistsUsersError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowPlaylist(request: Users.UnfollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.UnfollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of a playlist.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.users.unfollowPlaylist({ playlistId });
} catch (err) {
  if (err instanceof Users.UnfollowPlaylistError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Users.UnfollowPlaylistError](src/resources/users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise&lt;SearchItems, Search.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search({ q, type });
  // TODO: Handle 'response' of type SearchItems
} catch (err) {
  if (err instanceof Search.SearchError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | - |
| <code>type</code> | <code>[Itemtype](src/models/itemtype.ts)[]</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |
| <code>includeExternal?</code> | <code>[IncludeExternal](src/models/include-external.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchItems](src/models/search-items.ts)</code>

**OnError**: <code>[Search.SearchError](src/resources/search.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Shows

> Source: [Shows](src/resources/shows.ts)

<details>
<summary><code>checkUsersSavedShows(request: Shows.CheckUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Shows.CheckUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more shows is already saved in the current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.checkUsersSavedShows({ ids });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  if (err instanceof Shows.CheckUsersSavedShowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>boolean[]</code>

**OnError**: <code>[Shows.CheckUsersSavedShowsError](src/resources/shows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAShow(request: Shows.GetAShowRequest, options?: RequestOptions): ApiPromise&lt;ShowObject, Shows.GetAShowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single show identified by its
unique Spotify ID.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getAShow({ id });
  // TODO: Handle 'response' of type ShowObject
} catch (err) {
  if (err instanceof Shows.GetAShowError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShowObject](src/models/show-object.ts)</code>

**OnError**: <code>[Shows.GetAShowError](src/resources/shows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAShowsEpisodes(request: Shows.GetAShowsEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedEpisodeObject, Shows.GetAShowsEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getAShowsEpisodes({ id });
  // TODO: Handle 'response' of type PagingSimplifiedEpisodeObject
} catch (err) {
  if (err instanceof Shows.GetAShowsEpisodesError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedEpisodeObject](src/models/paging-simplified-episode-object.ts)</code>

**OnError**: <code>[Shows.GetAShowsEpisodesError](src/resources/shows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleShows(request: Shows.GetMultipleShowsRequest, options?: RequestOptions): ApiPromise&lt;ManySimplifiedShows, Shows.GetMultipleShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several shows based on their Spotify IDs.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getMultipleShows({ ids });
  // TODO: Handle 'response' of type ManySimplifiedShows
} catch (err) {
  if (err instanceof Shows.GetMultipleShowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManySimplifiedShows](src/models/many-simplified-shows.ts)</code>

**OnError**: <code>[Shows.GetMultipleShowsError](src/resources/shows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedShows(request: Shows.GetUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedShowObject, Shows.GetUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getUsersSavedShows();
  // TODO: Handle 'response' of type PagingSavedShowObject
} catch (err) {
  if (err instanceof Shows.GetUsersSavedShowsError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | - |
| <code>offset?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedShowObject](src/models/paging-saved-show-object.ts)</code>

**OnError**: <code>[Shows.GetUsersSavedShowsError](src/resources/shows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeShowsUser(request: Shows.RemoveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Shows.RemoveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one or more shows from current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.shows.removeShowsUser({ ids });
} catch (err) {
  if (err instanceof Shows.RemoveShowsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveShowsRequest](src/models/remove-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Shows.RemoveShowsUserError](src/resources/shows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveShowsUser(request: Shows.SaveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Shows.SaveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more shows to current Spotify user's library.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.shows.saveShowsUser({ ids });
} catch (err) {
  if (err instanceof Shows.SaveShowsUserError && err.payload.kind === "unauthorized1") {
    // TODO: Handle 'err.payload.body' of type Unauthorized1
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveShowsRequest](src/models/save-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Shows.SaveShowsUserError](src/resources/shows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

