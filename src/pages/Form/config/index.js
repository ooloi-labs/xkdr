export const firstPageId = "creditorOrDebtor";

export const formConfig = {
  
  creditorOrDebtor: {
    id: "creditorOrDebtor",
    pageType: "questionPage",
    comp: "RadioList",
    props: {
      label: "Are you a creditor or debtor ?",
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
        "Our assumption is that someone has sued you or taken you to court because you allegedly owe them money.",
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
            text: "for disputes/matters that pertain to amounts less than 20L you can approach Lower Civil Courts.",
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



export const courtsData = {
  bombayHC: {
      shortTitle: 'Bombay HC',
      courtTitle: 'Bombay Hght Court',
      data: {
              // basedData: '"4,800 cases filed"',
              averageDisposalTime:26,
              timeTaken:23,
              numOfHearings:3,
              freqOfHearings: {hearing: 1, inMonths: 6},
              avgFirstHearing:{year: 0, months: 9, days: 0, stringRep: '9 months', totalValue: 9 },
          },
      surveyData: {
              efficiency:0.65,
              effectiveness:0.71,
              predictability:0.64,
              independence:0.83,
              accessibility:0.76,	
              total:3.60,
              percent:71.91,
          },
      caseData: {
              "2018":1335,
              "2019":933,
              "2020":604,
              "2021":1020,
              "2022":993,
      },
      caseStatus:{
              "Disposed":1339,
              "Pending":3546,
      }        
      },
  DRT: {
      shortTitle: 'DRT',
      courtTitle: 'Debts Recovery Tribunal',
      data: {
              // basedData: '"4,800 cases filed"',
              averageDisposalTime:32,
              timeTaken:15,
              numOfHearings:3,
              freqOfHearings:{hearing: 1, inMonths: 6},
              avgFirstHearing: {year: 1, months: 6, days: 0, stringRep: '1 year, 6 months', totalValue: 18},
          },
      surveyData: {
              efficiency:0.54,
              effectiveness:0.57,
              predictability:0.49,
              independence:0.51,
              accessibility:0.54,	
              total:2.64,
              percent:52.90,
          },
      caseData: {
              "2018":1411,
              "2019":1360,
              "2020":742,
              "2021":714,
              "2022":582,
      },
      caseStatus:{
              "Disposed":1034,
              "Pending":3775,
      }             
      },
  NCLT: {
      shortTitle: 'NCLT',
      courtTitle: 'National Company Law Tribunal',
      data: {
              // basedData: '"10,800 cases filed"',
              averageDisposalTime:20,
              timeTaken:18,
              numOfHearings:7,
              freqOfHearings:{hearing: 1, inMonths: 1.5},
              avgFirstHearing:{year: 1, months: 0, days: 0, stringRep: '1 year', totalValue: 12},
          },
      surveyData :{
              efficiency:0.81,
              effectiveness:0.75,
              predictability:0.72,
              independence:0.61,
              accessibility:0.70,	
              total:3.59,
              percent:71.82,
          },
      caseData: {
              "2018":919,
              "2019":1773,
              "2020":1982,
              "2021":3138,
              "2022":2959,
      },
      caseStatus:{
              "Disposed":4266,
              "Pending":6550,
      }           
      },
  ADR: {
      shortTitle: '',
      courtTitle: '',
      data: { },
      surveyData:{
          compositeScores:0.73,
          efficiency:0.54,
          effectiveness:0.73,
          predictability:0.73,
          independence:0.79,	
          accessibility:3.52,
          total:70.39,
      }, 
      caseData:{ },
      caseStatus:{ }      
      },
  MM: {
      shortTitle: '',
      courtTitle: '',
      data: { },
      surveyData: {
          compositeScores:0.53,
          efficiency:0.52,
          effectiveness:0.58,
          predictability:0.55,
          independence:0.54,	
          accessibility:2.71,
          total:54.22,
      },
      caseData: { },
      caseStatus:{ }   
      }       
  }
 