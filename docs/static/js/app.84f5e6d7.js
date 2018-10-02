(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    './.docz/app/db.json': function(e) {
      e.exports = {
        config: {
          title: 'React Tiny Fab',
          description: 'A tiny Floating Action Button for React.',
          themeConfig: {},
          menu: [],
          ordering: 'descending',
          version: '1.1.0',
          repository: 'https://github.com/dericgw/react-tiny-fab',
          native: !1,
          dest: './docs',
          plugins: [{}],
        },
        entries: {
          'src/example.mdx': {
            name: 'React Tiny Fab',
            route: '/',
            id: 'd3be5c520c8cc3bdd6ff5a49f9353d7b',
            filepath: 'src/example.mdx',
            link: 'https://github.com/dericgw/react-tiny-fab/edit/master/src/example.mdx',
            slug: 'src-example',
            order: 0,
            menu: null,
            headings: [
              { depth: 1, slug: 'react-tiny-fab', value: 'React Tiny Fab' },
              { depth: 2, slug: 'install', value: 'Install' },
              { depth: 2, slug: 'usage', value: 'Usage' },
              { depth: 2, slug: 'example', value: 'Example' },
              { depth: 2, slug: 'components', value: 'Components' },
              { depth: 3, slug: 'fab-', value: '<Fab />' },
              { depth: 4, slug: 'props', value: 'Props' },
              { depth: 3, slug: 'action-', value: '<Action />' },
              { depth: 4, slug: 'props-1', value: 'Props' },
              { depth: 2, slug: 'demo', value: 'Demo' },
              { depth: 2, slug: 'contributing', value: 'Contributing' },
              {
                depth: 3,
                slug: 'running-the-dev-environment',
                value: 'Running the dev environment',
              },
              { depth: 2, slug: 'issues', value: 'Issues' },
            ],
          },
        },
      };
    },
    './.docz/app/imports.js': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return o;
      });
      var o = {
        'src/example.mdx': function() {
          return t.e(1).then(t.bind(null, './src/example.mdx'));
        },
      };
    },
    './.docz/app/index.jsx': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('./node_modules/react/index.js'),
        s = t.n(o),
        a = t('./node_modules/react-dom/index.js'),
        d = t.n(a),
        i = t('./.docz/app/root.jsx'),
        u = [],
        c = [],
        r = function() {
          return c.forEach(function(e) {
            return e && e();
          });
        },
        l = document.querySelector('#root');
      !(function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : i.a;
        u.forEach(function(e) {
          return e && e();
        }),
          d.a.render(s.a.createElement(e, null), l, r);
      })(i.a);
    },
    './.docz/app/root.jsx': function(e, n, t) {
      'use strict';
      (function(e) {
        var o = t('./node_modules/react/index.js'),
          s = t.n(o),
          a = t('./node_modules/react-hot-loader/index.js'),
          d = t('./node_modules/docz-theme-default/dist/index.js'),
          i = t.n(d),
          u = t('./.docz/app/imports.js'),
          c = t('./.docz/app/db.json'),
          r = function() {
            return s.a.createElement(i.a, { db: c, imports: u.a, hashRouter: !1 });
          };
        (n.a = Object(a.hot)(e)(r)),
          (r.__docgenInfo = { description: '', methods: [], displayName: 'Root' });
      }.call(this, t('./node_modules/webpack/buildin/harmony-module.js')(e)));
    },
    0: function(e, n, t) {
      t('./node_modules/@babel/polyfill/lib/index.js'), (e.exports = t('./.docz/app/index.jsx'));
    },
    1: function(e, n) {},
    2: function(e, n) {},
    3: function(e, n) {},
    4: function(e, n) {},
  },
  [[0, 3, 2]],
  [1],
]);
