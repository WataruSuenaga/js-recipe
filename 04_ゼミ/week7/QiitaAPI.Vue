<template>
  <div>
    <h1>Qiita APIを使う</h1>
    <div>
      <h2>Qiitaの記事</h2>
      <button v-on:click="getQiitaArticle">記事を取得する</button>
      <div v-for="(article, index) in articles" v-bind:key="index">
        {{ index }} : {{ article.title }}
      </div>
    </div>
    <div>
      <h2>QiitaのユーザーID</h2>
      <button v-on:click="getQiitaUser">ユーザーを取得する</button>
      <div>
        {{ user.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      user: {},
    }
  },
  methods: {
    getQiitaArticle: async function () {
      const res = await fetch(
        `https://qiita.com/api/v2/items?page=1&per_page=10&query=Vue.js`,
      )
      const value = await res.json()
      this.articles = value
    },
    getQiitaUser: async function () {
      const res = await fetch(`https://qiita.com/api/v2/authenticated_user`, {
        headers: {
          Authorization: "Bearer " + "アクセストークン",
        },
      })
      const value = await res.json()
      this.user = value
    },
  },
}
</script>
