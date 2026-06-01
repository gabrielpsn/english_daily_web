<template>
  <div class="auth-wrapper flex flex-center">
    <!-- Glowing background elements -->
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <div class="glass-login-card animate-slide-up">
      <!-- Header do App -->
      <div class="text-center q-mb-lg">
        <q-avatar size="64px" class="pulse-glow q-mb-sm" style="background: rgba(149, 117, 205, 0.15);">
          <q-icon name="school" color="accent" size="42px" />
        </q-avatar>
        <h1 class="text-h4 text-weight-bold font-outfit q-my-none text-gradient-purple">English Study Pro</h1>
        <p class="text-caption text-grey-5 q-my-none q-mt-xs">Seu plano de estudos de 90 dias com sincronização em nuvem</p>
      </div>

      <!-- Abas Login / Registro -->
      <q-tabs
        v-model="authTab"
        dense
        class="text-grey-4 q-mb-lg rounded-pill glass-card-flat"
        active-color="accent"
        indicator-color="accent"
        align="justify"
      >
        <q-tab name="login" label="Entrar" icon="login" class="font-outfit" />
        <q-tab name="register" label="Criar Conta" icon="person_add" class="font-outfit" />
      </q-tabs>

      <!-- Formulários de Auth -->
      <q-form @submit.prevent="authTab === 'login' ? handleLogin() : handleRegister()" class="q-gutter-y-md">
        <!-- Campo Nome (Somente Cadastro) -->
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <q-input
            v-if="authTab === 'register'"
            v-model="fullName"
            filled
            dark
            label="Nome Completo"
            class="custom-rounded-input"
            required
          >
            <template v-slot:prepend>
              <q-icon name="person" color="accent" />
            </template>
          </q-input>
        </transition>

        <!-- E-mail -->
        <q-input
          v-model="email"
          filled
          dark
          type="email"
          label="Endereço de E-mail"
          class="custom-rounded-input"
          required
        >
          <template v-slot:prepend>
            <q-icon name="mail" color="accent" />
          </template>
        </q-input>

        <!-- Senha -->
        <q-input
          v-model="password"
          filled
          dark
          type="password"
          label="Senha de Acesso"
          class="custom-rounded-input"
          required
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="accent" />
          </template>
        </q-input>

        <!-- Botões de Ação -->
        <div class="q-mt-lg">
          <q-btn
            type="submit"
            unelevated
            rounded
            color="accent"
            :label="authTab === 'login' ? 'Entrar no Painel' : 'Concluir Cadastro'"
            :icon="authTab === 'login' ? 'login' : 'assignment_ind'"
            class="font-outfit text-weight-bold full-width q-py-sm pulse-glow"
            :loading="authStore.loading"
          />
        </div>
      </q-form>
      <!-- Rodapé do Card -->
      <div class="text-center q-mt-xl text-caption text-grey-6">
        v1.3.0 • Supabase Cloud Sync
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { Notify } from 'quasar'

const router = useRouter()
const authStore = useAuthStore()

const authTab = ref('login')
const email = ref('')
const password = ref('')
const fullName = ref('')

async function handleLogin() {
  if (!email.value || !password.value) {
    Notify.create({ message: 'Preencha todos os campos.', color: 'warning', position: 'top' })
    return
  }
  try {
    await authStore.login(email.value, password.value)
    router.push({ name: 'dashboard' })
  } catch (err) {
    // Notificações já tratadas na store
  }
}

async function handleRegister() {
  if (!email.value || !password.value || !fullName.value) {
    Notify.create({ message: 'Por favor, preencha todos os campos.', color: 'warning', position: 'top' })
    return
  }
  try {
    await authStore.register(email.value, password.value, fullName.value)
    // Limpa form e muda para aba login para confirmação de e-mail ou login direto
    fullName.value = ''
    email.value = ''
    password.value = ''
    authTab.value = 'login'
  } catch (err) {
    // Tratado na store
  }
}

</script>

<style lang="scss" scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.auth-wrapper {
  min-height: 100vh;
  width: 100vw;
  background: #0a0514;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 16px;
}

/* Glowing decorative orbs in background */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  z-index: 1;
}
.orb-1 {
  width: 300px;
  height: 300px;
  background: #7b1fa2;
  top: 15%;
  left: 20%;
}
.orb-2 {
  width: 250px;
  height: 250px;
  background: #0288d1;
  bottom: 20%;
  right: 20%;
}

.glass-login-card {
  width: 100%;
  max-width: 440px;
  background: rgba(20, 15, 30, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.glass-card-flat {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.rounded-pill {
  border-radius: 30px !important;
}

.custom-rounded-input {
  border-radius: 28px !important;

  :deep(.q-field__control) {
    border-radius: 28px !important;
    background: rgba(30, 25, 50, 0.35) !important;
    border: 1px solid rgba(255, 255, 255, 0.06) !important;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  :deep(.q-field__control:hover) {
    border-color: rgba(149, 117, 205, 0.35) !important;
    background: rgba(30, 25, 50, 0.45) !important;
  }

  &.q-field--focused :deep(.q-field__control) {
    border-color: #9575cd !important;
    box-shadow: 0 0 12px rgba(149, 117, 205, 0.3) !important;
    background: rgba(30, 25, 50, 0.45) !important;
  }
}
</style>
