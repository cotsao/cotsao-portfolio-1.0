<template>
  <div class="bg-black text-iron">
    <header>
      <nav
        class="fixed flex items-center justify-between w-full px-6 font-raleway top-6 lg:px-12"
      >
        <!-- stagger entrance -->
        <div class="transform -translate-y-4 opacity-0 nav-el text-mariner">
          logo
        </div>
        <div class="items-center justify-around hidden nav-el lg:flex">
          <ol class="flex justify-around">
            <li class="mx-3 transform -translate-y-4 opacity-0 nav-el">
              About
            </li>
            <li class="mx-3 transform -translate-y-4 opacity-0 nav-el">
              Projects
            </li>
            <li class="mx-3 transform -translate-y-4 opacity-0 nav-el">
              Experience
            </li>
            <li class="mx-3 transform -translate-y-4 opacity-0 nav-el">
              Contact
            </li>
          </ol>
          <button
            class="nav-el mx-3 px-3 py-1.5 border rounded-md text-mariner border-mariner opacity-0 transform -translate-y-4"
          >
            Resume
          </button>
        </div>
        <div class="lg:hidden">test</div>
      </nav>
    </header>
    <div
      class="fixed bottom-0 flex-col items-center hidden ml-12 transform translate-y-4 opacity-0 side-bar lg:flex side-el"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="github"
        class="svg-inline--fa fa-github"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path
          fill="currentColor"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        ></path>
      </svg>
      <div>dfs</div>
    </div>
    <div
      class="fixed bottom-0 right-0 flex-col items-center hidden mr-12 transform translate-y-4 opacity-0 side-bar lg:flex side-el"
    >
      <div
        class="pb-10 text-sm font-light tracking-widest duration-200 ease-in-out transform right-text text-gray-50 hover:-translate-y-2 hover:text-mariner"
      >
        cotsao42@gmail.com
      </div>
    </div>

    <main class="w-full px-6 mx-auto mt-36 lg:mt-0 lg:px-36">
      <section
        id="hero"
        class="flex flex-col items-start min-h-screen leading-normal lg:justify-center lg:mx-36 lg:my-0"
      >
        <h1 class="opacity-0 title-el text-mariner">Hi, my name is</h1>
        <h2 class="text-4xl opacity-0 title-el lg:text-7xl text-iron-50">
          Cody Tsao.
        </h2>
        <h3 class="title-el mt-2.5 lg:mt-5 text-4xl lg:text-6xl opacity-0">
          I build things for the web.
        </h3>
        <p class="max-w-xl mt-5 opacity-0 title-el lg:mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          quibusdam fuga, unde, optio amet tempora porro tenetur nemo, iure
          voluptatem quos aspernatur nulla corrupti reprehenderit officiis
          inventore et libero odit?
        </p>
      </section>
      <section
        id="about-section"
        class="w-full px-8 mx-auto transform translate-y-4 opacity-0 lg:px-48 lg:py-40 lg:mb-60"
      >
        <h2 class="numbered-heading lg:text-3xl about-section">About Me</h2>
        <div
          class="flex flex-col items-center justify-between w-full lg:flex-row lg:items-center "
        >
          <p class=" lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa
            laudantium nam dolore hic. Dignissimos voluptates nostrum obcaecati
            adipisci minus odio velit laborum quas dicta dolorem repudiandae
            dolore, sit animi? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Fugit, dolore error cum numquam tempore sunt
            aliquam nihil quibusdam, ipsam eos rerum dolor eveniet sint
            repellendus nulla voluptate sequi culpa dolorum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Saepe ipsa laudantium nam
            dolore hic.
          </p>
          <img
            class="object-cover h-auto mt-4 rounded-lg lg:mt-0 lg:w-1/3"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </section>
      <section id="web-projects" class=" lg:mx-32">
        <h2 id="web-projects-0" class="transform translate-y-4 opacity-0 numbered-heading lg:text-3xl ">Web Projects</h2>
        <ul>
          <li id="web-projects-1"  class="transform translate-y-4 opacity-0 lg:pt-10">
            <div class="flex flex-col lg:grid lg:grid-cols-12 ">
              <img
                class="object-cover object-top w-full rounded-lg grid-image-left max-h-96"
                src="~/assets/images/bookbase/bookbase-homepage.png"
                alt=""
              />

              <div class="py-6 lg:text-right grid-content-right lg:py-0">
                <h3
                id="web-projects-1-title"
                  class="text-2xl text-center lg:text-right project-title-right"
                >
                  bookbase
                </h3>
                <div
                  class="px-4 py-4 mt-3 rounded-lg lg:w-full bg-dove-gray-800"
                >
                  <p>
                    A MERN-stack website for creating reading lists and sharing
                    them with others. Search for books by title, author, subject
                    and others. View detailed information about your favorite
                    authors and books. Log in to save your books into a list
                    that can be shared with others.
                  </p>
                </div>
                <ul
                  class="flex justify-between mt-3 lg:w-3/4 lg:ml-auto lg:mr-0 "
                >
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>Auth0</li>
                  <li>OpenLibrary-API</li>
                </ul>
                <ul class="flex justify-around lg:justify-end">
                  <li class="ml-6">link1</li>
                  <li class="ml-6">link2</li>
                </ul>
              </div>
            </div>
          </li>
          <li id="web-projects-2"  class="transform translate-y-4 opacity-0 lg:pt-20">
            <div class="flex flex-col lg:grid lg:grid-cols-12 ">
              <img
                class="object-cover object-top w-full rounded-lg grid-image-right max-h-96"
                src="~/assets/images/movio/movio-movie-page.png"
                alt=""
              />

              <div class="lg:text-left grid-content-left">
                <h3 id="web-projects-2-title"
                  class="pt-6 text-2xl text-center lg:text-left lg:pt-0 project-title-left"
                >
                  Movio
                </h3>
                <div
                  class="px-4 py-4 mt-3 rounded-lg lg:w-full bg-dove-gray-800"
                >
                  <p>
                    A MEN-stack website to view detailed information about
                    movies. Check a movie's director, ratings, awards and much
                    more. Like a movie? Save it to a list, or view recommended
                    titles based on that movie. Want to watch it now? See a list
                    of streaming services that movie is available on, and much
                    more.
                  </p>
                </div>

                <ul class="flex mt-3">
                  <li class="mr-6">MongoDB</li>
                  <li class="mr-6">EJS</li>
                  <li class="mr-6">Node.js</li>
                </ul>

                <ul class="flex justify-around lg:justify-start">
                  <li class="mr-6">link1</li>
                  <li class="mr-6">link2</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="project-grid" class=" lg:mx-24 md:mx-16 lg:py-48">
        <h2 class="transform translate-y-4 opacity-0 numbered-heading lg:text-3xl other-projects grid-el">Other Projects</h2>
        <div id="vue-grid" class="grid items-center gap-5 grid-cols-card ">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="relative transform translate-y-4 opacity-0 project-card grid-el"
            
          >
            <div
              class="absolute flex items-center justify-center overflow-hidden duration-500 ease-in-out transform rounded-lg box top-3 left-3 right-3 bottom-3 hover:-translate-y-8"
            >
              <div class="p-4 content">
                <h2 class="absolute">0{{ index }}</h2>
                <h3 class="mb-2 text-xl font-bold leading-tight text-iron-400 ">
                  {{ project.title }}
                </h3>
                <p class="mr-2 text-iron-600">
                  {{ project.description }}
                </p>
                <ul class="flex mt-4 text-iron-700">
                  <li
                    v-for="(technology, index) in project.technologies"
                    :key="index"
                    class="mr-2"
                  >
                    {{ technology }}
                  </li>
                  <!-- <li class="mr-2">CSS</li>
                  <li class="mr-2">Javascript</li> -->
                </ul>
                <ul class="absolute flex justify-end bottom-4 right-4">
                  <li class="ml-4">{{ project.github }}</li>
                  <li class="ml-4">{{ project.demo }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="numbered-heading lg:text-3xl">Contact</section>
    </main>

    <footer>hi</footer>
  </div>
</template>

<script>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js" 

export default {
  data: function() {
    return {
      projects: [
        {
          title: "myCapyPal",
          description:
            "Tamogotchi-style browser game. Feed and play with your pet through buttons or an interactive typing game.",
          technologies: ["HTML", "CSS", "Javascript"],
          github: "github",
          demo: "demo"
        },
        {
          title: "example project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa laudantium nam dolore hic. ",
          technologies: ["HTML", "CSS", "Javascript"],
          github: "github",
          demo: "demo"
        },
        {
          title: "example project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa laudantium nam dolore hic. ",
          technologies: ["HTML", "CSS", "Javascript"],
          github: "github",
          demo: "demo"
        },
        {
          title: "example project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa laudantium nam dolore hic. ",
          technologies: ["HTML", "CSS", "Javascript"],
          github: "github",
          demo: "demo"
        },
        {
          title: "example project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa laudantium nam dolore hic. ",
          technologies: ["HTML", "CSS", "Javascript"],
          github: "github",
          demo: "demo"
        },
        {
          title: "example project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa laudantium nam dolore hic. ",
          technologies: ["HTML", "CSS", "Javascript"],
          github: "github",
          demo: "demo"
        },
        {
          title: "example project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsa laudantium nam dolore hic. ",
          technologies: ["HTML", "CSS", "Javascript"],
          github: "github",
          demo: "demo"
        }
      ]
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".title-el", {
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "easeInOut"
    });
    gsap.to(".nav-el", {
      opacity: 1,
      duration: 0.5,
      delay: 1,
      stagger: 0.1,
      ease: "easeInOut",
      y: 0
    });
    gsap.to(".side-el", {
      opacity: 1,
      duration: 0.5,
      delay: 2,
      stagger: 0.5,
      ease: "easeInOut",
      y: 0
    });
    gsap.to("#about-section", {
      scrollTrigger: ".about-section",
      opacity: 1,
      duration:0.5,
      y:0,
      ease: "easeInOut"
    });
    gsap.to(".grid-el", {
      scrollTrigger: ".other-projects",
      opacity: 1,
      duration:0.5,
      y:0,
      ease: "easeInOut",
      stagger:0.2
    });
    gsap.to("#web-projects-0", {
      scrollTrigger: "#web-projects-0",
      opacity: 1,
      duration:1,
      y:0,
      ease: "easeInOut"
    });
    gsap.to("#web-projects-1", {
      scrollTrigger: "#web-projects-1-title",
      opacity: 1,
      duration:1,
      y:0,
      ease: "easeInOut"
    });
    gsap.to("#web-projects-2", {
      scrollTrigger: "#web-projects-2-title",
      opacity: 1,
      duration:1,
      y:0,
      ease: "easeInOut"
    });

  }
};
</script>

<style>
:root {
  counter-reset: headings;
}
.side-bar {
  -webkit-box-align: center;
}
.right-text {
  writing-mode: vertical-rl;
}
.side-bar::after {
  content: "";
  display: block;
  width: 1px;
  height: 8rem;
  margin: 0 auto;
  background-color: #d9dbdf;
}
.numbered-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 0.625rem 0px 2.5rem;
  width: 100%;
  counter-increment: headings;
  white-space: nowrap;
}
.numbered-heading::before {
  content: "0" counter(headings) ". ";
  color: #226ec3;
  margin-right: 0.5rem;
}
.numbered-heading::after {
  content: "";
  display: block;
  position: relative;

  width: 300px;
  height: 1px;
  margin-left: 20px;
  background-color: white;
}
.project-title-right::after {
  content: "";
  display: block;
  position: relative;
  height: 1px;
  background-color: #226ec3;
  width: clamp(8rem, 25%, 20rem);
  margin-left: auto;
  margin-right: 0;
}
.project-title-left::after {
  content: "";
  display: block;
  position: relative;
  height: 1px;
  background-color: #226ec3;
  width: clamp(8rem, 25%, 20rem);
}

.grid-content-right {
  grid-area: 1 / 7 / -1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.grid-image-left {
  grid-area: 1 / 1 / -1 / 8;
}
.grid-content-left {
  grid-area: 1 / 1 / -1 / 7;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.grid-image-right {
  grid-area: 1 / -8 / -1 / -1;
}
.project-card {
  width: 100%;
  aspect-ratio: 1.3 / 1;

  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;

  transition: 0.5s;
  z-index: 3;
}
.box {
  background: #2a2b2f;
}
.project-card .box .content h2 {
  top: -1rem;
  right: 1rem;
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.1);
}
.box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}
@media screen and (max-width: 1024px) {
  .web-project::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: white;
    margin: 0.5rem 0 1rem 0;
  }
  .project-title-right::after {
    content: "";
    display: block;
    position: relative;
    height: 1px;
    background-color: #226ec3;
    width: clamp(8rem, 25%, 20rem);
    margin: 0 auto;
  }
  .project-title-left::after {
    content: "";
    display: block;
    position: relative;
    height: 1px;
    background-color: #226ec3;
    width: clamp(8rem, 25%, 20rem);
    margin: 0 auto;
  }
}
</style>
