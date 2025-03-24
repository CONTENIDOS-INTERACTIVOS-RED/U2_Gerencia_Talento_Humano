<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-intro-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 El desarrollo  de esta unidad "Proceso integral del talento humano para la generación de valor", un tema que adquiere especial relevancia en el contexto actual de las organizaciones, ya que  busca explorar cómo una gestión efectiva del talento humano no solo contribuye al bienestar de los empleados, sino que también se traduce en un valor agregado para la empresa. Al finalizar esta unidad, se espera que los estudiantes adquieran competencias clave en la identificación y gestión del proceso de adquisición de talento: perfiles de cargo y contratación laboral, así como en la compensación laboral y el desarrollo organizacional.
    
        p(data-aos="fade-left").mb-4 La importancia de este tema radica en su aplicación práctica en el ámbito profesional, ya que la capacidad de gestionar el talento humano es fundamental para el éxito de cualquier organización. Por ejemplo, un correcto proceso de selección y una adecuada compensación laboral son factores que influyen directamente en la motivación y productividad de los empleados, impactando así en el rendimiento general de la empresa. Los estudiantes tendrán la oportunidad de reflexionar sobre estas dinámicas y considerar cómo pueden implementarlas en sus futuras carreras.
    
    .bg-color-intro-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La unidad está estructurada en varias secciones que abordarán en profundidad los subtemas mencionados: comenzando con el proceso de adquisición de talento y perfiles de cargo, se avanzará hacia la vinculación de trabajadores, seguido por el análisis de la compensación laboral y concluyendo con el proceso de desarrollo organizacional. A lo largo de estas secciones, los estudiantes participarán en actividades interactivas y estudios de caso que facilitarán un aprendizaje práctico y aplicable.
        .col-lg-auto
          figure
            img(src='@/assets/curso/intro/2.svg', alt='')
    

</template>

<style lang="sass">
.bg-color-intro
  &-1
    background-color: #D6F5FB
  &-2
    background-color: #103D47
    p
      color: #FFFFFF
</style>
