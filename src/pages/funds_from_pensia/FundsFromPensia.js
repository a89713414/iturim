import React from 'react';
import { CContainer, CRow, CCol } from '@coreui/react';

// Texts object containing the content
const texts = {
  companyName: "איתורים - פתרונות פיננסים",
  aboutUsData: [
    {
      title: "משיכות כספים",
      description: [
        "חברתו מתמחה בפדיון כספי הפנסיה ללא צורך בהתפטרות ממקום העבודה, כמו כן אנו בודקים האם ניתן למשוך את הכספים ללא תשלום המס כחוק.",
        "מתמחים במשיכת כספיי פיצויים ללא טפסי 161 וללא מכתב פיטורין מהמעסיק.",
        "משיכת קרנות השתלמות לפני מועד הנזילות בליווי מלא מול רשויות המס וחברות הביטוח.",
        "איתור ופדיון כספים מול כלל חברות הביטוח.",
        "מחפשים פתרון כלכלי? צריך כסף מהר ומיידי? זמני המתנה ובירוקרטיה מסורבלת מחרפנים אותך? צריך לפדות כספים ולא יודעים איך?",
        "ומה קורה לגבי כסף שמגיע לך ממס הכנסה? תביא לו להמשיך “לשכב” מבלי להנות מהפרשי הצמדה וריבית של 4% עבורו (שמהם לא מנכים מס!)?!",
        "בשביל זה אנחנו כאן!! איתורים - פתרונות פיננסים פועלת למענך ובשבילך, להוציא לך את הכסף ביעילות ובמהירות מחברות הביטוח ומרשויות המס ולך נותר רק להנות ממנו!"
      ]
    }
  ]
};

export const FundsFromPensia = () => {
  return (
    <CContainer className="pages_wrapper_container">
      <CRow>
        <CCol>
          <h1>{texts.companyName}</h1>
          {texts.aboutUsData.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              {section.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ))}
        </CCol>
      </CRow>
    </CContainer>
  );
};
