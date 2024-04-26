<script>
export default {
  name: 'RegisterView',
  data: () => {
    return {
      firstname: '',
      lastname: '',
      birthdate: '',
      email: '',
      password: '',
      // password_confirmation: '',
      address: {
        street: '',
        postalCode: '',
        city: '',
        countryCode: '',
      },
      // confidentiality: false,
    }
  },
  methods: {
    async submit() {
      await this.$User.register(this)
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center gap-2 m-2">
    <div class="header">
      <p class="lead mb-5">Créer un compte</p>
    </div>
    <div class="body">
      <form class="form-auth-small" @submit.prevent="submit">
        <div class="form-group p-2">
          <label for="firstname" class="control-label sr-only">Prénom</label>
          <input v-model="firstname" class="form-control" id="firstname" placeholder="Prénom" />
        </div>
        <div class="form-group p-2">
          <label for="lastname" class="control-label sr-only">Nom</label>
          <input v-model="lastname" class="form-control" id="lastname" placeholder="Nom" />
        </div>
        <div class="form-group p-2">
          <label for="birthdate" class="control-label sr-only">Date de Naissance</label>
          <input v-model="birthdate" type="date" class="form-control" id="birthdate" placeholder="birthdate">
        </div>
        <div class="form-group p-2">
          <label for="email" class="control-label sr-only">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" placeholder="Your email" />
        </div>
        <div class="form-group p-2">
          <label for="password" class="control-label sr-only">Mot de passe</label>
          <input v-model="password" type="password" class="form-control" id="password" placeholder="Mot de passe" />
        </div>
        <!-- <div class="form-group p-2">
          <label for="password_confirmation" class="control-label sr-only">Confirmer Mot de passe</label>
          <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Mot de passe" />
        </div> -->
        <div class="form-group p-2">
          <label for="street" class="control-label sr-only">Rue</label>
          <input v-model="address.street" class="form-control" id="street" placeholder="Adresse" />
        </div>
        <div class="form-group p-2">
          <label for="postalCode" class="control-label sr-only">Code postal</label>
          <input v-model="address.postalCode" class="form-control" id="postalCode" placeholder="Code postal" />
        </div>
        <div class="form-group p-2">
          <label for="city" class="control-label sr-only">Ville</label>
          <input v-model="address.city" class="form-control" id="city" placeholder="Ville" />
        </div>
        <div class="form-group p-2">
          <label for="country-code" class="control-label sr-only">Pays</label>
          <input v-model="address.countryCode" class="form-control" id="country-code" placeholder="Pays" />
        </div>
        <button type="submit" class="btn btn-primary btn-block mt-5">S'enregistrer</button>
      </form>
    </div>
    <div class="flex flex-col items-center">
      <p>En vous inscrivant, vous acceptez les conditions générales d'utilisation</p>
    </div>
  </div>
</template>