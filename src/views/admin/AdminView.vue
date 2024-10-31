<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>

  <v-row justify="center">
    <v-btn
      color="pink-accent-3"
      variant="flat"
      class="mt-10"
      :to="{ name: 'nueva-propiedad' }"
    >
        Nueva Propiedad
    </v-btn>
  </v-row>
  


  <v-card class="mx-auto mt-10" flat>
      <v-list>
        <v-list-item
          v-for="propiedad in propiedadesCollection"
          :key="propiedad.id"
          border
        >
          <template v-slot:prepend>
            <v-list-item-media class="mr-10">
              <img width="180" :src="propiedad.imagen"/>
            </v-list-item-media>
          </template>

          <v-list-item-title> {{ propiedad.titulo }} </v-list-item-title>

          <v-list-item-subtitle> {{ priceProperty(propiedad.precio ) }} </v-list-item-subtitle>    

          <template v-slot:append>
            <v-btn 
              color="info"
              flat
              class="mr-4"
              :to="{name: 'editar-propiedad', params: {id: propiedad.id }}"
            >
              Editar
            </v-btn>

            <v-btn 
              color="red-darken-2"
              flat
              @click="deleteItem(propiedad.id, propiedad.imagen)"
            >
              Eliminar
            </v-btn>
          </template>

        </v-list-item>
      </v-list>
    </v-card>

    <!--Append: Lado derecho, preprend: lado izquierdo-->
</template>

<script setup>
  import usePropiedades from '@/composables/usePropiedades'
  import priceProperty from '@/helpers/index'
  const { propiedadesCollection, deleteItem} = usePropiedades()


</script>