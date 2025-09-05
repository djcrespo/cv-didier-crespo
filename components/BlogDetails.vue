<template>
  <div
    class="card-inner"
    :class="
      navFunction.active == 'blog-post'
        ? `animated active ${width ? animationFunction.animationIn : ''}`
        : width
        ? `animated hidden ${width ? animationFunction.animationOut : ''}`
        : ''
    "
    id="blog-post"
  >
    <div v-if="navFunction.projectData && Object.keys(navFunction.projectData).length > 0" class="card-wrap">
      <div class="content blog-single">
        <!-- title -->
        <div class="title">{{ navFunction.projectData ? navFunction.projectData.title : 'Sin información' }}</div>

        <!-- content -->
        <div class="row border-line-v">
          <div class="col col-m-12 col-t-12 col-d-12">
            <div class="post-box">

              <!-- blog image -->
              <div class="blog-image">
                <img
                  v-if="navFunction.projectData"
                  :src="navFunction.projectData.img"
                  :alt="navFunction.projectData.title"
                />
              </div>

              <!-- blog content -->
              <div class="blog-content">
                <p>
                  {{ navFunction.projectData ? navFunction.projectData.description : 'Sin información' }}
                </p>
                <blockquote v-if="navFunction.projectData && navFunction.projectData.can_access">
                  <a :href="navFunction.projectData.url">Ver proyecto</a>
                </blockquote>
                <blockquote v-else>
                  No disponible para visualizar
                </blockquote>
                <!--
                <blockquote>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Pellentesque suscipit.
                </blockquote>
                <ul class="list-style">
                  <li>Greatest properly off ham exercise all.</li>
                  <li>Unsatiable invitation its possession nor off.</li>
                  <li>
                    All difficulty estimating unreserved increasing the
                    solicitude.
                  </li>
                </ul>
                <p>
                  Unpleasant astonished an diminution up partiality. Noisy an
                  their of meant. Death means up civil do an offer wound of.
                </p>
                -->
              </div>

              <div v-if="navFunction.projectData" class="post-text-bottom">
                <span v-for="i in navFunction.projectData.technologies" class="tags-links"
                  >{{ i.label }}: <a v-for="element in i.technologies">{{ element }}</a></span>
              </div>
            </div>
          </div>
        </div>

        <!--
        <nav class="navigation post-navigation">
          <div class="nav-links">
            <div class="nav-previous">
              <a href="#"
                ><span class="post-nav-next post-nav-text">Prev</span></a
              >
            </div>
            <div class="nav-next">
              <a href="#"
                ><span class="post-nav-prev post-nav-text">Next</span></a
              >
            </div>
          </div>
        </nav>
        -->

        <!--
        <div class="post-comments">
          <div class="title">3 Comments</div>
          <div class="row border-line-v comments-row">
            <div class="col col-m-12 col-t-12 col-d-12">
              <ul class="comments">
                <li class="comment post-comment">
                  <div class="comment">
                    <div class="comment-image image">
                      <img
                        src="/images/man1.jpg"
                        class="avatar"
                        height="80"
                        width="80"
                        alt=""
                      />
                    </div>
                    <div class="comment-desc desc">
                      <div class="comment-name name">
                        <span class="comment-author">John Doe</span>
                        <span class="comment-time">8:16 pm</span>
                        <span class="comment-date">April 28, 2020</span>
                        <span class="comment-reply">
                          <a class="comment-reply-link" href="#">Reply</a>
                        </span>
                      </div>
                      <div class="comment-text">
                        <p>
                          An has alterum nominavi. Nam at elitr veritus
                          voluptaria. Cu eum regione tacimates vituperatoribus,
                          ut mutat delenit est.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <ul class="children">
                  <li class="comment post-comment">
                    <div class="comment">
                      <div class="comment-image image">
                        <img
                          src="/images/man1.jpg"
                          class="avatar"
                          height="80"
                          width="80"
                          alt=""
                        />
                      </div>
                      <div class="comment-desc desc">
                        <div class="comment-name name">
                          <span class="comment-author">John Doe</span>
                          <span class="comment-time">8:16 pm</span>
                          <span class="comment-date">April 28, 2020</span>
                          <span class="comment-reply">
                            <a class="comment-reply-link" href="#">Reply</a>
                          </span>
                        </div>
                        <div class="comment-text">
                          <p>
                            An has alterum nominavi. Nam at elitr veritus
                            voluptaria. Cu eum regione tacimates
                            vituperatoribus, ut mutat delenit est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <li class="comment post-comment">
                  <div class="comment">
                    <div class="comment-image image">
                      <img
                        src="/images/man1.jpg"
                        class="avatar"
                        height="80"
                        width="80"
                        alt=""
                      />
                    </div>
                    <div class="comment-desc desc">
                      <div class="comment-name name">
                        <span class="comment-author">John Doe</span>
                        <span class="comment-time">8:16 pm</span>
                        <span class="comment-date">April 28, 2020</span>
                        <span class="comment-reply">
                          <a class="comment-reply-link" href="#">Reply</a>
                        </span>
                      </div>
                      <div class="comment-text">
                        <p>
                          An has alterum nominavi. Nam at elitr veritus
                          voluptaria. Cu eum regione tacimates vituperatoribus,
                          ut mutat delenit est.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        -->

        <div class="post-comments">
          <div class="row border-line-v">
            <div class="col col-m-12 col-t-12 col-d-12">
              <div class="align-left">
                <a href="#" class="button" @click="returnProjects">
                  <span class="text">Regresar</span>
                  <span class="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { navFunction } from "../utils/navFunction";
import { animationFunction } from "../utils/animationFunction";
export default {
  props: {
    sectionName: {
      type: String,
    },
    extraCls: { type: String },
    projectData: {
      type: Object,
    }
  },
  data() {
    return {
      width: false,
    };
  },
  mounted() {
    let width = window.innerWidth;
    this.width = width > 1200 ? true : false;

    window.addEventListener("scroll", () => {
      width = window.innerWidth;
      this.width = width > 1200 ? true : false;
    });
  },
  methods: {
    returnProjects() {
      navFunction.activeSection("works", {});
    },
  },
};
</script>
