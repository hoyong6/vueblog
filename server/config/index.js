export default {
  user: {
    role: 'superAdmin',
    username: 'q',
    password: 'q',
    email: '822140753@qq.com',
    nickname: 'VueBlog',
    motto: 'Never too old to learn',
    avatar: 'avatar.png'
  },
  jwt: {
    secret: 'vueblog'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'vueblog',
    port: 27017,
    username: '',
    password: ''
  },
  githubConfig: {
    githubClient: '',
    githubSecret: '',
    scope: 'user'
  },
  emailConfig: {
    user: '',
    pass: ''
  },
  app: {
    domain: 'https://www.hyvlog.fun',
    host: '198.13.53.244',
    port: 3000,
    routerBaseApi: 'api'
  }
}
