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