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
                <v-toolbar-title>Liste des tâches</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
              </v-toolbar>
              <v-list>
                <transition-group name="list" tag="p">
                  <v-list-tile avatar ripple  v-for="(item, index) in tasks" :key="item.id">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.content }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                    <v-btn icon ripple @click.native="remove(item.id)"><v-icon >delete</v-icon></v-btn>
                    </v-list-tile-action>
                    <v-divider v-if="index + 1 < tasks.length"></v-divider>
                </v-list-tile>
                </transition-group>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
        
         <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
            <form @submit.prevent="send">
              <v-card-text>
                <v-text-field
                  v-model="newTask"
                  name="input-7-4"
                  placeholder="Contenu de la tâche"
                ></v-text-field>
                </v-card-text>
            </form>
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
      newTask: '',
      tasks: []
    }
  },
  methods: {
    send(){
      this.$http.post('http://localhost:3000/newtask', {content: this.newTask}).then(response => {
        this.newTask = '';
        this.tasks = response.body;
      });
    },
    remove(id){
      this.$http.get(`http://localhost:3000/remove/${id}`).then(response => {
        this.tasks = response.body;
      });
    }
  },
  created(){
    this.$http.get('http://localhost:3000/').then(response => {
      this.tasks = response.body;
    });
  }
}
</script>


<style>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>