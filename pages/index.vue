<template>
  <NuxtLayout name="default" :noSidebar="true" :bg="'img'">
    <!--<HomeIndexClassic />-->
    <HomeIndex8 />
    <ActiveSection :section-name="'about'">
      <AboutMe2 />
      <div class="content skills">
        <div class="title">Mis habilidades</div>
        <div class="row">
          <MySkillsSkillCategory :knowledges="djcrespoInfo.architecture" />
          <MySkillsSkillCategory :knowledges="djcrespoInfo.backend" />
          <MySkillsSkillCategory :knowledges="djcrespoInfo.frontend" />
          <MySkillsSkillCategory :knowledges="djcrespoInfo.databases" />
          <MySkillsSkillCategory :knowledges="djcrespoInfo.cloud" />
          <MySkillsSkillCategory :knowledges="djcrespoInfo.ai" />
          <MySkillsSkillCategory :knowledges="djcrespoInfo.payments" />
          <MySkillsSkillCategory :knowledges="djcrespoInfo.others" />
          <div class="clear"></div>
        </div>
      </div>
      <!--<AboutServices />-->
      <!--<AboutPrice />-->
      <!--<AboutFunFact />-->
      <!--<Clients />-->
      <!--<Quote />-->
    </ActiveSection>
    <ActiveSection :section-name="'resume'">
      <div class="content resume">
        <div class="title">Experiencia</div>
        <div class="row">
          <ResumeExperience />
          <!--<ResumeEducation />-->
          <div class="clear"></div>
        </div>
      </div>
      <div class="content resume">
        <div class="title">Educación</div>
        <div class="row">
          <!--<ResumeExperience />-->
          <ResumeEducation />
          <div class="clear"></div>
        </div>
      </div>
      <!--<TestimonialsSlider />-->
    </ActiveSection>
    <!--<Works />-->
    <!--<Blog />-->
    <Projects />
    <Contacts />
  </NuxtLayout>
</template>

<script setup>
import { djcrespoInfo } from "../utils/data-djcrespo";

useHead({
  link: [
    { rel: "stylesheet", href: "/css/new-skin/new-skin.css" },
    { rel: "stylesheet", href: "/css/demos/demo-1-colors.css" },
  ],
});
definePageMeta({
  layout: false,
});
</script>
