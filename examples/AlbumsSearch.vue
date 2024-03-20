<script setup>
import { ref } from 'vue';
import { searchAlbums } from '@/libs/spotify-wrapper/main/main';

const albumsList = ref([]);
const form = ref({ query: '' });

const handleSearch = async () => {
  console.log(form.value.query);
  if(!form.value.query) return;

  albumsList.value = await searchAlbums(form.value.query)
    .then(data => data.albums.items.map(item => item.name));
};
</script>

<template>
  <h1>Lista de Albuns</h1>
  <form @submit.prevent="handleSearch">
    <div class="searchbar">
      <input
        v-model="form.query"
        type="text"
        class="searchTerm"
        placeholder="Digite o album que deseja buscar"
      >
      <button type="submit" class="searchButton">
        <ion-icon name="search" />
      </button>
    </div>
  </form>
  <ul>
    <li v-for="(album, index) in albumsList" :key="index">
      {{ album }}
    </li>
  </ul>
</template>

<style scoped>
  form {
    max-width: 300px;
  }
  .searchbar {
    display: flex;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid #00B4CC;
    border-right: none;
    padding: 5px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
  }

  .searchTerm:focus{
    color: #00B4CC;
  }

  .searchButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 36px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
</style>
