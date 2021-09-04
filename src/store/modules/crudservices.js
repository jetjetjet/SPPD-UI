//store/modules/crudservices.js
import instance from '../../config/axios'
import { showToast } from '../../_utils/toast'

export const getDataService = (url) => {
  return instance.get(url)
  .then((response)=>{
    return{
      data: response.data.data
    }
  }).catch(() => {
    showToast('error', 'Kesalahan! Tidak dapat memproses.')
  })
}

export const postDataService = (url, data) => {
  return instance.post(url, data)
    .then((response) => {
      let type = response.data.success ? 'success' : 'error'
      showToast(type, response.data.messages[0])

      return {
        data : response.data
      }
    }).catch(() => {
      showToast('error', 'Kesalahan! Tidak dapat memproses.')
    })
}

export const putDataService = (url, data) => {
  return instance.post(url, data)
    .then((response) => {
      let type = response.data.success ? 'success' : 'error'
      showToast(type, response.data.messages[0])

      return {
        data : response.data
      }
    }).catch(() => {
      showToast('error', 'Kesalahan! Tidak dapat memproses.')
    })
}

export const deleteDataService = (url) => {
  return instance.delete(url)
    .then((response) => {
      let type = response.data.success ? 'success' : 'error'
      showToast(type, response.data.messages[0])

      return {
        data : response.data
      }
    }).catch((e) => {
      let msg = e.data.messages[0] ?? 'Kesalahan! Tidak dapat memproses.'
      showToast('error', msg)
    })
}

export default {
  fetch: instance,
}