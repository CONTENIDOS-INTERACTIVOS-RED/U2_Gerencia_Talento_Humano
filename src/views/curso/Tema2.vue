<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Compensación laboral'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-8
          .bg-color-t2-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La compensación laboral no se limita únicamente al pago que recibe un trabajador por sus funciones dentro de la organización. Según Soto (2018), la remuneración influye en la satisfacción laboral y en el compromiso del empleado con la empresa.
      
          p(data-aos="fade-left") Históricamente, la compensación ha evolucionado de ser una herramienta para maximizar la rentabilidad empresarial sin considerar los intereses de los trabajadores, a convertirse en un elemento estratégico que valora a las personas y sus necesidades. En la actualidad, se considera un factor clave de competitividad en el mercado global.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      

      h2 Tipos de compensación
      p La compensación incluye diversas formas de retribución, que pueden clasificarse en los siguientes tipos:

      .bg-full-width-2.bg-fondo-3
        .p-4.p-md-5
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-1.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Salario
                p.mb-0.text-center Remuneración económica que recibe el trabajador por su labor.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-2.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Beneficios legales
                p.mb-0.text-center Prestaciones obligatorias establecidas por la ley.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/icon-3.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Beneficios extralegales
                p.mb-0.text-center Incentivos adicionales ofrecidos por la empresa para mejorar la satisfacción laboral.
      

      h2 Salario

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 El salario es la compensación económica que recibe un trabajador a cambio de su labor o servicios prestados a un empleador. Puede ser de dos tipos:
      
      
          .bg-color-t2-2.px-4
            .row.align-items-start
                
              .col-lg-auto
                img(src="@/assets/curso/tema2/3.svg", style="max-width: 190px").mx-auto
      
              .col-lg
                .pt-4
                  p #[strong Salario fijo]
                  p Cantidad establecida en el contrato, independiente del desempeño.
          

          .bg-color-t2-3.px-4.mb-4
            .row.align-items-start
      
              .col-lg
                .pt-4
                  p #[strong Salario variable]
                  p Retribución basada en resultados o cumplimiento de indicadores, común en cargos comerciales.
          
              .col-lg-auto
                img(src="@/assets/curso/tema2/4.svg", style="max-width: 295px").mx-auto
  
      
          p(data-aos="fade-left").mb-4 Según Ramírez y Tejada (2019), el salario representa una contraprestación por el trabajo realizado, y a cambio, el trabajador se compromete con la organización y su norma de desempeño.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      


      h2 Carga prestacional en Colombia

      p En Colombia, el salario conlleva una carga prestacional que influye en la estructura del costo laboral y en la remuneración total de los trabajadores.

      .bg-full-width.bg-fondo-video
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/9pr7B1vGmnk?si=Ao7woOtXds_nLe8V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



      .bg-full-width.bg-color-t2-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta carga prestacional tiene implicaciones significativas tanto para la economía de las empresas como para el bienestar de los trabajadores. Si bien representa un costo adicional para el empleador, garantiza protección social y estabilidad económica para los empleados.
      
      h2 Beneficios extralegales
      p Los beneficios extralegales van más allá de las exigencias legales y buscan mejorar la experiencia laboral de los empleados. Estos incentivos pueden ser de distinta naturaleza:

      TabsC.color-acento-contenido
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Beneficios intangibles" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Beneficios intangibles
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Flexibilidad laboral:] trabajo remoto o ajuste de horarios.  
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Desarrollo profesional:] financiamiento de capacitaciones o certificaciones. 
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Días de vacaciones adicionales:] permite mejorar el balance vida-trabajo.
            
              
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Beneficios económicos" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Beneficios económicos
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Bonificaciones y primas:] incentivos por desempeño. 
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Seguro médico complementario:] cobertura adicional a la seguridad social. 
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Apoyo educativo:] subsidios para la educación de los hijos.
              
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-2.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Beneficios sociales" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Beneficios sociales
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Celebraciones y regalos:] en fechas importantes. 
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Espacios recreativos:] áreas de descanso y bienestar.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-3.png', alt='')
      
      .bg-color-t2-5.px-4.px-md-5.py-4.mb-5
        p.mb-0 Los beneficios extralegales contribuyen a la retención de talento, mejoran la productividad y fortalecen el sentido de pertenencia de los empleados hacia la empresa.
      
      h2 Factores que inciden en la compensación
      p La asignación de la compensación varía según múltiples factores:

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 731px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="17.5%" y="57.5%" numero="+")
                  h5 Industria y sector
                  p Algunos sectores, como tecnología, tienen salarios más altos.
      
                .bg-color-white.box-shadow.p-3(x="29%" y="84%" numero="+")
                  h5 Demanda de habilidades
                  p Conocimientos específicos y dominio de idiomas aumentan la remuneración.
      
                .bg-color-white.box-shadow.p-3(x="45%" y="96%" numero="+")
                  h5 Ubicación geográfica
                  p Los salarios pueden variar según la región.
      
                .bg-color-white.box-shadow.p-3(x="69%" y="86%" numero="+")
                  h5 Análisis de mercado
                  p Se comparan tendencias salariales en empresas similares.
      
                .bg-color-white.box-shadow.p-3(x="81.5%" y="59%" numero="+")
                  h5 Estructura organizacional
                  p Cada empresa define rangos salariales y políticas de incentivos.
      
      h2 Políticas de compensación y ajustes

      p Para una gestión efectiva de la compensación, las empresas deben contar con políticas claras y estructuradas:

      .row.align-items-start.mb-5#aco-t2-2
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Establecimiento de una estructura de compensación")
              ul.lista-ul--color.color-black
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Salarios base, bonificaciones e incentivos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Beneficios adicionales, como seguros y planes de pensiones.

            .div(titulo="Definición de criterios para aumentos salariales y promociones")
              ul.lista-ul--color.color-black
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Evaluación de desempeño por competencias y objetivos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Análisis de resultados y contribuciones al negocio.

            .div(titulo="Transparencia y comunicación de políticas")
              ul.lista-ul--color.color-black
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Explicar a los empleados cómo se determina su compensación.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Mantener la confidencialidad sobre los detalles salariales.

            .div(titulo="Revisión y ajuste continuo")
              ul.lista-ul--color.color-black
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Evaluar la equidad interna y competitividad en el mercado.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Aplicar incrementos salariales según el entorno económico.

            .div(titulo="Recepción de retroalimentación de los empleados")
              ul.lista-ul--color.color-black
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Implementar encuestas para medir la percepción sobre la compensación.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Ajustar estrategias según la retroalimentación recibida.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", alt="").mb-4.mb-lg-0


      .bg-full-width.image-out-bg.bg-color-103D47.mb-5
        .px-4.px-md-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 400px").mx-auto
            .col-lg
              .pt-4
                p.mb-3.text-white La compensación laboral es un aspecto fundamental en la gestión del talento, ya que impacta en la motivación, el compromiso y la retención de los empleados. Un sistema de compensación bien estructurado no solo garantiza el cumplimiento de la legislación laboral, sino que también contribuye a la competitividad de la empresa en el mercado.

                p.mb-0.text-white Para que una organización logre una política de compensación efectiva, es esencial que combine un salario competitivo con beneficios adicionales y oportunidades de crecimiento, asegurando un ambiente de trabajo justo, atractivo y sostenible en el tiempo.

      
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
      
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/121684" target="_blank" rel="noopener noreferrer") Arias Galicia, L. F. (2015). Los salarios y el compromiso de los trabajadores: más dinero = ¿mayor entrega?: ( ed.). Bonilla Artigas Editores.
      
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/39377?page=5" target="_blank" rel="noopener noreferrer") Juárez Hernández, J. O. (2015). Administración de la compensación, sueldos, salarios incentivos y prestaciones: ( ed.). Grupo Editorial Patria.
      
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/qHY4uuvDFNY?si=JYw5mILpbd5dpGN" target="_blank" rel="noopener noreferrer") López, L. (2020, 2 de mayo) Proceso de retención de personal - Compensación y Salarios. [video]. Youtube.
      
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-t2
  &-1
    background-color: #D6F5FB
  &-2
    background-color: #FFF4E6
  &-3
    background-color: #FFEBD0
  &-4
    background-color: #103D47
  &-5
    background-color: #E6F0CD
</style>
