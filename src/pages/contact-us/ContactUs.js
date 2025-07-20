import React, { useState } from 'react';
import {
  CForm, CFormInput, CFormSelect, CFormCheck, CButton,
  CContainer, CRow, CCol, CCard, CCardBody, CCardHeader, CAlert
} from '@coreui/react';
import emailjs from '@emailjs/browser';
import QRCODE from "../../assets/images/qrcode.png";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    prefix: '+972',
    mobileCompany: '050',
    workHours: 'כן',
    email: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);

    try {
      await emailjs.send(
        "service_lghbbor",
        "template_vyku6dw",
        formData,
        "iCNanvpi4hzx1qvx6"
      );
      setSent(true);
      setFormData({
        firstName: '', lastName: '', prefix: '+972', mobileCompany: '050',
        workHours: 'כן', email: '', message: ''
      });
    } catch (err) {
      setError('שליחה נכשלה. נסה שוב מאוחר יותר.');
    } finally {
      setSending(false);
    }
  };

  return (
    <CContainer className="mt-5" dir="rtl">
      <CRow className="align-items-center">
        <CCol md={8}>
          <CCard>
            <CCardHeader>צור קשר</CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow className="mb-3">
                  <CCol>
                    <CFormInput label="שם פרטי *" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </CCol>
                  <CCol>
                    <CFormInput label="שם משפחה *" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CCol md={4}>
                    <CFormSelect
                      label="קידומת מדינה *"
                      name="prefix"
                      value={formData.prefix}
                      onChange={handleChange}
                      style={{ direction: 'rtl', textAlign: 'center' }}
                      required
                    >
                      <option value="">בחר קידומת</option>
                      <option value="+972">IL (+972)</option>
                      <option value="+1">US (+1)</option>
                      <option value="+44">UK (+44)</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormSelect
                      label="חברת מובייל *"
                      name="mobileCompany"
                      value={formData.mobileCompany}
                      onChange={handleChange}
                      style={{ direction: 'rtl', textAlign: 'center' }}
                      required
                    >
                      <option value="">בחר חברה</option>
                      <option value="050">050</option>
                      <option value="052">052</option>
                      <option value="053">053</option>
                      <option value="054">054</option>
                      <option value="055">055</option>
                      <option value="058">058</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={4}>
                    <CFormInput label="טלפון" name="phone" onChange={handleChange} required />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CCol>
                    <label className="mb-2 d-block">בזמן עבודה *</label>
                    <CFormCheck inline type="radio" label="כן" name="workHours" value="כן" checked={formData.workHours === 'כן'} onChange={handleChange} />
                    <CFormCheck inline type="radio" label="לא" name="workHours" value="לא" checked={formData.workHours === 'לא'} onChange={handleChange} />
                    <CFormCheck inline type="radio" label="אחר" name="workHours" value="אחר" checked={formData.workHours === 'אחר'} onChange={handleChange} />
                  </CCol>
                </CRow>

                <CFormInput label="אימייל" name="email" value={formData.email} onChange={handleChange} className="mb-3" />
                <CFormInput component="textarea" label="הודעה" name="message" value={formData.message} onChange={handleChange} rows={3} className="mb-3" />

                {error && <CAlert color="danger">{error}</CAlert>}
                {sent && <CAlert color="success">הטופס נשלח בהצלחה!</CAlert>}

                <CButton type="submit" color="warning" className="text-white px-5 py-2" disabled={sending}>
                  {sending ? 'שולח...' : 'צור קשר'}
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol
          md={4}
          className="text-center"
          style={{ alignSelf: 'center' }}
        >
          <img src={QRCODE} alt="WhatsApp QR" style={{ width: '200px' }} />
        </CCol>
      </CRow>
    </CContainer>
  );
};
