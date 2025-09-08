import React from 'react'
import { CContainer, CRow, CCol, CImage } from '@coreui/react'
import arrow from '../../assets/svg-icons/arrow.svg'
import { Card, Title } from '../../components'
export const TaxRefund = ({ texts, direction }) => {
  const {
    processStepsTitle,
    processStepsCardsData,
  } = texts.home
  return (

    <CContainer fluid className="p-0 pt-3 process_steps_container justify-content-center ">
      <Title title={processStepsTitle} size="display-6" />
      <section className="hiw">
        <CContainer className="items">
          {processStepsCardsData.map((card, index) => {
            return (
              <CRow className="item" key={card.title}>
                <CCol xs={12} sm={12} md={4} lg={4}>
                  <div className="text">
                    <div className="txt">
                      <h3 className="item-name">
                        <span className="number">{index + 1}.</span> {card.title}
                      </h3>
                      {card.content}
                    </div>
                  </div>
                </CCol>
                <CCol xs={12} sm={12} md={4} lg={4} className="arrow_wrapper">
                  <CImage src={arrow} className="arrow" />
                </CCol>
                <CCol xs={12} sm={12} md={4} lg={4}>
                  <Card imgeSrc={card.imgSrc} direction={direction} />
                </CCol>
              </CRow>
            )
          })}
        </CContainer>
      </section>
    </CContainer>

  )
}
