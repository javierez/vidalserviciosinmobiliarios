

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Vidal Servicios Inmobiliarios",
  "address": {
  "street": "Calle Covadonga 36, bajo",
  "city": "Gijón",
  "state": "Asturias",
  "country": "España",
  "postalCode": "33205"
},
  "phoneNumbers": {
  "main": "+34 644 57 58 41"
},
  "emailAddresses": {
  "info": "vidalserviciosinmobiliarios@gmail.com"
},
  "scheduleInfo": {
  "weekdays": "9:30 – 14:00 y 16:30 – 20:00",
  "saturday": "Cerrado",
  "sunday": "Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Vidal+Servicios+Inmobiliarios+Calle+Covadonga+36+Gij%C3%B3n",
  "isDefault": true
}],
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/265/hero/contacto_PRF7nUhc.jpg"
};
}

