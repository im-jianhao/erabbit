<template>
  <nav class="app-topnav bg-dark-100">
    <div class="container">
      <ul class="flex justify-end items-center divide-x h-53px">
        <template v-if="profile.token">
          <li>
            <a class="link" href="javascript:;"
              ><i class="iconfont icon-user"></i>周杰伦</a
            >
          </li>
          <li><a class="link" href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li class="h-3.5 flex">
            <a class="link" href="javascript:;">请先登录</a>
          </li>
          <li class="h-3.5 flex">
            <a class="link" href="javascript:;">免费注册</a>
          </li>
        </template>
        <li class="h-3.5 flex">
          <a class="link" href="javascript:;">我的订单</a>
        </li>
        <li class="h-3.5 flex">
          <a
            class="px-4 inline-block leading-none text-true-gray-300 hover:text-primary"
            href="javascript:;"
            >会员中心</a
          >
        </li>
        <li class="h-3.5 flex">
          <a class="link" href="javascript:;">帮助中心</a>
        </li>
        <li class="h-3.5 flex">
          <a class="link" href="javascript:;">关于我们</a>
        </li>
        <li class="h-3.5 flex">
          <a class="link" href="javascript:;">
            <i class="iconfont icon-phone text-xs mr-0.5"></i>手机版
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useHomeStore } from '@/store/modules/home'

export default {
  name: 'AppTopnav',
  setup () {
    const store = useHomeStore()
    console.log(store)
    const { profile } = store

    return {
      profile
    }
  }
}
</script>

<style scoped lang="less">
.link {
  @apply px-4 inline-block leading-none text-true-gray-300 hover:text-primary;
}
</style>
