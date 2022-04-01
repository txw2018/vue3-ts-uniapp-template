// @ts-nocheck

import settle from "axios/lib/core/settle";
import buildURL from "axios/lib/helpers/buildURL";

export default function (config: any) {
  return new Promise((resolve, reject) => {
    uni.request({
      method: config.method.toUpperCase(),
      url:
        config.baseURL +
        buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config,
        };

        settle(resolve, reject, response);
      },
    });
  });
}
