module.exports = {
  apps: [
    {
      name: 'vueblogJenkins',
      script: 'build/main.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      watch: 'true',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: '198.13.53.244', // 服务器IP
      ref: 'origin/master',
      repo: 'git@github.com:hoyong6/vueblog.git',
      path: '/var/lib/jenkins/workspace/vueblogJenkins',
      'post-deploy': 'yarn && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  },
  watch_options: {
    usePolling: true
  }
}
