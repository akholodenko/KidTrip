;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    124: function(e, t, n) {},
    163: function(e, t, n) {
      e.exports = n(203)
    },
    173: function(e, t, n) {},
    174: function(e, t, n) {},
    176: function(e, t, n) {},
    177: function(e, t, n) {},
    203: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(31),
        r = n(0),
        o = n.n(r),
        i = n(14),
        l = n.n(i),
        c = n(54),
        s = n(105),
        u = n(142),
        m = n(137),
        d = n(24),
        p = n(12),
        g = n(141),
        f = n(45),
        v = n(46),
        h = n(50),
        y = n(47),
        b = n(51),
        E = n(20),
        O = {
          home: '/',
          dashboard: '/dashboard',
          venue: '/venue/:venueSlug',
          venuePath: function(e) {
            return '/venue/'.concat(e)
          }
        },
        j = function(e) {
          return e.pathname === O.home
        },
        x = n(144),
        w = function(e, t) {
          return {
            container: {
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/images/'.concat(
                e,
                ') 50% 50% no-repeat'
              ),
              backgroundSize: 'cover',
              height: t
            },
            headerText: { color: '#ffffff' }
          }
        },
        S = w('family-biking-cmp.jpg', '700px'),
        C = function() {
          return o.a.createElement(
            'div',
            { style: S.container },
            o.a.createElement(
              x.a,
              { variant: 'h2', style: S.headerText },
              o.a.createElement('strong', null, 'Experience'),
              ' childhood, again.'
            )
          )
        },
        N =
          (n(173),
          function(e) {
            var t = e.title,
              n = e.icon,
              a = e.text,
              r = {
                background: 'url(/images/icons/'.concat(
                  n,
                  '.png) 0% 0% / 60px 60px no-repeat'
                ),
                width: '60px',
                height: '60px'
              }
            return o.a.createElement(
              'div',
              { className: 'value-prop-section' },
              o.a.createElement('div', { className: 'value-prop-title' }, t),
              o.a.createElement('div', {
                className: 'value-prop-icon',
                style: r
              }),
              o.a.createElement('div', { className: 'value-prop-text' }, a)
            )
          }),
        k =
          (n(174),
          {
            title: 'Discover',
            icon: 'discover',
            text:
              'Find out about great local places to visit with your family. From restaurants, to museums, \n\tparks and playgrounds, make the most of your time!'
          }),
        I = {
          title: 'Track',
          icon: 'track',
          text:
            'Had a great time sharing a meal with your family or enjoyed a hiking trail? Jot it down to build your \n\troster of go-to places for your trips.'
        },
        T = {
          title: 'Share',
          icon: 'share',
          text:
            'Share your favorite places to visit with friends and family, and hear about what others are \n\tenjoying, for great new ideas.'
        },
        $ = function() {
          return o.a.createElement(
            'div',
            { className: 'value-prop-container' },
            o.a.createElement(N, k),
            o.a.createElement(N, I),
            o.a.createElement(N, T)
          )
        },
        D = n(230),
        M = n(143),
        B = n(25),
        A = n(26),
        q = n.n(A)
      function z() {
        var e = Object(B.a)([
          '\n\tquery {\n\t\t\tcurrentUser @client {\n\t\t\t\t\tid\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t}\n\t}\n'
        ])
        return (
          (z = function() {
            return e
          }),
          e
        )
      }
      var L = q()(z()),
        W = function() {
          return !!localStorage.getItem('auth-token')
        },
        U = function(e, t) {
          localStorage.setItem('auth-token', e),
            localStorage.setItem('user-info', JSON.stringify(t))
        },
        V =
          (n(176),
          n(177),
          function() {
            return o.a.createElement(
              'div',
              null,
              !W() &&
                o.a.createElement(
                  'div',
                  null,
                  o.a.createElement(
                    'button',
                    {
                      className: 'form-button homepage-signup-button',
                      onClick: function() {
                        return (function() {
                          var e = new Event('openSignUpModal')
                          window.dispatchEvent(e)
                        })()
                      }
                    },
                    'Get Started'
                  )
                )
            )
          }),
        _ = function() {
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(C, null),
            o.a.createElement($, null),
            o.a.createElement(V, null)
          )
        },
        F = n(29),
        H = n(93),
        G = n(243),
        P = n(246)
      function J() {
        var e = Object(B.a)([
          '\n  query($venueId: ID!, $limit: Int, $radius: Int) {\n    similarVenues(id: $venueId, first: $limit, radius: $radius) {\n      id\n      name\n      streetAddress\n      zipcode\n      city\n    }\n  }\n'
        ])
        return (
          (J = function() {
            return e
          }),
          e
        )
      }
      function R() {
        var e = Object(B.a)([
          '\n  query {\n    venueTypes {\n      id\n      name\n      image\n    }\n  }\n'
        ])
        return (
          (R = function() {
            return e
          }),
          e
        )
      }
      function Q() {
        var e = Object(B.a)([
          '\n  query {\n    me {\n      venues {\n        ...VenueDetails\n      }\n    }\n  }\n  ',
          '\n'
        ])
        return (
          (Q = function() {
            return e
          }),
          e
        )
      }
      function K() {
        var e = Object(B.a)([
          '\n  query($venueSlug: String!) {\n    venueBySlug(slug: $venueSlug) {\n      ...VenueDetails\n    }\n  }\n  ',
          '\n'
        ])
        return (
          (K = function() {
            return e
          }),
          e
        )
      }
      function Z() {
        var e = Object(B.a)([
          '\n  query($venueId: ID!) {\n    venue(id: $venueId) {\n      ...VenueDetails\n    }\n  }\n  ',
          '\n'
        ])
        return (
          (Z = function() {
            return e
          }),
          e
        )
      }
      function X() {
        var e = Object(B.a)([
          '\n  fragment VenueDetails on Venue {\n    id\n    name\n    slug\n    description\n    streetAddress\n    zipcode\n    city\n    state\n    lat\n    lng\n    venueTypes {\n      id\n      name\n      image\n    }\n  }\n'
        ])
        return (
          (X = function() {
            return e
          }),
          e
        )
      }
      var Y = q()(X()),
        ee = (q()(Z(), Y), q()(K(), Y)),
        te = q()(Q(), Y),
        ne = q()(R()),
        ae = q()(J()),
        re = n(9),
        oe = n(231),
        ie = n(232),
        le = n(233),
        ce = function(e) {
          var t = ''
            .concat(e.streetAddress, ', ')
            .concat(e.city, ', ')
            .concat(e.state, ' ')
            .concat(e.zipcode)
          return 'https://maps.google.com/?q='.concat(encodeURIComponent(t))
        },
        se = n(49),
        ue = Object(re.a)({
          '@global': {
            '.venueItem': {
              marginTop: '5px',
              marginBottom: '5px',
              backgroundColor: '#f6f6f6',
              padding: '15px'
            },
            '.venueIcon': {
              width: '15px',
              height: 'auto',
              marginRight: '5px',
              position: 'relative',
              top: '2px'
            }
          }
        })(function(e) {
          var t = e.venue
          return o.a.createElement(
            'div',
            { className: 'venueItem' },
            o.a.createElement(
              'div',
              null,
              o.a.createElement(
                x.a,
                { variant: 'h6', component: se.b, to: O.venuePath(t.slug) },
                t.name
              )
            ),
            o.a.createElement(
              'div',
              null,
              (function(e, t) {
                var n
                switch (e.venueTypes[0].name) {
                  case 'restaurant':
                    n = o.a.createElement(oe.a, { className: t })
                    break
                  case 'outdoor playground':
                    n = o.a.createElement(ie.a, { className: t })
                    break
                  default:
                    n = o.a.createElement(le.a, { className: t })
                }
                return n
              })(t, 'venueIcon'),
              t.venueTypes && t.venueTypes.length
                ? ''.concat(t.venueTypes[0].name, ' in ')
                : '',
              o.a.createElement(
                'a',
                { href: ce(t), target: '_blank', rel: 'noopener noreferrer' },
                t.city,
                ', ',
                t.state
              )
            )
          )
        }),
        me = n(86),
        de = n(251),
        pe = n(241),
        ge = n(240),
        fe = n(242),
        ve = n(254),
        he = n(133),
        ye = n(237),
        be = n(238),
        Ee = n(134),
        Oe = n.n(Ee),
        je = n(239),
        xe = n(138)
      function we() {
        var e = Object(B.a)([
          '\n\tquery ($limit: Int, $query: String) {\n\t\tcities(first: $limit, query: $query) {\n\t\t\tid\n\t\t\tname\n\t\t\tstate\n\t\t}\n\t}\n'
        ])
        return (
          (we = function() {
            return e
          }),
          e
        )
      }
      var Se = q()(we()),
        Ce = n(255),
        Ne = n(234),
        ke = {
          container: { position: 'relative', width: '500px' },
          input: {
            border: '1px solid #ccc',
            outline: 'none',
            width: '300px',
            padding: '20px',
            fontSize: '17px'
          },
          suggestionsContainer: {
            position: 'absolute',
            width: '300px',
            top: 62,
            left: 0,
            border: '1px solid #efefef'
          },
          suggestionItem: { width: '100%', padding: '10px' },
          formControl: {
            minWidth: '500px',
            marginTop: '16px',
            marginBottom: '8px',
            height: '16px'
          }
        },
        Ie = Object(D.b)(function(e) {
          var t = e.client,
            n = e.onCitySelected,
            a = Object(r.useState)(''),
            i = Object(F.a)(a, 2),
            l = i[0],
            c = i[1],
            s = Object(r.useState)({}),
            u = Object(F.a)(s, 2),
            m = u[0],
            d = u[1],
            p = Object(r.useState)([]),
            g = Object(F.a)(p, 2),
            f = g[0],
            v = g[1]
          Object(r.useEffect)(
            function() {
              l && l.length >= 3
                ? (function(e) {
                    return t.query({
                      query: Se,
                      variables: { limit: 10, query: e }
                    })
                  })(l).then(function(e) {
                    var t = e.data
                    v(
                      t.cities.map(function(e) {
                        return {
                          value: e.id,
                          label: ''.concat(e.name, ', ').concat(e.state)
                        }
                      })
                    )
                  })
                : v([])
            },
            [l, t]
          )
          return o.a.createElement(
            'div',
            { style: ke.container },
            o.a.createElement(
              Ne.a,
              { style: ke.formControl },
              o.a.createElement(
                Ce.a,
                { shrink: !0, htmlFor: 'age-simple' },
                'City'
              )
            ),
            o.a.createElement(xe.a, {
              value: m,
              onChange: function(e) {
                d(e), n(e)
              },
              options: f,
              onInputChange: function(e) {
                c(e)
              },
              placeholder: 'Type in name of city',
              isClearable: !0,
              menuIsOpen: f && f.length,
              escapeClearsValue: !0
            })
          )
        }),
        Te = n(249),
        $e = n(253),
        De = {
          formControl: {
            minWidth: '500px',
            marginTop: '16px',
            marginBottom: '8px'
          }
        },
        Me = function(e) {
          var t = e.onVenueTypeSelected,
            n = Object(r.useState)(''),
            a = Object(F.a)(n, 2),
            i = a[0],
            l = a[1]
          return o.a.createElement(H.b, { query: ne }, function(e) {
            var n = e.loading,
              a = e.error,
              r = e.data
            if (n) return 'Loading...'
            if (a) return 'Error! '.concat(a.message)
            var c = r.venueTypes
            return o.a.createElement(
              Ne.a,
              { style: De.formControl },
              o.a.createElement(Ce.a, { htmlFor: 'age-simple' }, 'Venue Type'),
              o.a.createElement(
                Te.a,
                {
                  value: i,
                  onChange: function(e) {
                    return (n = e.target.value), l(n), void t(n)
                    var n
                  },
                  inputProps: { name: 'type', id: 'venue-type' }
                },
                c.map(function(e) {
                  return o.a.createElement(
                    $e.a,
                    { key: e.id, value: e.id },
                    e.name
                  )
                })
              )
            )
          })
        }
      function Be() {
        var e = Object(B.a)([
          '\n    mutation CreateVenueMutation($name: String!, $streetAddress: String!, \n        $zipcode: Int!, $cityId: Int!, $typeId: Int!) {\n        createVenue (\n            name: $name\n            streetAddress: $streetAddress\n            zipcode: $zipcode\n            city: {\n                id: $cityId\n            }\n            venueType: {\n                id: $typeId\n            }\n        ) {\n            id\n            name\n            streetAddress\n            venueTypes {\n                name\n            }\n        }\n    }\n'
        ])
        return (
          (Be = function() {
            return e
          }),
          e
        )
      }
      var Ae = q()(Be()),
        qe = n(70),
        ze = {
          appBar: { position: 'relative' },
          title: { margin: '0 auto' },
          body: { margin: '0 auto' },
          input: { minWidth: '500px' }
        },
        Le = {
          name: '',
          type: { id: null },
          streetAddress: '',
          zipcode: '',
          lat: '',
          lng: '',
          city: {}
        },
        We = function(e) {
          var t = Object(qe.a)(Ae, {
              onError: function(e) {
                console.log('error', e)
              },
              onCompleted: function(e) {
                console.log('data', e)
              },
              refetchQueries: [{ query: te }]
            }),
            n = Object(F.a)(t, 1)[0],
            i = Object(r.useState)(Object(a.a)({}, Le)),
            l = Object(F.a)(i, 2),
            c = l[0],
            s = l[1],
            u = Object(r.useState)('Please enter information about a venue'),
            m = Object(F.a)(u, 2),
            d = m[0],
            p = m[1],
            g = function(e) {
              return function(t) {
                console.log(e, t.target.value),
                  s(Object(a.a)({}, c, Object(me.a)({}, e, t.target.value)))
              }
            }
          return o.a.createElement(
            de.a,
            {
              open: e.open,
              onClose: e.toggleDialog,
              fullScreen: !0,
              'aria-labelledby': 'form-dialog-title'
            },
            o.a.createElement(
              ye.a,
              { style: ze.appBar },
              o.a.createElement(
                be.a,
                null,
                o.a.createElement(
                  je.a,
                  {
                    edge: 'start',
                    color: 'inherit',
                    onClick: e.toggleDialog,
                    'aria-label': 'close'
                  },
                  o.a.createElement(Oe.a, null)
                )
              )
            ),
            o.a.createElement(ge.a, { style: ze.title }, 'Add New Destination'),
            o.a.createElement(
              pe.a,
              { style: ze.body },
              o.a.createElement(fe.a, null, d),
              o.a.createElement(ve.a, {
                id: 'venue-name',
                label: 'Venue name',
                value: c.name,
                onChange: g('name'),
                margin: 'normal',
                style: ze.input
              }),
              o.a.createElement('br', null),
              o.a.createElement(Me, {
                onVenueTypeSelected: function(e) {
                  console.log('venueTypeId selected:', e),
                    s(Object(a.a)({}, c, { type: { id: e } }))
                }
              }),
              o.a.createElement('br', null),
              o.a.createElement(ve.a, {
                id: 'venue-street-address',
                name: 'street-address',
                label: 'Street address',
                value: c.streetAddress,
                onChange: g('streetAddress'),
                margin: 'normal',
                autoComplete: 'shipping street-address',
                style: ze.input
              }),
              o.a.createElement(Ie, {
                onCitySelected: function(e) {
                  console.log('city selected:', e),
                    s(Object(a.a)({}, c, { city: { id: e.value } }))
                }
              }),
              o.a.createElement(he.a, {
                customInput: ve.a,
                id: 'venue-zipcode',
                name: 'zipcode',
                label: 'Zipcode',
                value: c.zipcode,
                onChange: g('zipcode'),
                margin: 'normal',
                style: ze.input,
                autoComplete: 'postal-code',
                format: '#####'
              }),
              o.a.createElement(
                'div',
                null,
                o.a.createElement(
                  G.a,
                  {
                    color: 'primary',
                    onClick: function() {
                      !(function(e) {
                        var t = e.name,
                          n = e.type,
                          a = e.streetAddress,
                          r = e.city,
                          o = e.zipcode,
                          i = {
                            name: !1,
                            type: !1,
                            streetAddress: !1,
                            city: !1,
                            zipcode: !1
                          }
                        return (
                          t && t.length >= 2 && (i.name = !0),
                          n && n.id && (i.type = !0),
                          a && a.length >= 2 && (i.streetAddress = !0),
                          r && r.id && (i.city = !0),
                          o && !isNaN(parseInt(o)) && (i.zipcode = !0),
                          -1 === Object.values(i).indexOf(!1)
                        )
                      })(c)
                        ? p('Please enter valid venue information')
                        : n({
                            variables: {
                              name: c.name,
                              typeId: c.type.id,
                              streetAddress: c.streetAddress,
                              zipcode: parseInt(c.zipcode),
                              cityId: c.city.id
                            }
                          }).then(function(t) {
                            console.log('response', t),
                              s(Object(a.a)({}, Le)),
                              e.toggleDialog()
                          })
                    }
                  },
                  'Create venue'
                )
              )
            )
          )
        },
        Ue = n(135),
        Ve = n.n(Ue),
        _e = n(248),
        Fe = n(245),
        He = Object(re.a)({
          appBar: { boxShadow: 'none', float: 'left', width: '300px' },
          tabIndicator: { backgroundColor: '#ffffff' }
        })(function(e) {
          var t = e.classes,
            n = e.venues,
            a = e.venueTypeFilter,
            r = e.onSetVenueTypeFilter
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Ve.a,
              { position: 'static', className: t.appBar },
              o.a.createElement(
                _e.a,
                {
                  value: a,
                  onChange: function(e, t) {
                    r(t)
                  },
                  classes: { indicator: t.tabIndicator },
                  orientation: 'vertical',
                  variant: 'scrollable',
                  scrollButtons: 'auto'
                },
                o.a.createElement(Fe.a, { label: 'all', value: 'all' }),
                (function(e) {
                  for (var t = {}, n = 0; n < e.length; n++)
                    e[n].venueTypes &&
                      e[n].venueTypes.length &&
                      (t[e[n].venueTypes[0].name]
                        ? t[e[n].venueTypes[0].name].venues.push(e[n])
                        : (t[e[n].venueTypes[0].name] = {
                            type: {
                              id: e[n].venueTypes[0].id,
                              name: e[n].venueTypes[0].name
                            },
                            venues: [e[n]]
                          }))
                  return Object.keys(t)
                })(n)
                  .sort()
                  .map(function(e, t) {
                    return o.a.createElement(Fe.a, {
                      label: e,
                      value: e,
                      key: t
                    })
                  })
              )
            )
          )
        }),
        Ge = {
          sectionHeader: { marginBottom: '15px', display: 'flex' },
          sectionHeaderTitle: { flexGrow: 2 },
          venueList: { marginLeft: '320px' }
        },
        Pe = function() {
          var e = Object(r.useState)(!1),
            t = Object(F.a)(e, 2),
            n = t[0],
            a = t[1],
            i = Object(r.useState)('all'),
            l = Object(F.a)(i, 2),
            c = l[0],
            s = l[1],
            u = function() {
              a(!n)
            }
          return o.a.createElement(H.b, { query: te }, function(e) {
            var t = e.loading,
              a = e.error,
              r = e.data
            if (t) return 'Loading...'
            if (a) return 'Error! '.concat(a.message)
            var i = r.me.venues.sort(function(e, t) {
              return e.name > t.name ? 1 : t.name > e.name ? -1 : 0
            })
            return o.a.createElement(
              'div',
              { className: 'mainContainer' },
              o.a.createElement(
                'div',
                { className: 'mainContent' },
                o.a.createElement(
                  'div',
                  { style: Ge.sectionHeader },
                  o.a.createElement(
                    x.a,
                    { variant: 'h5', style: Ge.sectionHeaderTitle },
                    'My destinations'
                  ),
                  o.a.createElement(
                    G.a,
                    { variant: 'outlined', onClick: u },
                    o.a.createElement(P.a, null),
                    'Add Destination'
                  ),
                  o.a.createElement(We, { open: n, toggleDialog: u })
                ),
                o.a.createElement(He, {
                  venues: i,
                  onSetVenueTypeFilter: s,
                  venueTypeFilter: c
                }),
                o.a.createElement(
                  'div',
                  { style: Ge.venueList },
                  i
                    .filter(function(e) {
                      return 'all' === c || e.venueTypes[0].name === c
                    })
                    .map(function(e) {
                      return o.a.createElement(ue, { key: e.id, venue: e })
                    })
                )
              )
            )
          })
        },
        Je = function(e) {
          var t = e.venue,
            n = w(
              (function(e) {
                return e.venueTypes[0].image || 'restaurant-header-cmp.jpg'
              })(t),
              '300px'
            )
          return o.a.createElement(
            'div',
            { style: n.container },
            o.a.createElement(
              x.a,
              { variant: 'h2', style: n.headerText },
              o.a.createElement('strong', null, t.name)
            )
          )
        },
        Re =
          (n(124),
          Object(D.b)(function(e) {
            var t = e.client,
              n = e.venue,
              a = Object(r.useState)([]),
              i = Object(F.a)(a, 2),
              l = i[0],
              c = i[1]
            return (
              Object(r.useEffect)(
                function() {
                  t.query({
                    query: ae,
                    variables: { venueId: n.id, limit: 5, radius: 10 }
                  }).then(function(e) {
                    var t = e.data
                    c(t.similarVenues)
                  })
                },
                [n, t]
              ),
              o.a.createElement(
                'div',
                { className: 'sidebar-module' },
                o.a.createElement('h3', null, 'Similar places near by'),
                o.a.createElement(
                  'div',
                  { className: 'sidebar-module-body' },
                  l &&
                    l.map(function(e) {
                      return o.a.createElement('div', { key: e.id }, e.name)
                    })
                )
              )
            )
          })),
        Qe = function(e) {
          var t = e.venue
          return o.a.createElement(
            'div',
            { className: 'sidebar-module' },
            o.a.createElement('h3', null, 'Location'),
            o.a.createElement(
              'div',
              { className: 'sidebar-module-body' },
              (function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : ', '
                return e
                  ? o.a.createElement(
                      'span',
                      null,
                      e.streetAddress,
                      t,
                      e.city,
                      ', ',
                      e.state,
                      ' ',
                      e.zipcode
                    )
                  : ''
              })(t, o.a.createElement('br', null))
            )
          )
        },
        Ke = {
          sectionHeader: { marginBottom: '15px' },
          columnWrapper: { display: 'flex' },
          mainColumn: { flexGrow: 3, maxWidth: '800px' },
          sideColumm: { flexGrow: 1, marginTop: '-20px' }
        },
        Ze = function(e) {
          var t = e.match.params.venueSlug
          return t
            ? o.a.createElement(
                H.b,
                { query: ee, variables: { venueSlug: t } },
                function(e) {
                  var t = e.loading,
                    n = e.error,
                    a = e.data
                  if (t) return 'Loading...'
                  if (n) return 'Error! '.concat(n.message)
                  var r = a.venueBySlug,
                    i = (function(e) {
                      return e.venueTypes[0].name || 'venue'
                    })(r)
                  return (
                    console.log('data', a),
                    o.a.createElement(
                      'div',
                      null,
                      o.a.createElement(Je, { venue: r }),
                      o.a.createElement(
                        'div',
                        { className: 'mainContainer' },
                        o.a.createElement(
                          'div',
                          { className: 'mainContent' },
                          o.a.createElement(
                            x.a,
                            { variant: 'h5', style: Ke.sectionHeader },
                            r.name
                          ),
                          o.a.createElement(
                            'div',
                            { style: Ke.columnWrapper },
                            o.a.createElement(
                              'div',
                              { style: Ke.mainColumn },
                              r.description &&
                                o.a.createElement('span', null, r.description),
                              'This ',
                              i,
                              ' is located in ',
                              r.city,
                              ',',
                              ' ',
                              r.state,
                              '.'
                            ),
                            o.a.createElement(
                              'div',
                              { style: Ke.sideColumm },
                              o.a.createElement(Qe, { venue: r }),
                              o.a.createElement(Re, { venue: r })
                            )
                          )
                        )
                      )
                    )
                  )
                }
              )
            : o.a.createElement('div', null, 'Venue not found.')
        },
        Xe = n(252),
        Ye = n(244),
        et = n(139),
        tt = n(102),
        nt = n.n(tt),
        at = Object(et.a)({
          palette: {
            primary: { main: nt.a[500] },
            background: { default: '#ffffff' }
          },
          typography: { useNextVariants: !0 }
        }),
        rt = n(74),
        ot = n.n(rt),
        it = n(136),
        lt = n.n(it),
        ct = n(140),
        st = n(94),
        ut = n.n(st)
      function mt() {
        var e = Object(B.a)([
          '\n    mutation LoginMutation($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token,\n            user {\n                id,\n                firstName,\n                lastName,\n                email\n            }\n        }\n    }\n'
        ])
        return (
          (mt = function() {
            return e
          }),
          e
        )
      }
      function dt() {
        var e = Object(B.a)([
          '\n    mutation SignupMutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {\n        signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {\n            token,\n            user {\n                id,\n                firstName,\n                lastName,\n                email\n            }\n        }\n    }\n'
        ])
        return (
          (dt = function() {
            return e
          }),
          e
        )
      }
      var pt,
        gt = q()(dt()),
        ft = q()(mt()),
        vt = n(247),
        ht = (function(e) {
          function t() {
            var e, n
            Object(f.a)(this, t)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i]
            return (
              ((n = Object(h.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                login: void 0 === n.props.login || n.props.login,
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                errorMessage: null
              }),
              (n._update = function(e, t) {
                return ut.a.async(function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        e.writeData({
                          data: {
                            currentUser: Object(a.a)({}, t.user, {
                              token: t.token
                            })
                          }
                        })
                      case 1:
                      case 'end':
                        return n.stop()
                    }
                })
              }),
              (n._confirm = function(e) {
                var t, a, r
                return ut.a.async(function(o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        ;(n.state.error = null),
                          (t = n.state.login ? e.login : e.signup),
                          (a = t.token),
                          (r = t.user),
                          n._saveUserData(a, r),
                          (document.location = O.dashboard)
                      case 4:
                      case 'end':
                        return o.stop()
                    }
                })
              }),
              (n._saveUserData = function(e, t) {
                U(e, t)
              }),
              (n._error = function(e) {
                var t
                return ut.a.async(function(a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        ;(t = e.graphQLErrors),
                          n.state.login && t && t[0] && t[0].message
                            ? n.setState({ errorMessage: t[0].message })
                            : t &&
                              t[0] &&
                              t[0].extensions.exception.errors[0].message &&
                              n.setState({
                                errorMessage:
                                  t[0].extensions.exception.errors[0].message
                              })
                      case 2:
                      case 'end':
                        return a.stop()
                    }
                })
              }),
              n
            )
          }
          return (
            Object(b.a)(t, e),
            Object(v.a)(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.open !== this.props.open &&
                    this.setState({ errorMessage: null }),
                    e.login !== this.props.login &&
                      this.setState({ login: this.props.login })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state,
                    n = t.login,
                    a = t.email,
                    r = t.password,
                    i = t.firstName,
                    l = t.lastName,
                    c = t.errorMessage,
                    s = this.props.classes
                  return o.a.createElement(
                    de.a,
                    {
                      open: this.props.open,
                      onClose: this.props.toggleDialog,
                      maxWidth: 'sm',
                      fullWidth: !0,
                      'aria-labelledby': 'form-dialog-title'
                    },
                    o.a.createElement(
                      ge.a,
                      { id: 'login-dialog-title' },
                      n ? 'Login' : 'Sign Up'
                    ),
                    o.a.createElement(
                      pe.a,
                      null,
                      c &&
                        o.a.createElement(
                          fe.a,
                          { className: s.dialogMainError },
                          c
                        ),
                      o.a.createElement(
                        'div',
                        { className: s.dialogMainContent },
                        !n &&
                          o.a.createElement(
                            'span',
                            null,
                            o.a.createElement(ve.a, {
                              id: 'firstName',
                              label: 'First name',
                              error: !!c,
                              value: i,
                              onChange: function(t) {
                                return e.setState({ firstName: t.target.value })
                              },
                              margin: 'normal',
                              fullWidth: !0
                            }),
                            o.a.createElement(ve.a, {
                              id: 'lastName',
                              label: 'Last name',
                              error: !!c,
                              value: l,
                              onChange: function(t) {
                                return e.setState({ lastName: t.target.value })
                              },
                              margin: 'normal',
                              fullWidth: !0
                            })
                          ),
                        o.a.createElement(ve.a, {
                          id: 'email',
                          label: 'Email',
                          error: !!c,
                          value: a,
                          onChange: function(t) {
                            return e.setState({ email: t.target.value })
                          },
                          margin: 'normal',
                          fullWidth: !0
                        }),
                        o.a.createElement(ve.a, {
                          id: 'password',
                          label: 'Password',
                          error: !!c,
                          type: 'password',
                          autoComplete: 'current-password',
                          onChange: function(t) {
                            return e.setState({ password: t.target.value })
                          },
                          margin: 'normal',
                          fullWidth: !0
                        })
                      )
                    ),
                    o.a.createElement(
                      vt.a,
                      null,
                      o.a.createElement(
                        G.a,
                        {
                          onClick: function() {
                            return e.setState({ login: !n, errorMessage: null })
                          },
                          color: 'primary',
                          style: { marginRight: 'auto' }
                        },
                        n
                          ? 'need to create an account?'
                          : 'already have an account?'
                      ),
                      o.a.createElement(
                        G.a,
                        { onClick: this.props.toggleDialog, color: 'primary' },
                        'Cancel'
                      ),
                      o.a.createElement(
                        H.a,
                        {
                          mutation: n ? ft : gt,
                          variables: {
                            email: a,
                            password: r,
                            firstName: i,
                            lastName: l
                          },
                          update: function(t, a) {
                            var r = a.data
                            return e._update(t, n ? r.login : r.signup)
                          },
                          onCompleted: function(t) {
                            return e._confirm(t)
                          },
                          onError: function(t) {
                            return e._error(t)
                          }
                        },
                        function(e) {
                          return o.a.createElement(
                            G.a,
                            { color: 'primary', onClick: e },
                            n ? 'login' : 'create account'
                          )
                        }
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(r.Component),
        yt = Object(E.f)(
          Object(re.a)({
            dialogMainContent: {
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            },
            dialogMainError: { textAlign: 'center' }
          })(ht)
        ),
        bt = (function(e) {
          function t() {
            var e, n
            Object(f.a)(this, t)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o]
            return (
              ((n = Object(h.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).state = { dialogOpen: !1, login: !0 }),
              (n.toggleDialog = function() {
                n.setState({ dialogOpen: !n.state.dialogOpen, login: !0 })
              }),
              (n.renderUserInfo = function(e) {
                return e && e.id ? 'Welcome, '.concat(e.firstName) : ''
              }),
              n
            )
          }
          return (
            Object(b.a)(t, e),
            Object(v.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e,
                    t = this
                  ;(e = function() {
                    t.setState({ dialogOpen: !0, login: !1 })
                  }),
                    window.addEventListener('openSignUpModal', function() {
                      return e()
                    })
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.currentUser
                  return W()
                    ? o.a.createElement(
                        x.a,
                        {
                          variant: 'button',
                          color: 'inherit',
                          className: this.props.className
                        },
                        this.renderUserInfo(e)
                      )
                    : o.a.createElement(
                        'span',
                        null,
                        o.a.createElement(
                          G.a,
                          {
                            onClick: this.toggleDialog,
                            className: this.props.className,
                            color: 'inherit'
                          },
                          'Login'
                        ),
                        o.a.createElement(yt, {
                          open: this.state.dialogOpen,
                          login: this.state.login,
                          toggleDialog: this.toggleDialog
                        })
                      )
                }
              }
            ]),
            t
          )
        })(r.Component),
        Et =
          ((pt = Object(E.f)(bt)),
          Object(M.a)(
            Object(D.a)(L, {
              props: function(e) {
                return { currentUser: e.data.currentUser }
              }
            })
          )(pt)),
        Ot = (function(e) {
          function t() {
            var e, n
            Object(f.a)(this, t)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o]
            return (
              ((n = Object(h.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).state = { anchorEl: null }),
              (n.toggleMenu = function(e) {
                n.state.anchorEl
                  ? n.setState({ anchorEl: null })
                  : n.setState({ anchorEl: e.currentTarget })
              }),
              n
            )
          }
          return (
            Object(b.a)(t, e),
            Object(v.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.classes
                  return o.a.createElement(
                    'div',
                    { className: t.root },
                    o.a.createElement(
                      ye.a,
                      {
                        position: 'fixed',
                        style: { background: 'transparent', boxShadow: 'none' }
                      },
                      o.a.createElement(
                        be.a,
                        { variant: 'dense', className: t.container },
                        o.a.createElement(
                          x.a,
                          {
                            className: t.logoText,
                            variant: 'button',
                            color: 'inherit'
                          },
                          'KidTrip'
                        ),
                        o.a.createElement(x.a, {
                          variant: 'h6',
                          color: 'inherit',
                          className: t.grow
                        }),
                        o.a.createElement(Et, { className: t.loginButton }),
                        W() &&
                          o.a.createElement(
                            'span',
                            { className: t.menuWrapper },
                            o.a.createElement(
                              je.a,
                              {
                                onClick: this.toggleMenu,
                                className: t.menuButton,
                                color: 'inherit',
                                'aria-label': 'Menu'
                              },
                              o.a.createElement(lt.a, null)
                            ),
                            o.a.createElement(
                              ct.a,
                              {
                                id: 'simple-menu',
                                anchorEl: this.state.anchorEl,
                                open: Boolean(this.state.anchorEl),
                                onClose: this.toggleMenu
                              },
                              o.a.createElement(
                                $e.a,
                                {
                                  component: se.b,
                                  to: O.home,
                                  onClick: this.toggleMenu
                                },
                                'Home'
                              ),
                              o.a.createElement(
                                $e.a,
                                {
                                  component: se.b,
                                  to: O.dashboard,
                                  onClick: this.toggleMenu
                                },
                                'Dashboard'
                              ),
                              o.a.createElement(
                                $e.a,
                                { onClick: this.toggleMenu },
                                'My account'
                              ),
                              o.a.createElement(
                                $e.a,
                                {
                                  onClick: function() {
                                    localStorage.removeItem('auth-token'),
                                      localStorage.removeItem('user-info'),
                                      e.props.history.push('/')
                                  }
                                },
                                'Logout'
                              )
                            )
                          )
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(r.Component),
        jt = Object(E.f)(Ot),
        xt = {
          root: { flexGrow: 1 },
          grow: { flexGrow: 1 },
          menuButton: { marginLeft: -12, marginRight: 20 },
          menuWrapper: { marginLeft: 15 }
        },
        wt = Object(a.a)({}, xt, {
          container: {
            borderBottom: '1px solid',
            borderBottomColor: ot.a[100],
            backgroundColor: 'white'
          },
          grow: Object(a.a)({}, xt.grow, { color: ot.a[500] }),
          menuButton: Object(a.a)({}, xt.menuButton, { color: ot.a[500] }),
          loginButton: { color: ot.a[500] },
          logoText: { color: ot.a[500] }
        }),
        St = Object(E.f)(function(e) {
          var t = j(e.location) ? xt : wt,
            n = Object(re.a)(t)(jt)
          return o.a.createElement(n, null)
        }),
        Ct = (function(e) {
          function t() {
            return (
              Object(f.a)(this, t),
              Object(h.a)(this, Object(y.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(b.a)(t, e),
            Object(v.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    n = e.location
                  return o.a.createElement(
                    Ye.a,
                    { theme: at },
                    o.a.createElement(
                      'div',
                      null,
                      o.a.createElement(Xe.a, null),
                      o.a.createElement(St, null),
                      !j(n) &&
                        o.a.createElement('div', { className: t.appBarSpacer }),
                      o.a.createElement(
                        E.c,
                        null,
                        o.a.createElement(E.a, {
                          exact: !0,
                          path: O.home,
                          component: _
                        }),
                        o.a.createElement(E.a, {
                          exact: !0,
                          path: O.dashboard,
                          component: Pe
                        }),
                        o.a.createElement(E.a, { path: O.venue, component: Ze })
                      )
                    )
                  )
                }
              }
            ]),
            t
          )
        })(r.Component),
        Nt = Object(E.f)(
          Object(re.a)({
            '@global': {
              body: { fontFamily: 'Roboto, Helvetica, Arial, sans-serif' },
              '.mainContainer': { display: 'flex', justifyContent: 'center' },
              '.mainContent': {
                maxWidth: '1200px',
                flexGrow: '1',
                margin: '50px'
              }
            },
            appBarSpacer: { height: '49px' }
          })(Ct)
        )
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      )
      n(202)
      var kt = new s.a(),
        It = {
          currentUser: Object(a.a)(
            {},
            (function() {
              var e = localStorage.getItem('user-info')
              return e
                ? JSON.parse(e)
                : {
                    __typename: 'User',
                    id: null,
                    firstName: null,
                    lastName: null,
                    email: null
                  }
            })()
          )
        },
        Tt = Object(g.a)({
          cache: kt,
          defaults: It,
          resolvers: {
            Mutation: {
              updateUserInfo: function(e, t, n) {
                var a = {
                  user: {
                    __typename: 'User',
                    id: t.id,
                    firstName: t.firstName,
                    lastName: t.lastName,
                    email: t.email
                  }
                }
                return n.cache.writeData({ data: a }), null
              }
            }
          }
        }),
        $t = localStorage.getItem('auth-token'),
        Dt = new u.a({
          uri: 'http://api.mykidtrip.com',
          credentials: 'same-origin',
          headers: { authorization: $t ? 'Bearer '.concat($t) : '' }
        }),
        Mt = new c.a({
          link: d.a.from([
            Object(m.a)(function(e) {
              var t = e.graphQLErrors,
                n = e.networkError
              t &&
                t.map(function(e) {
                  var t = e.message,
                    n = e.locations,
                    a = e.path
                  return console.log(
                    '[GraphQL error]: Message: '
                      .concat(t, ', Location: ')
                      .concat(n, ', Path: ')
                      .concat(a)
                  )
                }),
                n && console.log('[Network error]: '.concat(n))
            }),
            Tt,
            Dt
          ]),
          cache: new s.a(),
          resolvers: {}
        })
      l.a.render(
        o.a.createElement(
          se.a,
          null,
          o.a.createElement(p.b, { client: Mt }, o.a.createElement(Nt, null))
        ),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    }
  },
  [[163, 1, 2]]
])
//# sourceMappingURL=main.79cf1356.chunk.js.map
