<template>
  <div class="main">
      <h3>Page principale</h3>
      <p id="paraph">Je suis la page</p>
      <div class="box">
        <h4>Je suis dans la boite</h4>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-toolbar class="white--text pink" dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Inbox</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>check_circle</v-icon>
                </v-btn>
              </v-toolbar>
              <v-list two-line>
                <v-list-tile avatar ripple v-for="(item, index) in tasks" v-bind:key="item.id">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.content }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-divider v-if="index + 1 < tasks.length"></v-divider>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
        
         <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-text-field
                name="input-7-4"
                placeholder="Contenu de la tâche"
                multi-line
              ></v-text-field>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data(){
    return {
    tasks: []
    }
  },
  created(){
    this.$http.get('http://localhost:3000/').then(response => {
      this.tasks = response.body;
    });
  }
}
</script>
