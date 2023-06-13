export const firstPageId = "jurisForDispute";

export const formConfig = {
  jurisForDispute: {
    id: "jurisForDispute",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "1. Is Mumbai the jurisdiction for your dispute?",
      options: [
        { display: "Yes", value: true, linkTo: "creditorOrDebtor" },
        {
          display: "No",
          value: false,
          linkTo: "thisWebsiteIrrelevantPage",
          linkToProps: {
            showContactForm: true,
            text: "This website is currently a prototype with data and support for debt recovery related benches and courts in Mumbai and not other jurisdictions.",
          },
        },
      ],
      listType: "vertical",
    },
  },
  creditorOrDebtor: {
    id: "creditorOrDebtor",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Are you the creditor or debtor",
      options: [
        {
          display: "Creditor",
          value: "creditor",
          linkTo: "helpRecoveringDebt",
        },
        { display: "Debtor", value: "debtor", linkTo: "whichForum" },
      ],
      listType: "vertical",
    },
  },
  whichForum: {
    id: "whichForum",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: [
        "Our assumption is that someone has sued your or taken you to court because you allegedly owe them money.",
        "Which forum have they taken you to court in?",
      ],
      options: [
        {
          display: "Lower or other Civil Courts",
          value: "lowerOrCivilCourts",
          linkTo: "thisWebsiteIrrelevantPage",
          linkToProps: { 
            header: "Oh No ...",
            text: "This website is currently a prototype with data and support for debt recovery related benches and courts in Mumbai and not other jurisdictions. " },
        },
        {
          display: "Criminal Court",
          value: "criminalCourt",
          linkTo: "thisWebsiteIrrelevantPage",
          linkToProps: { 
            header: "Oh No ...",
            text: "This website is currently a prototype with data and support for debt recovery related benches and courts in Mumbai and not other jurisdictions. " },
        },
        {
          display: "NCLT",
          value: "NCLT",
          linkTo: "courtPage",
          linkToProps: { courtType: ["NCLT"] },
        },
        {
          display: "DRT",
          value: "DRT",
          linkTo: "courtPage",
          linkToProps: { courtType: ["DRT"] },
        },
        {
          display: "Bombay High Court",
          value: "bombayHC",
          linkTo: "courtPage",
          linkToProps: { courtType: ["bombayHC"] },
        },
      ],
      listType: "vertical",
    },
  },
  helpRecoveringDebt: {
    id: "helpRecoveringDebt",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Do you need help recovering a debt?",
      options: [
        { display: "Yes", value: true, linkTo: "bouncedCheque" },
        { display: "No", value: false, linkTo: "suedBySomeone" },
      ],
      listType: "vertical",
    },
  },
  bouncedCheque: {
    id: "bouncedCheque",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Does the default involve a bounced cheque??",
      options: [
        { display: "Yes", value: true, linkTo: "amountThreshold20L" },
        { display: "No", value: false, linkTo: "amountThreshold20L" },
      ],
      listType: "vertical",
    },
  },
  suedBySomeone: {
    id: "suedBySomeone",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Have you been sued by someone who you owe money?",
      options: [
        { display: "Yes", value: true, linkTo: "whichForum" },
        {
          display: "No",
          value: false,
          linkTo: "thisWebsiteIrrelevantPage",
          linkToProps: { 
            showContactForm: true,
            header: "what are you doing on this website?",
            text: "Please fill out this form so we can understand your query" 
            },
        },
      ],
      listType: "vertical",
    },
  },
  amountThreshold20L: {
    id: "amountThreshold20L",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Is the amount owed to you above or below 20L?",
      options: [
        {
          display: "Less than 20 L",
          value: "lessThan20L",
          linkTo: "thisWebsiteIrrelevantPage",
          linkToProps: { 
            header: 'Amount owed is below 20 Lakhs',
            text: "for disputes/matters that pertain to amounts less than 20L you can approach lower civil courts.",
            bottomText: "for more information you can see this link: ",
            link: {linkText: 'Project Nyayya', url: 'https://nyaaya.org/'}
          }
        },
        { display: "Above 20 L", value: "above20L", linkTo: "bankNBFCOrOther" },
      ],
      listType: "vertical",
    },
  },
  bankNBFCOrOther: {
    id: "bankNBFCOrOther",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Are you a Bank/NBFC or Other",
      options: [
        {
          display: "Bank/NBFC",
          value: "bankNBFC",
          linkTo: "amountThreshold1Cr",
        },
        { display: "Other", value: "other", linkTo: "amountThreshold1Cr" },
      ],
      listType: "vertical",
    }
  },
  amountThreshold1Cr: {
    id: 'amountThreshold1Cr',
    pageType: 'questionPage',
    comp: 'RadioList',
    props: {
        label: 'Is the debt amount above 1 Cr',
        options: [
            {display: 'Yes', value: true, linkTo: 'natureOfDebtor'},
            {
                display: 'No', 
                value: false, 
                $decide: {
                    decisionKey: 'bankNBFCOrOther',
                    answersToResultsMap: {
                        bankNBFC: { linkTo: 'courtPage', linkToProps: { courtType: ['DRT'] }},
                        other: { linkTo: 'thisWebsiteIrrelevantPage', linkToProps: { text: 'You can approach the Mumbai bench of the City Civil Court' }}
                    }
                }
            },
        ],
      listType: "vertical",  
    }
  },
  natureOfDebtor: {
    id: 'natureOfDebtor',
    pageType: 'questionPage',
    comp: 'RadioList',
    props: {
        label: 'What is the nature of the debtor?',
        options: [
            {
                display: 'Individual/Other', 
                value: 'individual', 
                $decide: {
                    decisionKey: 'bankNBFCOrOther',
                    answersToResultsMap: {
                        bankNBFC: { linkTo: 'courtPage', linkToProps: { courtType: ['DRT', 'bombayHC'] }},
                        other: { linkTo: 'courtPage', linkToProps: { courtType: ['bombayHC'] }}
                    }
                }
            },
            {
                display: 'Incorporated Company/LLP', 
                value: 'incCompany', 
                $decide: {
                    decisionKey: 'bankNBFCOrOther',
                    answersToResultsMap: {
                        bankNBFC: { linkTo: 'courtPage', linkToProps: { courtType: ['DRT', 'NCLT', 'bombayHC'] }},
                        other: { linkTo: 'courtPage', linkToProps: { courtType: ['NCLT', 'bombayHC'] }}
                    }
                }
            },
        ]
    }
  },
  // end pages
  thisWebsiteIrrelevantPage: {
    id: "onlyMumbaiEndPage",
    pageType: "endPage",
    comp: "TextDisplayComp",
    props: {},
  },
  courtPage: {
    id: "courtPage",
    pageType: "endPage",
    comp: "CourtPage",
    props: {},
  },
};
