# MarcoPollo

## Grundlegende Daten der Pollentypen im JSON-Fromat
```
[
	{
		id: number,
		name: string,
		times: {
			light: {
				start: string (ISO-8601),
				end: string (ISO-8601),
			},
			mild: {
				start: string (ISO-8601),
				end: string (ISO-8601),
			},
			strong: {
				start: string (ISO-8601),
				end: string (ISO-8601),
			},
		},
	},
	...
]
```

## Gespeicherte Auswahl des Users (JSON-Fromat)
```
[id: number, ...]
```

## Grundlagen für die Entwicklung der Web-App:
- [JavaScript](https://developer.mozilla.org/de/docs/Web/JavaScript)
	- [TypeScript](https://www.typescriptlang.org/) (Typisierung von JavaScript)
	- Paketverwaltung per [npm](https://www.npmjs.com/)
	- [React Framework](https://reactjs.org/)
		- Datenstruktur nach Redux ([react-redux](https://react-redux.js.org/))
		- Nutzung von "[redux-toolkit](https://redux-toolkit.js.org/)" für Datennormalisierung im Redux-Store & Unsetung weiterer Redux-Konventionen

## Projektstruktur
```bash
src
├───components
│   ├───headline
│   │       Headline.tsx
│   │		headline.scss
│   └───...
│
├───views
│   │   App.tsx
│   ├───landing-page
│   │       LandingPage.tsx
│   └───...
├───constants
│       pollen.json
├───redux-modules
│   │	store.ts
│   │	rootReducer.ts
│   └───pollen
│           pollenActions.ts
│           pollenSelectors.ts
│           pollenSlice.ts
├───types
│   	pollen.ts
│	...
└───utils
        ...
```

## Nutzerdaten Speicherung / Pushnachrichten
Das Speichern der Nutzerdaten und senden von Pushnachrichten wird über [Firebase](https://firebase.google.com/) erfolgen.
