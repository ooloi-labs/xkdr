import { SANS_3 } from 'oolib'
import { surveyConfig, surveyConfigHeaders } from './config'
import { StyledSurveyTableHead, StyledTable, StyledTableData, StyledTableData2, StyledTableHead, StyledTableRow } from './styled.index'
import { useState } from 'react';

export const SurveyTable = () => {

  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedKeys = Object.keys(surveyConfig).sort((a, b) => {
    const columnA = surveyConfig[a][sortColumn];
    const columnB = surveyConfig[b][sortColumn];
    // Compare the values based on sortOrder ('asc' or 'desc')
    if (sortOrder === 'asc') {
      return columnA - columnB;
    } else {
      return columnB - columnA;
    }
  });

  return (
    <div style={{ marginLeft: '-120px', width: '100%' }}>
      <StyledTable style={{ borderCollapse: 'collapse' }}>
        <StyledSurveyTableHead>
          <StyledTableRow>
            <StyledTableHead style={{ position: 'sticky', left: 0, zIndex: 10 }}>
              <SANS_3 bold color={'#F54C31'}>
                Composite scores
              </SANS_3>
            </StyledTableHead>
            {Object.keys(surveyConfigHeaders).map((header) => (
              <StyledTableHead key={header} onClick={() => handleSort(header)}>
                <SANS_3 bold color={'#F54C31'}>
                  {surveyConfigHeaders[header]}
                </SANS_3>
              </StyledTableHead>
            ))}
          </StyledTableRow>
        </StyledSurveyTableHead>
        <tbody>
          {sortedKeys.map((key) => (
            <StyledTableRow key={key}>
              <StyledTableData2 style={{ position: 'sticky', left: 0 }}>
                <SANS_3 bold>{key}</SANS_3>
              </StyledTableData2>
              {Object.keys(surveyConfigHeaders).map((header) => (
                <StyledTableData key={header}>
                  {header === 'total' ? (
                    <SANS_3>{surveyConfig[key][header]}%</SANS_3>
                  ) : (
                    <SANS_3>{surveyConfig[key][header]}</SANS_3>
                  )}
                </StyledTableData>
              ))}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  )
}
