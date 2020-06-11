var s = 'some var'
function some(s) {
  return s
}

function cool() {
  const o = {
    this: 'some',
    another: 'some',
    yetanother: o,
  }
}
