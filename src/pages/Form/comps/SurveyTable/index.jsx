import { SANS_3 } from 'oolib'
import { surveyConfig, surveyConfigHeaders } from './config'
import { StyledSurveyTableHead, StyledTable, StyledTableData, StyledTableData2, StyledTableHead, StyledTableRow } from './styled.index'

export const SurveyTable = () => {
  return (
    <div style={{ overflowX: 'scroll'}}>
            <StyledTable style={{borderCollapse: 'collapse'}}>
                <StyledSurveyTableHead>
                    <StyledTableRow>
                    <StyledTableHead style={{position: 'sticky', left: 0, zIndex: 10}}>
                        <SANS_3 bold>
                            Composite scores
                        </SANS_3>
                    </StyledTableHead>
                    {Object.keys(surveyConfigHeaders).map((header) => (
                        <StyledTableHead key={header}>
                            <SANS_3 bold>
                                {surveyConfigHeaders[header]}
                            </SANS_3>
                        </StyledTableHead>
                    ))}
                    </StyledTableRow>
                </StyledSurveyTableHead>
                <tbody>
                    {Object.keys(surveyConfig).map((key) => (
                    <StyledTableRow key={key}>
                        <StyledTableData2 style={{position: 'sticky', left: 0}}>
                            <SANS_3 bold>{key}</SANS_3>
                        </StyledTableData2>
                        {Object.keys(surveyConfigHeaders).map((header) => ( 
                            <StyledTableData key={header}>
                                {header === "total" ?
                                <SANS_3>{surveyConfig[key][header]}%</SANS_3>
                                :
                                <SANS_3>{surveyConfig[key][header]}</SANS_3>
                                }
                            </StyledTableData>
                        ))}
                    </StyledTableRow>
                    ))}
                </tbody>
            </StyledTable>
    </div>
  )
}
