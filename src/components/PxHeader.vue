<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center flex-wrap bg-blue-200 p-6">
        <div class="flex items-center flex-shrink-0 shadow-slate-100 mr-6">
          <px-icon class="mr-4" />
          <h1 class="font-style: italic text-6xl tracking-wide">
            ClasificaDogs!
          </h1>
        </div>
        <div
          class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "PXHeader",
  components: { PxIcon },
};
</script>
