import { SANS_3 } from 'oolib'
import { surveyConfig, surveyConfigHeaders } from './config'
import { StyledSurveyTableHead, StyledTable, StyledTableData, StyledTableHead } from './styled.index'

export const SurveyTable = () => {
  return (
    <div style={{ overflowX: 'scroll'}}>
            <StyledTable style={{borderCollapse: 'collapse'}}>
                <StyledSurveyTableHead>
                    <tr>
                    <StyledTableHead style={{position: 'sticky', left: 0, zIndex: 10}}>

                    </StyledTableHead>
                    {Object.keys(surveyConfigHeaders).map((header) => (
                        <StyledTableHead key={header}>
                            <SANS_3 bold>
                                {surveyConfigHeaders[header]}
                            </SANS_3>
                        </StyledTableHead>
                    ))}
                    </tr>
                </StyledSurveyTableHead>
                <tbody>
                    {Object.keys(surveyConfig).map((key) => (
                    <tr key={key}>
                        <StyledTableHead style={{position: 'sticky', left: 0}}>
                            <SANS_3 bold>{key}</SANS_3>
                        </StyledTableHead>
                        {Object.keys(surveyConfigHeaders).map((header) => (
                            key === "total" ? 
                            <StyledTableData key={header}>
                                <SANS_3>{surveyConfig[key][header]}</SANS_3>
                            </StyledTableData>
                            :
                            <StyledTableData key={header}>
                                <SANS_3>{surveyConfig[key][header]}%</SANS_3>
                            </StyledTableData>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </StyledTable>
    </div>
  )
}
