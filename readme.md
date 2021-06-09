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

Grundlagen für die Entwicklung der Web-App:
- JavaScript
	- TypeScript (Typisierung von JavaScript)
	- Paketverwaltung per npm
	- React Framework
		- Datenstruktur nach Redux (react-redux)
		- Nutzung von "redux-toolkit" für Datennormalisierung im Redux-Store & Unsetung weiterer Redux-Konventionen

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
Das Speichern der Nutzerdaten und senden von Pushnachrichten wird über Firebase erfolgen.
