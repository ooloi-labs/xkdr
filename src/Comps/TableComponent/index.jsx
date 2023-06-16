import { courtDataTableHeadersConfig, surveyConfigHeaders } from '../../pages/Form/generatedComps/CourtPage/config';
import { StyledTable, StyledTableData, StyledTableHead } from './styled.index'
import { colors, SANS_3, SANS_4_5} from 'oolib';

export const TableComponent = ({data, config}) => {

  let numOfContainers = ''
  const TitleComp = numOfContainers > 2 ? SANS_3 : SANS_4_5

  return (
    <>
        <StyledTable>
                <thead>
                    <tr>
                        <StyledTableHead>
                            <TitleComp color={'#F54C31'} bold>
                                
                            </TitleComp>
                        </StyledTableHead>

                        <StyledTableHead>
                            <TitleComp color={'#F54C31'} bold>

                            </TitleComp>
                        </StyledTableHead>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                                <StyledTableData >
                                    <TitleComp>
                                        
                                    </TitleComp>
                                </StyledTableData>
                            {
                                <StyledTableData >
                                    <TitleComp color={colors.greyColor80} bold>
                                        
                                    </TitleComp>
                                </StyledTableData>
                            }
                        </tr>
                    }
                </tbody>
            </StyledTable>
    </>
  )
}
