 async function test() {
    await (() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {console.log(2*3)}, 5000) // {}中可以写要做的事情，比如字符串、函数
      })
    })()
  };

test();