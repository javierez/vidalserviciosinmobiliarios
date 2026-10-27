
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Vidal Servicios Inmobiliarios",
  "description": "Agencia inmobiliaria en el centro de Gijón: compraventa y alquiler de pisos, casas, locales y fincas en toda Asturias.",
  "socialLinks": {
  "facebook": "https://www.facebook.com/Vidal-Servicios-Inmobiliarios-300047960706636/",
  "instagram": "https://www.instagram.com/vidal_servicios_inmobiliarios/"
},
  "officeLocations": [{
  "name": "Vidal Servicios Inmobiliarios",
  "address": ["Calle Covadonga 36, bajo", "Gijón, Asturias"],
  "phone": "+34 644 57 58 41",
  "email": "vidalserviciosinmobiliarios@gmail.com"
}],
  "copyright": "© 2026 Vidal Servicios Inmobiliarios. Todos los derechos reservados. Foto de portada: Gabriel Villena, CC BY 2.0 (creativecommons.org/licenses/by/2.0), retocada."
};
}
