export const reportCofig ={

}

export const casesData = {
    BHC:{
        "2018":1335,
        "2019":933,
        "2020":604,
        "2021":1020,
        "2022":993,
    },
    NCLT:{
        "2018":919,
        "2019":1773,
        "2020":1982,
        "2021":3138,
        "2022":2959,
    },
    DRT:{
        "2018":1411,
        "2019":1360,
        "2020":742,
        "2021":714,
        "2022":582,
    }
}

export const caseStatus = {
    BHC:{
        "Disposed":1339,
        "Pending":3546,
    },
    NCLT:{
        "Disposed":4266,
        "Pending":6550,
    },
    DRT:{
        "Disposed":1034,
        "Pending":3775,
    }
}

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
    cornerLabel: 'Filing year' 
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
    cornerLabel: 'Filing year' 
}