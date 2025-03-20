<template>
  <div class="card-started" id="home-card">
    <!--
     Profile
-->
    <div class="profile no-photo">
      <!-- profile image -->
      <div
        class="slide"
        style="background-image: url(images/djcrespo/bg.jpg)"
      ></div>

      <!-- profile titles -->
      <div class="title">{{ djcrespoInfo.name }}</div>
      <!--<div class="subtitle">Web Designer</div>-->
      <TypingAnimation :arr="djcrespoInfo.typeingAnimation" />
      <!-- profile socials -->
      <SocialLinks :socialLinks="djcrespoInfo.socialLinks" />

      <!-- profile buttons -->
       <!--
      <div class="lnks">
        <a @click="downloadPDF" href="#" class="lnk">
          <span class="text">Mi CV</span>
          <span class="ion ion-archive"></span>
        </a>
        <a
          href="#"
          class="lnk discover"
          @click="navFunction.activeSection('contacts')"
        >
          <span class="text">Contacto</span>
          <span class="ion ion-email"></span>
        </a>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import { djcrespoInfo } from "../../utils/data-djcrespo";
import { navFunction } from "../../utils/navFunction";
export default {
  methods: {
    downloadPDF() {
      // Ruta del archivo PDF en la carpeta `public`
      const pdfPath = 'public/pdfs/cv.pdf'; // Asegúrate de que el archivo exista en `public/pdfs/archivo.pdf`

      // Crear un enlace temporal
      const link = document.createElement('a');
      link.href = pdfPath;
      link.setAttribute('download', 'Didier Crespo CV.pdf'); // Nombre del archivo al descargarlo
      document.body.appendChild(link);

      // Simular clic para descargar
      link.click();

      // Eliminar el enlace después de la descarga
      document.body.removeChild(link);
    }
  }
};
</script>
