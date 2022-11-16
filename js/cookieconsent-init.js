// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
  current_lang: 'en',
  autoclear_cookies: true,                   // default: false
  page_scripts: true,                        // default: false

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // auto_language: '',                      // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  // hide_from_bots: false,                  // default: false
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0
  languages: {
    'en': {
      consent_modal: {
        title: 'We use cookies!',
        description: 'We respect your privacy.</br>We use cookies to operate this website, improve usability, personalize your experience, and improve our marketing. Your privacy is important to us, and we will never sell your data.',
        primary_btn: {
          text: 'Accept all',
          role: 'accept_all'              // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Reject all',
          role: 'accept_necessary'        // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        accept_all_btn: 'Accept all',
        reject_all_btn: 'Reject all',
        close_btn_label: 'Close',
        cookie_table_headers: [],
        blocks: []
      }
    }
  }
});