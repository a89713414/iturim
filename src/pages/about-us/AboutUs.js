import React from 'react';
import { CContainer, CRow, CCol } from '@coreui/react';


const texts = {
  companyName: "חברת איתורים בע\"מ",
  aboutUsData: [
    {
      title: "מי אנחנו",
      description: [
        "חברת איתורים - פתרונות פיננסים פועלת משנת 2019 במטרה לעזור ללוות ולהבטיח את השקט הפיננסי שלכם",
      ]
    },
    {
      title: "חברת איתורים",
      description: [
        "חברת איתורים הוקמה בכדי לתת מענה מקצועי ואמין לכל השכירים בארץ.",
        "בחברתנו מועסקים יועצי המס ורואי החשבון ברמה הגבוהה ביותר אשר יבטיחו לכם החזר מס מירבי באפס מאמץ.",
        "כמו כן מועסקים גם כן סוכני ביטוח מכלל החברות אשר יבדקו לכם את התיק הביטוח ללא עלות ויבדקו אם יש מקום להוזיל או לשפר.",
        "בנוסף אנחנו עובדים עם משרד עורכי דין הגדול בארץ המתמחה בתביעות מול ביטוח לאומי.",
        "בחברתנו עובדים מומחים פנסיונים אשר יעזרו לכם למשוך את הפנסיה שלכם ללא צורך בהתפטרות מהעבודה ויבדקו האם ניתן לפטור את הכספים ממס.",
        "אחד מיתרונותיה הבולטים של חברת איתורים - פתרונות פיננסים הינו הטיפול המסור של עובדי החברה ומענה מהיר ללקוחותינו."
      ]
    }
  ]
};

export const AboutUs = ({ direction }) => {
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
