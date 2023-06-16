import { StyledTable, StyledTableData, StyledTableHead, StyledTableRow } from './styled.index'
import { colors, SANS_3, toArray } from 'oolib';
import { generateTableCellText } from './utils';

// eslint-disable-next-line
export const TableComponent = ({ data, config, courtType }) => {
    let numOfContainers = "";
    const TitleComp = SANS_3;
  // eslint-disable-next-line
    const { veritcalHeaderKeys, horizontalHeaderKeys, cornerLabel } = config;
  
    // Filter data based on courtType
    const filteredData = Object.keys(data).reduce((filtered, key) => {
      if (toArray(courtType).includes(key)) {
        filtered[key] = data[key];
      }
      return filtered;
    }, {});
  
    // Get the valid horizontal header keys
    const validHorizontalKeys = Object.keys(horizontalHeaderKeys.keys).filter(
      (courtName) => filteredData[horizontalHeaderKeys.keys[courtName]]
    );
  
    return (
      <>
        <StyledTable>
          <thead>
            <tr>
              <StyledTableHead>
                <TitleComp color={"#F54C31"} bold>
                  {cornerLabel}
                </TitleComp>
              </StyledTableHead>
              {validHorizontalKeys.map((headerKey) => (
                <StyledTableHead key={headerKey}>
                  <TitleComp color={"#F54C31"} bold>
                    {filteredData[headerKey][horizontalHeaderKeys.valuePath]}
                  </TitleComp>
                </StyledTableHead>
              ))}
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
  
                  {validHorizontalKeys.map((courtName) => (
                    <StyledTableData
                      key={key}
                      numOfContainers={numOfContainers}
                    >
                      <TitleComp color={colors.greyColor80} bold>
                        {generateTableCellText({
                          text:
                            filteredData[horizontalHeaderKeys.keys[courtName]][
                              veritcalHeaderKeys.valuePath
                            ][key],
                          key: propertyKey,
                        })}
                      </TitleComp>
                    </StyledTableData>
                  ))}
                </StyledTableRow>
              );
            })}
          </tbody>
        </StyledTable>
      </>
    );
  };

        // <StyledTable>
        //         <thead>
        //             <tr>
        //                 <StyledTableHead>
        //                     <TitleComp color={'#F54C31'} bold>
        //                         Metrics
        //                     </TitleComp>
        //                 </StyledTableHead>
        //                 {toArray(courtType).map((court) => (
        //                     <StyledTableHead key={court}>
        //                         <TitleComp color={'#F54C31'} bold>
        //                             {courtsData[court].courtTitle}
        //                         </TitleComp>
        //                     </StyledTableHead>
        //                 ))}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {Object.keys(courtDataTableHeadersConfig).map(key => {
        //                     let propertyKey = key
        //                     return (
        //                         <StyledTableRow key={key}>
        //                                 <StyledTableData key={key} numOfContainers={numOfContainers}>
        //                                     <TitleComp color={colors.greyColor80}>
        //                                         {courtDataTableHeadersConfig[key]}
        //                                     </TitleComp>
        //                                 </StyledTableData>
        //                             {toArray(courtType).map(courtName => (
        //                                 <StyledTableData key={key} numOfContainers={numOfContainers}>
        //                                     <TitleComp color={colors.greyColor80} bold>
        //                                         {generateTableCellText({text: courtsData[courtName].data[key], key:propertyKey})}
        //                                     </TitleComp>
        //                                 </StyledTableData>
        //                             ))}
        //                         </StyledTableRow>
        //                         )
        //                     })}
        //         </tbody>
        //     </StyledTable>