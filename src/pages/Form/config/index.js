export const firstPageId = "creditorOrDebtor";

export const formConfig = {
  
  creditorOrDebtor: {
    id: "creditorOrDebtor",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Are you a creditor or debtor",
      options: [
        {
          display: "Creditor (Bank/NBFC)",
          value: "creditorBankNBFC",
          linkTo: "amountThreshold",
        },
        {
          display: "Creditor (Other)",
          value: "creditorOther",
          linkTo: "amountThreshold",
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
  amountThreshold: {
    id: "amountThreshold",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Assuming that you need help recovering a debt, What is the amount owed to you?",
      options: [
        {
          display: "Less than Rupees 20 lac",
          value: "lessThan20L",
          linkTo: "thisWebsiteIrrelevantPage",
          linkToProps: { 
            header: 'Amount owed is below 20 Lakhs',
            text: "for disputes/matters that pertain to amounts less than 20L you can approach lower civil courts.",
            bottomText: "for more information you can see this link: ",
            link: {linkText: 'Project Nyayya', url: 'https://nyaaya.org/'}
          }
        },
        { 
          display: "Between Rupees 20 lac and Rs. 1 crore", 
          value: "TwLToOneCr", 
          $decide: {
            decisionKey: 'creditorOrDebtor',
            answersToResultsMap: {
                creditorBankNBFC: { linkTo: 'courtPage', linkToProps: { courtType: ['DRT'] }},
                creditorOther: { linkTo: 'thisWebsiteIrrelevantPage', linkToProps: { text: 'You can approach the Mumbai bench of the City Civil Court' }}
            }
          } 
        },
        { display: "Above Rs. 1 crore", value: "above1Cr", linkTo: "natureOfDebtor" },
      ],
      listType: "vertical",
    },
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
                    decisionKey: 'creditorOrDebtor',
                    answersToResultsMap: {
                        creditorBankNBFC: { linkTo: 'courtPage', linkToProps: { courtType: ['bombayHC', 'DRT'] }}, 
                        creditorOther: { linkTo: 'courtPage', linkToProps: { courtType: ['bombayHC'] } }
                    }
                }
            },
            {
                display: 'Incorporated Company/LLP', 
                value: 'incCompany', 
                $decide: {
                    decisionKey: 'creditorOrDebtor',
                    answersToResultsMap: {
                      creditorBankNBFC: { linkTo: 'courtPage', linkToProps: { courtType: ['bombayHC', 'DRT', 'NCLT'] }}, 
                      creditorOther: { linkTo: 'courtPage', linkToProps: { courtType: ['bombayHC', 'NCLT'] } }
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
