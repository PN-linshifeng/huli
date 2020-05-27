<template>
  <div class="menu-wrapper">
    <template v-if="!menuData.subMenuList">
      <el-menu-item
        :index="`${path}/${menuData.id}`"
        :title="menuData.name"
      >
        <div class="menu-item-content">
          <span>{{ menuData.name }}</span>
          <p><span class="menu-item-desc">{{ menuData.word }}字</span><span class="menu-item-desc">{{ menuData.medifyDate }}</span></p>
        </div>
      </el-menu-item>
    </template>
    <el-submenu v-else ref="subMenu" :index="`${path}/${menuData.id}`" popper-append-to-body>
      <template slot="title">
        <div class="menu-item-content">
          <span>{{ menuData.name }}</span>
          <p><span class="menu-item-desc">{{ menuData.word }}字</span></p>
        </div>
      </template>
      <slider-item
        v-for="(subItem, index) in menuData.subMenuList"
        :key="index"
        :path="path"
        :menu-data="subItem"
        :title="subItem.name"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    menuData: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
};
</script>
