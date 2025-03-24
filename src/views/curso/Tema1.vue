<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Proceso adquisición de talento: perfiles de cargo, contratación laboral'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-9
        p(data-aos="fade-left") El proceso de adquisición de talento, específicamente el reclutamiento y la selección de personal, es una actividad estratégica para la organización. Su relevancia radica en que una contratación adecuada puede generar un impacto positivo significativo, mientras que una decisión errónea puede traer consecuencias negativas.

        p(data-aos="fade-left") Los principales objetivos de este proceso incluyen:

    
      .col-lg-3.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.image-out-bg.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/2.svg", style="max-width: 505px").mx-auto
          .col-lg
            .pt-4
              ul.lista-ul--color.color-dark.mb-4.mt-lg-5
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Identificación de necesidades:] incorporar talento que contribuya al logro de las metas organizacionales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Evaluación de candidatos:] considerar habilidades, conocimientos, experiencia, motivación y actitud.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Fortalecimiento de la marca empleadora:] resaltar los aspectos que hacen atractiva a la empresa para los postulantes.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Comunicación de la propuesta de valor al empleado:] definir los beneficios que la empresa ofrece a quienes forman parte de ella.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Impacto del proceso de selección
    
    p Un proceso de selección bien ejecutado trae beneficios clave:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Rápida adaptación
                p.mb-0 Facilita la integración del nuevo empleado y su curva de aprendizaje.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Valor agregado
                p.mb-0 Los colaboradores seleccionados adecuadamente contribuyen significativamente a los procesos y objetivos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Optimización de recursos
                p.mb-0 Se evita la repetición de procesos de contratación y los costos asociados.
    
    p Sin embargo, un proceso ineficaz puede generar impactos negativos, como:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4
        .bg-color-t1-2.p-4(data-aos="fade-left").h-100.mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icono-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Altos costos por rotación
              p.mb-0 Pérdida de inversión en capacitación y reclutamiento.
    
      .col-lg-4
        .bg-color-t1-2.p-4(data-aos="fade-left").h-100.mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icono-2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Fuga de información y retrasos
              p.mb-0 Interrupción de proyectos y sobrecarga laboral para el equipo.
    
      .col-lg-4
        .bg-color-t1-2.p-4(data-aos="fade-left").h-100.mb-4
          .row.align-items-centers
            .col-lg-auto
              img(src="@/assets/curso/tema1/icono-2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Pérdida de tiempo
              p.mb-0 Selección inadecuada que obliga a repetir el proceso, afectando la productividad.


    .bg-full-width.bg-color-t1-3.px-4.px-md-5.py-4.mb-5
      p.mb-0 Dado lo anterior, es esencial que cada etapa del proceso se realice con detalle, evitando contrataciones apresuradas solo para cumplir indicadores o cerrar vacantes.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Perfiles de cargo
    

    p Antes de profundizar en las fases de selección, es fundamental definir el perfil de cargo. Este documento sirve como una guía para elegir a los candidatos más adecuados.


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png", alt="Imagen que representa la misión del puesto con un elemento gráfico de engranaje rojo")
            .col-lg-7
              h4 Misión del puesto
              p Establece la razón de ser del cargo dentro de la organización, detallando su impacto en el cumplimiento de los objetivos estratégicos, su alineación con la visión y misión institucional, y su relevancia dentro de la estructura organizativa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png", alt="Imagen que muestra engranajes de colores representando competencias")
            .col-lg-7
              h4 Competencias
              p Engloba las habilidades técnicas, valores organizacionales y comportamientos clave que son esenciales para un desempeño exitoso en el cargo. Puede incluir competencias transversales como liderazgo, adaptabilidad, trabajo en equipo, comunicación efectiva y resolución de problemas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png", alt="Imagen que muestra a una persona trabajando en una laptop representando experiencia")
            .col-lg-7
              h4 Experiencia
              p Define el nivel de trayectoria requerido para el puesto, incluyendo la cantidad de años de experiencia previa, el tipo de funciones desempeñadas en cargos similares y los sectores o industrias relevantes para el desempeño óptimo del rol.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png", alt="Imagen que muestra a un grupo de estudiantes trabajando juntos")
            .col-lg-7
              h4 Formación académica
              p Especifica los estudios mínimos requeridos para el puesto, así como certificaciones obligatorias, capacitaciones adicionales o conocimientos específicos que resulten relevantes para el ejercicio del cargo. También puede indicar la preferencia por títulos de postgrado o especializaciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png", alt="Imagen que muestra a una persona frente a un tablero con notas adhesivas")
            .col-lg-7
              h4 Funciones generales
              p Enlista las principales actividades y responsabilidades que debe asumir la persona en este cargo, asegurando que estén alineadas con los objetivos organizacionales y contribuyan al desarrollo eficiente de los procesos internos. Puede incluir tanto tareas operativas como estratégicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png", alt="Imagen que muestra una presentación sobre liderazgo")
            .col-lg-7
              h4 Gestión y liderazgo
              p Indica si el cargo implica la administración de recursos financieros, tecnológicos o humanos, la supervisión de personal, la coordinación de equipos de trabajo, la toma de decisiones estratégicas o la gestión de proyectos dentro de la organización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png", alt="Imagen que muestra a un equipo de trabajo colaborando")
            .col-lg-7
              h4 Relaciones laborales
              p Define la posición jerárquica del cargo dentro de la estructura organizacional, estableciendo con quién debe reportar y a quién supervisa, así como los canales de comunicación formales e informales que debe utilizar para interactuar con otras áreas o actores internos y externos.
    

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Además del perfil formal, en algunas organizaciones se considera un "perfil oculto", que incluye habilidades de adaptación y cultura organizacional. No obstante, es fundamental que este criterio no se base en aspectos discriminatorios, sino en factores que realmente impacten la integración y el desempeño del candidato.

        p(data-aos="fade-left") Tener un perfil de cargo bien definido optimiza el proceso de selección y garantiza la contratación de personas alineadas tanto con las necesidades del puesto como con la cultura organizacional. Invertir tiempo en su elaboración es clave para el éxito de la contratación.
    
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in").mb-4.mb-lg-0

    .bg-full-width.bg-color-t1-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/anexo-1.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Formato Perfil de cargo
            p.mb-4(data-aos="fade-right") Después de haber reconocido los detalles que comprende el documento de perfil de cargo y la importancia en el proceso de selección se entrará a estudiar sus diferentes fases. Para ello se realizará una división en dos grandes momentos: El primero de ellos será reclutamiento y el segundo hace referencia a la selección. 

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Formato Perfil de cargo
    
      
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Reclutamiento
    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El reclutamiento es un proceso esencial para cualquier organización, ya que implica la búsqueda de candidatos idóneos para ocupar una vacante disponible. Su importancia radica en garantizar que el nuevo colaborador no solo cumpla con los requisitos del puesto, sino que también se alinee con la cultura y los valores de la empresa.
        p(data-aos="fade-left").mb-4 El proceso inicia con la requisición de personal, la cual es generada por el líder del área que ha identificado la necesidad de cubrir una vacante. Esta solicitud puede surgir por diversas razones:
    
        .bg-color-t1-5.px-4
          .row.align-items-start
            .col-lg
              .pt-4
                ul.lista-ul--color.color-primario
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Renuncia de un empleado.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Creación de un nuevo proyecto que requiere personal adicional.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Anticipación de un retiro previsto.
        
              
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 190px").mx-auto
    

        .bg-color-t1-6.p-4
          p.mb-0 La requisición se formaliza a través de un formato preestablecido o un correo electrónico, y es recomendable contar con un respaldo que justifique la activación del proceso. Si la búsqueda es confidencial, debe especificarse para evitar inconvenientes.

    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
    
    
    h2(data-aos="flip-up").mb-4 Fuentes de reclutamiento

    p(data-aos="fade-left").mb-4 Una vez identificada la necesidad de contratación, se activan diversas fuentes de reclutamiento. La elección dependerá del presupuesto disponible y del perfil del candidato que se busca.

    .bg-full-width-2.bg-fondo-2.px-4.px-md-5.py-4
      div.row.justify-content-center.align-items-stretch
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema1/icono-1.svg"
              alt=""
              style="width: 90px"
            )
            h4.mb-2.text-center Internas	
            p.mb-0.text-center Referidos, promociones internas, movilidad laboral.
      
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema1/icono-2.svg"
              alt=""
              style="width: 90px"
            )
            h4.mb-2.text-center Externas
            p.mb-0.text-center Portales de empleo, redes sociales, headhunters, bolsas de empleo universitarias, cajas de compensación.
      
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema1/icono-3.svg"
              alt=""
              style="width: 90px"
            )
            h4.mb-2.text-center Tradicionales
            p.mb-0.text-center Radio, periódicos, ferias de empleo.

    .bg-full-width.image-out-bg.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 295px").mx-auto
          .col-lg
            .pt-4
              p La fuente seleccionada varía según el tipo de perfil requerido. Por ejemplo:
              ul.lista-ul--color.color-dark.mb-4
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | #[strong Personal operativo:] la radio o los referidos suelen ser más efectivos.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Perfiles estratégicos:] plataformas profesionales como LinkedIn o empresas de selección especializadas.
              

    h2(data-aos="flip-up").mb-4 Evaluación de hojas de vida

    p El último paso del reclutamiento es la revisión de las hojas de vida. En esta fase, se compara la información proporcionada por los candidatos con la descripción del perfil del cargo. Aspectos verificables incluyen:

    .row.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-t1-8.p-4.brounded.h-100.mb-4.mb-lg-0
          h4.mb-2.text-white 01
          p.text-white Formación académica.

      .col-lg-4
        .bg-color-t1-9.p-4.brounded.h-100.mb-4.mb-lg-0
          h4.mb-2 02
          p Estudios complementarios.

      .col-lg-4
        .bg-color-t1-10.p-4.brounded.h-100.mb-4.mb-lg-0
          h4.mb-2 03
          p Experiencia laboral previa.


    .bg-full-width.bg-color-t1-14.px-4.px-md-5.py-4.mb-5
      p.mb-0 Este proceso permite preseleccionar a los candidatos más adecuados, optimizando los tiempos y recursos de la empresa.


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Selección

    p El proceso de selección es la segunda fase en la adquisición de talento e involucra diversas etapas diseñadas para evaluar a los candidatos en profundidad.

    h2(data-aos="flip-up").mb-4 Evaluaciones previas

    p Las pruebas aplicadas pueden ser de diferentes tipos, según el perfil requerido y el presupuesto disponible:

    TabsC.color-acento-contenido
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Técnicas" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Técnicas
            p Evaluar conocimientos específicos del cargo.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Psicotécnicas" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Psicotécnicas
          p.mb-0.p-4 Analizar rasgos de personalidad y competencias cognitivas.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Inteligencia" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Inteligencia
          p.mb-0.p-4 Medir capacidad analítica y resolución de problemas.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Assessments" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Assessments
          p.mb-0.p-4 Simulación de escenarios laborales para evaluar habilidades.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-4.png', alt='')
    


    .bg-color-t1-11.p-4.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/icon-1-3.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Estas pruebas pueden ser adquiridas a proveedores o desarrolladas internamente. Es fundamental que aporten valor al proceso y sean acordes con los requerimientos del perfil.
    
    h2(data-aos="flip-up").mb-4 Entrevistas

    p Las entrevistas son el pilar del proceso de selección, permitiendo obtener información relevante sobre los candidatos a través de una conversación estructurada y objetiva. Los tipos de entrevistas son: 


    .row.align-items-start.mb-5#aco-t1-1
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Entrevista inicial")
            p Realizada por el reclutador vía telefónica o videollamada con el objetivo de validar datos básicos del candidato, confirmar su disponibilidad, expectativas salariales y verificar si cumple con los requisitos mínimos del cargo. Además, se busca evaluar su nivel de interés y motivación hacia la oportunidad laboral.
    
          .div(titulo="Entrevista formal")
            p Llevada a cabo por el área de recursos humanos en modalidad virtual o presencial, con un enfoque estructurado en la evaluación de competencias, trayectoria profesional y habilidades clave para el puesto. Se analizan aspectos como la adaptación a la cultura organizacional, valores personales y motivación para integrarse al equipo.
    
          .div(titulo="Entrevista con el jefe inmediato")
            p Sesión centrada en evaluar las habilidades técnicas, interpersonales y de adaptación del candidato dentro del equipo de trabajo. Se analiza la compatibilidad con la dinámica del área, la forma en que resuelve problemas y su capacidad de alinearse con los objetivos del departamento. En algunos casos, se incluyen pruebas técnicas o ejercicios situacionales para evaluar su desempeño en escenarios específicos.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/7.png", alt="").mb-4.mb-lg-0


    .mb-5(data-aos="fade-up", style="background-color: #F6F3EF")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/8.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para estructurar la entrevista, se recomienda utilizar un formato de registro, asegurando trazabilidad y facilitando la toma de decisiones. Durante la entrevista, es clave evitar la subjetividad y los sesgos, garantizando un ejercicio profesional basado en el respeto y la confidencialidad. Se debe indagar sobre aspectos personales, académicos y profesionales, manteniendo siempre una actitud objetiva y ética.
    
    
    p Una entrevista semiestructurada suele desarrollarse en las siguientes fases:

    .bg-full-width.image-out-bg.bg-color-E6F0CD.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg
            .pt-4
              ul.lista-ul--color.color-primario.mb-4
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Inicio: construcción de empatía y presentación de la vacante.

                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Exploración de habilidades: revisión de competencias personales y áreas de mejora.

                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Experiencia laboral: análisis de logros y funciones previas.

                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Motivaciones: interés en la empresa y expectativas del candidato.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Cierre: aclaración de dudas y próximos pasos en el proceso.
              
    
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 505px").mx-auto


    h2(data-aos="flip-up").mb-4 Validación de antecedentes

    p Esta etapa permite corroborar la información proporcionada por el candidato mediante la verificación de referencias laborales y la consulta de bases de datos oficiales.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icon-1-4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Referencias laborales	
              p.mb-0 Exjefes o empleadores previos.
    
      .col-lg-6
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icon-2-4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Antecedentes judiciales	
              p.mb-0 Policía Nacional, Procuraduría, Contraloría.
    

    p Los hallazgos deben manejarse con total confidencialidad y no pueden ser criterios de exclusión sin justificación.

    h2(data-aos="flip-up").mb-4 Estudios de seguridad

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Este paso no es obligatorio en todas las empresas y depende del nivel de riesgo asociado al cargo. Si se requiere, debe ser gestionado por una empresa especializada y contar con la autorización del candidato.

        p(data-aos="fade-left").mb-4 Aspectos analizados:
    
        .bg-color-t1-14.px-4
          .row.align-items-start
            .col-lg
              .pt-3
                ul.lista-ul--color.color-black.mt-2
                  li.mb-1
                    i.fas.fa-arrow-circle-right
                    | Comportamiento financiero.
                  li.mb-1
                    i.fas.fa-arrow-circle-right
                    | Historial judicial y legal.
                  li.mb-1
                    i.fas.fa-arrow-circle-right
                    | Posibles fraudes o lavado de activos.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Visita domiciliaria.
            
              
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 190px").mx-auto
    
        .bg-color-t1-15.p-4
          p(data-aos="fade-left").mb-0 La información obtenida debe manejarse con estricta confidencialidad.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
    

    h2(data-aos="flip-up").mb-4 Examen ocupacional

    p En cumplimiento de la Resolución 2346 de 2007, el examen ocupacional evalúa la salud del candidato y su exposición a factores de riesgo en el trabajo.


    .bg-full-width.bg-fondo-3.px-4.px-md-5.py-4
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4.mb-4(data-aos="zoom-in-up")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-1-2.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Clínico
              p.mb-0 Determinar el estado general de salud del candidato.
        .col-lg-4.mb-4(data-aos="zoom-in-down")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-2-2.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Ocupacional
              p.mb-0 Identificar riesgos específicos del cargo.
        .col-lg-4.mb-4(data-aos="zoom-in-down")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-3-2.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Imágenes diagnósticas
              p.mb-0 Detectar posibles condiciones médicas relacionadas con el trabajo.
      
    p La elección de los exámenes depende del profesiograma del cargo, un documento técnico elaborado por expertos en seguridad y salud en el trabajo.

    h2(data-aos="flip-up").mb-4 Contratación

    p Una vez superadas todas las fases, se procede a la contratación formal del candidato, que incluye:

    .row.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-t1-16.p-4.brounded.h-100.mb-4.mb-lg-0
          h4.mb-2.text-white 01
          p.text-white Afiliación al sistema de seguridad social.

      .col-lg-4
        .bg-color-t1-17.p-4.brounded.h-100.mb-4.mb-lg-0
          h4.mb-2 02
          p Recopilación de documentos para la hoja de vida interna.

      .col-lg-4
        .bg-color-t1-18.p-4.brounded.h-100.mb-4.mb-lg-0
          h4.mb-2 03
          p Firma del contrato.

    .bg-full-width.bg-color-t1-19
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/icon-1-5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Es importante señalar que cada empresa puede modificar o personalizar este proceso según sus necesidades y estrategia. Este modelo estructurado no solo permite optimizar la selección de talento, sino que también asegura que la empresa cuente con colaboradores alineados con su misión, visión y cultura organizacional.
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-t1
  &-1
    background-color: #FFEBD0
  &-2
    background-color: #D6F5FB
  &-3
    background-color: #F2E9DC
  &-4
    background-color: #E2DACC
  &-5
    background-color: #E6F0CD
  &-6
    background-color: #F2F7E5
  &-7
    background-color: #FFEBD0
  &-8
    background-color: #86B60C
  &-9
    background-color: #36CEEF
  &-10
    background-color: #FF9D1C
  &-11
    background-color: #D6F5FB
  &-12
    background-color: #E6F0CD
  &-13
    background-color: #D6F5FB
  &-14
    background-color: #F6F3EF
  &-15
    background-color: #E2DACC
  &-16
    background-color: #86B60C
  &-17
    background-color: #36CEEF
  &-18
    background-color: #FF9D1C
  &-19
    background-color: #103D47
    p
      color: #FFFFFF

.image-out-bg
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 85%
    transform: translateY(-0%)
    background-color: #FFEBD0
    z-index: 0
  .col-lg-auto, .col-lg, .row
    z-index: 1


  @media screen and (max-width: bp-max-md)
    padding: 1rem

    &::after
      height: 100%

.image-out-bg.bg-color-E6F0CD
  &::after
    background-color: #E6F0CD !important
</style>
