<script setup>
    
    import {useForm, useField} from 'vee-validate'
    import {loginSchema as validationSchema} from '../validation/loginSchema'
    import {useAuthStore} from '../stores/auth'
    
    const {handleSubmit}= useForm( {validationSchema}) //agregamos las reglas de validación
    const auth = useAuthStore()

    const email = useField('email')
    const password = useField('password')

    const submit = handleSubmit( (values) => {
        auth.login(values)
    })

</script>

<template>
    

    <v-card
        flat
        max-width="500"
        class="mx-auto my-10"
    >
        <v-card-title
            class="text-h4 font-weight-bold"
        >
            Iniciar sesión
        </v-card-title>

        <v-card-subtitle
            class="text-h5"
        >
            Inicia sesión con tu cuenta
        </v-card-subtitle>



        <v-alert
            v-if="auth.hasError"
            class="my-5"
            type="error"
            :title="auth.errorMsg"
        ></v-alert>



        <v-form
            class="mt-5"
        >
            <v-text-field
                type="email"
                label="email"
                bg-color="blue-gray-lighten-5"
                v-model="email.value.value"
                class="mb-3"
                :error-messages="email.errorMessage.value"
            />

            <v-text-field
                type="password"
                label="password"
                bg-color="blue-gray-lighten-5"
                v-model="password.value.value"
                class="mb-3"
                :error-messages="password.errorMessage.value"
            />

            <v-btn
                block
                color="pink-accent-3"
                @click="submit"
            >
                Iniciar sesión
            </v-btn>
                
        </v-form>
    </v-card>

</template>
