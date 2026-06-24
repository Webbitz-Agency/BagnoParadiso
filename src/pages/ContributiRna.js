import { useEffect } from 'react';
import './ContributiRna.css';
import ScrollReveal from '../components/ScrollReveal';

const RNA_URL = 'https://www.rna.gov.it/trasparenza/aiuti';

const societa = {
  denominazione: 'Tirrena Mare S.a.s. di Marianelli Marco e C.',
  codiceFiscale: '00187810502',
  indirizzo: 'Viale del Tirreno 6, 56128 Pisa (PI)'
};

const contributiPerAnno = [
  {
    anno: '2024',
    voci: [
      {
        data: '12.08.2024',
        erogante: 'Ente Bilaterale',
        importo: '€ 1.000,00',
        causale: "Contributo erogato dall'ente bilaterale di categoria",
        rna: null
      },
      {
        data: '09.09.2024',
        erogante: 'Sviluppo Toscana S.p.A.',
        importo: '€ 20.000,00',
        causale: 'Contributo di immediato sostegno per le attività economiche danneggiate dagli eventi alluvionali di ottobre/novembre 2023 (OCDPC n. 1037/2023)',
        rna: { cor: '22663689', car: '30136' }
      }
    ],
    subtotale: '€ 21.000,00'
  },
  {
    anno: '2025',
    voci: [
      {
        data: '06.03.2025',
        erogante: 'Camera di Commercio Toscana Nord Ovest',
        importo: '€ 5.000,00',
        causale: 'Bando alluvione 2024 — contributi alle imprese di Pisa, Lucca e Massa Carrara danneggiate dagli eventi di ottobre/novembre 2023',
        rna: { cor: '22457060', car: '28772' }
      },
      {
        data: '31.03.2025',
        erogante: 'Fondazione Orlando',
        importo: '€ 275,00',
        causale: 'Contributo/liberalità erogato da fondazione',
        rna: null
      },
      {
        data: '27.05.2025',
        erogante: 'Sviluppo Toscana S.p.A.',
        importo: '€ 3.682,00',
        causale: 'Contributi a fondo perduto per investimenti a favore delle imprese danneggiate dagli eventi di ottobre/novembre 2023',
        rna: { cor: '22832524', car: '29079' }
      },
      {
        data: '21.07.2025',
        erogante: 'Fondazione Orlando',
        importo: '€ 275,00',
        causale: 'Contributo/liberalità erogato da fondazione',
        rna: null
      },
      {
        data: '09.09.2025',
        erogante: 'Ente Bilaterale',
        importo: '€ 1.000,00',
        causale: "Contributo erogato dall'ente bilaterale di categoria",
        rna: null
      },
      {
        data: '10.10.2025',
        erogante: 'Camera di Commercio Toscana Nord Ovest',
        importo: '€ 22.214,77',
        causale: 'Bando alluvione 2024 — seconda edizione (imprese di Pisa, Lucca e Massa Carrara danneggiate dagli eventi di ottobre/novembre 2023)',
        rna: { cor: '23180041', car: '30394' }
      }
    ],
    subtotale: '€ 32.446,77'
  }
];

const ContributiRna = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contributi-page" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      {/* Intestazione */}
      <section className="contributi-header">
        <ScrollReveal variant="fadeUp" className="contributi-header-inner">
          <h1 className="contributi-title">Trasparenza Aiuti di Stato — Contributi RNA</h1>
          <p className="contributi-subtitle">
            In adempimento agli obblighi di trasparenza previsti dalla Legge 4 agosto 2017, n. 124
            (art. 1, commi 125–129), si pubblicano di seguito i contributi pubblici e gli aiuti di Stato
            incassati dalla società. Le sovvenzioni soggette a registrazione nel Registro Nazionale degli Aiuti
            di Stato (RNA) sono consultabili anche sul portale ufficiale, riportato in fondo alla pagina.
          </p>
        </ScrollReveal>
      </section>

      {/* Soggetto ricevente */}
      <section className="contributi-section">
        <ScrollReveal variant="fadeUp" className="contributi-card">
          <h2 className="contributi-card-title">Soggetto ricevente</h2>
          <dl className="contributi-anagrafica">
            <div>
              <dt>Denominazione</dt>
              <dd>{societa.denominazione}</dd>
            </div>
            <div>
              <dt>Codice fiscale / P.IVA</dt>
              <dd>{societa.codiceFiscale}</dd>
            </div>
            <div>
              <dt>Sede</dt>
              <dd>{societa.indirizzo}</dd>
            </div>
          </dl>
        </ScrollReveal>
      </section>

      {/* Tabelle per anno */}
      {contributiPerAnno.map((gruppo) => (
        <section className="contributi-section" key={gruppo.anno}>
          <ScrollReveal variant="fadeUp">
            <h2 className="contributi-anno-title">Anno {gruppo.anno}</h2>
            <div className="contributi-table-wrap">
              <table className="contributi-table">
                <thead>
                  <tr>
                    <th>Data incasso</th>
                    <th>Soggetto erogante</th>
                    <th>Importo</th>
                    <th>Causale</th>
                    <th>Riferimento RNA</th>
                  </tr>
                </thead>
                <tbody>
                  {gruppo.voci.map((voce, idx) => (
                    <tr key={idx}>
                      <td data-label="Data incasso">{voce.data}</td>
                      <td data-label="Soggetto erogante">{voce.erogante}</td>
                      <td data-label="Importo" className="contributi-importo">{voce.importo}</td>
                      <td data-label="Causale">{voce.causale}</td>
                      <td data-label="Riferimento RNA">
                        {voce.rna ? (
                          <span className="contributi-rna-ref">
                            COR {voce.rna.cor}
                            <br />
                            CAR {voce.rna.car}
                          </span>
                        ) : (
                          <span className="contributi-rna-none">Non presente su RNA</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="contributi-subtotale-row">
                    <td colSpan="2">Totale anno {gruppo.anno}</td>
                    <td className="contributi-importo">{gruppo.subtotale}</td>
                    <td colSpan="2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>
      ))}

      {/* Box informativo RNA */}
      <section className="contributi-section">
        <ScrollReveal variant="fadeUp" className="contributi-rna-box">
          <h2 className="contributi-rna-box-title">Consultazione sul Registro Nazionale degli Aiuti di Stato</h2>
          <p className="contributi-rna-box-text">
            Gli aiuti di Stato registrati sono consultabili sul portale ufficiale RNA – Trasparenza Aiuti,
            effettuando la ricerca tramite il codice fiscale <strong>{societa.codiceFiscale}</strong>.
          </p>
          <a href={RNA_URL} target="_blank" rel="noopener noreferrer" className="contributi-rna-link">
            Apri il portale RNA – Trasparenza Aiuti
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ContributiRna;
