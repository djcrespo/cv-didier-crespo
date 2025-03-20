<template>
  <NuxtLayout name="empty">
    <div class="demo_container">
      <div class="demo_content">
        <div class="text-center">
          <!--<img src="images/ryan_bg2.png" alt="" class="logo" />-->
          <p style="margin-top: 10px">
            Resume CV & vCard Vue NuxtJS Tailwind CSS Template
          </p>
        </div>
        <div class="row">
          <div
            v-for="demo in demos"
            class="col col-d-4 col-t-6 col-m-12 border-line-h"
          >
            <!--
            <a :href="demo.link" target="_blank">
              <img :src="demo.img" :alt="demo.title" />
              <h5>0{{ demo.id }}. {{ demo.title }}</h5>
            </a>
            -->
          </div>
        </div>
      </div>
    </div></NuxtLayout
  >
</template>

<script>
export default {
  data() {
    return {
      demos: [
        {
          id: 1,
          link: "index-new-demo-1",
          img: "/images/demos/new_preview1.jpg",
          title: "Default",
        },
        {
          id: 2,
          link: "index-new-demo-2",
          img: "/images/demos/new_preview2.jpg",
          title: "Default Dark",
        },
        {
          id: 3,
          link: "index-new-bg-image",
          img: "/images/demos/new_preview9.png",
          title: "Default Background Image",
        },
        {
          id: 4,
          link: "index-new-demo-3",
          img: "/images/demos/new_preview3.jpg",
          title: "Developer",
        },
        {
          id: 5,
          link: "index-new-demo-4",
          img: "/images/demos/new_preview4.jpg",
          title: "Designer",
        },
        {
          id: 6,
          link: "index-new-demo-5",
          img: "/images/demos/new_preview5.jpg",
          title: "Trainer",
        },
        {
          id: 7,
          link: "index-new-demo-6",
          img: "/images/demos/new_preview6.jpg",
          title: "Lawyer",
        },
        {
          id: 8,
          link: "index-new-demo-7",
          img: "/images/demos/new_preview7.jpg",
          title: "Writer",
        },
        {
          id: 9,
          link: "index-new-demo-8",
          img: "/images/demos/new_preview8.jpg",
          title: "Musician",
        },
      ],
    };
  },
};
</script>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped>
.col a {
  display: block;
  box-shadow: 0 2px 48px 0 rgb(0 0 0 / 4%);
  margin-bottom: 20px;
  position: relative;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}
img {
  width: 100%;
}
p {
  font-size: 16px;
}
.logo {
  width: 200px;
}
.text-center {
  text-align: center;
}
a {
  text-align: center;
}
.demo_content {
  padding: 100px 0;
}
.demo_container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .demo_container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .demo_container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .demo_container {
    width: 1170px;
  }
}
</style>
