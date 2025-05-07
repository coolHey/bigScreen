/**
 *
 * 下载文件
 *
 * @example downloadFile('http://www.baidu.com/img/bd_logo1.png', 'logo.png')
 */
// export function download(link, name) {
//   if (!name) name = link.slice(link.lastIndexOf("/") + 1);

//   const eleLink = document.createElement("a");
//   eleLink.download = name;
//   eleLink.style.display = "none";
//   eleLink.href = link;
//   eleLink.target = "_blank";
//   document.body.appendChild(eleLink);
//   eleLink.click();
//   document.body.removeChild(eleLink);
// }

import request from '@/api/request'

/**
 * 参数处理 把对象变成URL
 * @param {*} params  参数
 encode编码
 decode解码
 */
 export function tansParams(params) {
  let result = ''
  if (!params) {
    return result
  }
  const ERROR = [null, undefined, 'undefined', '', 'null']
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    //编码属性名称
    var part = encodeURIComponent(propName) + '='
    if (!ERROR.includes(value)) {
      //如果是对象 或者数组
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          let params = propName + '[' + key + ']'
          var subPart = encodeURIComponent(params) + '='
          result += subPart + encodeURIComponent(value[key]) + '&'
        }
      } else {
      //拼接编码字符串
        result += part + encodeURIComponent(value) + '&'
      }
    }
  }
  return result
}

// 通用下载方法
export function download(url, params, filename) {
  //弹出消息框
    return request.get(url, params, {
      transformRequest: [(params) => {
        return tansParams(params)
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        token: localStorage.getItem('token')
      },
      responseType: 'blob'
    }).then((data) => {
      const content = data
      const blob = new Blob([content])
      //创建下载a标签
      if ('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = filename
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      } else {
        navigator.msSaveBlob(blob, filename)
      }
    }).catch((r) => {
      console.error(r)
  
    })
  }