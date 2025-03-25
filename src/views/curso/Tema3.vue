<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Proceso de desarrollo organizacional'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-full-width.image-out-bg.bg-color-F2F0EE.mb-5
        .px-4.px-md-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 295px").mx-auto
            .col-lg
              .pt-4.pt-lg-5
                p.mb-3 El desarrollo organizacional (DO) es un enfoque sistemático orientado a mejorar la efectividad y la salud de una organización mediante la intervención en sus procesos, estructuras y cultura. Su objetivo es facilitar un cambio positivo y sostenible, permitiendo que la empresa se adapte a un entorno en constante evolución.

                p.mb-3 Según Sánchez, Muñoz y Flores (2013), el DO aporta principios teóricos sobre el hombre, la organización y el ambiente, promoviendo el desarrollo de competencias, habilidades y destrezas.


      h2 Propósitos del desarrollo organizacional

      p El DO cumple múltiples propósitos que impactan significativamente en el funcionamiento interno de las organizaciones:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-1.png", alt="Imagen que representa la alineación estratégica")
              .col-lg-7.order-lg-1
                h4 Alineación estratégica
                p Implementa prácticas que sincronizan los objetivos organizacionales con el desarrollo del talento humano.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-2.png", alt="Imagen que representa la gestión del cambio")
              .col-lg-7.order-lg-1
                h4 Gestión del cambio
                p Facilita la adaptación a nuevas condiciones mediante la identificación de necesidades, planificación y comunicación efectiva.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-3.png", alt="Imagen que representa la optimización de procesos")
              .col-lg-7.order-lg-1
                h4 Optimización de procesos
                p Identifica áreas de mejora para incrementar la eficiencia y productividad.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-4.png", alt="Imagen que representa la revisión estructural")
              .col-lg-7.order-lg-1
                h4 Revisión estructural
                p Fomenta estructuras más planas, con mayor descentralización y autonomía en la toma de decisiones.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-5.png", alt="Imagen que representa el fortalecimiento de la cultura organizacional")
              .col-lg-7.order-lg-1
                h4 Fortalecimiento de la cultura organizacional
                p Promueve valores de comunicación, colaboración y compromiso.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-6.png", alt="Imagen que representa la innovación y competitividad")
              .col-lg-7.order-lg-1
                h4 Innovación y competitividad
                p Crea un ambiente que impulsa la creatividad y la generación de nuevas soluciones.
      
      h2 Impacto del desarrollo organizacional
      p.mb-5 El desarrollo organizacional tiene un impacto en múltiples áreas de la organización:

      .row.align-items-start.mb-5#aco-t3-1
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0
        .col-lg-8      
          AcordionA(tipo="b")
            .div(titulo="Clarificación de roles y rendición de cuentas")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Reduce la ambigüedad sobre funciones y responsabilidades.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Aumenta la eficiencia en la ejecución de tareas.
            
            .div(titulo="Cultura organizacional y clima laboral")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Fomenta una cultura inclusiva y orientada al equipo.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Genera un clima laboral positivo mediante la mejora de la comunicación y la colaboración.

            .div(titulo="Resolución de conflictos")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Implementa herramientas para la gestión de disputas internas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Reduce tensiones y mejora el ambiente de trabajo.

            .div(titulo="Alineación con la misión y visión empresarial")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Asegura coherencia en la toma de decisiones.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Permite una ejecución estratégica alineada con los objetivos organizacionales.

            .div(titulo="Medición del desempeño y sostenibilidad")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Define indicadores para evaluar el impacto de las estrategias implementadas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Facilita la toma de decisiones basadas en datos.
      

      h2 El aprendizaje organizacional

      p.mb-5 El aprendizaje organizacional es un proceso clave en el DO. Según Marchant (2006), las organizaciones que aprenden facilitan el crecimiento continuo de sus miembros y la transformación para responder a las exigencias del entorno.


      .bg-full-width.image-out-bg.bg-color-E6F0CD
        .px-4.px-md-5
          .row.align-items-center
            .col-lg
              .pt-4.ps-lg-5.pt-lg-5
                p.mb-3 Características del aprendizaje organizacional:
      
                ul.lista-ul--color.color-primario.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Se integra con el trabajo cotidiano.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Permite abordar problemas y aclarar diferencias.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Fomenta la apropiación de metas y objetivos institucionales.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Impulsa la adaptación y la innovación.
      
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 505px").mx-auto

      .bg-full-width.bg-color-t3-3.mb-5
        .p-4.px-md-5
          p.mb-0 Este enfoque requiere que los colaboradores sean agentes de cambio, evitando convertirse en obstáculos para la evolución de la organización.

      h2(data-aos="fade-left") Gestión del conocimiento en el desarrollo organizacional
      p.mb-5 La gestión del conocimiento (GC) es un proceso esencial dentro del desarrollo organizacional, ya que permite identificar, almacenar, compartir y utilizar la información como un recurso estratégico.

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4
          .bg-color-1.p-4(data-aos="fade-left").h-100.mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Aprendizaje organizacional
                p.mb-0 Facilita la transferencia de conocimientos entre empleados.
      
        .col-lg-4
          .bg-color-1.p-4(data-aos="fade-left").h-100.mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Innovación y creatividad
                p.mb-0 Impulsa la generación de nuevas ideas y soluciones.
        
        .col-lg-4
          .bg-color-1.p-4(data-aos="fade-left").h-100.mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Toma de decisiones informada
                p.mb-0 Proporciona datos críticos para decisiones estratégicas.

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-1.p-4(data-aos="fade-left").h-100.mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Cultura de colaboración
                p.mb-0 Promueve el intercambio de información y el trabajo en equipo.
      
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").h-100.mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Adaptabilidad y competitividad
                p.mb-0 Permite a la empresa responder mejor a los cambios del mercado.
      

      p.mb-5 Las organizaciones que gestionan eficazmente su conocimiento tienen mayor capacidad de innovación y adaptación, lo que les permite mantener su ventaja competitiva.

      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 El desarrollo organizacional es un proceso integral que impulsa la eficiencia, la innovación y la adaptación de las empresas. Mediante la gestión del cambio, la optimización de procesos, el aprendizaje organizacional y la gestión del conocimiento, las organizaciones pueden mantenerse competitivas en un entorno en constante transformación.
      
          .bg-color-t3-5.p-4(data-aos="fade-left")
            p.mb-0 Al adoptar un enfoque estratégico del DO, las empresas no solo mejoran su desempeño, sino que también fortalecen su cultura interna, fomentan un ambiente de aprendizaje y garantizan su sostenibilidad a largo plazo.
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Unidad 2',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: 'Cuál es la importancia del perfil de cargo',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Generar valor al proceso de selección',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'actúa como una hoja de ruta, sirviendo como un mapa que guía la selección de candidatos de la manera más efectiva y precisa posible.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Permite conocer que requiere un cargo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Es el documento donde están los salarios asignados para cada cargo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Reclutar candidatos para una organización es clave para el proceso de adquisición y selección porque',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Es el primer acercamiento al candidato ideal que se va a contratar para cubrir una vacante',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Entre más candidatos se recluten más posibilidad de contratar',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Es un proceso importante para pagar correctamente la nómina al colaborador',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Sin reclutamiento no se puede hacer el proceso de adquisición y selección',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'El proceso de compensación:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El pago justo a cada colaborador, según las funciones realizadas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Determina que salario debe recibir cada colaborador',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La remuneración económica o emocional que reciben las personas como reconocimiento por su contribución al cumplimiento de los objetivos organizacionales',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Proceso donde se determina la estabilidad laboral de un colaborador',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En Colombia además de pagar el salario se debe tener en cuenta',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La seguridad social y carga prestacional de cada colaborador',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Los beneficios extralegales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La prima y cesantías',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No se debe tener en cuenta nada más',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'El proceso de desarrollo organizacional',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Incluye la medición de desempeño y mejora continua',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Revisa y garantiza el cumplimiento de la estrategia',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Es un proceso sistemático orientado a mejorar la efectividad de las organizaciones mediante la planificación y la implementación de cambios en sus estructuras, procesos y cultura',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Genera valor en las organizaciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
