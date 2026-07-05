export const questions = [
  {
    question: "What is counterparty risk?",
    answer:
      "The risk that a counterparty to a financial contract (derivative, loan, repo...) defaults before final maturity, causing a loss if the exposure at that moment is positive for the other party.",
  },
  {
    question: "Difference between credit risk and counterparty risk?",
    answer:
      "Classic credit risk concerns an exposure known in advance (e.g. a loan); counterparty risk concerns an uncertain, time-varying exposure (e.g. a derivative's market value), since it depends on how markets move.",
  },
  {
    question: "What is EAD (Exposure At Default) in this context?",
    answer:
      "The estimated exposure at the moment the counterparty defaults; for derivatives, it combines current exposure with an estimate of the potential future evolution of the contract's value.",
  },
  {
    question: "What is CVA (Credit Valuation Adjustment)?",
    answer:
      "The valuation adjustment reflecting the cost of counterparty risk on a derivative — the difference between the portfolio's \"risk-free\" value and its value once the counterparty's default probability is accounted for.",
  },
  {
    question: "What is netting and why does it matter?",
    answer:
      "An agreement (e.g. an ISDA Master Agreement) that lets you offset positive and negative positions with the same counterparty into a single net exposure, sharply reducing exposure on default compared to a gross sum.",
  },
  {
    question: "What is collateral and a margin call?",
    answer:
      "Guarantees (cash, securities) exchanged periodically between counterparties to cover the current exposure of a derivatives portfolio; a margin call adjusts that collateral based on market moves (often daily), reducing residual exposure.",
  },
  {
    question: "What is PFE (Potential Future Exposure)?",
    answer:
      "A statistical estimate (often at a given quantile, e.g. 95%) of the maximum probable exposure at a future date, used to set risk limits per counterparty beyond just current exposure.",
  },
  {
    question: "How does central clearing (a CCP) reduce counterparty risk?",
    answer:
      "The clearing house steps in between buyer and seller (novation), becoming the counterparty to each side, with daily margin calls and a mutualized default fund, which reduces and spreads bilateral risk.",
  },
  {
    question: "What is Wrong-Way Risk?",
    answer:
      "The situation where exposure to a counterparty increases exactly when its probability of default also increases (adverse correlation between exposure and credit quality), amplifying the potential loss.",
  },
  {
    question: "What is the SA-CCR regulation?",
    answer:
      "Standardised Approach for Counterparty Credit Risk — a standard method (post-2008 crisis, Basel framework) for computing regulatory exposure to counterparty credit risk on derivatives, replacing older methods (CEM, standard IMM) with better recognition of netting and collateral.",
  },
  {
    question: "What is DVA (Debit/Debt Valuation Adjustment)?",
    answer:
      "The symmetric counterpart to CVA, reflecting an entity's own default risk from its counterparty's point of view — an accounting gain if its own credit quality deteriorates (an effect often criticized as counter-intuitive).",
  },
  {
    question: "Why did counterparty risk become a major regulatory concern after 2008?",
    answer:
      "The crisis (notably Lehman Brothers' default) exposed the scale of uncleared bilateral exposures on OTC derivatives, pushing the G20/Basel III to mandate central clearing, systematic collateralization, and dedicated capital charges (the CVA capital charge).",
  },
];
