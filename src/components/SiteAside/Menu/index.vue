<template>
  <nav class="menu-container" ref="nav">
    <RouterLink
      :exact="item.exact"
      v-for="(item,i) in items"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
      :ref="'li'+ i"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  mounted() {
    // console.log(this.$refs.li0[0].$el.click())
    this.$refs.li0[0].$el.click();
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: #fff;
  margin-top: 34px;
  // margin: 24px 0;
  font-size: 16px;
  a {
    &.selected {
      background: rgb(116, 116, 116);
    }
    padding: 8px 30px;
    display: block;
    display: flex;
    align-items: center;
    margin-top: 6px;
    // height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
