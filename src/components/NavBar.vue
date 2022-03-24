<template>
  <nav>
    <div class="bg-indigo-600">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <!--Agregar mascota-->
          <div>
            <!--icon?-->
            <div class="flex items-center py-5 px-2">
              <router-link
                to="/createPet"
                class="flex items-center space-x-2 py-5 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-indigo-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-xxl font-bold text-white"
                  >Agregar Mascota</span
                >
              </router-link>
            </div>
          </div>
          <!--Buscar mascota-->
          <div class="flex items-center py-5 px-2">
            <router-link
              to="/findpet"
              class="flex items-center space-x-2 py-5 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-indigo-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="text-xxl font-bold text-white">Buscar Mascota</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="p-8 textt-2xl font_extrabold text-center"></div>
</template>

<script>
export default {};
</script>
<style></style>
