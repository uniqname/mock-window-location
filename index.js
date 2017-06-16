const { compose, negate } = require('./util.js')

let location = {}

 const PROTOCOL = /^(\w*:)\/\//
 const HOSTNAME = /^([^\/]+\.[^\/]+)\/*?/
 const PATHNAME = /^.+?\/{2}[^/\s]+(.*?)[?#].*$/
 const SEARCH = /(\?.*)#/
 const HASH = /(#.*)$/

export const getProtocol = (url) => {
  const [match, capture= ''] = url.match(PROTOCOL) || ''
  return capture
}
export const getHost = (url) => {
  const [match, capture = ''] = url.replace(`${getProtocol(url)}//`, '').match(HOSTNAME) || ''
  return capture
}
export const getHostname = (url) => getHost(url).replace(/:\d+/, '')
export const getPort = (url) => {
  const [match, capture] = getHost(url).match(/:(\d+)/) || ''
  return capture
}
export const getPathname = (url) => {
  const [match, capture] = url.match(PATHNAME) || ''
  return capture
}
export const getSearch = (url) => {
  const [match, capture] = url.match(SEARCH) || ''
  return capture
}
export const getHash = (url) => {
  const [match, capture] = url.match(HASH) || ''
  return capture
}

export const parseLocation = (url='') => ({
  protocol: getProtocol(url),
  host: getHost(url),
  hostname: getHostname(url),
  port: getPort(url),
  pathname: getPathname(url),
  search: getSearch(url),
  hash: getHash(url),
  origin: url,
  href: `${getProtocol(url)}//${getHost(url)}${getPathname(url)}${getSearch(url)}${getHash(url)}`
})
location = parseLocation('')
const assign = (url) => { location = parseLocation(url) }
const reload = noop
const replace = assign
const noop = ()=>{}

let href = ''
const Loc = {}
Object.defineProperties(Loc, {
  href: {
    get() { 
      console.log('location: ', location)
      console.log('href: ', location.href)
      return location.href
    },
    set(newHref) { location = parseLocation(newHref) },
    enumerable: true
  },
  protocol: {
    get() { location.protocol },
    set() { noop },
    enumerable: true
  },
  host: {
    get() { location.host },
    set() { noop },
    enumerable: true
  },
  hostname: {
    get() { location.hostname },
    set() { noop },
    enumerable: true
  },
  port: {
    get() { location.port },
    set() { noop },
    enumerable: true
  },
  pathname: {
    get() { location.pathname },
    set() { noop },
    enumerable: true
  },
  search: {
    get() { location.search },
    set() { noop },
    enumerable: true
  },
  hash: {
    get() { location.hash },
    set() { noop },
    enumerable: true
  },

})

export default Loc