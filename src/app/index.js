import 'normalize.css'
import React from 'react'
import { PDFViewer, Document, View, Link } from '@react-pdf/renderer'
import { ThemeProvider } from '@react-pdf/styled-components'
import iconSources from '../icon-sources'
import theme from '../theme'
import {
  Heading,
  Section,
  ListItem,
  WorkPost,
  Resume,
  EducationPost,
  Language,
  Insight,
  TechGroup
} from '../components'
import { Page, Row, Column } from './elements'
import './styles.css'

export default function App() {
  return (
    <PDFViewer className="pdf" frameBorder="0">
      <ThemeProvider theme={theme}>
        <Document>
          <Page size="A4">
            <Heading
              title="Ricardo Q. Bazan"
              subtitle="Software Developer"
              information={{
                phone: '+51-986006178',
                email: 'raquirozbazan@gmail.com',
                website: 'https://sxntixgo.codes',
                location: 'Trujillo - Perú'
              }}
            />
            <Row>
              <Column style={{ marginRight: 16, width: '55%' }}>
                <Section title="Experiencia Laboral">
                  <WorkPost
                    style={{ marginBottom: 8 }}
                    title="Software Consultant"
                    companyName="Independiente"
                    location="Trujillo - Perú"
                    period="09/2019 - Actualidad"
                  >
                    <ListItem>
                      Contruí la plataforma B2B denominada{' '}
                      <Link src="https://www.linkedin.com/company/wbn-inc/">
                        Worldwide Business Network
                      </Link>
                      , optando el rol de Frontend Engineer para el modulo de
                      perfiles.
                    </ListItem>
                    <ListItem>
                      Brindo consultoria para empresas, acerca de practicas
                      modernas de desarrollo de software, en temas que van desde
                      el prototipado hasta el despliegue continuo de una
                      aplicación web.
                    </ListItem>
                    <ListItem>
                      Dicto Workshops para empresas, acerca de desarrollo de
                      software como FullStack NodeJS Developer, con el objetivo
                      de motivar la adopción del stack tecnológico propuesto.
                    </ListItem>
                    <ListItem>
                      Desarrollo la aplicación móvil de toma de pedidos
                      denominada Taker para{' '}
                      <Link src="https://sumerius.pe/">Sumerius</Link>,
                      utilizando React Native y PouchDB como principales
                      tecnologías de desarrollo.
                    </ListItem>
                    <ListItem>
                      Desarrollo constantemente proyectos Open Source (OSS) con
                      la intencion de aprender nuevas tecnologias y validar mis
                      conocimientos. Todos estos visibles:{' '}
                      <Link src="https://sxntixgo.codes/work">
                        https://sxntixgo.codes/work
                      </Link>
                    </ListItem>
                  </WorkPost>
                  <WorkPost
                    style={{ marginBottom: 8 }}
                    title="FullStack NodeJS Developer"
                    companyName="Riqra"
                    location="Lima - Perú"
                    period="02/2018 - 08/2019"
                    description="Riqra es una Startup peruana dedicada a digitalizar las ventas B2B/B2C de LATAM, mediante un software como servicio ofrecido como una solución tecnológica a proveedores y distribuidores."
                  >
                    <ListItem>
                      Construí la más reciente versión de la plataforma
                      e-commerce, soportando características generales y
                      especificas en cada una las instancias replicadas de
                      nuestros clientes.
                    </ListItem>
                    <ListItem>
                      Implementé y mantuve características dentro de nuestro
                      GraphQL API. Así como también mejoras en el tratamiento de
                      las transacciones web.
                    </ListItem>
                    <ListItem>
                      Integré sistemas de terceros con nuestro API con el fin de
                      mantener ambos entornos actualizados, implementando un
                      servidor de integración basado en flujo de datos.
                    </ListItem>
                    <ListItem>
                      Implementé la librería de componentes web para el sistema
                      de diseño de la compañía, estando en constante evolución
                      debido al uso de la misma en diferentes proyectos.
                    </ListItem>
                  </WorkPost>
                  <WorkPost
                    title="Android Developer"
                    companyName="Wando"
                    location="Trujillo - Perú"
                    period="07/2016 - 06/2017"
                    description="Wando es una Startup peruana dedicada a construir software y brindar consultorias de marca"
                  >
                    <ListItem>
                      Aprendí el uso de nuevas tecnologías con dispositivos
                      Beacon y el protocolo NFC como miembro en demostraciones
                      de innovación tecnológica.
                    </ListItem>
                    <ListItem>
                      Usé el potencial y robustez de Firebase como
                      infraestructura, además de utilizar los servicios de
                      Fabric.io como Crashlytics y BetaTesting.
                    </ListItem>
                    <ListItem>
                      Diseñé e implementé software como parte del proyecto
                      corporativo llamado Delivery. Además, realicé
                      mantenimiento de software a la aplicación Android de toma
                      de pedidos, usando librerias como Dagger2, Retrofit,
                      Requery and RxJava2.
                    </ListItem>
                  </WorkPost>
                </Section>
              </Column>
              <Column style={{ width: '40%' }}>
                <Section title="Resumen">
                  <Resume>
                    Ing. de Sistemas Computacionales, Autoprogramado seguidor de
                    "Clean Code". Ex-participante de concursos de programación
                    competitiva. Uso NodeJS como ecosistema de desarrollo de
                    software. #React, #TailwindCSS, #GraphQL, #TypeScript
                  </Resume>
                </Section>
                <Section title="Educación">
                  <EducationPost
                    title="Ingenieria de Sistemas Computacionales"
                    almaMater="Universidad Privada del Norte"
                    period="03/2013 - 12/2017"
                    location="San Isidro, Trujillo, La Libertad, Perú"
                  >
                    <ListItem>Especialidad en Ingeniería de Software</ListItem>
                    <ListItem>
                      Líder de la comunidad de programación ACM-ICPC (C y Python
                      como lenguajes de competencia)
                    </ListItem>
                  </EducationPost>
                </Section>
                <Section title="Idiomas">
                  <Language
                    name="Español"
                    score="Nativo"
                    style={{ marginBottom: 12 }}
                    scoreSource={iconSources.scoreNative}
                  />
                  <Language
                    name="Inglés"
                    score="Intermedio"
                    scoreSource={iconSources.scoreIntermediate}
                  />
                </Section>
                <Section title="Habilidades">
                  <Insight
                    style={{ marginBottom: 12 }}
                    title="Autodidacta"
                    description="Gracias a Internet: MOOCs, Youtube, Medium, Github, etc."
                    iconSource={iconSources.autodidact}
                  />
                  <Insight
                    style={{ marginBottom: 12 }}
                    title="Creativo"
                    description="Inteligencia para soluciones sostenibles."
                    iconSource={iconSources.creative}
                  />
                  <Insight
                    title="Cooperativo"
                    description="Trabajo en equipo, con respeto y pasión por el éxito"
                    iconSource={iconSources.cooperative}
                  />
                </Section>
                <Section title="Internet">
                  <View style={{ flexDirection: 'row' }}>
                    <Link src="https://twitter.com/rqbazan" style={{ flex: 1 }}>
                      <Insight title="Twitter" description="@rqbazan" />
                    </Link>
                    <Link src="https://github.com/rqbazan" style={{ flex: 1 }}>
                      <Insight title="Github" description="@rqbazan" />
                    </Link>
                    <Link
                      src="https://www.linkedin.com/in/rqbazan"
                      style={{ flex: 1 }}
                    >
                      <Insight title="LinkedIn " description="@rqbazan" />
                    </Link>
                  </View>
                </Section>
              </Column>
            </Row>
          </Page>
          <Page size="A4">
            <Row>
              <Column style={{ marginRight: 16, width: '55%' }}>
                <Section title="Últimos Proyectos">
                  <WorkPost
                    style={{ marginBottom: 8 }}
                    title="FullStack Development - Workshop"
                    location="Trujillo - Perú"
                    period="02/2020 - Actualidad"
                    description="En este workshop enseño como construir una aplicación web desde el prototipado hasta el despliegue continuo. Usando como ecosistema de desarrollo NodeJS."
                  >
                    <ListItem>
                      Se construirá una aplicación clone de{' '}
                      <Link src="https://www.getonbrd.com">GetOnBoard</Link> con
                      las características más importantes del sistema. El
                      proyecto tendra como entregables 3 aplicaciones: Una
                      aplicación frontend user-facing, un GraphQL API y un
                      dashboard administrativo.
                    </ListItem>
                  </WorkPost>
                  <WorkPost
                    style={{ marginBottom: 8 }}
                    title="Taker - Mobile Application"
                    location="Sumerius"
                    period="01/2020 - Actualidad"
                    description="Aplicación móvil para la toma de pedidos por parte de vendedores hacia la cartera de clientes que ellos manejen."
                  >
                    <ListItem>
                      React Native, React Navigation v5, PouchDB y React Native
                      Paper, son algunas de las tecnologías con las que cuenta
                      este proyecto.
                    </ListItem>
                  </WorkPost>
                  <WorkPost
                    style={{ marginBottom: 8 }}
                    title="Sellers - Suite e-commerce"
                    location="Riqra"
                    period="02/2018 - 08/2019"
                    description="Plataforma e-commerce B2B/B2C ofrecida como un SaaS a multiples compañías proveedoras y distribuidoras dentro de LATAM."
                  >
                    <ListItem>
                      Desarrollé el e-commerce y parte del panel administrativo
                      usando tecnologías como NextJS, ApolloClient,
                      StyledComponents, Cloudinary, CircleCI y Heroku.
                    </ListItem>
                    <ListItem>
                      Implementé y mantuve características para el GraphQL API
                      usando tecnologias como Sequelize, ApolloServer, JWT,
                      BullJS, Docker, MySQL, Redis, Jest, CircleCI y Heroku.
                    </ListItem>
                  </WorkPost>
                  <WorkPost
                    style={{ marginBottom: 8 }}
                    title="Hyperbola - Integration Server"
                    location="Riqra"
                    period="12/2018 - 08/2019"
                    description="Servicio de integración entre el GraphQL API y sistemas de terceros con el fin de mantener ambos entornos actualizados"
                  >
                    <ListItem>
                      Basado en esquemas que definian el flujo de datos de las
                      operaciones de integración (Inspirado en parabola.io).
                    </ListItem>
                    <ListItem>
                      Tenia la responsabilidad de ejecutar CRON jobs para la
                      sincronización de catálogos de productos.
                    </ListItem>
                  </WorkPost>
                  <WorkPost
                    title="Truck - Design System"
                    location="Riqra"
                    period="06/2018 - 08/2019"
                    description="Librería de componentes React para el sistema de diseño de la compañía, enfocada en CSS-in-JS. Usando Storybook como entorno de desarrollo."
                  />
                </Section>
              </Column>
              <Column style={{ width: '40%' }}>
                <Section title="Tecnologías">
                  <TechGroup
                    style={{ marginBottom: 8 }}
                    title="Frontend"
                    tags={[
                      'React',
                      'React Native',
                      'NextJS',
                      'Gatsby',
                      'TailwindCSS',
                      'CSS-in-JS',
                      'Apollo Client',
                      'Storybook',
                      'React Spring',
                      'Webpack',
                      'Rollup'
                    ]}
                  />
                  <TechGroup
                    style={{ marginBottom: 8 }}
                    title="Backend"
                    tags={[
                      'NodeJS ',
                      'Sequelize',
                      'Apollo Server',
                      'MySQL',
                      'Postgres',
                      'Redis',
                      'Docker Compose',
                      'BullJS'
                    ]}
                  />
                  <TechGroup
                    style={{ marginBottom: 8 }}
                    title="Pruebas"
                    tags={[
                      'Jest ',
                      'Ava',
                      'ReactTestingLibrary',
                      'Puppeteer',
                      'Unit/Integration/E2E'
                    ]}
                  />
                  <TechGroup
                    style={{ marginBottom: 8 }}
                    title="Lenguajes"
                    tags={[
                      'ES6 ',
                      'Typescript',
                      'Python',
                      'Kotlin',
                      'Java',
                      'C#',
                      'C',
                      'C++'
                    ]}
                  />
                  <TechGroup
                    style={{ marginBottom: 8 }}
                    title="Plataformas y Servicios"
                    tags={[
                      'CircleCI',
                      'Github Actions',
                      'Heroku',
                      'App Center',
                      'Cloudinary',
                      'Algolia',
                      'Forest Admin',
                      'Postmark'
                    ]}
                  />
                  <TechGroup
                    title="Patrones y Arquitecturas"
                    tags={[
                      'MVC ',
                      'MVP',
                      'TDD',
                      'DDD',
                      'N-Layers',
                      'Clean Architecture'
                    ]}
                  />
                </Section>
              </Column>
            </Row>
          </Page>
        </Document>
      </ThemeProvider>
    </PDFViewer>
  )
}
