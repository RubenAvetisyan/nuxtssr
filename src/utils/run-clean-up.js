const childrenToRemoveNodes = []
function dataRemoving(data) {
  for (const key in data) {
    data[key] = null
  }
}

async function getChildren(children = []) {
  try {
    return await new Promise((resolve, reject) => {
      for (const child in children) {
        childrenToRemoveNodes.push(children[child])
        if (children[child].$children) {
          getChildren(children[child].$children)
          resolve()
        }
      }
    })
  } catch (error) {}
}

function removeChild() {
  for (const child in childrenToRemoveNodes) {
    dataRemoving(childrenToRemoveNodes[child].$options._parentVnode.child._data)
    childrenToRemoveNodes[child].$destroy()
    const elem = childrenToRemoveNodes[child].$el
    if (elem.parentNode) elem.parentNode.removeChild(elem)
  }
}

export async function runCleanUp(currentChildren) {
  await getChildren(currentChildren)
  removeChild()
  // for (const child in childrenToRemoveNodes) {
  //   console.log('child: ', childrenToRemoveNodes[child])
  // }
  return 'done'
}
