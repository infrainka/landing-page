import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fi: {
    translation: {
      enter: "Astu HEIMOon",
      back: "← Takaisin aloitussivulle",
      role: "Full-stack verkkokehittäjä",
      org: "HEIMO Osuuskunnan työntekijä",
      experience: "Vuotta kokemusta",
      projectsCompleted: "Projektia valmistunut",
      clientSatisfaction: "Asiakastyytyväisyys",
      services: "Erikoistuneet palvelut",
      service1Title: "Verkkokauppojen modernisointi",
      service1Desc: "Verkkokauppa-alustojen uudistaminen huippusuorituskyvyn, intuitiivisen käyttökokemuksen ja parempien konversioiden saavuttamiseksi.",
      service2Title: "Verkkokehitys",
      service2Desc: "Räätälöityjen, responsiivisten verkkosivustojen rakentaminen juuri tarpeidesi mukaan.",
      service3Title: "Konfigurointi ja vianetsintä",
      service3Desc: "Tehokas vianmääritys, mutkaton konfigurointi ja olemassa olevien verkkosivustojen ja sovellusten nopea korjaus.",
      techStack: "Teknologia stack",
      letsTalk: "Tehdään yhteistyötä",
      contact: "Ota yhteyttä",
      email: "Sähköposti",
      phone: "Puhelin",
      employer: "Työnantaja",
      lang: "EN"
    }
  },
  en: {
    translation: {
      enter: "Enter HEIMO",
      back: "← Back to landing page",
      role: "Full-Stack Web Developer",
      org: "HEIMO Osuuskunta Employee",
      experience: "Years Experience",
      projectsCompleted: "Projects Completed",
      clientSatisfaction: "Client Satisfaction",
      services: "Specialized Services",
      service1Title: "Web Shop Modernization",
      service1Desc: "Revamping e-commerce platforms for peak performance, intuitive user experiences, and significantly higher conversion rates.",
      service2Title: "Web Development",
      service2Desc: "Building custom, responsive websites and web applications tailored exactly to your specific requirements.",
      service3Title: "Config & Troubleshooting",
      service3Desc: "Effective diagnosis, seamless configuration, and rapid fixing of existing websites and web applications to ensure smooth operations.",
      techStack: "Tech Stack",
      letsTalk: "Let's Work Together",
      contact: "Get in Touch",
      email: "Email",
      phone: "Phone",
      employer: "Employer",
      lang: "FI"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fi', // Set Finnish as default language
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
