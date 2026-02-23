<script setup>
// ─── To add a photo: replace null with the imported image ───────────────────
// Example:
  import ahmedImg from "/src/assets/ahmed.jpg"
//   then set  image: ahmedImg
// ─────────────────────────────────────────────────────────────────────────────

const team = [
  {
    name: "Ahmed Al-Rashid",
    role: "Chief Executive Officer",
    short: "CEO",
    desc: "Visionary leader with 20+ years driving industrial engineering excellence across the MENA region.",
    icon: "bi bi-person-badge-fill",
    image: ahmedImg,
    accent: "from-teal-500 to-cyan-600",
    badgeBg: "bg-teal-50",
    badgeColor: "text-teal-700",
    borderHover: "hover:border-teal-300",
    shadowHover: "hover:shadow-teal-100",
    socials: [
      { icon: "bi bi-linkedin", href: "#" },
      { icon: "bi bi-envelope-fill", href: "#" },
    ],
  },
  {
    name: "Sara Karim",
    role: "General Manager",
    short: "GM",
    desc: "Oversees day-to-day operations, project delivery pipelines, and cross-functional team alignment.",
    icon: "bi bi-briefcase-fill",
    image: null,
    accent: "from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    borderHover: "hover:border-blue-300",
    shadowHover: "hover:shadow-blue-100",
    socials: [
      { icon: "bi bi-linkedin", href: "#" },
      { icon: "bi bi-envelope-fill", href: "#" },
    ],
  },
  {
    name: "Omar Hasan",
    role: "Technical Manager",
    short: "TM",
    desc: "Leads engineering design, P&ID development, and technical quality assurance for all projects.",
    icon: "bi bi-gear-fill",
    image: null,
    accent: "from-violet-500 to-purple-600",
    badgeBg: "bg-violet-50",
    badgeColor: "text-violet-700",
    borderHover: "hover:border-violet-300",
    shadowHover: "hover:shadow-violet-100",
    socials: [
      { icon: "bi bi-linkedin", href: "#" },
      { icon: "bi bi-envelope-fill", href: "#" },
    ],
  },
  {
    name: "Layla Mustafa",
    role: "HR Manager",
    short: "HR",
    desc: "Builds and nurtures the talent ecosystem — from recruitment and onboarding to culture and development.",
    icon: "bi bi-people-fill",
    image: null,
    accent: "from-rose-500 to-pink-600",
    badgeBg: "bg-rose-50",
    badgeColor: "text-rose-700",
    borderHover: "hover:border-rose-300",
    shadowHover: "hover:shadow-rose-100",
    socials: [
      { icon: "bi bi-linkedin", href: "#" },
      { icon: "bi bi-envelope-fill", href: "#" },
    ],
  },
  {
    name: "Karwan Salih",
    role: "Marketing Manager",
    short: "MKT",
    desc: "Drives brand strategy, digital presence, and B2B outreach to expand Infinity's regional footprint.",
    icon: "bi bi-megaphone-fill",
    image: null,
    accent: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-50",
    badgeColor: "text-amber-700",
    borderHover: "hover:border-amber-300",
    shadowHover: "hover:shadow-amber-100",
    socials: [
      { icon: "bi bi-linkedin", href: "#" },
      { icon: "bi bi-envelope-fill", href: "#" },
    ],
  },
  {
    name: "Nadia Jawad",
    role: "Finance Manager",
    short: "CFO",
    desc: "Manages financial planning, budgeting, and compliance to sustain sustainable business growth.",
    icon: "bi bi-bar-chart-line-fill",
    image: null,
    accent: "from-emerald-500 to-green-600",
    badgeBg: "bg-emerald-50",
    badgeColor: "text-emerald-700",
    borderHover: "hover:border-emerald-300",
    shadowHover: "hover:shadow-emerald-100",
    socials: [
      { icon: "bi bi-linkedin", href: "#" },
      { icon: "bi bi-envelope-fill", href: "#" },
    ],
  },
];
</script>

<template>
  <section id="team" class="py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-16">
        <div class="reveal fade-up inline-flex items-center gap-2 text-teal-600 text-[11px] font-semibold tracking-[0.14em] uppercase mb-4">
          <span class="w-8 h-px bg-teal-400 inline-block"></span> The People Behind It
          <span class="w-8 h-px bg-teal-400 inline-block"></span>
        </div>
        <h2 class="reveal fade-up section-title text-slate-800 mb-4">Our Leadership Team</h2>
        <p class="reveal fade-up text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          A team of seasoned engineers, strategists, and operators united by one mission —
          delivering world-class processing solutions without compromise.
        </p>
      </div>

      <!-- ── CEO Featured Row ── -->
      <div class="reveal fade-up mb-8">
        <div class="bg-white rounded-3xl border border-slate-100 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-100 transition-all duration-500 overflow-hidden group">
          <div class="grid md:grid-cols-3 gap-0">

            <!-- Photo / icon column -->
            <div class="relative flex items-center justify-center p-10 bg-linear-to-br from-teal-500 to-cyan-600 overflow-hidden">
              <div class="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125"></div>
              <div class="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125"></div>

              <div class="relative z-10 text-center">
                <div class="w-55 h-55 rounded-xl mx-auto mb-4 shadow-2xl overflow-hidden border-4 border-white/50 transition-all duration-500 group-hover:scale-105 group-hover:border-white/80">
                  <!-- Show image if provided -->
                  <img
                    v-if="team[0].image"
                    :src="team[0].image"
                    :alt="team[0].name"
                    class="w-full h-full object-cover object-top"
                  />
                  <!-- Otherwise show icon -->
                  <div
                    v-else
                    class="w-full h-full bg-white/20 flex items-center justify-center"
                  >
                    <i :class="team[0].icon + ' text-white text-5xl'"></i>
                  </div>
                </div>
                <span class="inline-block bg-white/20 border border-white/30 text-white text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-white/30">
                  CEO
                </span>
              </div>
            </div>

            <!-- Info column -->
            <div class="md:col-span-2 p-10 flex flex-col justify-center">
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <h3 class="font-extrabold text-slate-800 text-2xl transition-colors duration-300 group-hover:text-teal-700">
                  {{ team[0].name }}
                </h3>
                <span class="text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1 rounded-full">
                  Chief Executive Officer
                </span>
              </div>
              <p class="text-slate-500 text-base leading-relaxed mb-6 max-w-xl">
                A visionary leader with over 20 years of experience driving industrial engineering excellence
                across the MENA region. Ahmed has spearheaded 100+ turnkey projects and forged partnerships
                with leading beverage and dairy producers across 40+ countries.
              </p>
              <div class="flex flex-wrap gap-3 mb-6">
                <span
                  v-for="h in ['20+ Yrs Experience', '100+ Projects Led', 'MENA Region Expert', 'ISO 22000 Champion']"
                  :key="h"
                  class="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-medium px-3 py-1.5 rounded-lg transition-all duration-300 group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-700"
                >
                  <i class="bi bi-check-circle-fill text-teal-500 text-xs"></i>
                  {{ h }}
                </span>
              </div>
              <div class="flex gap-3">
                <a
                  v-for="s in team[0].socials" :key="s.icon"
                  :href="s.href"
                  class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-500 flex items-center justify-center transition-all duration-200  hover:shadow-lg hover:shadow-teal-200 text-sm"
                >
                  <i :class="s.icon"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- ── Management Grid ── -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(member, i) in team.slice(1)"
          :key="member.name"
          class="reveal fade-up bg-white rounded-2xl border border-slate-100 transition-all duration-300 overflow-hidden group cursor-default "
          :class="[member.borderHover, 'hover:shadow-2xl', member.shadowHover]"
          :style="`--d:${i * 0.08}s`"
        >
          <!-- Accent bar -->
          <div class="h-1.5 w-full bg-linear-to-r transition-all duration-300 group-hover:h-2.5" :class="member.accent"></div>

          <div class="p-7">
            <!-- Avatar row -->
            <div class="flex items-center gap-4 mb-5">

              <!-- Avatar wrapper — same size always, image or icon inside -->
              <div class="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
                <!-- Gradient ring on hover -->
                <div
                  class="absolute -inset-0.5 rounded-full bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  :class="member.accent"
                ></div>

                <div class="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-transparent shadow-md transition-all duration-300">
                  <!-- Show photo if provided -->
                  <img
                    v-if="member.image"
                    :src="member.image"
                    :alt="member.name"
                    class="w-full h-full object-cover object-top"
                  />
                  <!-- Show icon otherwise — same container, no layout shift -->
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center bg-linear-to-br"
                    :class="member.accent"
                  >
                    <i :class="member.icon + ' text-white text-2xl'"></i>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="font-bold text-slate-800 text-[16px] leading-tight transition-colors duration-200 group-hover:text-slate-900">
                  {{ member.name }}
                </h4>
                <span
                  class="inline-block text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-lg mt-1"
                  :class="[member.badgeBg, member.badgeColor]"
                >
                  {{ member.role }}
                </span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-slate-500 text-sm leading-relaxed mb-5 transition-colors duration-200 group-hover:text-slate-600">
              {{ member.desc }}
            </p>

            <!-- Divider -->
            <div class="h-px bg-slate-100 mb-4 transition-colors duration-300 group-hover:bg-slate-200"></div>

            <!-- Socials + short label -->
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <a
                  v-for="s in member.socials" :key="s.icon"
                  :href="s.href"
                  class="w-8 h-8 rounded-lg bg-slate-50 hover:bg-teal-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:shadow-md text-sm"
                >
                  <i :class="s.icon"></i>
                </a>
              </div>
              <span class="text-[10px] font-extrabold text-slate-200 group-hover:text-teal-300 transition-colors duration-300 tracking-widest uppercase">
                {{ member.short }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>