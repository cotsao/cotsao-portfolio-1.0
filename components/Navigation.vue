<template>
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
        <nuxt-link :to="{ path: '/about', hash: '#employment' }">
          <li
            class="mx-3 transform -translate-y-4 opacity-0 nav-el link-el"
          >
            Employment
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
            Mini Projects
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
      <a
        href="https://docs.google.com/document/d/1I-MzT3covak9XmIVpVtssGfk4beuvzxNZHRswjAUuxk/edit?usp=sharing"
        target="_blank"
        class="nav-el mx-3 px-3 py-1.5 border rounded-md text-mariner border-mariner opacity-0 transform -translate-y-4 duration-300 ease-in-out hover:text-mariner-400 hover:border-mariner-400 "
      >
        Resume
      </a>
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
        <nuxt-link :to="{ path: '/about', hash: '#employment' }">
          <li v-on:click="hide = !hide" class="text-dove-gray">
            Employment
          </li>
        </nuxt-link>
        <nuxt-link :to="{ path: '/about', hash: '#projects' }">
          <li v-on:click="hide = !hide" class="text-dove-gray">
            Web Projects
          </li>
        </nuxt-link>
        <nuxt-link :to="{ path: '/about', hash: '#project-grid' }">
          <li v-on:click="hide = !hide" class="text-dove-gray">
            Mini Projects
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
</template>

<script>
export default {
  data() {
    return {
      hide: true
    };
  }
};
</script>