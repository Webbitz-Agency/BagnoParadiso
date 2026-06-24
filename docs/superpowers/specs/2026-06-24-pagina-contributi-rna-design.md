# Design — Pagina "Contributi RNA" (Trasparenza Aiuti di Stato)

**Data:** 2026-06-24
**Progetto:** Sito Bagno Paradiso (Tirrena Mare S.a.s.) — Create React App
**Obiettivo:** Adempiere all'obbligo di trasparenza delle erogazioni pubbliche (L. 124/2017, art. 1 commi 125–129) pubblicando sul sito aziendale i contributi pubblici incassati, con un link dedicato nel footer.

## Sintesi

Si aggiunge una nuova pagina statica `/contributi-rna` che elenca in modo schematico i contributi pubblici incassati dalla società negli anni 2024 e 2025, e un link **"Contributi RNA"** nel footer che vi rimanda. La pagina ha stile istituzionale sobrio (nessun hero fotografico) ma coerente con font e palette del sito.

## Approccio scelto

**Pagina React dedicata** (`ContributiRna.js` + `ContributiRna.css`), con i dati dei contributi in un array nel componente — stesso pattern già usato in `Home.js`/`Servizi.js` (array `servizi`, `faqs`). Scartati: file dati separato (over-engineering per pagina singola statica) e solo-link esterno (non soddisfa l'obbligo dei dati schematici né la richiesta di creare la pagina).

## Modifiche

### 1. Routing — `src/App.js`
- Import `ContributiRna` da `./pages/ContributiRna`.
- Nuova rotta: `<Route path="/contributi-rna" element={<ContributiRna />} />`.

### 2. Navigazione — `src/components/Footer.js`
- Nella colonna "Link Rapidi" aggiungere: `<li><Link to="/contributi-rna" className="footer-link">Contributi RNA</Link></li>`.
- Il link NON va in `Navbar` (è una pagina di adempimento, non di navigazione primaria).

### 3. Nuova pagina — `src/pages/ContributiRna.js` + `ContributiRna.css`
Struttura (dall'alto):
1. **Intestazione testuale** (no foto): titolo "Trasparenza Aiuti di Stato — Contributi RNA" + paragrafo che richiama l'obbligo L. 124/2017.
2. **Riquadro soggetto ricevente:** Tirrena Mare S.a.s. di Marianelli Marco e C. — C.F./P.IVA 00187810502 — Viale del Tirreno 6, 56128 Pisa (PI).
3. **Tabella contributi**, raggruppata per anno (2024, 2025) con subtotale annuo. Colonne: *Data incasso · Soggetto erogante · Importo · Causale · Riferimento RNA*.
4. **Box informativo RNA:** link a `https://www.rna.gov.it/trasparenza/aiuti` con nota "ricerca tramite codice fiscale 00187810502".
5. Animazioni `ScrollReveal` leggere come nelle altre pagine; `useEffect` con `window.scrollTo(0,0)` al mount.

Comportamenti:
- La tabella deve essere **responsive** (su mobile: scroll orizzontale o layout a card, coerente con il resto del sito).
- Colonna "Riferimento RNA": mostra codice **COR** (e CAR) per le voci presenti su RNA; per le voci non presenti, trattino "—".
- Un link unico al portale RNA nel box informativo (non un link per riga).

## Dati (fonte: email cliente + Schede Uniche Aiuti RNA)

Soggetto ricevente: **Tirrena Mare S.a.s. di Marianelli Marco e C.**, C.F./P.IVA **00187810502**.

Importo del 10.10.2025 = **€ 22.214,77** (importo da scheda RNA; l'email indicava €22.217,77 — su decisione del cliente si usa il dato RNA).
Escluso: contributo Sviluppo Toscana **€ 16.400 non ancora incassato** (CAR 29079, concessione 21.10.2025) → da caricare l'anno prossimo.

### Anno 2024
| Data incasso | Soggetto erogante | Importo | Causale | Rif. RNA |
|---|---|---|---|---|
| 12.08.2024 | Ente Bilaterale | € 1.000,00 | Contributo erogato dall'ente bilaterale di categoria | — |
| 09.09.2024 | Sviluppo Toscana S.p.A. | € 20.000,00 | Contributo di immediato sostegno per le attività economiche danneggiate dagli eventi alluvionali di ottobre/novembre 2023 (OCDPC n. 1037/2023) | COR 22663689 · CAR 30136 |

**Subtotale 2024: € 21.000,00**

### Anno 2025
| Data incasso | Soggetto erogante | Importo | Causale | Rif. RNA |
|---|---|---|---|---|
| 06.03.2025 | Camera di Commercio Toscana Nord Ovest | € 5.000,00 | Bando alluvione 2024 — contributi alle imprese di Pisa, Lucca e Massa Carrara danneggiate dagli eventi di ottobre/novembre 2023 | COR 22457060 · CAR 28772 |
| 31.03.2025 | Fondazione Orlando | € 275,00 | Contributo/liberalità erogato da fondazione | — |
| 27.05.2025 | Sviluppo Toscana S.p.A. | € 3.682,00 | Contributi a fondo perduto per investimenti a favore delle imprese danneggiate dagli eventi di ottobre/novembre 2023 | COR 22832524 · CAR 29079 |
| 21.07.2025 | Fondazione Orlando | € 275,00 | Contributo/liberalità erogato da fondazione | — |
| 09.09.2025 | Ente Bilaterale | € 1.000,00 | Contributo erogato dall'ente bilaterale di categoria | — |
| 10.10.2025 | Camera di Commercio Toscana Nord Ovest | € 22.214,77 | Bando alluvione 2024 — seconda edizione (imprese di Pisa, Lucca e Massa Carrara danneggiate dagli eventi di ottobre/novembre 2023) | COR 23180041 · CAR 30394 |

**Subtotale 2025: € 32.446,77**

**Totale complessivo incassato: € 53.446,77**

Nota sulle causali: per le voci **non presenti su RNA** (Ente Bilaterale, Fondazione Orlando) la causale è indicata in forma sintetica generica, in attesa di eventuale dettaglio dalla Confcommercio; le restanti riportano il titolo ufficiale della misura da scheda RNA.

## Fuori scope
- Non si correggono i link morti esistenti a `/contatti` (presenti in `Footer.js`, `ChiSiamo.js`, `Servizi.js`): rotta inesistente, problema separato. **Segnalato al cliente.**
- Nessun uso di Tailwind (il sito stila con CSS custom per-pagina): si segue il pattern esistente.

## Testing / verifica
- `npm start`: la rotta `/contributi-rna` carica la pagina; il link "Contributi RNA" nel footer vi naviga.
- Verifica responsive della tabella su viewport mobile.
- Build di produzione (`npm run build`) senza errori/warning nuovi.
- Controllo visivo: dati e subtotali corrispondono alla tabella di questo spec.
