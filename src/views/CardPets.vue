<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Ayudanos a volver a nuestro hogar
      </h2>
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: "Lucas",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/55/8f/ab/558fabb359f24a98af86e8e5ad6eefb9.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$10",
    color: "Color blanco",
  },
  {
    id: 1,
    name: "Rodolfo",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/f5/f9/e4/f5f9e40d777f2370194ed8c19dd457ee.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$15",
    color: "Color negro con cafe",
  },
  {
    id: 1,
    name: "Lulu",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmyMRpJ8YNV11a9JKiof5KDAQuvFvRZoqxw&usqp=CAU",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    color: "Color cafe claro con blanco",
  },
  {
    id: 1,
    name: "tomy",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/85/09/81/8509814b7a88ecda27c3cc19e22a8171.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$5",
    color: "Color blanco con cafe claro y oscurp",
  },
  {
    id: 1,
    name: "Pepito",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/b4/36/21/b4362126c0dfd40531ff2d04cc1866ac.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$9",
    color: "Color gris",
  },
  {
    id: 1,
    name: "mili",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/51/8d/3f/518d3ff4350d1d62071c3836597e5be2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$17",
    color: "Color cafe claro",
  },
  {
    id: 1,
    name: "firulais",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/07/3f/12/073f1292d4d25ca39707c643b6972f27.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$0",
    color: "Color cafe claro",
  },
  {
    id: 1,
    name: "kiara",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/5d/53/e4/5d53e4672f06eb820ec2516c135f9e9e.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$12",
    color: "Color cafe  ",
  },
  {
    id: 1,
    name: "sacha",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/03/62/87/036287c36f45674237710d647c076aa2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$15",
    color: "Color blanco con negro y cafe",
  },
  {
    id: 1,
    name: "bonny",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/13/95/5a/13955a0687634aaa15ed6c7346edab7d.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$22",
    color: "Color blanco con cafe",
  },
  {
    id: 1,
    name: "kala",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/1a/08/b2/1a08b247b3b8446ba1b279b7d043a297.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$14",
    color: "Color cafe",
  },
  {
    id: 1,
    name: "Pepito",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/1f/0c/0d/1f0c0df515d95e594e10d33b43a60382.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$7",
    color: "Color blanco con negro y cafe",
  },
  // More products...
];

export default {
  setup() {
    return {
      products,
    };
  },
};
</script>
