import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Gijón"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Vendemos tu casa en las mejores condiciones",
  "subtitle": "Agencia inmobiliaria en el centro de Gijón dedicada a la compraventa y el alquiler de pisos, casas, locales, negocios y fincas en toda Asturias.",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/265/hero/cimadevilla-hq_PV5Q1Qu8.jpg",
  "type": "image"
}],
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/265/hero/cimadevilla-hq_PV5Q1Qu8.jpg",
  "backgroundVideo": "",
  "backgroundType": "image",
  "findPropertyButton": "Explorar Propiedades",
  "contactButton": "Contáctanos",
  "slides": [{
  "title": "Inmuebles",
  "subtitle": "Consulta toda nuestra oferta de inmuebles en Asturias",
  "buttonText": "Saber más",
  "href": "#properties"
}, {
  "title": "Vender",
  "subtitle": "Vendemos tu casa en las mejores condiciones",
  "buttonText": "Valora tu propiedad",
  "href": "/vender"
}, {
  "title": "Compraventa",
  "subtitle": "Te acompañamos en cada paso, hasta la notaría",
  "buttonText": "Ver en venta",
  "href": "/venta-propiedades/todas-ubicaciones"
}]
};
}
