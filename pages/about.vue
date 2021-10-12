<template>
  <div class="bg-black text-iron">
    <header>
      <nav
        id="nav-bar"
        class="fixed top-0 z-10 flex items-center justify-between w-full px-6 py-6 bg-black font-raleway lg:px-12"
      >
        <nuxt-link :to="{ path: '/' }">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="house"
            class="h-6 duration-300 ease-in-out transform -translate-y-4 opacity-0 svg-inline--fa fa-house nav-el text-mariner hover:text-mariner-400"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
            ></path>
          </svg>
        </nuxt-link>

        <div class="items-center justify-around hidden nav-el lg:flex">
          <ol class="flex justify-around">
            <nuxt-link :to="{ path: '/about', hash: '#about-section' }">
              <li
                class="mx-3 transform -translate-y-4 opacity-0 nav-el link-el"
              >
                About
              </li>
            </nuxt-link>
            <nuxt-link :to="{ path: '/about', hash: '#projects' }">
              <li
                class="mx-3 transform -translate-y-4 opacity-0 nav-el link-el"
              >
                Web Projects
              </li>
            </nuxt-link>
            <nuxt-link :to="{ path: '/about', hash: '#project-grid' }">
              <li
                class="mx-3 transform -translate-y-4 opacity-0 nav-el link-el"
              >
                Smaller Projects
              </li>
            </nuxt-link>
            <nuxt-link :to="{ path: '/about', hash: '#contact' }">
              <li
                class="mx-3 transform -translate-y-4 opacity-0 nav-el link-el"
              >
                Contact
              </li>
            </nuxt-link>
          </ol>
          <button
            class="nav-el mx-3 px-3 py-1.5 border rounded-md text-mariner border-mariner opacity-0 transform -translate-y-4 duration-300 ease-in-out hover:text-mariner-400 hover:border-mariner-400 "
          >
            Resume
          </button>
        </div>
        <div class="lg:hidden">
          <svg
            v-on:click="hide = !hide"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="h-6 mx-3 transform -translate-y-4 opacity-0 svg-inline--fa fa-bars lg:hidden nav-el link-el text-mariner"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 224H31.1C14.33 224 0 238.3 0 256s14.33 32 31.1 32h384C433.7 288 448 273.7 448 256S433.7 224 416 224zM416 384H31.1C14.33 384 0 398.3 0 415.1S14.33 448 31.1 448h384C433.7 448 448 433.7 448 416S433.7 384 416 384zM416 64H31.1C14.33 64 0 78.33 0 95.1S14.33 128 31.1 128h384C433.7 128 448 113.7 448 96S433.7 64 416 64z"
            ></path>
          </svg>
          <ul v-if="!hide" class="absolute w-full text-right right-2">
            <nuxt-link :to="{ path: '/about', hash: '#about-section' }">
              <li v-on:click="hide = !hide" class="text-dove-gray">
                About
              </li>
            </nuxt-link>
            <nuxt-link :to="{ path: '/about', hash: '#projects' }">
              <li v-on:click="hide = !hide" class="text-dove-gray">
                Web Projects
              </li>
            </nuxt-link>
            <nuxt-link :to="{ path: '/about', hash: '#project-grid' }">
              <li v-on:click="hide = !hide" class="text-dove-gray">
                Smaller Projects
              </li>
            </nuxt-link>
            <nuxt-link :to="{ path: '/about', hash: '#contact' }">
              <li v-on:click="hide = !hide" class="text-dove-gray">
                Contact
              </li>
            </nuxt-link>
          </ul>
        </div>
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
        class="w-6 mb-6 duration-300 ease-in-out transform svg-inline--fa fa-github hover:text-mariner hover:rotate-12"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path
          fill="currentColor"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        ></path>
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="linkedin"
        class="w-6 mb-6 duration-300 ease-in-out transform svg-inline--fa fa-linkedin hover:text-mariner hover:rotate-12"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        ></path>
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="twitter"
        class="w-6 mb-6 duration-300 ease-in-out transform svg-inline--fa fa-twitter hover:text-mariner hover:rotate-12"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
        ></path>
      </svg>
    </div>
    <div
      class="fixed bottom-0 right-0 flex-col items-center hidden mr-12 transform translate-y-4 opacity-0 side-bar lg:flex side-el"
    >
      <a
        class="pb-10 text-sm font-light tracking-widest duration-300 ease-in-out transform right-text text-gray-50 hover:-translate-y-1 hover:text-mariner"
        href="mailto:cotsao42@gmail.com"
        >cotsao42@gmail.com</a
      >
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
        class="w-full px-8 mx-auto lg:px-48 lg:py-40 lg:mb-60"
      >
        <h2
          class="transform translate-y-6 opacity-0 numbered-heading lg:text-3xl about-section"
        >
          About Me
        </h2>
        <div
          class="flex flex-col items-center justify-between w-full lg:flex-row lg:items-center "
        >
          <p
            id="about-start"
            class="transform translate-y-4 opacity-0 lg:w-1/2 about-section"
          >
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
            class="object-cover h-auto mt-4 transform translate-y-4 rounded-lg opacity-0 lg:mt-0 lg:w-1/3 about-section"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </section>
      <section id="projects" class=" lg:mx-32">
        <h2
          id="web-projects-0"
          class="transform translate-y-4 opacity-0 numbered-heading lg:text-3xl "
        >
          Web Projects
        </h2>
        <ul>
          <li
            id="web-projects-1"
            class="transform translate-y-4 opacity-0 lg:pt-10"
          >
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
                  <p class="project-description">
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
          <li
            id="web-projects-2"
            class="transform translate-y-4 opacity-0 lg:pt-20"
          >
            <div class="flex flex-col lg:grid lg:grid-cols-12 ">
              <img
                class="object-cover object-top w-full rounded-lg grid-image-right max-h-96"
                src="~/assets/images/movio/movio-movie-page.png"
                alt=""
              />

              <div class="lg:text-left grid-content-left">
                <h3
                  id="web-projects-2-title"
                  class="pt-6 text-2xl text-center lg:text-left lg:pt-0 project-title-left"
                >
                  Movio
                </h3>
                <div
                  class="px-4 py-4 mt-3 rounded-lg lg:w-full bg-dove-gray-800"
                >
                  <p class="project-description">
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
        <h2
          class="transform translate-y-4 opacity-0 numbered-heading lg:text-3xl other-projects grid-el"
        >
          Other Projects
        </h2>
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
      <section id="contact" class="numbered-heading lg:text-3xl">
        Contact
      </section>
    </main>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";

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
      ],
      hide: true
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const showAnim = gsap
      .from("#nav-bar", {
        yPercent: -200,
        paused: true,
        duration: 0.2
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: self => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });

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
    gsap.to(".about-section", {
      scrollTrigger: "#about-start",
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "easeInOut",
      stagger: 0.2
    });
    gsap.to(".grid-el", {
      scrollTrigger: ".other-projects",
      opacity: 1,
      duration: 0.5,
      y: 0,
      ease: "easeInOut",
      stagger: 0.1
    });
    gsap.to("#web-projects-0", {
      scrollTrigger: "#web-projects-0",
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "easeInOut"
    });
    gsap.to("#web-projects-1", {
      scrollTrigger: "#web-projects-1-title",
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "easeInOut"
    });
    gsap.to("#web-projects-2", {
      scrollTrigger: "#web-projects-2-title",
      opacity: 1,
      duration: 1,
      y: 0,
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
.link-el::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #226ec3;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.link-el:hover::before {
  transform: scaleX(1);
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
