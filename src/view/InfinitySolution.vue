<script setup>
import { onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import Appfooter from "@/components/Appfooter.vue";
import HomeSection from "@/view/HomeSection.vue";
import AboutSection from "@/view/AboutSection.vue";
import ServicesSection from "@/view/ServicesSection.vue";
import ImpactSection from "@/view/ImpactSection.vue";
import ProcessSection from "@/view/ProcessSection.vue";
import TeamSection from "@/view/TeamSection.vue";
import ContactSection from "@/view/ContactSection.vue";
/* ── Scroll Reveal ── */
const initReveal = () => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
};

/* ── Animated Counters ── */
const initCounters = () => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = +el.dataset.target;
          const suffix = el.dataset.suffix || "";
          let current = 0;
          const step = target / 70;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.floor(current) + suffix;
          }, 18);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  document.querySelectorAll(".counter").forEach((el) => io.observe(el));
};

onMounted(() => {
  initReveal();
  initCounters();
});
</script>

<template>
  <div class="font-dm text-slate-700 bg-white overflow-x-hidden">
    <Navbar />
    <HomeSection />
    <AboutSection />
    <ServicesSection />
    <ImpactSection />
    <ProcessSection />
    <TeamSection />
    <ContactSection />
    <Appfooter />
  </div>
</template>