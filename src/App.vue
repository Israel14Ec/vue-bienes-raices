<script setup>
  import { RouterView } from 'vue-router'
  //import { storeToRefs} from 'pinia'
  import {useAuthStore} from './stores/auth'

  const auth = useAuthStore()
  //const {isAuth} = storeToRefs(useAuthStore) //se uso destructuring y storeToRefs (permite tener reactividad)

</script>

<template>
  <v-card
    elevation="3"
    max-width="1200"
    class="mx-auto"
  >
    <v-layout>
      <v-app-bar
        color="blue-grey-darken-4"
      >

      <template v-slot:prepend>
        <v-btn
          :to="{name: 'home'}"
        >
          Bienes Raices - VueFIRE
        </v-btn>
      </template>

      <template v-slot:append>

        <div v-if="auth.isAuth">
          <v-btn
          :to="{name: 'admin-propiedades'}"
          >
            Admin
          </v-btn>

          <v-btn
            @click="auth.logout"
            :to="{name: 'login'}"
          >
            Cerrar sesión
          </v-btn>
        </div>


        <div v-else>
          <v-btn
          :to="{name: 'home'}"
          >
            Inicio
          </v-btn>

          <v-btn
            :to="{name: 'login'}"
          >
            Iniciar sesión
          </v-btn>
        </div>

        
      </template>
       
      </v-app-bar>

      <v-main>
        <v-container>
          <RouterView/>
        </v-container>
      </v-main>
      
    </v-layout>
  </v-card>
</template>

