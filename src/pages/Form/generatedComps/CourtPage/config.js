

export const chequeBounceInfo = 'If Cheque Bounce was "Yes", then additional information that the matter could be pursued in criminal courts and so we provide more info with a link'

export const cardsTitle = {
    averageDisposalTime: {
        icon: "",
        text:"Average time for disposal from filing date" 
    },
    timeTaken: {
        icon: "",
        text: "50% of the cases take between"
    },
    numOfHearings:{ 
        icon: "",
        text: "Average Number of hearings until disposal:"
    },
    freqOfHearings: {
        icon: "",
        text: "Frequency of hearings until disposal:",
    },
    avgFirstHearing: {
        icon: "",
        text:"Average number of days until first hearing from the date of filing"
    },
}

export const cardInfoConfig = {
    bombayHC: {
        averageDisposalTime:26,
        timeTaken:23,
        numOfHearings:3,
        freqOfHearings: {hearing: 1, inMonths: 6},
        avgFirstHearing:{year: 0, months: 9, days: 0},
    },
    DRT: {
        averageDisposalTime:20,
        timeTaken:18,
        numOfHearings:7,
        freqOfHearings:{hearing: 1, inMonths: 1.5},
        avgFirstHearing: {year: 1, months: 0, days: 12},
    },
    NCLT: {
        averageDisposalTime:32,
        timeTaken:15,
        numOfHearings:3,
        freqOfHearings:{hearing: 1, inMonths: 6},
        avgFirstHearing:{year: 1, months: 0, days: 0,},
    }
}


export const courtInfoHeadersConfig = {
    // basedData: "Average time for disposal from filing date",
    averageDisposal: "Average time for disposal from filing date",
    fiftyPercent: "50% of the cases take between",
    averageHearing: "Average Number of hearings until disposal",
    freqOfHearings:"Frequency of hearings ",
    averageFirstHering: "Average number of days until first hearing from the date of filing"    
}

export const courtTypesConfig2 = {
    bombayHC: {
        shortTitle: 'Bombay HC',
        courtTitle: 'The Bombay HC',
        data: {
                // basedData: '"4,800 cases filed"',
                averageDisposal: '2 years 2 months',
                fiftyPercent: '1 year 11 months',
                averageHearing: '3 hearings',
                freqOfHearings: '1 hearing every 6 months',
                averageFirstHering: '9 months'
            },
        },
    DRT: {
        shortTitle: 'DRT',
        courtTitle: 'Debts Recovery Tribunal',
        data: {
                // basedData: '"4,800 cases filed"',
                averageDisposal:'2 years 8 months',
                fiftyPercent: '1 year 3 months',
                averageHearing: '3 hearings',
                freqOfHearings: '1 hearing every 6 months',
                averageFirstHering: '1 year 6 months'
            }
        },
    NCLT: {
        shortTitle: 'NCLT',
        courtTitle: 'National Company Law Tribunal',
        data: {
                // basedData: '"10,800 cases filed"',
                averageDisposal: '1 year 8 months',
                fiftyPercent: '1 year 6 months',
                averageHearing:  '7 hearings',
                freqOfHearings: '1 hearing every 1.5 months',
                averageFirstHering:'1 year 12 days'
            }
        },
    }
   


// export const courtTypesConfig = {
//     bombayHC: {
//         courtTitle: 'Bombay HC',
//         shortTitle: 'Bombay HC',
//         content: {
//             basedData:{
//                 heading: '"4,800 cases filed" before the Bombay HC between 2018 and 2022',
//             },
//             averageDisposal: {
//                 heading: 'Average time for disposal from filing date of Bombay Hight court : "2 years 2 months"',
//             },
//             fiftyPercent: {
//                 heading: '50% of the cases take upto "1 year 11 months"',
//             },
//             averageHearing: {
//                 heading: 'Average Number of hearings until disposal: "3 with 1 hearing every 6 months"',
//             },
//             averageFirstHering:{ 
//                 heading: 'Average number of days until first hearing from the date of filing: "9 months"',
//             }
//         },
//     },
//     DRT: {
//         courtTitle: 'Debts Recovery Tribunal',
//         shortTitle: 'DRT',
//         content: {
//             basedData:{
//                 heading: '"4,800 cases filed" before the Mumbai bench of the DRT between 2018 and 2022',
//             },
//             averageDisposal: {
//                 heading: 'Average time for disposal from filing date of DRT : "2 years 8 months"',
//             },
//             fiftyPercent: {
//                 heading: '50% of the cases take upto "1 year 3 months"',
//             },
//             averageHearing: {
//                 heading: 'Average Number of hearings until disposal: "3 with 1 hearing every 6 months"',
//             },
//             averageFirstHering:{ 
//                 heading: 'Average Number of hearings until disposal: "1 year 6 months"',
//             }
//         },
        
//     },
//     NCLT: {
//         courtTitle: 'National Company Law Tribunal',
//         shortTitle: 'NCLT',
//         content: {
//             basedData:{
//                 heading: '"10,800 cases filed" before the Mumbai bench of the NCLT between 2018 and 2022',
//             },
//             averageDisposal: {
//                 heading: 'Average time for disposal from filing date of NCLT : "1 year 8 months"',
//             },
//             fiftyPercent: {
//                 heading: '50% of the cases take upto "1 year 6 months"',
//             },
//             averageHearing: {
//                 heading: 'Average Number of hearings until disposal: "7 with 1 hearing every 1.5 months"',
//             },
//             averageFirstHering:{ 
//                 heading: 'Average Number of days until first hearing from the date of filing: "1 year 12 days"',
//             }
//         },
//     }
   
// }

// export const courtTypesConfig3 = {
//     bombayHC: {
//         shortTitle: 'Bombay HC',
//         courtTitle: 'The Bombay HC',
//         data: {
//             averageDisposalTime: '"4,800 cases filed" before the Bombay HC between 2018 and 2022',
//             timeTaken: 'Average time for disposal from filing date of Bombay Hight court : "2 years 2 months"',
//             numOfHearings: '50% of the cases take upto "1 year 11 months"',
//             freqOfHearings: 'Average Number of hearings until disposal: "3 with 1 hearing every 6 months"',
//             avgFirstHearing: 'Average number of days until first hearing from the date of filing: "9 months"'
//             },
//         },
//     DRT: {
//         shortTitle: 'DRT',
//         courtTitle: 'Debts Recovery Tribunal',
//         data: {
//             averageDisposalTime: '"4,800 cases filed" before the Bombay HC between 2018 and 2022',
//             timeTaken: 'Average time for disposal from filing date of Bombay Hight court : "2 years 2 months"',
//             numOfHearings: '50% of the cases take upto "1 year 11 months"',
//             freqOfHearings: 'Average Number of hearings until disposal: "3 with 1 hearing every 6 months"',
//             avgFirstHearing: 'Average number of days until first hearing from the date of filing: "9 months"'
//             }
//         },
//     NCLT: {
//         shortTitle: 'NCLT',
//         courtTitle: 'National Company Law Tribunal',
//         data: {
//             averageDisposalTime: '"4,800 cases filed" before the Bombay HC between 2018 and 2022',
//             timeTaken: 'Average time for disposal from filing date of Bombay Hight court : "2 years 2 months"',
//             numOfHearings: '50% of the cases take upto "1 year 11 months"',
//             freqOfHearings: 'Average Number of hearings until disposal: "3 with 1 hearing every 6 months"',
//             avgFirstHearing: 'Average number of days until first hearing from the date of filing: "9 months"'
//             }
//         },
//     }
   