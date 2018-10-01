const asyncFunction = async () => {
  throw new Error('err')
}

const run = async () => {
  await asyncFunction()
}

try {
  !(async () => {
    run().catch((e) => {
      console.log(e.toString())
    })
  })()
} catch (e) {
  console.log(e.toString())
}

