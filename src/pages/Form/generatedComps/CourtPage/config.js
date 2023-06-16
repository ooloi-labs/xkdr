

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

export const courtDataTableHeadersConfig2 = {
    veritcalHeaderKeys: {
        valuePath: 'data',
        keys:{
            averageDisposalTime: "Average duration of a case from filing",
            numOfHearings: "Average number of hearings",
            avgFirstHearing: "Average time from filing to first hearing",    
            timeTaken: "Time taken from filing for 50% of the cases",
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

export const courtsData = {
    bombayHC: {
        shortTitle: 'Bombay HC',
        courtTitle: 'Bombay HC',
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
   