<script setup lang="ts">
  import IconApple from "./IconApple.vue"
</script>

<template>  
  <div class="relative mt-20 lg:px-4 max-w-md mx-auto sm:px-3">
    <div class="flex justify-center pt-4 sm:justify-start sm:pt-0 w-1/2 y-1/2 h-auto m-auto">       
      <IconApple/>
    </div>      
    <div class="flex justify-center text-lg mt-10 space-x-5">      
      <AppLink 
        to="/login" 
        class="btn btn-primary"        
        data-testid="login-link"
      >
        Iniciar sesión
      </AppLink>
      <AppLink
        to="/register"
        class="btn btn-default"
        data-testid="register-link"
      >
        Registrarse
      </AppLink>      
    </div>
  </div>  
</template>
