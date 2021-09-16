/* eslint-disable no-console */
export default function (ctx) {
  if (process.client) return
  const userAgent = ctx.req.headers['user-agent']
  const pattern =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  if (pattern.test(userAgent)) {
    // true for mobile device
    ctx.isMobile = true
  } else {
    // false for not mobile device
    ctx.isMobile = false
  }
  return ctx
}
