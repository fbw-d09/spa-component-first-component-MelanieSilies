# `06` Deine erste funktionale Komponente

Wenn du Funktionen erstellst, die HTML zurückgeben, kannst du sie in JSX als **"Komponenten "** behandeln, d.h. sie werden zu deinen eigenen HTML-Tags.

## Erstellen unserer ersten funktionalen Komponente

Dank JSX können wir unter anderem Funktionen so aufrufen, als wären sie ein HTML-Tag, zum Beispiel:
```js
// if we declare a function called MyFunction
const MyFunction = () => {
    return <h1>I Love React</h1>;
}

// we can call the function as an HTML tag like this:
<MyFunction />

// instead of the typical way of using round brackets
MyFunction();
```

Wenn du eine Funktion auf diese Weise aufrufst, wird sie zu einer **"React-Komponente "**, also einer Funktion, die dynamisch HTML erzeugt (zurückgibt). Was auch immer die Funktion zurückgibt, wird an der gleichen Stelle ersetzt, an der die ursprüngliche `<MyFunction />` platziert war.

## :speech_balloon: Anleitung

Ändere in der 9. Zeile von index.js die Art und Weise, wie die Funktion aufgerufen wird, und rufe die Funktion als **"React-Komponente "** auf, indem du `<` und `>` wie einen HTML-Tag verwendest (anstelle von Klammern).

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnis-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/SPA-component-first-component/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/SPA-component-first-component/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/SPA-component-first-component/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
