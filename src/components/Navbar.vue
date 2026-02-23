<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm"
  >
    <div class="max-w-7xl mx-auto px-6 h-17 flex items-center gap-8">
      <a href="#home" class="flex items-center gap-3 shrink-0">
        <div
          class="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md shadow-teal-200 p-1"
        >
          <img
            src="@/assets/infinity2.png"
            alt="Infinity Solution Logo"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="leading-tight">
          <span class="block font-bold text-slate-800 text-[15px] tracking-tight">Infinity</span>
          <span class="block text-teal-600 text-[10px] font-semibold tracking-[0.12em] uppercase">Solution</span>
        </div>
      </a>

      <ul class="hidden md:flex gap-7 ml-auto list-none">
        <li v-for="link in ['Home', 'About', 'Services', 'Impact', 'Team', 'Contact']" :key="link">
          <a
            :href="`#${link.toLowerCase()}`"
            class="text-[13px] font-medium text-slate-500 hover:text-teal-600 tracking-wide transition-colors duration-200"
          >
            {{ link }}
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        class="hidden md:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-[13px] font-semibold tracking-wide px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
      >
        <i class="bi bi-chat-dots-fill text-sm"></i> Get a Quote
      </a>

      <button
        class="md:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
        @click="menuOpen = !menuOpen"
      >
        <i :class="menuOpen ? 'bi bi-x-lg' : 'bi bi-list'" class="text-xl"></i>
      </button>
    </div>

    <div v-if="menuOpen" class="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
      <a
        v-for="link in ['Home', 'About', 'Services', 'Impact', 'Team', 'Contact']"
        :key="link"
        :href="`#${link.toLowerCase()}`"
        class="text-sm font-medium text-slate-600 hover:text-teal-600 py-1"
        @click="menuOpen = false"
      >
        {{ link }}
      </a>
    </div>
  </nav>
</template>