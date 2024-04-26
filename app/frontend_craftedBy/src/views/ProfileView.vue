<script>
export default {
  name: 'ProfileView',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Profil Utilisateur</h1>
    <div>
      <p>Nom : {{ $User.user.firstname }}</p>
    </div>
    <div>
      <button type="submit" v-on:click="$User.logout">Déconnexion</button>
    </div>
  </div>
</template>