<template>
  <ul class="w-[820px] flex justify-around pl-10 relative">
    <li class="mr-10 w-[38px] text-center nav-item no-layer">
      <RouterLink class="link" to="/">首页</RouterLink>
    </li>
    <li
      class="mr-10 w-[38px] text-center nav-item"
      v-for="item in list"
      :key="item.id"
      @mouseenter="handleMouseenter(item.children)"
    >
      <a class="link" href="#">{{ item.name }}</a>
    </li>
    <div
      class="layer container bg-white absolute top-[56px] h-0 overflow-hidden opacity-0 left-[-200px]"
    >
      <ul class="flex flex-wrap px-[70px] items-center h-[132px]">
        <li
          v-for="sub in childrenListRef"
          :key="sub.id"
          class="w-[110px] text-center"
        >
          <a href="#">
            <img
              :src="sub.picture"
              alt=""
              class="w-[60px] h-[60px] inline-block"
            />
            <p class="pt-2.5 text-center">{{ sub.name }}</p>
          </a>
        </li>
      </ul>
    </div>
  </ul>
</template>

<script>
import { useCategoryStore } from '@/store/modules/category'
import { ref, computed } from 'vue'
export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useCategoryStore()
    store.getCategoryHead()
    const childrenListRef = ref([])
    const handleMouseenter = (list) => {
      childrenListRef.value = list
    }

    return {
      childrenListRef,
      handleMouseenter,
      list: computed(() => store.list)
    }
  }
}
</script>

<style scoped lang="less">
.nav-item {
  &:hover {
    .link {
      color: @xtxColor;
    }
   &:not(.no-layer) ~ .layer {
      height: 132px;
      opacity: 1;
    }
  }
}
.layer:hover {
  height: 132px;
  opacity: 1;
}
.layer {
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    li:hover {
      p {
        color: @xtxColor;
      }
    }
  }
}
</style>
