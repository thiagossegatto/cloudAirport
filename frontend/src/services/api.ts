import axios from 'axios';
import store from 'store';

const api = () => {
  let baseURL = process.env.REACT_APP_API;

  return axios.create({
    baseURL: baseURL,
    validateStatus: function () {
      return true;
    },
  });
};

export const responseApi = (response: any, callback?: any, callbackFailed?: any) => {
  try {
    if (response.status >= 200 && response.status < 300) {
      store.dispatch(callback());
    } else {
      store.dispatch(callbackFailed());
    }
  } catch (error) {
    store.dispatch(callbackFailed());
  }
};

export const receiveApi = (pathUrl: string) => {
  return new Promise((resolve, reject) => {
    api()
      .get(pathUrl)
      .then((result: any) => {
        resolve(result);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

// Se tivermos alguma inserção, delete ou edição no banco a chamada para o endpont já estaria pronta

// export const createApi = (pathUrl: string, data: any) => {
//   setLoading(true);
//   return new Promise((resolve, reject) => {
//     api()
//       .post(pathUrl, data)
//       .then((result: any) => {
//         resolve(result);
//       })
//       .catch(error => {
//         reject(error);
//         setLoading(false);
//       });
//   });
// };

// export const editApi = (pathUrl: string, data?: any) => {
//   setLoading(true);
//   return new Promise((resolve, reject) => {
//     api()
//       .patch(pathUrl, data)
//       .then((result: any) => {
//         resolve(result);
//       })
//       .catch(error => {
//         reject(error);
//         setLoading(false);
//       });
//   });
// };

// export const removeApi = (pathUrl: string, id?: number | undefined) => {
//   setLoading(true);
//   return new Promise((resolve, reject) => {
//     api()
//       .delete(`${path}`)
//       .then((result: any) => {
//         if (fake) {
//           result.data.dados = result.data;
//           result.mensagem = 'Deletado com sucesso';
//         }
//         resolve(result);
//       })
//       .catch(error => {
//         reject(error);
//         handleFailed(error);
//         setLoading(false);
//       });
//   });
// };

export default api;
