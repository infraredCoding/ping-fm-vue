<template>
  <div class="w-full flex pt-8 flex-col md:flex-row px-10 md:px-0">
    <div class="md:w-4/6 flex flex-col mr-3 w-full">
        <input type="text" 
            v-model="email"
            class="border-secondary focus:outline-none rounded-full border py-2.5 md:py-3 pl-6 w-full transition duration-100"
            placeholder="Your email address..."
            :class="{ 'border-danger': invalid }">
        <p class="text-danger text-xs pl-6 mt-14 absolute" v-show="invalid">{{ errorMessage }}</p>
    </div>
    <div class="md:w-2/6 w-full pt-3 md:pt-0" :class="{ 'transform translate-y-6 duration-75 md:translate-y-0': invalid }">
        <button @click.prevent="validate" class="w-full bg-primary transition duration-150 hover:opacity-90 text-white font-semibold text-sm shadow-xl rounded-full px-12 py-3.5">Notify Me</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NotiInput',
    data() {
        return {
            email: '',
            invalid: false,
            errorMessage: '',
        }
    },
    methods: {
        validate() {
            if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
                this.invalid = true;
                
                if (this.email == ''){
                    this.errorMessage = "Whoops! It looks like you forgot to add your email"
                }else {
                    this.errorMessage = "Please provide a valid email address"
                }
            }else {
                this.invalid = false;
                this.errorMessage = '';   
            }
        }
    },
}
</script>

<style>

</style>