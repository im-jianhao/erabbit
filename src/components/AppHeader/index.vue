<template>
  <header class="app-header bg-white">
    <div class="container flex items-center">
      <h1 class="logo w-[200px] h-[132px]">
        <RouterLink class="w-full h-full block" to="/">小兔鲜</RouterLink>
      </h1>
      <AppHeaderNav />
      <div
        class="search w-[170px] h-[32px] relative leading-loose border-b border-b-[#e7e7e7] overflow-hidden"
      >
        <i class="iconfont icon-search text-[18px] ml-1"></i>
        <input
          type="text"
          placeholder="搜一搜"
          class="w-[140px] ml-1 text-[#666]"
        />
      </div>
      <div class="cart w-[50px]">
        <a class="curr h-[32px] leading-none text-center relative block" href="#">
          <i class="iconfont icon-cart text-[22px]"></i><em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppHeaderNav from '@/components/AppHeaderNav'
</script>

<style scoped lang="less">
.app-header {
  .logo {
    a {
      text-indent: -9999px;
      background: url(~@/assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
  .link {
    @apply text-base leading-loose h-8 inline-block hover:(text-primary border-b border-b-primary);
  }
  .cart {
    em {
      font-style: normal;
      position: absolute;
      right: 0;
      top: 0;
      padding: 1px 6px;
      line-height: 1;
      background: @helpColor;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
      font-family: Arial;
    }
  }
}
</style>
