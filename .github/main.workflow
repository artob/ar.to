workflow "Mirror to Bitbucket" {
  on = "push"
  resolves = ["Push to Bitbucket"]
}

action "Push to Bitbucket" {
  uses = "spyoungtech/mirror-action@master"
  args = "https://bitbucket.org/artob/ar.to.git"
  env = {
    GIT_USERNAME = "x-token-auth"
  }
  secrets = ["GIT_PASSWORD"]
}
