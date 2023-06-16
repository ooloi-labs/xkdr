import { Wrapper800, colors, SANS_3_4, SANS_4_5, PaddingBottom20, PaddingBottom40} from "oolib"
import { StyledContainer, StyledPageContentsWrapper, StyledInfoBlock, StyledBoldSpan, StyleUl, StyledTable, StyledTableHead, StyledTableData, StyledTableRow} from "./styled.index"
import { caseDataTableConfig, caseStatus, casesData, reportsStatusTableConfig } from "./config"
import { TableComponent } from '../../Comps/TableComponent'
import { courtsData } from '../Form/config'

export const DataInsights = () => {
  const years = Object.keys(casesData.BHC)
  const status = Object.keys(caseStatus.BHC)
  const calculateTotal = (data) => {
    return Object.values(data).reduce((acc, value) => acc + value, 0);
  };

  return (
    <StyledContainer>
      <Wrapper800 style={{ backgroundColor: colors.white, height: "100%", display: 'flex', position: 'relative'}}>
        <StyledPageContentsWrapper>
            <SANS_4_5 bold>How this data was computed</SANS_4_5>
            <PaddingBottom20 />
            <SANS_3_4>
              We analysed the cases filed and heard in three courts, the Bombay High Court (BHC), the National Company Law Tribunal (NCLT) and the Debt Recovery Tribunal (DRT) for the period January 2018 to December 2022 ("study period"). We sourced this data from the websites of the respective courts, using a web scraping tool created for this purpose. Our data set consists of case-specific information for specific types of cases that were filed and heard in the BHC, Mumbai bench of the NCLT and the Mumbai bench of DRT, during our study period: 
            </SANS_3_4>
            <PaddingBottom20 />
            <SANS_3_4>
            <StyledBoldSpan>For BHC:</StyledBoldSpan> Our data set covers 4 case types, namely, suits, summary suits, commercial suits and commercial summary suits, filed under its original jurisdiction. 
            <br/>
            <StyledBoldSpan>For NCLT:</StyledBoldSpan> The NCLT's jurisdiction extends to matters under three laws: the Companies Act, 2013 (CA), the IBC and the Limited Liability Partnership Act, 2008 (LLP). The dataset comprises of cases of the first two case-types.
            <br/>
            <StyledBoldSpan>For DRT:</StyledBoldSpan> The DRTs adjudicate cases arising under two laws: the Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act, 1993, and the Securitization & Reconstruction of Financial Assets & Enforcement of Security Interest (SARFAESI) Act, 2002. We use both these case-types. 
            </SANS_3_4>
            <PaddingBottom40/>
            
            <StyledInfoBlock>
              <SANS_3_4 bold style={{justifySelf: 'center'}}>No. of cases used for the analysis</SANS_3_4>
                  <TableComponent config={caseDataTableConfig} data={courtsData} courtType={['bombayHC', 'DRT', 'NCLT']}/>
              <SANS_3_4 underline>
                  For each of these cases, we obtain information on - 
              </SANS_3_4>
            <StyleUl>
              <li>
                <SANS_3_4>Filing date</SANS_3_4>
              </li>
              <li>
                <SANS_3_4>Disposal date</SANS_3_4>
              </li>
              <li>
                <SANS_3_4>Status of the case as on scraping date - Pending / Disposed</SANS_3_4>
              </li>
              <li>
                <SANS_3_4>List of hearing dates</SANS_3_4>
              </li>
              <li>
                <SANS_3_4>Unique Identifying Number (such as Case. No. or Registration No.)</SANS_3_4>
              </li>
            </StyleUl>
            </StyledInfoBlock>
            <PaddingBottom40 />

            <SANS_4_5 bold>Methodology</SANS_4_5>
            <PaddingBottom20 />
            <SANS_3_4>Our analysis of cases include both disposed OF cases and pending cases. The status of the cases in our dataset as of the scraping date, is as below:</SANS_3_4>
            <PaddingBottom20 />
            <SANS_3_4>For disposed of cases, we calculate the time to disposal as the difference between filing date to disposal date. For pending cases, we calculate the age of pending cases as the difference between filing date to scraping date. 
            </SANS_3_4>
            
            <PaddingBottom20 />              

            <TableComponent config={reportsStatusTableConfig} data={courtsData} courtType={['bombayHC', 'DRT', 'NCLT']}/>

            <PaddingBottom20 />              
            
            <SANS_3_4>(i) Average duration of a case from filing: To arrive at this, we use: </SANS_3_4>
            <SANS_3_4 bold italic>[(Average time to disposal for disposed cases* Total disposed cases) + (Average age of pending cases* Total pending cases)] / Total no. of cases
            </SANS_3_4>
            <PaddingBottom20 />

            <SANS_3_4>(ii) Time taken from filing for 50% of the cases: To calculate this we use, the median value of case duration for pending and disposed of cases. It is the point above and below which half (50%) of the observations in our dataset falls. 
            </SANS_3_4>
            <PaddingBottom20/>
           
            <SANS_3_4>
            (iii) Average time from filing to first hearing: Time to first hearing is calculated as the difference between the filing date and the date on which a first order was passed in a case, as available on the respective website of the courts, as on our scraping date. This is then aggregated and averaged for both pending and disposed of cases. 
            </SANS_3_4>
            <PaddingBottom20/>

            <SANS_3_4>(iv) Average number of hearings: Number of hearings denotes the number of orders available for a particular case on the respect website of the courts, as on our scraping date. This is calculated for both disposed of cases and pending cases. </SANS_3_4>
            <PaddingBottom20/>      

            <SANS_3_4>(v) Frequency of hearings: We calculate the distance between each order date to arrive at the frequency at which hearings take place for any particular court. </SANS_3_4>
        </StyledPageContentsWrapper>
      </Wrapper800>
    </StyledContainer>
  )
}
