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
                <v-toolbar-title>Signup</v-toolbar-title>
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
                    label="Email"
                    name="email" 
                    type="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password" 
                    type="text"
                  />
                </v-form>
                <i>
                    <router-link to="/login">Already have an account? Login</router-link>
                </i>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="orange">Sign Up</v-btn>
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