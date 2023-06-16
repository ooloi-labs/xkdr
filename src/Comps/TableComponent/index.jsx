import { generateTableCellText } from '../../pages/Form/generatedComps/CourtPage/utils';
import { StyledTable, StyledTableData, StyledTableHead, StyledTableRow } from './styled.index'
import { colors, SANS_3, SANS_4_5, toArray } from 'oolib';

// eslint-disable-next-line
export const TableComponent = ({data, config, courtType}) => {

  let numOfContainers = ''
  const TitleComp =  SANS_3 
  // eslint-disable-next-line
  const { veritcalHeaderKeys, horizontalHeaderKeys, cornerLabel} = config

  return (
    <>
        <StyledTable>
                <thead>
                    <tr>
                        <StyledTableHead>
                            <TitleComp color={'#F54C31'} bold>
                                {cornerLabel}
                            </TitleComp>
                        </StyledTableHead>
                        {Object.keys(horizontalHeaderKeys.keys).map((headerKey) => {
                            return(    
                                <StyledTableHead key={headerKey}>
                                    <TitleComp color={'#F54C31'} bold>
                                        {data[headerKey][horizontalHeaderKeys.valuePath]}
                                    </TitleComp>
                                </StyledTableHead>
                            )     
                        })}
                    </tr>
                </thead>    
                <tbody>
                {Object.keys(veritcalHeaderKeys.keys).map((key) => {
                    const propertyKey = key;
                    return (
                        <StyledTableRow key={key}>

                        <StyledTableData key={key} numOfContainers={numOfContainers}>
                            <TitleComp color={colors.greyColor80}>
                                {veritcalHeaderKeys.keys[key]}
                            </TitleComp>
                        </StyledTableData>

                            {Object.keys(horizontalHeaderKeys.keys).map((courtName) => (
                                <StyledTableData key={key} numOfContainers={numOfContainers}>
                                <TitleComp color={colors.greyColor80} bold>
                                    {generateTableCellText({text: data[horizontalHeaderKeys.keys[courtName]][veritcalHeaderKeys.valuePath][key], key: propertyKey})}
                                </TitleComp>
                                </StyledTableData>
                            ))}

                        </StyledTableRow>
                    );
                    })}
                        
                </tbody>
            </StyledTable>
    </>
  )
}
