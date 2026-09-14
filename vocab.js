// vocab.js - Authentic C1 Business & SAP Vocabulary
const vocab = [
    {
        word: "die Ausschreibung",
        meaning: "Tender / public call for bids. (Very common in Public Sector).",
        ex1: "Die öffentliche <span class='highlight'>Ausschreibung</span> für das neue SAP-Modul läuft bis Ende des Monats.",
        ex2: "Wir müssen die technischen Anforderungen für die <span class='highlight'>Ausschreibung</span> genau formulieren.",
        source: "Goethe C1 Business / Public Sector"
    },
    {
        word: "das Lastenheft",
        meaning: "Requirements specification. What the client WANTS (vs. Pflichtenheft: how you will DO it).",
        ex1: "Im <span class='highlight'>Lastenheft</span> steht, dass das System 10.000 User gleichzeitig bedienen muss.",
        ex2: "Wir müssen das <span class='highlight'>Lastenheft</span> des Kunden prüfen, bevor wir das Pflichtenheft schreiben.",
        source: "IHK IT-Project Management"
    },
    {
        word: "die Gewährleistung",
        meaning: "Statutory warranty. The legal guarantee that a product/service works.",
        ex1: "Der Fehler tritt erst nach zwei Jahren auf, da greift die <span class='highlight'>Gewährleistung</span> nicht mehr.",
        ex2: "Wir müssen die Mängel innerhalb der <span class='highlight'>Gewährleistungsfrist</span> beheben.",
        source: "German Civil Code (BGB) / Business"
    },
    {
        word: "die Kulanz",
        meaning: "Goodwill. Doing something nice for a customer even if you aren't legally forced to.",
        ex1: "Aus <span class='highlight'>Kulanz</span> ersetzen wir die defekte Hardware, obwohl die Garantie abgelaufen ist.",
        ex2: "Das ist keine rechtliche Pflicht, das machen wir nur aus <span class='highlight'>Kulanz</span>.",
        source: "Goethe C1 Business"
    },
    {
        word: "der Mahnlauf",
        meaning: "Dunning run. The automated SAP process of sending payment reminders.",
        ex1: "Der automatische <span class='highlight'>Mahnlauf</span> für offene Forderungen startet heute Nacht.",
        ex2: "Bitte prüf den <span class='highlight'>Mahnlauf</span>, bevor du die Dateien an die Bank schickst.",
        source: "SAP FI (Financial Accounting) Terminology"
    },
    {
        word: "die Stornierung",
        meaning: "Reversal / cancellation. Undoing a financial document in SAP.",
        ex1: "Wir müssen eine <span class='highlight'>Stornierung</span> der falschen Rechnung im System vornehmen.",
        ex2: "Die <span class='highlight'>Stornierung</span> des Belegs ist nur möglich, wenn er noch nicht gebucht ist.",
        source: "SAP FI / Accounting"
    },
    {
        word: "die Kontierung",
        meaning: "Account assignment. Telling SAP which general ledger account a transaction belongs to.",
        ex1: "Die <span class='highlight'>Kontierung</span> für diese Reisekostenabrechnung ist falsch.",
        ex2: "Bitte prüf die <span class='highlight'>Kontierung</span>, bevor du den Beleg freigibst.",
        source: "SAP FI / Controlling"
    },
    {
        word: "die Liquidität",
        meaning: "Liquidity. Having enough cash on hand to pay immediate bills.",
        ex1: "Durch die verspäteten Zahlungen der Kunden sinkt unsere <span class='highlight'>Liquidität</span>.",
        ex2: "Wir müssen die <span class='highlight'>Liquidität</span> für das nächste Quartal genau planen.",
        source: "Goethe C1 Business / Finance"
    },
    {
        word: "die Abschreibung",
        meaning: "Depreciation. Writing off the value of an asset over time.",
        ex1: "Die Server-Hardware wird über fünf Jahre linear <span class='highlight'>abgeschrieben</span>.",
        ex2: "Wir müssen die <span class='highlight'>Abschreibungen</span> für das neue Rechenzentrum im Budget berücksichtigen.",
        source: "IHK Accounting / SAP AA"
    },
    {
        word: "der Zuschuss",
        meaning: "Grant / subsidy. Money given by the government/public sector that doesn't need to be repaid.",
        ex1: "Für dieses Digitalisierungsprojekt bekommen wir einen <span class='highlight'>Zuschuss</span> vom Bund.",
        ex2: "Der <span class='highlight'>Zuschuss</span> deckt genau 50 Prozent der Projektkosten.",
        source: "Public Sector / Funding"
    },
    {
        word: "die Verordnung",
        meaning: "Regulation / ordinance. A law issued by the executive branch (e.g., government).",
        ex1: "Laut der neuen Datenschutz-<span class='highlight'>Verordnung</span> müssen wir die Server umziehen.",
        ex2: "Diese technische <span class='highlight'>Verordnung</span> tritt am ersten Januar in Kraft.",
        source: "Legal / Public Administration"
    },
    {
        word: "die Geschäftsordnung",
        meaning: "Rules of procedure. The internal rules of how a committee or board makes decisions.",
        ex1: "Laut <span class='highlight'>Geschäftsordnung</span> brauchen wir für diesen Beschluss eine Zweidrittelmehrheit.",
        ex2: "Wir müssen die <span class='highlight'>Geschäftsordnung</span> des IT-Beirats aktualisieren.",
        source: "Public Administration / Corporate Governance"
    },
    {
        word: "die Fälligkeit",
        meaning: "Maturity / due date. When a payment or contract officially becomes due.",
        ex1: "Die <span class='highlight'>Fälligkeit</span> der Rechnung ist der 15. des nächsten Monats.",
        ex2: "Wir haben die <span class='highlight'>Fälligkeit</span> der Verbindlichkeiten im System geprüft.",
        source: "Goethe C1 Business / Finance"
    },
    {
        word: "die Gutschrift",
        meaning: "Credit note. A document reducing the amount a customer owes you.",
        ex1: "Wir stellen dem Kunden eine <span class='highlight'>Gutschrift</span> über den fehlerhaften Betrag aus.",
        ex2: "Die <span class='highlight'>Gutschrift</span> wurde heute im SAP-System gebucht.",
        source: "SAP FI / Accounting"
    },
    {
        word: "die Bemessungsgrundlage",
        meaning: "Assessment basis. The base number used to calculate taxes, fees, or penalties.",
        ex1: "Die <span class='highlight'>Bemessungsgrundlage</span> für die Steuer ist der reine Umsatz ohne Mehrwertsteuer.",
        ex2: "Wir müssen die <span class='highlight'>Bemessungsgrundlage</span> für die Projektgebühren neu berechnen.",
        source: "Tax / Public Finance"
    },
    {
        word: "die Pönale",
        meaning: "Penalty clause. A financial penalty in a contract if a deadline is missed.",
        ex1: "Wenn wir den Go-Live verzögern, fällt eine hohe <span class='highlight'>Pönale</span> an.",
        ex2: "Die <span class='highlight'>Pönale</span> beträgt 0,5 Prozent der Auftragssumme pro Woche.",
        source: "Contract Law / IT Projects"
    },
    {
        word: "die Abmahnung",
        meaning: "Formal written warning. The mandatory first step before firing someone in Germany.",
        ex1: "Bevor wir über eine Kündigung nachdenken, müssen wir erst eine <span class='highlight'>Abmahnung</span> aussprechen.",
        ex2: "Die <span class='highlight'>Abmahnung</span> wurde ihm heute vom HR-Leiter übergeben.",
        source: "German Labor Law (Arbeitsrecht)"
    },
    {
        word: "die Schweigepflicht",
        meaning: "Duty of confidentiality. Legally binding requirement to keep secrets.",
        ex1: "Als externer Berater unterliegst du der strengen <span class='highlight'>Schweigepflicht</span>.",
        ex2: "Ich darf dir die Details nicht sagen, das verstößt gegen meine <span class='highlight'>Schweigepflicht</span>.",
        source: "Legal / Corporate Compliance"
    },
    {
        word: "der Beleg",
        meaning: "Document / voucher. The physical or digital proof of a business transaction (SAP core concept).",
        ex1: "Ohne einen entsprechenden <span class='highlight'>Beleg</span> kann ich die Ausgabe nicht buchen.",
        ex2: "Bitte hefte alle <span class='highlight'>Belege</span> für die Steuerprüfung gut auf.",
        source: "SAP FI / Accounting Principles (GoBD)"
    },
    {
        word: "die Genehmigung",
        meaning: "Official approval. (More formal than 'Freigabe', often used for legal/budgetary things).",
        ex1: "Wir warten noch auf die <span class='highlight'>Genehmigung</span> des Budgets durch den Vorstand.",
        ex2: "Der Antrag erfordert die <span class='highlight'>Genehmigung</span> der Datenschutzbehörde.",
        source: "Public Administration / Management"
    },
    {
        word: "die Umlage",
        meaning: "Levy / apportionment. Distributing costs among several parties.",
        ex1: "Die IT-Kosten werden über eine <span class='highlight'>Umlage</span> auf alle Abteilungen verteilt.",
        ex2: "Wir müssen die <span class='highlight'>Umlage</span> der Gemeinkosten im System neu konfigurieren.",
        source: "SAP CO (Controlling) / Finance"
    },
    {
        word: "die Abschlagszahlung",
        meaning: "Installment / progress payment. Paying a part of the total bill before the project is finished.",
        ex1: "Wir fordern heute die erste <span class='highlight'>Abschlagszahlung</span> für das implementierte Modul an.",
        ex2: "Der Vertrag sieht monatliche <span class='highlight'>Abschlagszahlungen</span> basierend auf dem Fortschritt vor.",
        source: "Contract Management / Billing"
    },
    {
        word: "die Einspruchsfrist",
        meaning: "Objection period / deadline to appeal. The time you have to legally complain about a decision.",
        ex1: "Die <span class='highlight'>Einspruchsfrist</span> für den Steuerbescheid beträgt einen Monat.",
        ex2: "Wir müssen den Widerspruch einreichen, bevor die <span class='highlight'>Einspruchsfrist</span> abläuft.",
        source: "Legal / Public Administration"
    },
    {
        word: "die Rentabilität",
        meaning: "Profitability / return on investment. How much profit you make relative to the cost.",
        ex1: "Die <span class='highlight'>Rentabilität</span> dieses neuen Cloud-Projekts ist noch unklar.",
        ex2: "Wir müssen die <span class='highlight'>Rentabilität</span> der Investition dem Vorstand präsentieren.",
        source: "Goethe C1 Business / Controlling"
    },
    {
        word: "die Satzung",
        meaning: "Statutes / articles of association. The foundational legal document of an organization.",
        ex1: "Laut unserer <span class='highlight'>Satzung</span> muss der Vorstand alle zwei Jahre neu gewählt werden.",
        ex2: "Die Änderung der <span class='highlight'>Satzung</span> erfordert eine Mehrheit von 75 Prozent.",
        source: "Corporate Law / Public Entities"
    },
    {
        word: "die Änderungskündigung",
        meaning: "Termination with altered conditions. Firing someone but offering a new contract with worse terms at the same time.",
        ex1: "Der Arbeitgeber hat eine <span class='highlight'>Änderungskündigung</span> ausgesprochen, um die Arbeitszeit zu verlängern.",
        ex2: "Gegen die <span class='highlight'>Änderungskündigung</span> können wir vor dem Arbeitsgericht klagen.",
        source: "German Labor Law (Arbeitsrecht)"
    },
    {
        word: "die Abfindung",
        meaning: "Severance pay. Money paid to an employee when their contract is terminated.",
        ex1: "Wir haben uns im Aufhebungsvertrag auf eine <span class='highlight'>Abfindung</span> von drei Bruttogehältern geeinigt.",
        ex2: "Die Höhe der <span class='highlight'>Abfindung</span> hängt von der Dauer der Betriebszugehörigkeit ab.",
        source: "German Labor Law / HR"
    },
    {
        word: "die Subvention",
        meaning: "Subsidy. Financial support from the government to keep a business/sector alive.",
        ex1: "Die <span class='highlight'>Subventionen</span> für den öffentlichen Nahverkehr werden nächstes Jahr gekürzt.",
        ex2: "Ohne staatliche <span class='highlight'>Subventionen</span> wäre das Projekt nicht wirtschaftlich.",
        source: "Public Finance / Economics"
    },
    {
        word: "die Tagesordnung",
        meaning: "Agenda. The official list of items to be discussed at a meeting.",
        ex1: "Bitte schick mir die <span class='highlight'>Tagesordnung</span> für die Aufsichtsratssitzung.",
        ex2: "Punkt 7 der <span class='highlight'>Tagesordnung</span> wurde kurzfristig gestrichen.",
        source: "Corporate Governance / Meetings"
    },
    {
        word: "der Beschluss",
        meaning: "Resolution / formal decision. A decision made by a board or committee.",
        ex1: "Der <span class='highlight'>Beschluss</span> zur Budgetkürzung wurde im Protokoll festgehalten.",
        ex2: "Wir brauchen einen formellen <span class='highlight'>Beschluss</span> des Gremiums, um das Projekt zu starten.",
        source: "Public Administration / Governance"
    }
];
