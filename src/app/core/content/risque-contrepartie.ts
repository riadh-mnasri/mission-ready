export const questions = [
  {
    question: "What is counterparty risk?",
    answer:
      "The risk that a counterparty to a financial contract (derivative, loan, repo...) defaults before final maturity, causing a loss if the exposure at that moment is positive for the other party.",
    questionFr: "Qu'est-ce que le risque de contrepartie ?",
    answerFr:
      "Le risque qu'une contrepartie à un contrat financier (dérivé, prêt, repo...) fasse défaut avant l'échéance finale, causant une perte si l'exposition à ce moment est positive pour l'autre partie.",
  },
  {
    question: "Difference between credit risk and counterparty risk?",
    answer:
      "Classic credit risk concerns an exposure known in advance (e.g. a loan); counterparty risk concerns an uncertain, time-varying exposure (e.g. a derivative's market value), since it depends on how markets move.",
    questionFr: "Différence entre risque de crédit et risque de contrepartie ?",
    answerFr:
      "Le risque de crédit classique concerne une exposition connue à l'avance (ex. un prêt) ; le risque de contrepartie concerne une exposition incertaine et variable dans le temps (ex. la valeur de marché d'un dérivé), car elle dépend de l'évolution des marchés.",
  },
  {
    question: "What is EAD (Exposure At Default) in this context?",
    answer:
      "The estimated exposure at the moment the counterparty defaults; for derivatives, it combines current exposure with an estimate of the potential future evolution of the contract's value.",
    questionFr: "Qu'est-ce que l'EAD (Exposure At Default) dans ce contexte ?",
    answerFr:
      "L'exposition estimée au moment où la contrepartie fait défaut ; pour les dérivés, elle combine l'exposition actuelle avec une estimation de l'évolution future potentielle de la valeur du contrat.",
  },
  {
    question: "What is CVA (Credit Valuation Adjustment)?",
    answer:
      "The valuation adjustment reflecting the cost of counterparty risk on a derivative - the difference between the portfolio's \"risk-free\" value and its value once the counterparty's default probability is accounted for.",
    questionFr: "Qu'est-ce que le CVA (Credit Valuation Adjustment) ?",
    answerFr:
      "L'ajustement de valorisation qui reflète le coût du risque de contrepartie sur un dérivé - la différence entre la valeur \"sans risque\" du portefeuille et sa valeur une fois la probabilité de défaut de la contrepartie prise en compte.",
  },
  {
    question: "What is netting and why does it matter?",
    answer:
      "An agreement (e.g. an ISDA Master Agreement) that lets you offset positive and negative positions with the same counterparty into a single net exposure, sharply reducing exposure on default compared to a gross sum.",
    questionFr: "Qu'est-ce que le netting et pourquoi est-ce important ?",
    answerFr:
      "Un accord (ex. un ISDA Master Agreement) qui permet de compenser les positions positives et négatives avec une même contrepartie en une seule exposition nette, réduisant fortement l'exposition en cas de défaut par rapport à une somme brute.",
  },
  {
    question: "What is collateral and a margin call?",
    answer:
      "Guarantees (cash, securities) exchanged periodically between counterparties to cover the current exposure of a derivatives portfolio; a margin call adjusts that collateral based on market moves (often daily), reducing residual exposure.",
    questionFr: "Qu'est-ce que le collateral et un margin call ?",
    answerFr:
      "Des garanties (cash, titres) échangées périodiquement entre contreparties pour couvrir l'exposition courante d'un portefeuille de dérivés ; un margin call ajuste ce collateral selon les mouvements de marché (souvent quotidien), réduisant l'exposition résiduelle.",
  },
  {
    question: "What is PFE (Potential Future Exposure)?",
    answer:
      "A statistical estimate (often at a given quantile, e.g. 95%) of the maximum probable exposure at a future date, used to set risk limits per counterparty beyond just current exposure.",
    questionFr: "Qu'est-ce que le PFE (Potential Future Exposure) ?",
    answerFr:
      "Une estimation statistique (souvent à un quantile donné, ex. 95%) de l'exposition maximale probable à une date future, utilisée pour fixer des limites de risque par contrepartie au-delà de la seule exposition actuelle.",
  },
  {
    question: "How does central clearing (a CCP) reduce counterparty risk?",
    answer:
      "The clearing house steps in between buyer and seller (novation), becoming the counterparty to each side, with daily margin calls and a mutualized default fund, which reduces and spreads bilateral risk.",
    questionFr: "Comment la compensation centrale (une CCP) réduit-elle le risque de contrepartie ?",
    answerFr:
      "La chambre de compensation s'interpose entre acheteur et vendeur (novation), devenant la contrepartie de chaque côté, avec des margin calls quotidiens et un fonds de défaillance mutualisé, ce qui réduit et répartit le risque bilatéral.",
  },
  {
    question: "What is Wrong-Way Risk?",
    answer:
      "The situation where exposure to a counterparty increases exactly when its probability of default also increases (adverse correlation between exposure and credit quality), amplifying the potential loss.",
    questionFr: "Qu'est-ce que le Wrong-Way Risk ?",
    answerFr:
      "La situation où l'exposition à une contrepartie augmente précisément quand sa probabilité de défaut augmente aussi (corrélation défavorable entre exposition et qualité de crédit), amplifiant la perte potentielle.",
  },
  {
    question: "What is the SA-CCR regulation?",
    answer:
      "Standardised Approach for Counterparty Credit Risk - a standard method (post-2008 crisis, Basel framework) for computing regulatory exposure to counterparty credit risk on derivatives, replacing older methods (CEM, standard IMM) with better recognition of netting and collateral.",
    questionFr: "Qu'est-ce que la régulation SA-CCR ?",
    answerFr:
      "Standardised Approach for Counterparty Credit Risk - une méthode standard (post-crise 2008, cadre Bâle) pour calculer l'exposition réglementaire au risque de contrepartie sur les dérivés, remplaçant les anciennes méthodes (CEM, IMM standard) avec une meilleure prise en compte du netting et du collateral.",
  },
  {
    question: "What is DVA (Debit/Debt Valuation Adjustment)?",
    answer:
      "The symmetric counterpart to CVA, reflecting an entity's own default risk from its counterparty's point of view - an accounting gain if its own credit quality deteriorates (an effect often criticized as counter-intuitive).",
    questionFr: "Qu'est-ce que le DVA (Debit/Debt Valuation Adjustment) ?",
    answerFr:
      "Le pendant symétrique du CVA, qui reflète le propre risque de défaut d'une entité du point de vue de sa contrepartie - un gain comptable si sa propre qualité de crédit se dégrade (un effet souvent critiqué comme contre-intuitif).",
  },
  {
    question: "Why did counterparty risk become a major regulatory concern after 2008?",
    answer:
      "The crisis (notably Lehman Brothers' default) exposed the scale of uncleared bilateral exposures on OTC derivatives, pushing the G20/Basel III to mandate central clearing, systematic collateralization, and dedicated capital charges (the CVA capital charge).",
    questionFr: "Pourquoi le risque de contrepartie est-il devenu un enjeu réglementaire majeur après 2008 ?",
    answerFr:
      "La crise (notamment le défaut de Lehman Brothers) a révélé l'ampleur des expositions bilatérales non compensées sur les dérivés OTC, poussant le G20/Bâle III à imposer la compensation centrale, la collatéralisation systématique, et des charges en capital dédiées (la CVA capital charge).",
  },
  {
    question: "What is the difference between Initial Margin (IM) and Variation Margin (VM)?",
    answer:
      "Variation Margin covers the current mark-to-market exposure and moves with daily price changes; Initial Margin is a separate buffer collected upfront to cover the potential future exposure that could build up between the last VM exchange and the time it takes to close out a defaulted counterparty's position.",
    questionFr: "Quelle est la différence entre l'Initial Margin (IM) et la Variation Margin (VM) ?",
    answerFr:
      "La Variation Margin couvre l'exposition mark-to-market courante et évolue avec les variations de prix quotidiennes ; l'Initial Margin est un coussin séparé collecté en amont pour couvrir l'exposition future potentielle qui pourrait se former entre le dernier échange de VM et le temps nécessaire pour déboucler la position d'une contrepartie en défaut.",
  },
  {
    question: "What are the Uncleared Margin Rules (UMR) and who do they affect?",
    answer:
      "A post-2008 regulatory framework requiring both Initial and Variation Margin to be exchanged on non-centrally-cleared OTC derivatives, phased in by counterparty size (largest first); it pushed many buy-side firms that were previously below the threshold to build IM/VM operational capabilities for the first time.",
    questionFr: "Que sont les Uncleared Margin Rules (UMR) et qui affectent-elles ?",
    answerFr:
      "Un cadre réglementaire post-2008 exigeant l'échange d'Initial Margin et de Variation Margin sur les dérivés OTC non compensés centralement, déployé progressivement selon la taille des contreparties (les plus grandes d'abord) ; il a poussé de nombreuses firmes buy-side auparavant sous le seuil à construire pour la première fois des capacités opérationnelles IM/VM.",
  },
  {
    question: "Beyond CVA and DVA, what other members of the \"XVA\" family exist and what do they cover?",
    answer:
      "FVA (Funding Valuation Adjustment) captures the cost of funding uncollateralized exposure; MVA (Margin Valuation Adjustment) captures the funding cost of posting Initial Margin; KVA (Capital Valuation Adjustment) captures the cost of the regulatory capital a trade consumes over its life.",
    questionFr: "Au-delà du CVA et du DVA, quels autres membres de la famille \"XVA\" existent et que couvrent-ils ?",
    answerFr:
      "Le FVA (Funding Valuation Adjustment) capture le coût de financement d'une exposition non collatéralisée ; le MVA (Margin Valuation Adjustment) capture le coût de financement du fait de poster de l'Initial Margin ; le KVA (Capital Valuation Adjustment) capture le coût du capital réglementaire qu'un trade consomme sur sa durée de vie.",
  },
  {
    question: "What is a netting set and why is it the key unit for exposure calculations?",
    answer:
      "The group of transactions with a single counterparty covered by one legally enforceable netting agreement (e.g. one ISDA Master Agreement); exposure, collateral, and capital calculations are generally performed at the netting set level rather than per individual trade, since that's the level at which offsetting is legally recognized on default.",
    questionFr: "Qu'est-ce qu'un netting set et pourquoi est-ce l'unité clé pour les calculs d'exposition ?",
    answerFr:
      "Le groupe de transactions avec une seule contrepartie couvert par un accord de netting légalement exécutoire (ex. un seul ISDA Master Agreement) ; les calculs d'exposition, de collateral et de capital sont généralement effectués au niveau du netting set plutôt que par trade individuel, car c'est le niveau auquel la compensation est légalement reconnue en cas de défaut.",
  },
  {
    question: "How does the Basel III leverage ratio interact with derivatives exposure, independent of risk-weighted measures?",
    answer:
      "The leverage ratio is a non-risk-based backstop: it caps total on- and off-balance-sheet exposure (including a standardized measure of derivatives exposure, SA-CCR-based) relative to capital, regardless of how low the risk-weighted exposure looks, discouraging excessive balance-sheet growth even on \"low-risk\" trades.",
    questionFr: "Comment le leverage ratio de Bâle III interagit-il avec l'exposition dérivés, indépendamment des mesures pondérées par le risque ?",
    answerFr:
      "Le leverage ratio est un garde-fou non basé sur le risque : il plafonne l'exposition totale au bilan et hors bilan (y compris une mesure standardisée de l'exposition dérivés, basée sur SA-CCR) par rapport au capital, quel que soit à quel point l'exposition pondérée par le risque paraît faible, décourageant une croissance excessive du bilan même sur des trades \"peu risqués\".",
  },
];
