export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Fundamentos de la gestión integral del talento humano en el contexto global.',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Proceso adquisición de talento: perfiles de cargo, contratación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Impacto del proceso de selección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Perfiles de cargo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Reclutamiento',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Selección',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Compensación laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Proceso de desarrollo organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Iglesias Álvarez, I. (2019). Los procesos de selección en la era digital: estrategias para atraer y enamorar el talento: ( ed.). Madrid, FC Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/13101?page=62',
    },
    {
      referencia:
        'Marchant, L. (2006). Actualizaciones para el management y el desarrollo organizacional: ( ed.).',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/6856?page=128',
    },
    {
      referencia:
        'Ramírez, M. y Tejada Betancourt, L. (Il.) (2019). Administración de salarios y elaboración de nóminas: ( ed.). Santiago de los Caballeros, Universidad Abierta para Adultos (UAPA).',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/175880?page=41',
    },
    {
      referencia:
        'Sánchez Ambriz, G. Muñoz García, M. T. y Flores Paredes, J. (2013). Desarrollo organizacional y capital humano: la gestión eficiente de la realidad empresarial: ( ed.). Madrid, Delta Publicaciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/17619?page=146',
    },
    {
      referencia:
        'Soto Jáuregui, C. (2018). Gerencia de compensación laboral 3.0 y operación de nómina: (1 ed.). Sabaneta, Fondo Editorial CEIPA.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/21702?page=34',
    },
    {
      referencia:
        'Varios, A. (2013). Manual selección de personal: ( ed.). Editorial CEP, S.L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/5071?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Adquisición',
      significado:
        'Proceso donde se desarrollan varias etapas para como la incorporación de nuevos empleados a una organización.',
    },
    {
      termino: 'Actitud',
      significado:
        'La disposición o manera de actuar de una persona frente a situaciones, personas o temas específicos, que puede influir en su comportamiento y decisiones.',
    },
    {
      termino: 'Assesments',
      significado:
        'Evaluaciones o valoraciones que se utilizan para medir el conocimiento, habilidades, competencias o el desempeño de una persona en un contexto específico, como la educación o el ámbito laboral.',
    },
    {
      termino: 'Aprendizaje continuo',
      significado:
        'Proceso de adquirir nuevos conocimientos, habilidades y competencias a lo largo de la vida, de manera constante y deliberada, con el objetivo de adaptarse a cambios, mejorar el desempeño personal y profesional, y fomentar el desarrollo personal.',
    },
    {
      termino: 'Beneficios extralegales',
      significado:
        'Beneficios o compensaciones que una empresa ofrece a sus empleados además de lo estipulado por la ley. estos pueden incluir prestaciones como seguros de salud adicionales, bonificaciones, días de vacaciones extra, horarios flexibles.',
    },
    {
      termino: 'Carga',
      significado:
        'Cantidad de trabajo, responsabilidades o presión que una persona debe manejar en un contexto determinado.',
    },
    {
      termino: 'Compensación',
      significado:
        'Recompensa o remuneración que se ofrece a un empleado por sus servicios, que puede incluir salario, beneficios y otros incentivos.',
    },
    {
      termino: 'Cultura',
      significado:
        'Conjunto de valores, creencias, normas, prácticas y costumbres que caracterizan a un grupo social o una organización.',
    },
    {
      termino: 'Desarrollo',
      significado:
        'Proceso de crecimiento y mejora continua, que puede referirse al crecimiento personal, profesional o de una organización.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan o conjunto de acciones diseñadas para alcanzar un objetivo específico, considerando los recursos disponibles y el entorno.',
    },
    {
      termino: 'Experiencia',
      significado:
        'Conjunto de conocimientos, habilidades y vivencias adquiridas a través de la práctica y la interacción con el entorno.',
    },
    {
      termino: 'Habilidades',
      significado:
        'Capacidades o competencias que permiten a una persona realizar tareas o actividades específicas de manera efectiva.',
    },
    {
      termino: 'Impacto',
      significado:
        'Efecto significativo que una acción, decisión o evento tiene sobre un individuo, grupo o entorno.',
    },
    {
      termino: 'Motivación',
      significado:
        'Conjunto de factores internos y externos que impulsan a una persona a actuar o a esforzarse por alcanzar metas.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Metas específicas que se desean alcanzar en un periodo determinado, que guían acciones y decisiones.',
    },
    {
      termino: 'Perfil',
      significado:
        'Descripción detallada de las características, habilidades y requisitos que se espera que tenga una persona para un puesto o función específica.',
    },
    {
      termino: 'Reclutamiento',
      significado:
        'Proceso de atraer, buscar y seleccionar candidatos potenciales para ocupar posiciones vacantes en una organización.',
    },
    {
      termino: 'Salario',
      significado:
        'Compensación económica que recibe un trabajador a cambio de su labor o servicios prestados, generalmente expresada en términos de pago por hora, día, semana o mes.',
    },
    {
      termino: 'Selección',
      significado:
        'Proceso de evaluar y elegir a los candidatos más adecuados para un puesto de trabajo, basado en criterios específicos.',
    },
    {
      termino: 'Talento',
      significado:
        'Conjunto de habilidades, capacidades y potencial que posee una persona, que la diferencian y pueden contribuir de manera significativa a un objetivo.',
    },
  ],
}
