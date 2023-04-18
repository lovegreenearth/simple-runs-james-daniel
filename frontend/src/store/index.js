import { createStore } from 'vuex'
import AuthModule from './modules/auth';

export default createStore({
     modules: {
          auth: AuthModule,
     }
})