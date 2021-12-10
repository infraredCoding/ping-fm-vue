<template>
  <div class="flex flex-col justify-center max-w-xl mx-auto">
    <img src="./assets/logo.svg" alt="PING Logo" class="w-16 md:w-20 mx-auto pb-10 pt-16">

    <div class="flex flex-col text-center justify-center">
      <h1 class="text-2xl md:text-5xl font-light text-tgray">
        We are launching <span class="font-bold text-dark">soon!</span>
      </h1>
      <p class="text-dark font-light pt-4 text-lg">Subscribe and get notified</p>
    </div>

    <NotiInput />

    <img src="./assets/illustration-dashboard.png" alt="illustration" class="w-full pt-16 md:px-0 px-5">

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import NotiInput from './components/NotificationInput'

export default {
  name: 'App',
  components: {
    Footer,
    NotiInput,
  }
}
</script>

<style>
* {
  font-family: 'Libre Franklin', sans-serif;
}
</style>
