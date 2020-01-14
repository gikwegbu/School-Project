<template>  
    <UserAuth>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="teal"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />  
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username" 
                    name="username" 
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password" 
                    type="password"
                  />
                  <i>
                    <router-link to="/signup">Don't have an account? Signup</router-link>
                </i>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="orange">Login 
                    <v-icon>mdi-account-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row> 
    </UserAuth>
</template>

<script>
import UserAuth from '../layouts/UserAuth'
  export default {
      components: {
          UserAuth
      }
  }
</script>