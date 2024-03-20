<script setup>
import { searchAlbums } from '@/libs/spotify-wrapper/main/main';

const albums = searchAlbums('Ramones');

albums.then(data => console.log(data));
</script>

<template>
  <h1>Resultado no console!</h1>
</template>

<style scoped>
</style>
