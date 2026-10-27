import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "title": "Sobre Nosotros",
  "subtitle": "Vendemos tu casa en las mejores condiciones",
  "content": "Somos Vidal Servicios Inmobiliarios, una agencia con oficina en la calle Covadonga 36, en pleno centro de Gijón. Trabajamos la compraventa y el alquiler de pisos, casas, locales, negocios, fincas y solares en toda Asturias, desde un piso en Pumarín o La Calzada hasta una casa de piedra en plena Asturias rural.",
  "content2": "Nuestros clientes destacan el trato cercano y familiar, la transparencia y que nos encargamos de todos los trámites hasta la notaría, también si vives fuera de Asturias o en el extranjero. Además, presentamos cada inmueble con recreaciones y home staging virtual con IA para que el comprador vea todo su potencial.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/265/hero/nosotros_x-Vm4bGF.jpg",
  "services": [{
  "title": "Venta de inmuebles",
  "icon": "home"
}, {
  "title": "Valoración de tu propiedad",
  "icon": "trending-up"
}, {
  "title": "Búsqueda y compra de vivienda",
  "icon": "search"
}, {
  "title": "Alquiler",
  "icon": "key"
}, {
  "title": "Home staging virtual y recreaciones con IA",
  "icon": "sparkles"
}, {
  "title": "Traspaso de negocios y locales",
  "icon": "briefcase"
}],
  "maxServicesDisplayed": 6,
  "servicesSectionTitle": "Más información sobre los servicios que ofrecemos",
  "aboutSectionTitle": "Nuestra Misión",
  "buttonName": "Contacta a Nuestro Equipo",
  "showKPI": false,
  "kpi2Name": "Clientes satisfechos",
  "kpi2Data": "43+",
  "kpi3Name": "Zonas de actuación",
  "kpi3Data": "5",
  "kpi4Name": "Valoración media",
  "kpi4Data": "4.7/5",
  "values": [{
  "title": "Trato cercano y familiar",
  "description": "Comprar o vender una casa es una decisión importante; te atendemos de forma personal y siempre disponibles para ti.",
  "icon": "heart"
}, {
  "title": "Transparencia",
  "description": "Información clara y detallada de todos los pasos a seguir, desde la primera visita hasta la firma.",
  "icon": "shield-check"
}, {
  "title": "Te acompañamos hasta la notaría",
  "description": "Nos encargamos de todos los trámites y resolvemos las incidencias para que la operación llegue a buen puerto.",
  "icon": "file-signature"
}, {
  "title": "Aunque no vivas en Asturias",
  "description": "Atendemos a propietarios y compradores que viven fuera de Asturias o en el extranjero, sin que tengan que desplazarse.",
  "icon": "globe"
}],
  "team": [{
  "name": "Gema Vidal",
  "role": "Titular de la agencia"
}, {
  "name": "Oksana Sakada",
  "role": "Agente inmobiliaria"
}],
  "extendedServices": [{
  "title": "Venta de inmuebles",
  "description": "Vendemos tu casa en las mejores condiciones: preparamos el inmueble, lo difundimos, organizamos las visitas y negociamos hasta encontrar al comprador adecuado.",
  "icon": "home"
}, {
  "title": "Valoración de tu propiedad",
  "description": "Te decimos cuánto vale tu vivienda, local o finca con una valoración sin compromiso basada en el mercado real de Gijón y Asturias.",
  "icon": "trending-up"
}, {
  "title": "Búsqueda y compra de vivienda",
  "description": "Te ayudamos a encontrar tu hogar ideal y te acompañamos en la negociación con los propietarios y en cada paso de la compra.",
  "icon": "search"
}, {
  "title": "Alquiler",
  "description": "Gestionamos el alquiler de pisos, casas y locales, con asesoramiento cercano tanto al propietario como al inquilino.",
  "icon": "key"
}, {
  "title": "Home staging virtual y recreaciones con IA",
  "description": "Mostramos el potencial de cada inmueble con recreaciones y home staging virtual con IA, para que el comprador vea cómo quedaría reformado o amueblado.",
  "icon": "sparkles"
}, {
  "title": "Traspaso de negocios y locales",
  "description": "Intermediamos en traspasos de negocios en funcionamiento y en la venta y alquiler de locales comerciales, con la confidencialidad que cada operación necesita.",
  "icon": "briefcase"
}],
  "nosotrosPageTitle": "Sobre Nosotros",
  "nosotrosPageSubtitle": "Una agencia de Gijón con trato cercano, transparencia y atención a cada trámite hasta la notaría.",
  "servicesPageTitle": "Nuestros Servicios",
  "servicesPageSubtitle": "Venta, alquiler, valoración, búsqueda de vivienda, traspasos y home staging virtual con IA: todo lo que necesitas en un solo lugar.",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/265/hero/nosotros-top_7P8mBv6c.jpg",
  "originsTitle": "Una agencia cercana en el centro de Gijón",
  "originsContent": "Vidal Servicios Inmobiliarios tiene su oficina en la calle Covadonga 36, en pleno centro de Gijón. Desde aquí trabajamos la compraventa y el alquiler de pisos, casas, locales, negocios, fincas y solares en toda Asturias: de un piso en Pumarín o La Calzada a una casa de piedra en el Parque Natural de Redes.",
  "originsContent2": "Nuestros clientes destacan el trato cercano y familiar y que nos encargamos de todos los trámites hasta la notaría, también cuando el propietario vive fuera de Asturias o en el extranjero. Y para que cada comprador vea todo el potencial de una vivienda, la presentamos con recreaciones y home staging virtual con IA.",
  "originsImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/265/hero/contacto_PRF7nUhc.jpg"
};
}
