<template>
  <div class="text-white bg-black">
    <header>
      <nav
        class="fixed flex items-center justify-between w-full px-6 font-raleway top-6 lg:px-12"
      >
        <!-- stagger entrance -->
        <div>
          logo
        </div>
        <div class="items-center justify-around hidden lg:flex">
          <ol class="flex justify-around">
            <li class="mx-3">About</li>
            <li class="mx-3">Projects</li>
            <li class="mx-3">Experience</li>
            <li class="mx-3">Contact</li>
          </ol>
          <button class="mx-3 px-3 py-1.5 border rounded-md">Resume</button>
        </div>
        <div class="lg:hidden">test</div>
      </nav>
    </header>
    <div
      class="fixed bottom-0 flex-col items-center hidden ml-12 side-bar lg:flex"
    >
      <div>df</div>
      <div>dfs</div>
    </div>
    <div
      class="fixed bottom-0 right-0 flex-col items-center hidden mr-12 side-bar lg:flex"
    >
      <div
        class="pb-10 text-sm font-light tracking-widest right-text text-gray-50"
      >
        cotsao42@gmail.com
      </div>
    </div>
    <div>
      <main class="w-full px-6 mx-auto my-0 lg:px-36">
        <section
          id="hero"
          class="flex flex-col items-start min-h-screen leading-normal lg:justify-center lg:mx-36 my-36 lg:my-0"
        >
          <div><h1>Hi, my name is</h1></div>
          <div><h2 class="text-4xl lg:text-7xl ">Cody Tsao.</h2></div>
          <div class="mt-2.5 lg:mt-5">
            <h3 class="text-4xl lg:text-7xl">I build things for the web.</h3>
          </div>
          <div class="mt-5 lg:mt-10">
            <p class="max-w-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quibusdam fuga, unde, optio amet tempora porro tenetur nemo, iure
              voluptatem quos aspernatur nulla corrupti reprehenderit officiis
              inventore et libero odit?
            </p>
          </div>
        </section>
        <section class="mx-6 lg:mx-64 lg:py-40 lg:mb-60">
          <h2 class="numbered-heading">About Me</h2>
          <div
            id="about-section"
            class="flex flex-col justify-between lg:flex-row lg:items-center"
          >
            <p class="lg:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              ipsa laudantium nam dolore hic. Dignissimos voluptates nostrum
              obcaecati adipisci minus odio velit laborum quas dicta dolorem
              repudiandae dolore, sit animi? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Fugit, dolore error cum numquam
              tempore sunt aliquam nihil quibusdam, ipsam eos rerum dolor
              eveniet sint repellendus nulla voluptate sequi culpa dolorum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              ipsa laudantium nam dolore hic. Dignissimos voluptates nostrum
              obcaecati adipisci minus odio velit laborum quas dicta dolorem
              repudiandae dolore, sit animi? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Fugit, dolore error cum numquam
              tempore sunt aliquam nihil quibusdam, ipsam eos rerum dolor
              eveniet sint repellendus nulla voluptate sequi culpa dolorum.
            </p>
            <img
              class="object-cover h-auto mt-4 rounded-lg lg:mt-0 lg:w-1/3"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAACtCAMAAADMM+kDAAABHVBMVEVus//+fbWI/qYAAABvtf9xuP//gLmN/6xwtv9xuf+L/6r/gbuI/6aO/63weK4tTmzVa5tCaphzvP9z1Y5sr/Zvx4demdlGc58sSGZgL0UADAoyGCMvTG0dL0GH+aWD8aBZkcdoq++/YY0aM0EMHyxShbh33JEvTmc8Y4tko+NWmWhpvoBShrZhs3dOj19+5plGgFYtTTadTXJ+QV+vWYJ4P1slFR5LJjjfcKMPAwYtSmEVISkkOlUECBZCbZQbLxhAb04hOCcXJDs2YEElPS03WX0nRS4ZKx4OFx5EdVJgqnYnP1MTHBY3YkNruoFXomsbKSE8bkkOGBEWKTc1HCoMGh8ADRAfEBc/ZodTLEAjDBSPSmt9QV1pNk+lUna6j5bKAAANrUlEQVR4nO2deVcTSRfGhad6JyGTVdCskLCTgCxBHIQX2YyICqJOdL7/x3hvdWfp6nQngUCY7uY5/oE5HEj/uFvdW1V58eJZz3rWs551P7GnfgP/bUmSpEnJYpIxjaSq7JmXICbFi5m/Xr9+B+Dv7GtSppxW48+U2mIaSx9kic779+8PL4+O0FajwNSnfnP/BTE1vvT6f8DGciKvRCL8X55UWVk+JkrZsiqF3pgkVlgAjj/nFH1SkK4rkY8fgP1MUnrqN/mkkpIn88BpJeIA1OG0cgacL6rhNSWmlW/JyVIRV0BcU7pSvSCXS2tP/V6fSNLSS7KhvO5uQx0p+UtgNf7U7/ZJpGXIQD5625DN5ZaBhWL4ohJLNoDlvDIEIoKU+obzQtj8jSP6tDKMEVmQqjUgEzJ/i1PCrw4IRIKUjwQpVJYkUSyqOBFNeVQALUgpoBwiSGyJonVPKNLPEn39LUHpLTyBO36Ni95YlMdl3wClV4ClsFST0irOcr0MIoeo9mM0qa8gGxZvSwIrbqGn4v6yDdIlVsPRCNB+unkaKTfA2fh3zIbDkIrw8CllA/n+jJSvSIchIkkH+OpuLvpn1MjZFF33LL8TmA6DIbGsZ2jO45OupDaOjk4THpRyn1B86gd4fLEiPuhTdushtf4fOUbqM610v9BSzt3UIrUwRG2pjHXFTmjt6irVSmeU3I+/YT2v08Ij5Z7iqpgL/rIt3oCtnNYTs7y5f6m3nQ2okQVF1rAhGFvXkDaCX0eyJM5sbpTnfcjUN+xV2wRMglPKKSqudkSmdhL0BQkt1Q67XhQ5RY3cLX+MDdP/dFq4JnTriwv3sJ37ch704aRawHKXEa3AFOvBW/EnB3w2v9ABD2c7RCHgUVvN2KIxFUSWtdAXH8xXlWPUzFeUC3h0ARJYCHiJRIy6z64vY81EM6WfITJl+djZ5JSFoububDpuQ8aoFZkpWCsmGioSrZZAHsfujGg9EvDM5mFHylmLkXLYYqQfrnsMJq+CHpAERpMpbJgupqTwpUUksda2F48+CWX/TLCzv8gockTlo65HEsDHNpKBk4AKFsPESK8CRx/XasBX90zvpkS4GE3qlWNzp1HNpXfrpTxehooRp5RKparDzWvDw8i5otcH7YoIHaMCPHL6M6OOijgd1rGm3C0s+Izi8+gz/BCY6Fc1t50lwWeknXi0GJVJJbGyUukCzJ2a7beeUUkFrwPOiBVw6OZslcvqFWdynGsRjBzjaG35DEfOsiDwNSRvRJ66OVsFVEkuLwNfWntuKnz3jZ774BxM6usoB3u9RpntrdvsaEr5xochSv4UZ6Z30XrXbI7oZ0iJPrkR/PGRlMGyi7PlYG2UICZm302vWcUmLWHFYiGP+cBPRpgKt36+UsOpyYKWcHnLpaotJl/tSPW1oC/7uaRVYcLWfXZr2h+p4Uo3GVm7SBLmgLvL8iIUI//kvEtE6jAiKKZBpaxZCb2+ZmeUx3UIEPFRrUtqy7cZ6V++8cCkrGMjr0c6L7dQrgQ+81uKN1x2Y+U+tRlttOaQVAwcX3zpdt9MTzwNeje7JbaEbz0No87uI/0KK5MmpDV+lO1KiNgrWAh8VrOkLZpjfTEgLR9b3KYm2zu3db1azQsGF7kMRcQ2pc1hxZnbOjuzvLu2kavAr2e74ju0hz8K0aGYAophMSPKbWmKNJGh+/yWqLxcCvpSzS51aR4flbtAmopchOzIyAu1uO+xB9nL02rYD00waokVX2Jj6N62nrvEdfKp3/PYxdS32KgO52+RxCc0kuGJ1x0xaZoPsQfbkl75CiyEEREpXgY2EgOikq6vA7OrWjgR8TsQTmhVllD6jPv1xAfggIUtXNulFRpEaU1XdNcC2zy6Pl8IrRFZYvHyS1q7rqfyuYhz6qgnaPF/m9HCVDm6S9XSB3xudHa4vJyylLB2167x22tCfuFIW0xS03+9m0dXZqdSP0WmGIZbkJilgd8lacmldDljqjXM1Tf+DvzVPkzVpGLaUpHFtQEPTCRViYtKAt6onMphP+CRSJWKqwtd/9m/XlgtFCVpiJt6pEWLUQTvAt11VM2kDuxub3K9mdkzSV0vZNIDE3n8nRWP8oFmpEqFLLDzphSVDZnLkCcmYlvNXU6qkR7gdNq5tQEngZfBbYZI3IZ2tgxOpisiZUTrWzdEaalfPpdW8YEz0mvIBDUeSUVaYNxsyQKgLimjdIPZch+HU+esuWPkOKgdfhb/Sf7kRciypzfAtCckqdwaLVWBYF48ypJzwO+oNyEuo7SDrNfVWMlz66CfUsPPYIaj+DR2YkZfQqYpbWO24ApJW2hFo2pQ72DRKBRN9DeitikBbpC06dbmmuosFgOZ+aUCUBoGkQlpttdOtAPrSK1e+RTQHSJ8tvjvQEdrQ9qC8/wwY9P8RO2Urq8A2WA2Z6W3eDOcFZmQ3ohBmWlL12RFCr9QA3gbUESruBnWikxIN/brw9Qk+dlRJZLjhObLAe0aabeIDW9GpCi+t72Nqav7/JaIyvoscH7QtxD3sVgBM3cxIzKkJhYtb2Nsju/q57fT4l1GDSghM+8PmdM6kvfau62LrRZK9iCtBfiiYzWL6EDLqQsluLyFRstmypky/VuKB7vzWBwiYsf4Us7O7E973Wq2IIO6zG+LpdG0MZJjLksSuQmxOpBL7YgUCqkH+Nf2+GQx273RKbZzI8YsYy/45z+6kk5QFwwEe67uJoKjiHQQHkOKN4SQLW/fDJflXoVnkyOTzkW7kfu02URDCk9EKt61gmzJwHyw831XlNbusJ61M9pGISSMpIyQ1oaXHAtqT7ZH0iJi90FEkG4C2pTtkTQ9eCXiwaiEk3AY0v0ZTcg7t0G/0NDSKIyaIbmqfwRGE9HAX9ZnaQhGsuGR+IyZcETt/oxk2ZiIlppbHnsASjgIjrN5x1ZvRoYsR0tbMzsAfnhU4lGcB+UwCNOSSa9PH/RkFP29a3Zhd39tlbwszWgG5NZHJqVf3s7uH7xwfRpPRjFgb7e5VZc9w5H5TQtBcDaWnCZrmAFuXT9Xz9vX6nXD6IPHlIzrIAz31QawKRv1GffNDKPkfnK23SB0kaQyUOIhV950Pfo7GiN5KwB3rTDWQkR/899o9HrbaIwos/l/zcbK3cmQ8QO94/hRGe3N+34ThDZtG8LWXcqZERkZf7D0FM/1kGJztqkHlTM9u4KJUb0Pg4GMmm6baJkWj/tncsvmXtnSdxT7zlQt/XXfHpspPkPq9d/CNZUbP/3ihCIjPoJ2GNKIjAh7TyLgqXSPivSsT8oCkRFFpHeOJxqVkbEHh2myAvDLMOo3fjl+5GBk/HJ2M0ZmNOMcamsNzNDvlKPAiS8gsbl/7E8k/+tchI7MqOkYIalkRtbvohWfL6ZLtBIR0lYMb0VnG5URBW2xYUtmtGmZrrGFhh9Wc9pPcZMa1ZHi2x6VEYU4IWizIjoFl/zDF31KtexgNOOoZ0ZmNPHPtf0IjbqKN53CvumL1Ry95ZJjl574tkdmRPWEPcdrb2073mK+WM2xtLhJj+oZ8ZDi6IzEXqR0Dfsvm/eBr1F42BOb0Tdirh7d12LC588VsWvj9wp+KLa1azGxGZviRdajM4riumuZbAl/un8TKsf8sCNQWnTsvq6L2X90RhSQut0EcQeq/Bt+mJtQYmsKzia/EroZ0smojPhIu2OZhNwW/4xtXyR/Mv5dkVEJr22GNGL/iKtuu7BXzdiRy/5I/iz53Qlh59YWSKXGyIxo6d+1owPBLGP+GORqC45TRbRms/1xJby613ZIm4zd7x3oZJZ2RnV/MKIqUgxIE9G9bkZmw5yEGMToT/fnaeeCWdb9sWKjgOSgYNj2Dd17y6j48zrlhIYd+y8zkPUDI36Ez2EpVP62z1Hde8uoXbaoUxQzhOwTRvGss6tvW2tqJyO1/C3R+qZNoug4e7N364dCm5uKc/9QtH0VsUvWu4cMzLeqCXLd32KbYdYXjNSCo0Iya6R9871LZfvS4d6MfrWDNiWITcGOfMKIJfd7bIVSEb9dhSWHvvugL6Pf7aas5Gjp+YURv0ukZ7lBkOaWpOI0tkc3I26Wrdmm5jh36htGTgew3v0f4BrYGT0aTXS75Cx5K4wYfBOP+MDLJegYpZtXu80HQdTpAFPIFg8x+YeRCrfkxWdgD+Bo5o+KWYfZaNXfFNc98EfuN4sgj93DDyV+4J+5lGJRn9SQXs72kOKjNI1fEbQj/p66L5r+XCw5+wCVYn9Iuyho6r7DXv20yV37+djORhZzW85iR3xR3vLPp0BS9r/fodnhxa9JwI5zYein86TS7WM7G9USpZLz70A1gU/S2gurs//IzuZ66P2HL+Yilmjtv/nIzuamqJ8+MIsK4EfO/m7iJ279w4hf4DN2REIT1wfS7FsVxsbIX+cktbejjmPvw4hWa0/94HeQ2tuwfXzF/HVyi5ZszXEHbXnTF5PsrnqmbI+v7qVtPpHW0/h/dMk3vth91JWEvXHHoyiun/qp7yap8QDDxjuJFv0++3wIx6aXMYjCkc8OtlPyH3NiM+CjRb8pWrE9xChteNFizS+97Lb4nr+xBm1yNT8t1kyp31+NE9HExI7/TtrG58fLKIasr4psrjEzEndd+kRjZtRzwMkPGjcjwF8FJNeYGcX8saNWEEvejpOR67n/B9T/Ac3RYCP/44ehAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
        </section>
        <section id="web-projects" class="lg:mx-80">
          <h2 class="numbered-heading">Web Projects</h2>
          <ul>
            <li class="lg:pt-10">
              <div class="grid grid-cols-12 ">
                <img
                  class="object-cover object-top w-full rounded-lg grid-image-left max-h-96"
                  src="~/assets/images/bookbase/bookbase-homepage.png"
                  alt=""
                />

                <div class="lg:text-right grid-content-right">
                  <h3 class="text-center lg:text-right">bookbase</h3>
                  <div
                    class="lg:border lg:w-full lg:px-4 lg:py-2 lg:rounded-lg"
                  >
                    <p>
                      A MERN-stack website for creating reading lists and
                      sharing them with others. Search for books by title,
                      author, subject and others. View detailed information
                      about your favorite authors and books. Log in to save your
                      books into a list that can be shared with others.
                    </p>
                  </div>
                  <ul class="flex justify-between w-3/4 ml-auto mr-0 ">
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Auth0</li>
                    <li>OpenLibrary-API</li>
                  </ul>
                  <ul class="flex justify-around lg:justify-end">
                    <li>link1</li>
                    <li>link2</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="lg:pt-20">
              <div class="grid grid-cols-12 ">
                <img
                  class="object-cover object-top w-full rounded-lg grid-image-right max-h-96"
                  src="~/assets/images/movio/movio-movie-page.png"
                  alt=""
                />

                <div class="lg:text-left grid-content-left">
                  <h3 class="text-center lg:text-left">Movio</h3>
                  <div
                    class="lg:border lg:w-full lg:px-4 lg:py-2 lg:rounded-lg"
                  >
                    <p>
                      A MEN-stack website to view detailed information about
                      movies. Check a movie's director, ratings, awards and much
                      more. Like a movie? Save it to a list, or view recommended
                      titles based on that movie. Want to watch it now? See a
                      list of streaming services that movie is available on, and
                      much more.
                    </p>
                  </div>
                  
                  <ul class="flex justify-between w-3/4">
                    <li>MongoDB</li>
                    <li>EJS</li>
                    <li>Node.js</li>
                  </ul>
                  <ul class="flex justify-between w-3/4">
                      <li>APIs Used: </li>
                    <li>OMDB</li>
                    <li>Youtube</li>
                    <li>TasteDive</li>
                    <li>Watchmode</li>
                  </ul>
                  
                  <ul class="flex justify-around ">
                    <li>link1</li>
                    <li>link2</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 class="numbered-heading">Other Projects</h2>
        </section>
        <section class="numbered-heading">Contact</section>
      </main>
    </div>

    <footer>hi</footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  background-color: white;
}
.numbered-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 0.625rem 0px 2.5rem;
  width: 100%;

  white-space: nowrap;
}
.numbered-heading::before {
  content: "00. ";
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
@media screen and (max-width: 600px) {
}
</style>
