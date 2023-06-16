

export const chequeBounceInfo = 'If Cheque Bounce was "Yes", then additional information that the matter could be pursued in criminal courts and so we provide more info with a link'

export const cardsTitle = {
    averageDisposalTime: {
        icon: "HourGlassHigh",
        text:"Average duration of a case from filing" 
    },
    timeTaken: {
        icon: "HourGlassHorizontal",
        text: "Time taken from filing for 50% of the cases"
    },
    avgFirstHearing: {
        icon: "CalenderX",
        text:"Average time from filing to first hearing"
    },
    numOfHearings:{ 
        icon: "WaveCurve",
        text: "Average number of hearings"
    },
    freqOfHearings: {
        icon: "WaveTriangle",
        text: "Frequency of hearings",
    },
    
}

export const courtDataTableHeadersConfig = {
    veritcalHeaderKeys: {
        valuePath: 'data',
        keys:{
            averageDisposalTime: "Average duration of a case from filing",
            timeTaken: "Time taken from filing for 50% of the cases",
            avgFirstHearing: "Average time from filing to first hearing",    
            numOfHearings: "Average number of hearings",
            freqOfHearings:"Frequency of hearings ",
        }
    },
    horizontalHeaderKeys: {
        valuePath: 'courtTitle',
        keys:{
            bombayHC:'bombayHC',
            DRT:'DRT',
            NCLT:'NCLT'
        }
    },
    cornerLabel: 'Metrics' 
}

export const surveyConfigHeaders2 = {
    veritcalHeaderKeys: {
        valuePath: 'surveyData',
        keys:{
            efficiency:"Efficiency",
            effectiveness:"Effectiveness",
            predictability:"Predictability",
            independence:"Independence",	
            accessibility:"Accessibility",
            total:"Total",
            percent: '%'
        }
    },
    horizontalHeaderKeys: {
        valuePath: 'shortTitle',
        keys:{
            bombayHC:'bombayHC',
            DRT:'DRT',
            NCLT:'NCLT'
        }
    },
    cornerLabel: 'Composite scores' 
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
   