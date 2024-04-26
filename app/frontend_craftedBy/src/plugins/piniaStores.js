// Use of pinia global store in order to access each store with a global variable accessible everywhere on the app

// import stores
import { useArtisanStore } from '@/stores/ArtisanStore'
import { useCartStore } from '@/stores/CartStore'
import { useItemStore } from '@/stores/ItemStore'
import { useUserStore } from '@/stores/UserStore'

export default {
  install: (app) => {
    // use of stores as global variables
    app.config.globalProperties.$Item = useItemStore() // allows access to ItemStore using $Item
    app.config.globalProperties.$Cart = useCartStore() // allows access to ItemStore using $Cart
    app.config.globalProperties.$User = useUserStore() // allows access to ItemStore using $User
    app.config.globalProperties.$Artisan = useArtisanStore() // allows access to ItemStore using $Artisan
  }
}
