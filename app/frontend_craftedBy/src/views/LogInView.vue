<script>
export default {
  name: 'LoginView',
  methods: {
    async submit() {
      await this.$User.login(this)
    },
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2 h-svh">
    <h2>Se connecter</h2>
    <form class="form-auth-small" @submit.prevent="submit()">
      <div class="form-group p-2">
        <label for="signin-email" class="control-label sr-only">Email</label>
        <input v-model="email" type="email" class="form-control" id="signin-email" placeholder="Email" />
      </div>
      <div class="form-group p-2">
        <label for="signin-password" class="control-label sr-only">Mot de passe</label>
        <input v-model="password" type="password" class="form-control" id="signin-password" placeholder="Mot de Passe" />
      </div>
      <button type="submit" class="btn bg-tertiary btn-block mt-2">Connexion</button>
      <div class="bottom flex flex-col">
        <span class="helper-text m-b-10 text-dark"><a href="javascript: void(0);">Mot de passe oublié?</a></span>
        <span class="text-secondary">Pas encore de compte?
          <router-link to="/register" class="text-dark"> S'enregister</router-link>
        </span>
      </div>
    </form>
    <!-- <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
    <dialog id="my_modal_3" class="modal bg-white">
      <div class="dialog">
        <form method="modal-box">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <form class="form-auth-small" @submit.prevent="submit()">
          <div class="form-group p-2">
            <label for="signin-email" class="control-label sr-only">Email</label>
            <input v-model="email" type="email" class="form-control" id="signin-email" placeholder="Email" />
          </div>
          <div class="form-group p-2">
            <label for="signin-password" class="control-label sr-only">Mot de passe</label>
            <input v-model="password" type="password" class="form-control" id="signin-password" placeholder="Mot de Passe" />
          </div>
          <button type="submit" class="btn btn-primary btn-block mt-2">Connexion</button>
          <div class="bottom flex flex-col">
            <span class="helper-text m-b-10 text-dark"><a href="javascript: void(0);">Mot de passe oublié?</a></span>
            <span class="text-secondary">Pas encore de compte?
              <router-link to="/register" class="text-dark"> S'enregister</router-link>
            </span>
          </div>
        </form>
      </div>
    </dialog> -->
  </div>
</template>