const ARTICLE_ENDPOINT = 'https://dev.to/api/articles?username=thinkverse'

export const state = () => ({
  articles: []
})

export const mutations = {
  add (state, payload) {
    state.articles = payload
  }
}

export const actions = {
  async fetch ({ commit }) {
    commit('add', await fetch(ARTICLE_ENDPOINT)
      .then(response => response.json())
      .then(data => data))
  }
}

export const getters = {
  get (store) {
    return store.articles.filter(article => !article.title.includes('opengpg proof'))
  }
}
