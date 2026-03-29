import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BisCJTvH.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CzKuuLBj.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/maana/Desktop/person_web/","cacheDir":"file:///C:/Users/maana/Desktop/person_web/node_modules/.astro/","outDir":"file:///C:/Users/maana/Desktop/person_web/dist/","srcDir":"file:///C:/Users/maana/Desktop/person_web/src/","publicDir":"file:///C:/Users/maana/Desktop/person_web/public/","buildClientDir":"file:///C:/Users/maana/Desktop/person_web/dist/client/","buildServerDir":"file:///C:/Users/maana/Desktop/person_web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B4x2XQLp.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B4x2XQLp.css"}],"routeData":{"route":"/codex","isIndex":false,"type":"page","pattern":"^\\/codex\\/?$","segments":[[{"content":"codex","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/codex.astro","pathname":"/codex","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".dispatch-back{display:inline-block;font-family:Cinzel,serif;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:#8b6914;text-decoration:none;border-bottom:1px solid rgba(139,105,20,.35);padding-bottom:1px;margin-bottom:2.5rem;transition:color .2s ease,border-color .2s ease}.dispatch-back:hover{color:#b8922e;border-color:#b8922e}.dispatch-page{background:#faf3e4;padding:2.5rem 2rem 5rem;box-shadow:2px 4px 12px #1c120824,0 0 0 1px #8b691414;position:relative;clip-path:polygon(0% 0%,100% 0%,100% 96%,97% 98%,94% 96%,91% 99%,88% 97%,85% 99%,82% 97%,79% 98%,76% 96%,73% 98%,70% 96%,67% 99%,64% 96%,61% 98%,58% 96%,55% 99%,52% 97%,49% 99%,46% 96%,43% 98%,40% 96%,37% 99%,34% 97%,31% 99%,28% 96%,25% 98%,22% 96%,19% 99%,16% 96%,13% 99%,10% 96%,7% 98%,4% 96%,0% 98%)}.dispatch-meta{display:flex;align-items:center;gap:1rem;margin-bottom:.75rem}.dispatch-date{font-family:Cinzel,serif;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#7c6a4e;opacity:.55}.dispatch-status{font-family:Cinzel,serif;font-size:.5rem;letter-spacing:.18em;text-transform:uppercase;color:#6b1515;border:1px solid rgba(107,21,21,.4);border-radius:45% 55% 50% 50%/45% 45% 55% 55%;padding:1px 7px}.dispatch-title{font-family:Cinzel,serif;font-size:1.5rem;color:#1c1208;line-height:1.25;text-shadow:0 1px 0 rgba(245,236,215,.8);margin-bottom:0}@media(min-width:640px){.dispatch-title{font-size:1.9rem}}.dispatch-divider{display:flex;justify-content:center;margin:1.5rem 0}.dispatch-excerpt{font-family:Crimson Text,serif;font-style:italic;font-size:1.2rem;color:#4a3c2e;line-height:1.8}.dispatch-placeholder{position:relative;border:1px solid rgba(139,105,20,.25);background:#ead9b840;padding:1.75rem 1.5rem;box-shadow:inset 0 0 0 3px #f5ecd799;overflow:hidden}.dispatch-placeholder-text{font-family:Crimson Text,serif;font-style:italic;font-size:1rem;color:#7c6a4e;line-height:1.75}.dispatch-wax-stamp{position:absolute;top:1rem;right:1rem;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle,#8b3a3a,#6b1515 70%,#4a0f0f);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px #6b151559,inset 0 1px 3px #ffffff1a;opacity:.82}.dispatch-wax-stamp span{font-family:Cinzel,serif;font-size:.38rem;letter-spacing:.12em;text-transform:uppercase;color:#f5ecd7e6;text-align:center;line-height:1.4}.dispatch-wordcount{font-family:Cinzel,serif;font-size:.55rem;letter-spacing:.18em;text-transform:uppercase;color:#7c6a4e;opacity:.45;margin-top:1.5rem;text-align:right}\n"},{"type":"external","src":"/_astro/about.B4x2XQLp.css"}],"routeData":{"route":"/garden/[slug]","isIndex":false,"type":"page","pattern":"^\\/garden\\/([^/]+?)\\/?$","segments":[[{"content":"garden","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/garden/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/garden.CGibnDz8.css"},{"type":"external","src":"/_astro/about.B4x2XQLp.css"}],"routeData":{"route":"/garden","isIndex":false,"type":"page","pattern":"^\\/garden\\/?$","segments":[[{"content":"garden","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/garden.astro","pathname":"/garden","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B4x2XQLp.css"}],"routeData":{"route":"/now","isIndex":false,"type":"page","pattern":"^\\/now\\/?$","segments":[[{"content":"now","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/now.astro","pathname":"/now","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dp0NGQCA.css"},{"type":"external","src":"/_astro/about.B4x2XQLp.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://maananpurothi.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/maana/Desktop/person_web/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/maana/Desktop/person_web/src/pages/codex.astro",{"propagation":"none","containsHead":true}],["C:/Users/maana/Desktop/person_web/src/pages/garden.astro",{"propagation":"none","containsHead":true}],["C:/Users/maana/Desktop/person_web/src/pages/garden/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/maana/Desktop/person_web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/maana/Desktop/person_web/src/pages/now.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/codex@_@astro":"pages/codex.astro.mjs","\u0000@astro-page:src/pages/garden/[slug]@_@astro":"pages/garden/_slug_.astro.mjs","\u0000@astro-page:src/pages/garden@_@astro":"pages/garden.astro.mjs","\u0000@astro-page:src/pages/now@_@astro":"pages/now.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_9vnPTKEk.mjs","C:/Users/maana/Desktop/person_web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DHOewz25.mjs","@astrojs/react/client.js":"_astro/client.BwmHNfYO.js","C:/Users/maana/Desktop/person_web/src/pages/codex.astro?astro&type=script&index=0&lang.ts":"_astro/codex.astro_astro_type_script_index_0_lang.BzdgJCSH.js","C:/Users/maana/Desktop/person_web/src/pages/garden.astro?astro&type=script&index=0&lang.ts":"_astro/garden.astro_astro_type_script_index_0_lang.HmESGx2H.js","C:/Users/maana/Desktop/person_web/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B8jAsEV1.js","C:/Users/maana/Desktop/person_web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.Dc3h0P3c.js","C:/Users/maana/Desktop/person_web/src/components/MapView.astro?astro&type=script&index=0&lang.ts":"_astro/MapView.astro_astro_type_script_index_0_lang.CxcoJCkR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/maana/Desktop/person_web/src/pages/codex.astro?astro&type=script&index=0&lang.ts","const l=document.querySelectorAll(\".folder-tab\"),a=document.querySelectorAll(\".expedition-card\");l.forEach(t=>{t.addEventListener(\"click\",()=>{l.forEach(e=>{e.classList.remove(\"active\"),e.setAttribute(\"aria-selected\",\"false\")}),t.classList.add(\"active\"),t.setAttribute(\"aria-selected\",\"true\");const s=t.dataset.filter??\"All\";a.forEach(e=>{const c=e.dataset.categories??\"\";s===\"All\"||c.includes(s)?(e.style.display=\"\",e.style.opacity=\"1\"):e.style.display=\"none\"})})});"],["C:/Users/maana/Desktop/person_web/src/pages/garden.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".dispatch-btn\").forEach(t=>{t.addEventListener(\"click\",()=>{const e=t.closest(\".garden-note-wrapper\");if(!e)return;e.classList.add(\"is-expanded\"),t.setAttribute(\"aria-expanded\",\"true\");const s=e.querySelector(\".garden-expanded\");s&&s.setAttribute(\"aria-hidden\",\"false\")})});document.querySelectorAll(\".close-dispatch-btn\").forEach(t=>{t.addEventListener(\"click\",()=>{const e=t.closest(\".garden-note-wrapper\");if(!e)return;e.classList.remove(\"is-expanded\");const s=e.querySelector(\".dispatch-btn\");s&&s.setAttribute(\"aria-expanded\",\"false\");const a=e.querySelector(\".garden-expanded\");a&&a.setAttribute(\"aria-hidden\",\"true\")})});const i=document.querySelectorAll(\".filter-stamp\"),c=document.querySelectorAll(\".garden-note-wrapper\");let r=null;function n(t){c.forEach((e,s)=>{const a=(e.dataset.tags||\"\").split(\",\"),d=!t||a.includes(t);if(e.classList.remove(\"is-appearing\",\"is-filtered-out\"),d){const l=s*45;e.style.animationDelay=`${l}ms`,e.classList.add(\"is-appearing\"),e.addEventListener(\"animationend\",()=>{e.classList.remove(\"is-appearing\"),e.style.animationDelay=\"\"},{once:!0})}else e.classList.add(\"is-filtered-out\")})}i.forEach(t=>{t.addEventListener(\"click\",()=>{const e=t.dataset.tag;t.classList.remove(\"is-pressing\"),t.offsetWidth,t.classList.add(\"is-pressing\"),t.addEventListener(\"animationend\",()=>t.classList.remove(\"is-pressing\"),{once:!0}),r===e?(r=null,i.forEach(s=>{s.classList.remove(\"is-active\"),s.setAttribute(\"aria-pressed\",\"false\")}),n(null)):(r=e,i.forEach(s=>{const a=s.dataset.tag===e;s.classList.toggle(\"is-active\",a),s.setAttribute(\"aria-pressed\",a?\"true\":\"false\")}),n(e))})});"],["C:/Users/maana/Desktop/person_web/src/pages/index.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"view-toggle\");t&&t.addEventListener(\"click\",()=>{const e=(document.documentElement.getAttribute(\"data-homepage-view\")||\"map\")===\"map\"?\"simple\":\"map\";document.documentElement.setAttribute(\"data-homepage-view\",e),localStorage.setItem(\"homepage-view\",e),e===\"simple\"?(document.body.classList.remove(\"h-screen\",\"overflow-hidden\"),document.body.style.minHeight=\"100vh\"):(document.body.classList.add(\"h-screen\",\"overflow-hidden\"),document.body.style.minHeight=\"\")});"],["C:/Users/maana/Desktop/person_web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const o=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.add(\"revealed\"),o.unobserve(r.target))})},{threshold:.12,rootMargin:\"0px 0px -40px 0px\"});document.querySelectorAll(\".scroll-reveal\").forEach(e=>{o.observe(e)});"],["C:/Users/maana/Desktop/person_web/src/components/MapView.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{function e(s,o,a){const t=document.getElementById(s);if(!t||typeof t.getTotalLength!=\"function\")return;const n=t.getTotalLength();t.style.strokeDasharray=String(n),t.style.strokeDashoffset=String(n),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.style.transition=`stroke-dashoffset ${o} ease-in-out ${a}`,t.style.strokeDashoffset=\"0\"})})}e(\"route-draw\",\"2.5s\",\"0s\"),e(\"branch-portfolio\",\"1.2s\",\"2.8s\"),e(\"branch-lab\",\"1.2s\",\"2.8s\")});"]],"assets":["/_astro/about.B4x2XQLp.css","/_astro/garden.CGibnDz8.css","/_astro/index.Dp0NGQCA.css","/favicon.svg","/accents/dragon1.png","/accents/postalstamps.avif","/accents/seamonster1.png","/accents/seamonster3.png","/accents/seamonster4.png","/accents/ship1.png","/accents/vintageornamentaldividevector.jpg","/_astro/client.BwmHNfYO.js","/maps/fantasymap.jpg","/maps/fantasymap2.jpg","/maps/old_cool_map.jpg","/maps/vintagemapelements.jpg","/maps/vintagemapelements2.jpg","/maps/vintagemapelements4.jpg","/textures/parchment_texture1.jpg","/textures/parchment_texture2.jpg","/textures/ricepaper2.webp","/textures/so-white.png","/textures/textured_paper.png","/accents/nobg/dragon1-nobg.png","/accents/nobg/postalstamps-nobg.png","/accents/nobg/seamonster1-nobg.png","/accents/nobg/seamonster3-nobg.png","/accents/nobg/seamonster4-nobg.png","/accents/nobg/ship1-nobg.png","/accents/nobg/vintageornamentaldividevector-nobg.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"dbtKgRkhSIlFMhIadVylJQtn0CLqm4l+PqjWAFWrB0Y="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
