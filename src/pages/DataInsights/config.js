export const reportsStatusTableConfig = {
    veritcalHeaderKeys: {
        valuePath: 'caseStatus',
        keys:{
            "Disposed":"Disposed",
            "Pending":"Pending",
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
    cornerLabel: 'Filing year',
    total: 'caseStatus'  
}

export const caseDataTableConfig = {
    veritcalHeaderKeys: {
        valuePath: 'caseData',
        keys:{
            "2018":2018,
            "2019":2019,
            "2020":2020,
            "2021":2021,
            "2022":2022,
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
    cornerLabel: 'Filing year',
    total: 'caseData' 
}


export const surveyMethodTable = {
    Efficiency: "This forum is most likely to dispose of my matter in a timely manner",    
    Effectiveness: "Once a judgement is pronounced by this forum, it is easy for me to recover the amount specified in the judgement decree.",
    Predictability: ['I had clarity on the sequence of stages in my matter', "It is likely that a hearing will be held on the scheduled date."],
    Independence: "I can trust this forum to make an unbiased decision based on the merits of the case.",
    Accessibility: ['It is affordable to resolve my case in this forum', 'It is easy to physically navigate through this forum.', "The forum's staff are helpful and courteous.", "This forum's website is most likely to have the information that I was looking for.", "The filing process is easy in this forum."]
}