import { english } from './translations.js';
const supported = value => value === 'vi' || value === 'en';
const query = new URLSearchParams(location.search).get('lang');
let saved; try { saved = localStorage.getItem('muse-language'); } catch { /* Storage may be disabled. */ }
export let language = supported(query) ? query : supported(saved) ? saved : (navigator.languages?.[0] || navigator.language || 'vi').toLowerCase().startsWith('vi') ? 'vi' : 'en';
export const t = (vi, en = english[vi]) => language === 'en' ? en ?? vi : vi;
export const money = (value, currency = language === 'en' ? 'USD' : 'VND') => currency === 'USD' ? '$' + value.toLocaleString('en-US') + ' USD' : value.toLocaleString('vi-VN') + 'đ';
const originals = new WeakMap();
const attributes = new WeakMap();
function translate() {
 document.documentElement.lang = language;
 const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
 while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement?.closest('script,style,[data-language-control],pre,input,textarea')) continue;
  const raw = originals.get(node) ?? node.nodeValue;
  originals.set(node, raw);
  const key = raw.trim();
  node.nodeValue = raw.replace(key, t(key));
 }
 for (const element of document.querySelectorAll('[aria-label],[alt],[title],meta[name="description"]')) {
  let initial = attributes.get(element);
  if (!initial) { initial = {}; for (const name of ['aria-label','alt','title','content']) if (element.hasAttribute(name)) initial[name] = element.getAttribute(name); attributes.set(element, initial); }
  for (const [name, value] of Object.entries(initial)) element.setAttribute(name,t(value));
 }
 for (const button of document.querySelectorAll('[data-language]')) button.setAttribute('aria-pressed',String(button.dataset.language === language));
 // Explicit URL language survives navigation even when browser storage is disabled.
 for (const link of document.querySelectorAll('a[href]')) {
  const url = new URL(link.getAttribute('href'), location.href);
  if (url.origin === location.origin && /\.html$/.test(url.pathname)) { url.searchParams.set('lang',language); link.setAttribute('href', url.pathname.split('/').pop()+url.search+url.hash); }
 }
}
export function setLanguage(value) {
 if (!supported(value)) return;
 language = value;
 try { localStorage.setItem('muse-language',value); } catch { /* Still works for this visit. */ }
 const url = new URL(location.href); url.searchParams.set('lang',value);
 try { history.replaceState(null,'',url); } catch { /* Static file previews. */ }
 translate(); document.dispatchEvent(new Event('languagechange'));
}
const control = document.createElement('div'); control.className='language-switch'; control.dataset.languageControl=''; control.setAttribute('role','group');control.setAttribute('aria-label','Language / Ngôn ngữ');
for (const [value,label] of [['vi','VI'],['en','EN']]) {const button=document.createElement('button');button.type='button';button.dataset.language=value;button.textContent=label;button.setAttribute('aria-label',value==='vi'?'Tiếng Việt':'English');button.addEventListener('click',()=>setLanguage(value));control.append(button);}
document.querySelector('header.nav')?.append(control);
translate();
