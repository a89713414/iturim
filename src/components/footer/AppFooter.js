import React from 'react';
import {
  CContainer,
  CRow,
  CCol,
} from '@coreui/react';
import { cilPhone, cilEnvelopeOpen, cilClock, cilLocationPin, cibFacebook, cibInstagram, cibLinkedin } from '@coreui/icons';
import CIcon from '@coreui/icons-react'
import Logo from "../../assets/images/logo.png"
const AppFooter = ({ texts }) => {
  const { footer } = texts
  const { email, phone } = footer

  return (
    <footer className="footer-section">
      <CContainer fluid className="py-5 px-4 footer-wrapper">
        <CRow>
          {/* Right Side (Logo and company info) */}
          <CCol md={6} className="d-flex flex-column align-items-start">
            <div className="footer-logo">
              <img src={Logo} alt="לוגו החברה" />
            </div>
            <div className="company-info mt-3">
              <p>
                חברת איתורים - פתרונות פיננסים פועלת משנת 2019 במטרה לעזור ללוות ולהבטיח את השקט הפיננסי שלכם
              </p>
              <div className="google-map mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.994545373868!2d34.78401967575947!3d32.01645152113644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9f64b835a5%3A0x13bb5f4e90f52036!2z15HXkdeT15nXmdeZINeV16jXpyDXmNeV15jXqNeQ!5e0!3m2!1siw!2sil!4v1696686690595!5m2!1siw!2sil"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מיקום החברה"
                />

              </div>

            </div>
          </CCol>

          {/* Left Side (Contact Info and Social Media) */}
          <CCol md={6} className="d-flex flex-column align-items-end">
            <div className="contact-info mb-3">
              <div className="contact-item">
                <CIcon icon={cilPhone} className="me-2" />
                <a href="tel:+97237383815">

                  <span>03-7383815</span>
                </a>
              </div>
              <div className="contact-item">
                <CIcon icon={cilEnvelopeOpen} className="me-2" />
                <a href="mailto:support@iturimglobal.com">

                  <span>support@iturimglobal.com</span>
                </a>
              </div>
              <div className="contact-item">
                <CIcon icon={cilClock} className="me-2" />
                <span>א'-ה': 9:00 - 19:00</span>
              </div>
              <div className="contact-item">
                <CIcon icon={cilLocationPin} className="me-2" />
                <span>הרוקמים 26, חולון, ישראל</span>
              </div>
            </div>

            <div className="social-media mt-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577940368947"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CIcon
                  icon={cibFacebook}
                  className="social-icon"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </a>

              <CIcon icon={cibInstagram} className="social-icon" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              <CIcon icon={cibLinkedin} className="social-icon" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
            </div>

            <div className="footer-text mt-4">
              <p>
                המידע המוצג אינו מהווה ייעוץ/שיווק השקעות ואינו מהווה תחליף לייעוץ מס, ייעוץ משפטי ו/או תחליף לייעוץ אישי, המתחשב בנתונים ובצרכים של כל אדם. אין בשירות משום המלצה או חוות דעת ואינו בא במקום שיקול דעת עצמאי של המשתמש. אין באמור משום הבטחת תשואה או רווח ו/או הצעה לרכישת שירות. ייתכן שבמידע המוצג נפלו שיבושים ו/או שגיאות ו/או טעויות ו/או אי דיוקים אשר החברה אינה נושאת באחריות להם.
              </p>
              <p className='copyright'>&copy; כל הזכויות שמורות לחברת איתורים - פתרונות פיננסים בע”מ 2019 Ⓒ</p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </footer>
  )
}

export default React.memo(AppFooter)
