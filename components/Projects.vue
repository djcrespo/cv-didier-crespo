<template>
  <ActiveSection :section-name="'works'">
    <div class="content blog">
      <!-- title -->
      <div class="title">Proyectos</div>

      <!-- content -->
      <div class="row border-line-v">
        <!-- blog item -->
        <div class="col col-d-6 col-t-6 col-m-12" v-for="project in projects">
          <div class="box-item">
            <div class="image">
              <a href="#" @click="activeBlogPost(project)">
                <img :src="project.img" :alt="project.title" />
                <span class="info">
                  <span class="ion ion-eye"></span>
                </span>
              </a>
            </div>
            <div class="desc">
              <a href="#" @click="activeBlogPost(project)">
                <!--<span class="date">{{ project.date }}</span>-->
              </a>
              <a href="#" @click="activeBlogPost(project)" class="name">{{
                project.title
              }}</a>
              <!--
              <div class="text">
                <p>
                  Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                  pri zril ubique ut. Te cule tation munere noluisse. Enim
                  torquatos&#8230;
                </p>
              </div>
              -->
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </ActiveSection>
  <BlogDetails :project-data="project" />
</template>

<script>
import { navFunction } from "../utils/navFunction";
import { projects } from "../utils/data-djcrespo";
export default {
  data() {
    return {
      activeData: null,
      project: {}
    };
  },
  mounted () {
    window.scrollTo(0, 2);
  },
  methods: {
    activeBlogPost(value) {
      this.project = value
      navFunction.activeSection("blog-post", value);
      this.activeData = value;
    },
  },
};
</script>
