const { resolve } = require("path");

export default function () {
  const { nuxt } = this;

  nuxt.options.router.base = '/app/'

  console.log(nuxt.options.router.base);
}
