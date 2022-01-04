<template>
  <AppTopNav />
  <AppHeader />
  <router-view></router-view>
  <footer>底部</footer>
</template>

<script setup>
import AppTopNav from '@/components/AppTopNav'
import AppHeader from '@/components/AppHeader'
</script>
