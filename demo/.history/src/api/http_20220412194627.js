import axios from 'axios'


export default {

  $axios(options) {
    let apiUrl = null;
    let apiMethod = null;

    if (process.env.VUE_APP_ENV === 'dev') {
      apiUrl = options.url;
      apiMethod = options.method;
    } else {
      apiUrl = process.env.VUE_APP_BASE_API + options.url;
      apiMethod = options.method;
    }

    return axios({
      url: apiUrl,
      method: apiMethod
    })
  },

  // $Axios(options) {
  //   let apiUrl = null;
  //   if (process.env.VUE_APP_ENV === 'dev') {
  //     apiUrl = options.url;
  //   } else {
  //     apiUrl = process.env.VUE_APP_BASE_API + options.url;
  //   }

  //   return axios({
  //     url: apiUrl,
  //     method: apiMethod
  //   })
  // }


}