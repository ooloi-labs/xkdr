

export const chequeBounceInfo = 'If Cheque Bounce was "Yes", then additional information that the matter could be pursued in criminal courts and so we provide more info with a link'

export const cardsTitle = {
    averageDisposalTime: {
        icon: "HourGlassHigh",
        text:"Average duration of a case from filing" 
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
    timeTaken: {
        icon: "HourGlassHorizontal",
        text: "Time taken from filing for 50% of the cases"
    }
}


export const courtDataTableHeadersConfig = {
    averageDisposalTime: "Average duration of a case from filing",
    numOfHearings: "Average number of hearings",
    avgFirstHearing: "Average time from filing to first hearing",    
    timeTaken: "Time taken from filing for 50% of the cases",
    freqOfHearings:"Frequency of hearings ",
}

export const surveyConfigHeaders = {
    compositeScores:"Composite scores",
    efficiency:"Efficiency",
    effectiveness:"Effectiveness",
    predictability:"Predictability",
    independence:"Independence",	
    accessibility:"Accessibility",
    total:"Total %",
}

export const courtsData = {
    bombayHC: {
        shortTitle: 'Bombay HC',
        courtTitle: 'Bombay HC',
        data: {
                // basedData: '"4,800 cases filed"',
                // averageDisposal: '2 years 2 months',
                // fiftyPercent: '1 year 11 months',
                // averageHearing: '3 hearings',
                // freqOfHearings: '1 hearing every 6 months',
                // averageFirstHering: '9 months'

                averageDisposalTime:26,
                timeTaken:23,
                numOfHearings:3,
                freqOfHearings: {hearing: 1, inMonths: 6},
                avgFirstHearing:{year: 0, months: 9, days: 0, stringRep: '9 months', totalValue: 9 },
            },
        surveyData: {
                compositeScores:0.65,
                efficiency:0.71,
                effectiveness:0.64,
                predictability:0.83,
                independence:0.76,	
                accessibility:3.60,
                total:71.91,
            },    
        },
    DRT: {
        shortTitle: 'DRT',
        courtTitle: 'Debts Recovery Tribunal',
        data: {
                // basedData: '"4,800 cases filed"',
                // averageDisposal:'2 years 8 months',
                // fiftyPercent: '1 year 3 months',
                // averageHearing: '3 hearings',
                // freqOfHearings: '1 hearing every 6 months',
                // averageFirstHering: '1 year 6 months',

                averageDisposalTime:32,
                timeTaken:15,
                numOfHearings:3,
                freqOfHearings:{hearing: 1, inMonths: 6},
                avgFirstHearing: {year: 1, months: 6, days: 0, stringRep: '1 year, 6 months', totalValue: 18},
            },
        surveyData: {
                compositeScores:0.54,
                efficiency:0.57,
                effectiveness:0.49,
                predictability:0.51,
                independence:0.54,	
                accessibility:2.64,
                total:52.90,
            },
        },
    NCLT: {
        shortTitle: 'NCLT',
        courtTitle: 'National Company Law Tribunal',
        data: {
                // basedData: '"10,800 cases filed"',
                // averageDisposal: '1 year 8 months',
                // fiftyPercent: '1 year 6 months',
                // averageHearing:  '7 hearings',
                // freqOfHearings: '1 hearing every 1.5 months',
                // averageFirstHering:'1 year 12 days'

                averageDisposalTime:20,
                timeTaken:18,
                numOfHearings:7,
                freqOfHearings:{hearing: 1, inMonths: 1.5},
                avgFirstHearing:{year: 1, months: 0, days: 0, stringRep: '1 year', totalValue: 12},
            },
        surveyData :{
                compositeScores:0.81,
                efficiency:0.75,
                effectiveness:0.72,
                predictability:0.61,
                independence:0.70,	
                accessibility:3.59,
                total:71.82,
            },
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
        }    
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
        }
        }       
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
   