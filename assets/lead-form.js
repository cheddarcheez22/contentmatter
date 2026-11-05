/* ContentMatter lead form: embeds the Airtable "Website Leads" form with a tracked "CTA Source".
 *
 * Reusable markup (any page):
 *   <iframe class="lead-frame" data-lead-form data-source="Blog" title="..." loading="lazy"></iframe>
 * On /contact the source comes from the page URL instead:
 *   <iframe class="lead-frame" data-lead-form data-source-from-url ...></iframe>   (/contact?source=Footer)
 * Pages may also ship a static src (works without JavaScript); this script leaves a static src alone.
 *
 * The form share URL is public. Do not add Airtable API keys or tokens to this file.
 */
(function () {
  var FORM_PATH = 'app7AlitwP4HVxVhx/pageQiYehskUypweJ/form';
  var FORM_URL = 'https://airtable.com/' + FORM_PATH;          // full page, used for "open in new tab"
  var EMBED_URL = 'https://airtable.com/embed/' + FORM_PATH;   // iframe-friendly version
  var SOURCE_FIELD = 'CTA Source';
  var DEFAULT_SOURCE = 'Contact Page';
  var SOURCES = ['Homepage Hero', 'Header Button', 'Services Page', 'Blog', 'Footer', 'Contact Page', 'Newsletter', 'Other'];

  // Site form inputs that /contact forwards to the Airtable form as prefilled answers.
  // Keys = input names used on the site, values = Airtable field names (must match the form exactly).
  // Airtable ignores names it does not recognise, so a mismatch only means that answer is not prefilled.
  var PREFILL_FIELDS = { name: 'Name', email: 'Email', url: 'Website', website: 'Website' };

  function cleanSource(value) {
    var v = String(value || '').trim().toLowerCase();
    for (var i = 0; i < SOURCES.length; i++) if (SOURCES[i].toLowerCase() === v) return SOURCES[i];
    return null;
  }

  function buildUrl(base, source, extras) {
    var parts = [
      'prefill_' + encodeURIComponent(SOURCE_FIELD) + '=' + encodeURIComponent(source),
      'hide_' + encodeURIComponent(SOURCE_FIELD) + '=true'
    ];
    Object.keys(extras || {}).forEach(function (field) {
      parts.push('prefill_' + encodeURIComponent(field) + '=' + encodeURIComponent(extras[field]));
    });
    return base + '?' + parts.join('&');
  }

  function fromPageUrl() {
    var params = new URLSearchParams(window.location.search);
    var extras = {};
    Object.keys(PREFILL_FIELDS).forEach(function (key) {
      var val = (params.get(key) || '').trim();
      if (val) extras[PREFILL_FIELDS[key]] = val.slice(0, 500);
    });
    return { source: cleanSource(params.get('source')) || DEFAULT_SOURCE, extras: extras };
  }

  window.ContentMatterLeadForm = { buildUrl: buildUrl, FORM_URL: FORM_URL, EMBED_URL: EMBED_URL, SOURCES: SOURCES };

  document.querySelectorAll('iframe[data-lead-form]').forEach(function (frame) {
    if (frame.getAttribute('src')) return;
    var cfg = frame.hasAttribute('data-source-from-url')
      ? fromPageUrl()
      : { source: cleanSource(frame.getAttribute('data-source')) || 'Other', extras: {} };
    frame.src = buildUrl(EMBED_URL, cfg.source, cfg.extras);
    var wrap = frame.closest('.lead-embed');
    var fallbacks = (wrap || frame).querySelectorAll('a[data-lead-fallback]');
    fallbacks.forEach(function (a) { a.href = buildUrl(FORM_URL, cfg.source, cfg.extras); });
  });
})();
