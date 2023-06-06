

export const chequeBounceInfo = 'Info about what to do if cheque bounce case'

export const headerConfig = {
    basedData: "This is on the basis of the following data",
    averageDisposal: "Average time for disposal from filing date",
    fiftyPercent: "50% of the cases take upto",
    averageHearing: "Average number of hearings until disposal",
    averageFirstHering: "Average number of days until first hearing from the date of filing"    
}


export const courtTypesConfig = {
    bombayHC: {
        courtTitle: 'The Bombay HC',
        shortTitle: 'Bombay HC',
        content: {
            basedData:{
                subHeading: 'between 2018 to 2022',
                heading: '4,800 cases filed',
            },
            averageDisposal: {
                subHeading: '',
                heading: ' 1 year 11 months',
            },
            fiftyPercent: {
                subHeading: '',
                heading: ' 2 years 2 months',
            },
            averageHearing: {
                subHeading: '',
                heading: '3 with 1 hearing every 6 months',
            },
            averageFirstHering:{ 
                subHeading: '',
                heading: '9 Months',
            }
        },
    },
    DRT: {
        courtTitle: 'Debts Recovery Tribunal',
        shortTitle: 'DRT and Bombay HC',
        content: {
            basedData:{
                subHeading: 'between 2018 to 2022',
                heading: '4,800 cases filed',
            },
            averageDisposal: {
                subHeading: '',
                heading: ' 1 year 11 months',
            },
            fiftyPercent: {
                subHeading: '',
                heading: ' 2 years 2 months',
            },
            averageHearing: {
                subHeading: '',
                heading: '3 with 1 hearing every 6 months',
            },
            averageFirstHering:{ 
                subHeading: '',
                heading: '9 Months',
            }
        },
        
    },
    NCLT: {
        courtTitle: 'National Company Law Tribunal',
        shortTitle: 'NCLT',
        content: {
            basedData:{
                subHeading: 'between 2018 to 2022',
                heading: 'NCLT : 10,800 cases ',
            },
            averageDisposal: {
                subHeading: '',
                heading: '1 year 8 months',
            },
            fiftyPercent: {
                subHeading: '',
                heading: '1 year 6 months',
            },
            averageHearing: {
                subHeading: '',
                heading: '7 with 1 hearing in 1.5 months',
            },
            averageFirstHering:{ 
                subHeading: '',
                heading: '1 year 12 days',
            }
        },
    }
   
}