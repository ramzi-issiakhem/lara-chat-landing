<template>
    <div class="absolute text-base md:text-lg px-10 w-full text-center top-10 lg:text-3xl font-adumu">
      The Realtime Chat Package you need for your Laravel Project
    </div>

    <div class="flex h-full flex-col w-full justify-center items-center">

           <div>
            <!-- Logo-->
              <div class="flex justify-center flex-col sm:flex-row items-center gap-x-4">
                <img src="../assets/images/logos/chat-logo.png" class="w-auto h-32 sm:h-40 md:h-56 lg:h-64 xl:h-72" alt="Chat Logo">
                <div class="flex-col  flex items-center justify-center">
                    <h1 class="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-adumu uppercase">LaraChat</h1>
                    <p class="text-base sm:text-xl lg:text-[2.4rem] xl:text-[2.7rem]">The Realtime Chat Application</p>
                </div>
              </div>
              <!-- Buttons -->
              <div class="flex h-max justify-between flex-col lg:flex-row gap-x-3 w-full items-center">
                <div @click="liveDemo" class="cursor-pointer red-btn">Live Demo</div>
                <a class="red-btn" :href="githubRepositoryLink">Github Repo</a>
                <a class="red-btn" :href="discordInviteLink">Discord</a>
              </div>
          </div>

      </div>


</template>

<script setup lang="ts">
import {githubRepositoryLink,discordInviteLink} from "@/constants";
import { notify} from "notiwind";
import {toast} from "vue3-toastify";


function liveDemo() {
  toast(`The Package is still in WIP. Feel free to join our Discord to stay updated!`, {
    type: 'warning', // Type of toast, like success, error, etc.
  });
}
</script>

<style scoped>
    .red-btn {
      @apply text-white px-6 py-2.5 bg-primary text-2xl rounded-full font-adumu w-full text-center my-2
    }
</style>