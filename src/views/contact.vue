<template>
  <h1 class="text-4xl p-4 font-bold tracking-wide">Contact</h1>
  <div
    class="
      absolute
      top-1/2
      left-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
      bg-blue-500
      h-32
      w-full
    "
  ></div>

  <div
    class="
      relative
      p-5
      lg:px-20
      flex flex-col
      md:flex-row
      items-center
      justify-center
    "
  >
    <div class="w-full md:w-1/2 p-5 md:px-0 mx-5">
      <div
        class="bg-white border border-green-500 w-full lg:w-1/2 h-full p-5 pt-8"
      >
        <h3 class="text-2xl font-semibold mb-5">My Social Media</h3>
        <!-- list -->
        <div class="flex flex-col gap-3">
          <a
            href="https://github.com/JirayutB"
            class="flex items-center hover:text-white hover:bg-red-500 p-2"
          >
            <svg
              fill="currentColor"
              class="w-6 h-6 m-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            Github
          </a>
          <a
            href="https://www.facebook.com/bom.jirayut128/"
            class="flex items-center hover:text-white hover:bg-red-500 p-2"
          >
            <svg
              fill="currentColor"
              class="w-6 h-6 m-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"
              />
            </svg>
            Facebook
          </a>
        </div>
      </div>
      <div
        class="
          bg-white
          border border-green-500
          w-full
          lg:w-1/2
          h-full
          p-5
          pt-8
          mt-8
        "
      >
        <h3 class="text-2xl font-semibold mb-5">My Contact</h3>
        Phone : {{ phone }} <br />
        Email : {{ email }}
      </div>
    </div>
  </div>
  <router-link :to="{ name: 'profile' }" class="pl-16"
    ><b> Back to Profile </b></router-link
  >
</template>

<script>
export default {
  name: 'contact',
  components: {},
  data() {
    return {
      phone: '0838204469',
      email: 'jirayut.bal4ncez@mail.kmutt.ac.th',
    };
  },
  created() {},
};
</script>
