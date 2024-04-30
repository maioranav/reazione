# Intesa Reazionale

Gioco ispirato al programma Reazione a Catena di Rai1.\
Creato nelle notti insonni di Vincenzo, Raffaele e Federico.

[Clicca qui](http://localhost:3000) per giocare alla nostra versione online.

## Come avviarlo

Direttamente dalla cartella root del progetto puoi eseguire i seguenti comandi:

### `npm install`

Questo comando installerà tutte le dipendenze necessarie per eseguire l'app.

### `npm start`

Avvia l'applicazione in modalità "di sviluppo".\
Apri [http://localhost:3000](http://localhost:3000) per visualizzarla nel tuo browser.

La pagina esegue un refresh automatico in caso di modifche al codice.\
Puoi vedere inoltre eventuali errori del linter nella console.

### `npm run build`

Crea un bundle pronto per la produzione all'interno della cartella `build`.\
Il bundle viene creato in modalità produzione e viene ottimizzato per ottenere prestazioni elevate.

La build prodotta viene minificata e hashata pronta per il deploy!

## Come modificare le variabili di gioco

E' possibile modificare le variabili di gioco agendo sul file `.env`.\

### `REACT_APP_MAX_WORDS`

Permette di gestire il valore massimo delle parole che è possibile utilizzare in-game.

### `REACT_APP_MAX_TIME`

Permette di impostare la durata massima della partita (valore espresso in secondi)

## Come modificare le parole

E' possibile modificare le parole agendo sul file `dictionary.json`.\
E' necessario che la proprietà dell'oggetto json che contiene l'array di parole si chiami `dictionary`.

## Come giocare

Dopo aver eseguito l'applicazione, premere la BARRA SPAZIATRICE per interrompere il tempo e dare una risposta.\
Se la risposta è esatta premere +1, altrimenti -1.
In caso il concorrente voglia skippare la parola si hanno a disposizione 2 PASS.

## Come contribuire

Se vuoi contribuire al progetto, puoi aprire una pull request.

## License MIT

Copyright (c) 2024 vincenzomaiorana.it
