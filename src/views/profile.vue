<template>
  <div
    class="
      h-screen
      bg-gray-200
      dark:bg-gray-800
      flex flex-wrap
      items-center
      justify-center
    "
  >
    <div
      class="
        container
        lg:w-2/6
        xl:w-2/7
        sm:w-full
        md:w-2/3
        bg-white
        shadow-lg
        transform
        duration-200
        easy-in-out
      "
    >
      <div class="h-32 overflow-hidden">
        <img
          class="w-full"
          src="https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png"
          alt=""
        />
      </div>
      <div class="flex justify-center px-5 -mt-12">
        <img
          class="h-32 w-32 bg-white p-2 rounded-full"
          src="https://scontent.fbkk29-2.fna.fbcdn.net/v/t31.18172-8/26685972_1385766174884979_1351225612890270285_o.jpg?_nc_cat=111&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeH4kQAedw67gtkKfhRzErVuLC_UlcF3Y-gsL9SVwXdj6KylFj5Bmv6w8rJWVtGKFLW19GaEljdqx1L_dHfW2emU&amp;_nc_ohc=o845ktTBUZgAX99p8fl&amp;_nc_ht=scontent.fbkk29-2.fna&amp;oh=00_AT-UEX1Gnadi4HDvRA9cyZUGfmraBc2IxPsgt-OGzGstnQ&amp;oe=62120FBB"
        />
      </div>
      <div class="">
        <div class="text-center px-14">
          <h2 class="text-gray-800 text-3xl font-bold">{{ name }}</h2>
          <p class="text-gray-400 mt-2">{{ email }}</p>
          <p class="mt-2 text-gray-600">
            My nickname is Bom I'm {{ age }} years old <br />
            I'm studying in {{ year }}, {{ department }}, {{ faculty }},
            {{ university }}
          </p>
        </div>
        <hr class="mt-6" />
        <div class="flex bg-gray-50">
          <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
            <p><span class="font-semibold">100 </span> Followers</p>
          </div>
          <div class="border"></div>
          <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
            <p><span class="font-semibold">10 </span> Following</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="
      bg-gray-200
      dark:bg-gray-800
      flex flex-wrap
      items-center
      justify-center
      -mt-48
    "
  >
  <router-link :to="{ name: 'contact' }" class=><b>My Contact</b></router-link>
  </div>
</template>

<script>
export default {
  name: 'main',
  components: {},
  data() {
    return {
      name: 'Jirayut Jedsadakaroon',
      email: 'jirayut.bal4ncez@mail.kmutt.ac.th',
      age: 21,
      year: "Bachelor's degree year 3",
      department: 'IT Department',
      faculty: 'SIT',
      university: 'KMUTT',
    };
  },
  created() {},
};
</script>
