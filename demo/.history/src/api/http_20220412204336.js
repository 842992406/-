import axios from 'axios'

export default {

  $axios(options) {
    let apiUrl = null;
    if (process.env.VUE_APP_ENV === 'dev') {
      apiUrl = options.url;
    } else {
      apiUrl = process.env.VUE_APP_BASE_API + options.url;
    }

    return axios({
      url: apiUrl,
    })
  },

  // $delUser(options) {
  //   let apiUrl = null;
  //   let id = null;
  //   if (process.env.VUE_APP_ENV === 'dev') {
  //     apiUrl = options.url;
  //     id = options.id;
  //   } else {
  //     apiUrl = process.env.VUE_APP_BASE_API + options.url;
  //     id = options.id;
  //   }

  //   return axios({
  //     url: apiUrl,
  //     id: id,
  //   })
  // },
}