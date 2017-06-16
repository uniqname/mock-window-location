import test from 'tape'
import location, { getProtocol, getHostname, getHost, getPort, getPathname, getSearch, getHash, parseLocation } from './index.js'


const url = 'https://someurl.com:80/foo/bar/?returnurl=http://jane.com#hash'

test('Utils', (t) => {
    t.plan(8)
    t.equal(getProtocol(url), 'https:',                     'correctly extracts protocol from given url')
    t.equal(getHost(url),     'someurl.com:80',             'correctly extracts host from given url')
    t.equal(getHostname(url), 'someurl.com',                'correctly extracts hostname from given url')
    t.equal(getPort(url),     '80',                         'correctly extracts port from given url')
    t.equal(getPathname(url), '/foo/bar/',                  'correctly extracts pathname from given url')
    t.equal(getSearch(url),   '?returnurl=http://jane.com', 'correctly extracts search from given url')
    t.equal(getHash(url),     '#hash',                      'correctly extracts hash from given url')
    t.deepEqual(parseLocation(url), {
        protocol: 'https:',
        host: 'someurl.com:80',
        hostname: 'someurl.com',
        port: '80',
        pathname: '/foo/bar/',
        search: '?returnurl=http://jane.com',
        hash: '#hash',
        origin: url,
        href: url
    }, 'correctly build location object from url')
})

test('location', (t) => {
    t.plan(1)
    console.log(location.href)
    t.ok(true)
})