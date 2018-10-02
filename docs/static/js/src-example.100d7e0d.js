(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    './src/example.mdx': function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('./node_modules/react/index.js'),
        o = t.n(a),
        r = t('./node_modules/@mdx-js/tag/dist/index.js'),
        m = t('./node_modules/docz/dist/index.m.js');
      t('./src/styles.scss');
      function l(e) {
        return (l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function p(e, n) {
        for (var t, a = 0; a < n.length; a++)
          ((t = n[a]).enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function s(e, n) {
        return (s =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      function i(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function g(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var u = function(e) {
          return o.a.createElement(
            'button',
            Object.assign({ type: 'button' }, e, { className: 'rtf--ab' }),
            e.children
          );
        },
        d = function(e) {
          return o.a.createElement(
            'button',
            Object.assign({ type: 'button', className: 'rtf--mb' }, e),
            e.children
          );
        },
        h = (function(e) {
          function n() {
            var e, t;
            !(function(e, n) {
              if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
            })(this, n);
            for (var a = arguments.length, o = Array(a), r = 0; r < a; r++) o[r] = arguments[r];
            return (
              (t = (function(e, n) {
                return !n || ('object' !== l(n) && 'function' != typeof n) ? i(e) : n;
              })(this, (e = c(n)).call.apply(e, [this].concat(o)))),
              g(i(i(t)), 'state', { open: !1 }),
              g(i(i(t)), 'enter', function() {
                return 'hover' === t.props.event && t.open();
              }),
              g(i(i(t)), 'leave', function() {
                return 'hover' === t.props.event && t.close();
              }),
              g(i(i(t)), 'open', function() {
                return t.setState({ open: !0 });
              }),
              g(i(i(t)), 'close', function() {
                return t.setState({ open: !1 });
              }),
              g(i(i(t)), 'toggle', function() {
                return 'click' === t.props.event ? (t.state.open ? t.close() : t.open()) : null;
              }),
              t
            );
          }
          return (
            (function(e, n) {
              if ('function' != typeof n && null !== n)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                n && s(e, n);
            })(n, o.a.Component),
            (function(e, n, t) {
              n && p(e.prototype, n), t && p(e, t);
            })(n, [
              {
                key: 'rc',
                value: function() {
                  var e = this.props,
                    n = e.children,
                    t = e.position,
                    a = this.state.open;
                  return (
                    6 < o.a.Children.count(n) &&
                      console.warn('react-tiny-fab only supports up to 6 action buttons'),
                    o.a.Children.map(n, function(e, n) {
                      return o.a.createElement(
                        'li',
                        { className: 'rtf--ab__c '.concat('top' in t ? 'top' : '') },
                        o.a.cloneElement(
                          e,
                          (function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                              var t = null == arguments[n] ? {} : arguments[n],
                                a = Object.keys(t);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                  Object.getOwnPropertySymbols(t).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                  })
                                )),
                                a.forEach(function(n) {
                                  g(e, n, t[n]);
                                });
                            }
                            return e;
                          })(
                            {
                              'data-testid': 'action-button-'.concat(n),
                              'aria-label': e.props.text || 'Menu button '.concat(n + 1),
                              'aria-hidden': !a,
                            },
                            e.props
                          )
                        ),
                        e.props.text &&
                          o.a.createElement(
                            'span',
                            { className: 'right' in t ? 'right' : '', 'aria-hidden': !a },
                            e.props.text
                          )
                      );
                    })
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    n = e.position,
                    t = e.icon,
                    a = e.mainButtonStyles;
                  return o.a.createElement(
                    'ul',
                    {
                      onMouseEnter: this.enter,
                      onMouseLeave: this.leave,
                      className: 'rtf '.concat(this.state.open ? 'open' : 'closed'),
                      style: n,
                    },
                    o.a.createElement(
                      'li',
                      { className: 'rtf--mb__c' },
                      o.a.createElement(
                        d,
                        {
                          onClick: this.toggle,
                          style: a,
                          role: 'button',
                          'aria-label': 'Floating menu',
                          tabIndex: '0',
                        },
                        t
                      ),
                      o.a.createElement('ul', null, this.rc())
                    )
                  );
                },
              },
            ]),
            n
          );
        })();
      function E(e, n) {
        if (null == e) return {};
        var t,
          a,
          o = (function(e, n) {
            if (null == e) return {};
            var t,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++) (t = r[a]), 0 <= n.indexOf(t) || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (t = r[a]),
              !(0 <= n.indexOf(t)) &&
                Object.prototype.propertyIsEnumerable.call(e, t) &&
                (o[t] = e[t]);
        }
        return o;
      }
      g(h, 'defaultProps', { position: { bottom: 0, right: 0 }, event: 'hover' }),
        (d.__docgenInfo = { description: '', methods: [], displayName: 'MB' }),
        (h.__docgenInfo = {
          description: '',
          methods: [
            { name: 'enter', docblock: null, modifiers: [], params: [], returns: null },
            { name: 'leave', docblock: null, modifiers: [], params: [], returns: null },
            { name: 'open', docblock: null, modifiers: [], params: [], returns: null },
            { name: 'close', docblock: null, modifiers: [], params: [], returns: null },
            { name: 'toggle', docblock: null, modifiers: [], params: [], returns: null },
            { name: 'rc', docblock: null, modifiers: [], params: [], returns: null },
          ],
          displayName: 'Fab',
          props: {
            position: {
              defaultValue: { value: '{ bottom: 0, right: 0 }', computed: !1 },
              required: !1,
            },
            event: { defaultValue: { value: "'hover'", computed: !1 }, required: !1 },
          },
        }),
        (u.__docgenInfo = { description: '', methods: [], displayName: 'AB' });
      n.default = function(e) {
        var n = e.components,
          t = E(e, ['components']);
        return o.a.createElement(
          r.MDXTag,
          { name: 'wrapper', components: n },
          o.a.createElement(
            r.MDXTag,
            { name: 'h1', components: n, props: { id: 'react-tiny-fab' } },
            'React Tiny Fab'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'blockquote', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'p', components: n, parentName: 'blockquote' },
              'A tiny (~1kb gzip) WIA-ARIA compliant Floating Action Button for React'
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'install' } },
            'Install'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'pre', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'code', components: n, parentName: 'pre', props: { metaString: null } },
              '   npm install react-tiny-fab\n   yarn add react-tiny-fab\n'
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'usage' } },
            'Usage'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'There are two components available for import - ',
            o.a.createElement(
              r.MDXTag,
              { name: 'inlineCode', components: n, parentName: 'p' },
              'Fab'
            ),
            ' and ',
            o.a.createElement(
              r.MDXTag,
              { name: 'inlineCode', components: n, parentName: 'p' },
              'Action'
            ),
            '. You import them like this:'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'pre', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'code', components: n, parentName: 'pre', props: { metaString: null } },
              "   import { Fab, Action } from 'react-tiny-fab';\n   import 'react-tiny-fab/styles.css';\n"
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'example' } },
            'Example'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'Here is an example of how you would use the components:'
          ),
          o.a.createElement(
            m.Playground,
            {
              __position: 0,
              __codesandbox:
                'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdgADFXA8JYAEEpQGcx5DdE12k9OABHIQMBXtTVzUwuUFXNQMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsZm7Fh5z4gAWET2AANhEsT1jAUD4KIaBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmJC5lY9hoxg8gbCgdBI3YeROVYsQwrjGR2FRZiYG4YBjwYpjsXkXd62ASLoBi4IADJyvGRJ5koZoSui2LuGa-UwFCAK-1Qdp2AAfg2UrI2jBKrgasrUHkON91kMxPzMWENWOGAwDCKApiGxLkrrRhgrXOtkzwWSM02HYCW6LwbhNfoUkIPZmgmbo4HILo6GrQ710YeCPE4XQssYWz3DEABqKR_tQMQMKiNA73CCJUEYjK4CymCPElbYUiEdr0EcKBhSuXheHaABiGAAHZZPIVNyHx7r5AK9dkxQzrxmwAg-BAJCe3YfTTwmAp-DSvLMuAZHUfRtoMGx3H2GpwnU1kgBOAAOKpqbium9vrCxAfphtJEZtDCs17bUJZWgsFZ_gkLgfIUnMbmJxsed-fS2AkfYFGdjFzHJcraWCdlhXlY8VXacNzXWJ1qR9eoMOpE-wqo7mWtOV_EBcPISRVGwICsDIHRQP0BhCIWkMpVI00tUo1Bi4dbDJBd-AcEe62q8C9gkLvUKZg22Mto8GHTZqzL-H7i6gxAdicCnmYMPIKB_DgAA5H1h8EAgwAtC0EPEddgBmD4orGiatskUfYeTvy5qwIiS1QGj9U7tju-4JLe-TM_B_mNmP_Hnp5-t5ep42Yig3haIgwcJ7ACnjgGeYc94HwGnQY-e4f4X3BAFf-dhPownNnQdAdhS4EBwJuagroOJ1lRNEWIi1lqhFWmZSgI42LkM1kKfInUrjIxEBEIgVx-JLCuoQPhcVxKaxgKwfQfFhgSIEA5Cwvl0EWEobQUKMFGF0CuMtKAcBugKP8hYfQGRQrrRfgSWwMDhxwBwOI10zU2LtGkRkbqlUzFWPUagIal86wUgkcYhKpjeZWKHIwqxNicx2PlI42R7AXGBI-DjHRnjFF7HmOYNiJikpxJ0QQRiWRwopI0eMdEujvzJLnjZbo6T_GZMJE3CcuTaD5PcZo-IOi4qlP0aOTEsA_GJXXHE4JdxrESPCS1doc9YjbG6n1aMWSCBZBwO43qrj4kVPWlcOJ7ihrDXYKgOhUAvEWDwutFh9Y24RUPpGEaZIbIvDQlcbuGE2IDMsX5TW5yCnoVCnMrIbyznUBouQcgoVCHEMuXQD44sCDRnIB0zWEBmgwuBUlRSCVqKUD9CMVwAgPHkSlBaGIqBEgWmWl9agSQ0qhDmBqOwVLRxKRCCbcwP84Afj-UcicfRzCgvsOC1AOAogzBhUsGFeAlgQGqZtcODYoAQD_gvQBQtiggM3ghAA-mq4FAASYA7QIgzG6mgQcyy9WMO6nxdo8hijq2lRYYAoLykumvDAW80LIpLFOba-U6BoiuAJfAGI6B2hXGKOaNCFof4Wh1RAK1oivXymxRAP189AhQGDRsCxIScBmymAAH1zewYo-o6DQh_uwaN7BAaeVjTrTW7RE1-psD2Og6aACE7i41eugZFTNdxO3h3isg21xU8C9qsTmmJVU37xr-pJcwc8FUryyp0CA113ycHMN3PqK613mvlJakI_RG1cEwKgLK7bUk2vjXantgzx0syHV6kGc6w6a05I--sUhZVh05HCuKySZwxgSp62-NEYJsLudQcVuhLKuChgPOGgs7BPJWXe9l05OU4qleHRgdDa17FQPqQYMBLx6AEFlOJhiBAfs1tQIjeQYAABkJQSIo7UnxMAaNnMwYqrKyr17luAD82gizUkmvcXu8ZCTsiWutfhn18z_Woi4GzUl_B8MNyyhBzqXHX2ftlfKgBS7-AqrAR4DVVMQB6aNg_fDtHUD2FlTsNj5iIjdM43Z-smngCQ1QNDMe8N8qeYsApv1tBlM8H4L5iNCH1May9UIV2I9YsgGC4epNFoU1LjZrBHGVD5zsFvKEOL16LDzI8A0KMWA2b8RK_G6z4dgCxGoFxo2kgH4NeTHQsQQnanHPfVIbr-Gv0QD04NqAP6_nH2PlfG-MFPrIU7v4duTK4p-VTnZbYrg0hAWoHnXQYEDAQVOfwVAK9-B43zuUEE3gMgWn_OSJkIA438BkfkagF3pYgH4jgH7tXnvrH4OUJ6EAZidU-5bNKhEekPZ6ZgcklBEgFjyAUDD5oLRAmJFUW7AgLKA5AL5iHKgqtATx3WIHMBUmnvIBAeAn2QMma1ETgAeh5RSOAACsOAABMZPNaM_R9aFnbPOc87q9N1OWPqiQtQJAFIu3UD7YLuBEAHEQC0F9FkC7_AnoSloBaM0-LZgzH4PIBQtMgA',
              __code:
                "<h4>Check the bottom right of the screen</h4>\n<Fab icon={<span>+</span>} mainButtonStyles={{ backgroundColor: '#e74c3c' }}>\n  <Action text=\"Add Something\" style={{ backgroundColor: '#3498db' }}>\n    +\n  </Action>\n  <Action text=\"Assign Something\" style={{ backgroundColor: '#3498db' }}>\n    =\n  </Action>\n</Fab>",
              __scope: { props: t, Fab: h, Action: u },
            },
            o.a.createElement('h4', null, 'Check the bottom right of the screen'),
            o.a.createElement(
              h,
              {
                icon: o.a.createElement('span', null, '+'),
                mainButtonStyles: { backgroundColor: '#e74c3c' },
              },
              o.a.createElement(
                u,
                { text: 'Add Something', style: { backgroundColor: '#3498db' } },
                '+'
              ),
              o.a.createElement(
                u,
                { text: 'Assign Something', style: { backgroundColor: '#3498db' } },
                '='
              )
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'Here is an example of how you would use the components:'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'pre', components: n },
            o.a.createElement(
              r.MDXTag,
              {
                name: 'code',
                components: n,
                parentName: 'pre',
                props: { className: 'language-js', metaString: '' },
              },
              '// The Fab is the main button. Pass any component to the icon prop and choose \n// either click or hover for the event (default is hover)\n<Fab\n  mainButtonStyles={mainButtonStyles}\n  actionButtonStyles={actionButtonStyles}\n  position={position}\n  icon={<MdAdd />}\n  event={event}\n>\n  // The Action components are the "buttons" that appear when the Fab is open. You can use the out-of-the-box Action \n  // component or you can use a custom component of any type and style it any way that you\'d like. The "text" prop\n  // is the popup label that appears when the Action component is hovered.\n  <Action\n    text="Email"\n    onClick={handleEmailOnClick}\n  >\n  <Action\n      text="Help"\n      onClick={handleHelpOnClick}\n    >\n    <i className="fa fa-help" />\n  </Action>\n  // Using a custom component for this one. See another example in "example/src/index.js"\n  <SomeCustomComponent\n    text="Foobar!"\n    onClick={handleTheFooBarOnClick}\n  >\n      <i className="fa fa-foo-bar-fa-foo" />\n    </SomeCustomComponent>\n</Fab>\n'
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'components' } },
            'Components'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h3', components: n, props: { id: 'fab-' } },
            o.a.createElement(
              r.MDXTag,
              { name: 'inlineCode', components: n, parentName: 'h3' },
              '<Fab />'
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'This is the main component that controls the Floating Action Button.'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h4', components: n, props: { id: 'props' } },
            'Props'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'table', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'thead', components: n, parentName: 'table' },
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'thead' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Prop'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Type'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Default'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Required'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Description'
                )
              )
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'tbody', components: n, parentName: 'table' },
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'mainButtonStyles'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'React.CSSProperties object'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  '{}'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'false'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  "This object is passed to the main button's ",
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'style'
                  ),
                  ' prop so use React styles to style the button.'
                )
              ),
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'position'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'object'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    '{ bottom: 0, right: 0 }'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'false'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'Where do you want your FAB to be located? Use ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'top'
                  ),
                  ', ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'left'
                  ),
                  ', ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'bottom'
                  ),
                  ', ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'right'
                  ),
                  ' properties to declare where you want the FAB to be positioned.'
                )
              ),
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'icon'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'React Element/Component'
                ),
                o.a.createElement(r.MDXTag, {
                  name: 'td',
                  components: n,
                  parentName: 'tr',
                  props: { align: null },
                }),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'true'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'This element/component will be the used as the icon for the main button. This can be text, or a Font Awesome icon, or any other component.'
                )
              ),
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'event'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'string'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  "'hover'"
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'false'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'What type of event do you want to make the FAB menu active? This can be either ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'click'
                  ),
                  ' or ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'hover'
                  ),
                  '.'
                )
              ),
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'children'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'React Element/Component'
                ),
                o.a.createElement(r.MDXTag, {
                  name: 'td',
                  components: n,
                  parentName: 'tr',
                  props: { align: null },
                }),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'false'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'This is the children that will be mapped and rendered. This can be anything. There can be up to 6, but no more than 6. An ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'Action'
                  ),
                  ' component is provided out of the box.'
                )
              )
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'blockquote', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'p', components: n, parentName: 'blockquote' },
              'Based on the ',
              o.a.createElement(
                r.MDXTag,
                { name: 'inlineCode', components: n, parentName: 'p' },
                'position'
              ),
              ' prop, the FAB will figure out the direction of the ',
              o.a.createElement(
                r.MDXTag,
                { name: 'inlineCode', components: n, parentName: 'p' },
                '<Action />'
              ),
              ' ',
              o.a.createElement(
                r.MDXTag,
                { name: 'inlineCode', components: n, parentName: 'p' },
                'text'
              ),
              ' and also which way to\nexpand when hovered/clicked (up or down).'
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h3', components: n, props: { id: 'action-' } },
            o.a.createElement(
              r.MDXTag,
              { name: 'inlineCode', components: n, parentName: 'h3' },
              '<Action />'
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'This component represents the smaller buttons that appear when the main button is hovered/clicked. Now, you do not have\nto use this component. You can use your own custom component(s) and create something totally different than a Floating\nAction Button. For instance, you could create your own "Support Button" that when clicked, will display a chat box or\nsome type of form that submits a contact request.'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h4', components: n, props: { id: 'props-1' } },
            'Props'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'table', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'thead', components: n, parentName: 'table' },
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'thead' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Prop'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Type'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Default'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Required'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'th', components: n, parentName: 'tr', props: { align: null } },
                  'Description'
                )
              )
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'tbody', components: n, parentName: 'table' },
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'text'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'string'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  '""'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'false'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'This is the text that will be displayed when one of the actions is hovered.'
                )
              ),
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'children'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'React Element/Component'
                ),
                o.a.createElement(r.MDXTag, {
                  name: 'td',
                  components: n,
                  parentName: 'tr',
                  props: { align: null },
                }),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'false'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'This will be the icon/text for the action.'
                )
              ),
              o.a.createElement(
                r.MDXTag,
                { name: 'tr', components: n, parentName: 'tbody' },
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    '...props'
                  )
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'Anything'
                ),
                o.a.createElement(r.MDXTag, {
                  name: 'td',
                  components: n,
                  parentName: 'tr',
                  props: { align: null },
                }),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'false'
                ),
                o.a.createElement(
                  r.MDXTag,
                  { name: 'td', components: n, parentName: 'tr', props: { align: null } },
                  'Anything you can add to a React component, you can add here, e.g. (',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'onClick'
                  ),
                  ', ',
                  o.a.createElement(
                    r.MDXTag,
                    { name: 'inlineCode', components: n, parentName: 'td' },
                    'style'
                  ),
                  ', etc.'
                )
              )
            )
          ),
          o.a.createElement(r.MDXTag, { name: 'h2', components: n, props: { id: 'demo' } }, 'Demo'),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'Check out the index.js file in the example folder for an example of the traditional FAB and also a form pop-up that could be used to send contact information, or something else.'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'contributing' } },
            'Contributing'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'If you find a bug, submit an issue with enough information to reproduce the bug. If you have a fix, please do not hesitate to submit a PR. If you feel that the API needs to be modified, open an issue so that we can discuss it first.'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h3', components: n, props: { id: 'running-the-dev-environment' } },
            'Running the dev environment'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'ul', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ul' },
              'Clone the repo - ',
              o.a.createElement(
                r.MDXTag,
                { name: 'inlineCode', components: n, parentName: 'li' },
                'git clone https://github.com/dericgw/react-tiny-fab.git && cd react-tiny-fab'
              )
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ul' },
              'Install the dependencies - ',
              o.a.createElement(
                r.MDXTag,
                { name: 'inlineCode', components: n, parentName: 'li' },
                'npm i'
              )
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ul' },
              'Setup the example - ',
              o.a.createElement(
                r.MDXTag,
                { name: 'inlineCode', components: n, parentName: 'li' },
                'npm run setup-example'
              )
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ul' },
              'Start the dev environment (watches for changes and hot-reloads) - ',
              o.a.createElement(
                r.MDXTag,
                { name: 'inlineCode', components: n, parentName: 'li' },
                'npm run start'
              )
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'Once you get that going, you should be able to make changes and the page should refresh automatically when those changes are saved.\nTesting'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'This package is only one JS file and it is tested pretty good. Make sure that none of the tests are breaking if changes are made. Also, if you add new functionality and it warrants testing, please add tests. If you need help with this, I will gladly help.'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'issues' } },
            'Issues'
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'If you find an issue, head over to the Issues section and let me know about it. If you want to be super cool, you can submit a PR that fixes the issue.'
          )
        );
      };
    },
    './src/styles.scss': function(e, n, t) {},
  },
]);