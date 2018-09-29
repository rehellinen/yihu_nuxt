/**
 *  test.js
 *  Create By rehellinen
 *  Create On 2018/9/29 9:48
 */
const axios = require('axios')

async function getToken (time = 0) {
  const res = await axios({
    url: 'http://127.0.0.1:3000/user',
    method: 'GET',
    validateStatus (status) {
      return status < 500
    }
  })

  let code = res.status.toString()

  if (code.charAt(0) === '2') {
    return res.data
  }

  if (code === '401') {
    if (time > 4) {
      return 11
    }
    console.log(401)
    time++

    const data = await reFetch(time)
    return data
  }
}

function reFetch (time) {
  return new Promise(async resolve => {
    setTimeout(async () => {
      const data = await getToken(time)
      resolve(data)
    }, 1000)
  })
}

async function run () {
  const data = await getToken()
  console.log(data)
}

run()
