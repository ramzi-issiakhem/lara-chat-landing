

<template>
  <main class="w-full h-screen flex flex-col" >
    <div class="flex-grow overflow-y-scroll" style="height: calc(100vh - 3.5rem)">
      <RouterView  />
    </div>

      <Footer  />
  </main>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import NotificationsComponent from "@/components/NotificationsComponent.vue";
</script>
