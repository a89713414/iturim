import React from 'react'
import { Form } from '../../components/index'
import { CContainer, CRow, CCol } from '@coreui/react'
import { Card } from '../../components/index'
import arrow from '../../assets/svg-icons/arrow.svg'
import { Title } from '../../components/index'
import { Link } from 'react-router-dom'

export const Home = ({ texts, direction }) => {
  const {
    cardsData,
    cardsButtonTitle,
    whyUsTitle,
    whyUsContent,
    customersRecommendTitle,
    customersRecommendSubTitle,
    customersRecommendContent,
    customersRecommendImges,
  } = texts.home

  return (
    <CContainer fluid className="p-0">
      <CContainer className="pt-5 pb-5 text-center home_header_wrapper" fluid style={{ backgroundColor: "#061A28" }}>
        <h1 className='white_header'>הידעת?</h1>
        <h1 className='trans_header'>אצלנו תוכלו למשוך את הפנסיה<br /> ללא צורך בהתפטרות!</h1>
        <p >
          בדקו עכשיו<br />בצורה קלה ומהירה כמה מגיע לכם
        </p>
        <Link to="/contact-us"><button>לבדיקת זכאות למשיכה ללא עלות</button></Link>
      </CContainer>


      <CContainer className="pt-5">
        <Title
          title={texts?.home.subTitle}
          size="display-5"
          subtitle={texts?.home.subTitleText}
        />
        <CRow className="justify-content-center">
          {cardsData.map((card) => (
            <CCol
              xs={12}
              sm={12}
              md={6}
              lg={3}
              key={card.title}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                title={card.title}
                to={card.to}
                buttonTitle={cardsButtonTitle}
                icon={card.icon}
              />
            </CCol>
          ))}
        </CRow>
      </CContainer>

      <CContainer className='pb-5 pt-5 text-center d-flex  align-items-center'>
        <CContainer className='home_bg_background_section_wrapper'>
          <h5 ><strong>מבקר המדינה חשף – המדינה חייבת 3.6 מיליארד ₪ שנגבו במיסים עודפים!</strong></h5>
          <p ><strong>איתורים - פתרונות פיננסים&nbsp;מציעה בדיקת זכאות מהירה להחזרי מס עם צוות מקצועי מהשורה הראשונה.</strong></p>
          <p >הבדיקה בליווי חברה פרטית להחזרי מס&nbsp;בעלת רישיון, אנו מייצגים מורשים מול מס הכנסה.</p>
          <p >ל-8 מכל 10 אזרחים מגיע החזר מס בגובה&nbsp;8,000 ש"ח&nbsp;בממוצע ישירות אל חשבון הבנק!</p>
          <p >גם לכם מגיע החזר מס?</p>
          <Link to="/contact-us">
            <button>התחילו בדיקת זכאות בכמה שניות</button>
          </Link>
        </CContainer>
      </CContainer>

      <CContainer
        fluid
        className="why_us_wrapper text-center d-flex flex-column align-items-center"
      >
        <CRow>
          <CCol>
            <h2 className="why_us_title">{whyUsTitle}</h2>
          </CCol>
        </CRow>
        <CRow className="w-100 justify-content-around">
          {whyUsContent.map((v) => (
            <CCol key={v.text} xs={6} sm={6} md={3} lg={3} className="text-center">
              <img src={v.imgSrc} />
              <div className="image-text">{v.text}</div>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </CContainer>
  )
}
