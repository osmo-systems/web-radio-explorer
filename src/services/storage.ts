export enum LocalStorageKey {
	FAVORITES = "favorites",
	LAST_LISTENED = "last_listened",
	LAST_TAB = "last_tab",
	VOTES = "votes",
	THEME = "theme",
}

export function getFavoritesList(): string[] {
	return JSON.parse(window.localStorage.getItem(LocalStorageKey.FAVORITES) || "[]")
}

export function toggleFavorite(stationuuid: string) {
	const favorites = getFavoritesList()
	const index = favorites.indexOf(stationuuid)
	if (index !== -1) favorites.splice(index, 1)
	else favorites.unshift(stationuuid)

	storeFavorites(favorites)

	return favorites
}

export function storeFavorites(uuids: string[]) {
	window.localStorage.setItem(LocalStorageKey.FAVORITES, JSON.stringify(uuids))
}

export function getLastListenedList(): string[] {
	return JSON.parse(window.localStorage.getItem(LocalStorageKey.LAST_LISTENED) || "[]")
}

export function addLastListened(stationuuid: string) {
	const lastListened = getLastListenedList()
	const index = lastListened.indexOf(stationuuid)
	if (index !== -1) lastListened.splice(index, 1)
	lastListened.unshift(stationuuid)
	if (lastListened.length > 20) lastListened.pop()
	storeLastListened(lastListened)
}

export function storeLastListened(uuids: string[]) {
	window.localStorage.setItem(LocalStorageKey.LAST_LISTENED, JSON.stringify(uuids))
}

export function getLastStationSource(): StationSource {
	return (window.localStorage.getItem(LocalStorageKey.LAST_TAB) ?? "search") as StationSource
}

export function setLastStationSource(source: StationSource) {
	window.localStorage.setItem(LocalStorageKey.LAST_TAB, source)
}

export function getVotes() {
	return loadVotes().map((vote: Vote) => vote.uuid)
}

function loadVotes() {
	const yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)

	const votes = JSON.parse(window.localStorage.getItem(LocalStorageKey.VOTES) ?? "[]").filter(
		(vote: Vote) => new Date(vote.date) > yesterday
	)

	setVotes(votes)
	return votes
}

export function setVotes(votes: Vote[]) {
	window.localStorage.setItem(LocalStorageKey.VOTES, JSON.stringify(votes))
}

export function storeVote(uuid: string) {
	const votes = loadVotes()
	votes.push({ date: new Date().toISOString(), uuid })
	setVotes(votes)
	return votes.map((vote: Vote) => vote.uuid)
}


export function storeTheme(theme: string){
	return window.localStorage.setItem(LocalStorageKey.THEME, theme)
}

export function loadTheme(): string {
	const theme = localStorage.getItem(LocalStorageKey.THEME)
	console.log(theme)
	return theme ?? ''
	// return window.localStorage.getItem(LocalStorageKey.THEME) ?? ''
}