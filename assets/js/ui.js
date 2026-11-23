/* Wasl shared UI primitives. No real authentication or clinical functionality. */
(function(){
const D=window.WASL_DATA;
const icons={
 'arrow-right':'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 'arrow-left':'<path d="M19 12H5m6-6-6 6 6 6"/>',
 'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
 'chevron-right':'<path d="m9 18 6-6-6-6"/>',
 'chevron-down':'<path d="m6 9 6 6 6-6"/>',
 'check':'<path d="m20 6-11 11-5-5"/>',
 'check-circle':'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
 'plus':'<path d="M12 5v14M5 12h14"/>',
 'x':'<path d="M18 6 6 18M6 6l12 12"/>',
 'menu':'<path d="M4 7h16M4 12h16M4 17h16"/>',
 'search':'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
 'home':'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM9 21v-8h6v8"/>',
 'heart':'<path d="M20.8 4.6c-2.3-2.4-6-2.4-8.3 0L12 5l-.5-.4c-2.3-2.4-6-2.4-8.3 0-2.4 2.3-2.4 6 0 8.3L12 21l8.8-8.1c2.4-2.3 2.4-6 0-8.3Z"/>',
 'shield-heart':'<path d="m12 2 9 4v6c0 6-4 9-9 10-5-1-9-4-9-10V6z"/><path d="M12 16s-4-2.5-4-5a2.3 2.3 0 0 1 4-1.4 2.3 2.3 0 0 1 4 1.4c0 2.5-4 5-4 5Z"/>',
 'shield':'<path d="m12 2 9 4v6c0 6-4 9-9 10-5-1-9-4-9-10V6z"/><path d="m9 12 2 2 4-4"/>',
 'stethoscope':'<path d="M6 3v7a6 6 0 0 0 12 0V3M3 3h6M15 3h6M18 13a5 5 0 0 0 0 10h1a4 4 0 0 0 4-4v-3"/>',
 'calendar':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
 'clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
 'users':'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 5"/>',
 'user':'<circle cx="12" cy="7" r="4"/><path d="M4 22v-2a8 8 0 0 1 16 0v2"/>',
 'bell':'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 10h18c0-2-3-3-3-10M10 22h4"/>',
 'book-open':'<path d="M12 7c-3-3-6-3-10-3v15c4 0 7 0 10 3 3-3 6-3 10-3V4c-4 0-7 0-10 3Zm0 0v15"/>',
 'message-circle':'<path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z"/>',
 'mail':'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
 'compass':'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5Z"/>',
 'settings':'<path d="M10 2h4l.5 2.5 2.1 1.2 2.4-1 2 3.5-1.9 1.7v2.3l1.9 1.7-2 3.5-2.4-1-2.1 1.2L14 22h-4l-.5-2.5-2.1-1.2-2.4 1-2-3.5 1.9-1.7v-2.3L3 10.1l2-3.5 2.4 1 2.1-1.2Z"/><circle cx="12" cy="12" r="3"/>',
 'layers':'<path d="m12 2 10 6-10 6L2 8l10-6Zm-10 10 10 6 10-6M2 16l10 6 10-6"/>',
 'trending-up':'<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
 'trending-down':'<path d="m3 7 6 6 4-4 8 8M15 17h6v-6"/>',
 'bar-chart':'<path d="M5 20v-7m7 7V5m7 15v-11"/>',
 'pie-chart':'<path d="M12 3a9 9 0 1 0 9 9h-9Zm3-2v8h8a8 8 0 0 0-8-8Z"/>',
 'code':'<path d="m8 4-7 8 7 8m8-16 7 8-7 8m-3-20-4 24"/>',
 'server':'<rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.1M7 17h.1"/>',
 'database':'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0"/>',
 'cloud':'<path d="M20 18H6a4 4 0 0 1-.5-8A7 7 0 0 1 19 9a4.5 4.5 0 0 1 1 9Z"/>',
 'activity':'<path d="M2 12h4l3-8 6 16 3-8h4"/>',
 'lock':'<rect x="4" y="10" width="16" height="12" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/>',
 'alert-triangle':'<path d="m10.3 3.6-8.2 14a2 2 0 0 0 1.8 3h16.2a2 2 0 0 0 1.8-3l-8.2-14a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 4h.01"/>',
 'info':'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
 'help-circle':'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4m0 4h.01"/>',
 'credit-card':'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
 'receipt':'<path d="M4 3h16v18l-4-2-4 2-4-2-4 2V3Zm4 5h8M8 12h8"/>',
 'sun':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 'leaf':'<path d="M20 4c-10 0-17 5-17 12a5 5 0 0 0 5 5c7 0 12-7 12-17ZM6 18c2-4 6-8 11-11"/>',
 'map-pin':'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
 'filter':'<path d="M4 5h16l-6 7v7l-4 2v-9Z"/>',
 'download':'<path d="M12 3v13m-5-5 5 5 5-5M4 18v3h16v-3"/>',
 'external-link':'<path d="M14 3h7v7m0-7-10 10M21 14v6H4V3h6"/>',
 'clipboard':'<rect x="5" y="5" width="14" height="17" rx="2"/><path d="M9 5V3h6v2M9 12h6m-6 4h6"/>',
 'briefcase':'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>',
 'target':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 'globe':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 6-5 12 0 18 5-6 5-12 0-18"/>',
 'sparkles':'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 13 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z"/>',
 'log-out':'<path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5M16 7l5 5-5 5m5-5H9"/>',
 'refresh':'<path d="M20 7v5h-5M4 17v-5h5M5.6 9a8 8 0 0 1 13.8-2L20 12M4 12l.6 5a8 8 0 0 0 13.8-2"/>'
};
const state={groupSearch:'',groupCategory:'All categories',groupLanguage:'Any language',groupDay:'Any day',readNotifications:[],mood:null,selectedDate:24,selectedPlan:'circle',authRole:'patient',faqOpen:-1,signupStep:1,signupTopics:[],globalSearch:'',requests:[],demoAttendance:[],checkedTasks:{},noticeOpen:false,sidebarOpen:false};
function icon(n,extra=''){return `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true">${icons[n]||icons['layers']}</svg>`}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function btn(label,action,kind='btn',extra=''){return `<button class="${kind}" type="button" data-action="${esc(action)}" ${extra}>${label}</button>`}
function link(label,url,kind='btn'){return `<a href="${url}" class="${kind}">${label}</a>`}
function badge(s,tone=''){return `<span class="badge ${tone}">${esc(s)}</span>`}
function brand(){return `<a class="brand" href="#/" aria-label="Wasl homepage"><img src="assets/images/wasl-mark.svg" alt=""><span>wasl <span class="arabic" lang="ar">وصل</span><small>Support, in good company.</small></span></a>`}
function head(title,subtitle,action=''){return `<div class="app-page-head"><div><h1>${title}</h1><p>${subtitle}</p></div>${action}</div>`}
function panel(title,content,span=6,action='',desc=''){return `<section class="panel span-${span}"><div class="panel-head"><div><h3>${title}</h3>${desc?`<p>${desc}</p>`:''}</div>${action}</div>${content}</section>`}
function stat(label,value,delta='',caution=false){return `<div class="stat-card"><div class="stat-label">${label}</div><strong>${value}</strong>${delta?`<div class="delta ${caution?'caution':''}">${delta}</div>`:''}</div>`}
function stats(arr){return `<div class="stats-grid">${arr.map(a=>stat(...a)).join('')}</div>`}
function formatEGP(v){return 'EGP '+Number(v).toLocaleString('en-EG')}
function cardImage(src,alt=''){return `<img loading="lazy" src="assets/images/${src}" alt="${esc(alt)}">`}
function groupCard(g){return `<article class="group-card hover-card"><img class="group-image" src="assets/images/${g.image}" alt="Decorative tranquil botanical illustration"><div class="group-body"><div class="row-between">${badge(g.level,g.level==='Peer support'?'lavender':'')}<span class="tiny muted">${g.language}</span></div><h3>${esc(g.name)}</h3><p>${esc(g.subtitle)}</p><div class="group-meta"><span>${icon('calendar','icon-sm')}${g.day}</span><span>${icon('clock','icon-sm')}${g.time}</span></div><div class="group-bottom"><div><strong>${formatEGP(g.price)}</strong><div class="tiny muted">per session · demo</div></div>${btn('Explore '+icon('arrow-right','icon-sm'),`group:${g.id}`,'btn btn-sm btn-outline')}</div></div></article>`}
function resourceCard(r){return `<article class="card hover-card resource-card"><div class="circle-icon ${r.tone}">${icon(r.icon)}</div><div class="row-between"><span class="caption">${r.category}</span><span class="tiny muted">${r.time}</span></div><h3>${r.title}</h3><p>${r.summary}</p>${btn('Read preview '+icon('arrow-right','icon-sm'),`resource:${r.id}`,'btn btn-ghost btn-sm')}</article>`}
function table(headers,rows){return `<div class="table-scroll"><table class="data-table"><thead><tr>${headers.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function listRows(items){return `<div class="list-rows">${items.map(i=>`<div class="list-row">${i.icon?`<div class="circle-icon ${i.tone||''}" style="width:40px;height:40px;border-radius:12px">${icon(i.icon)}</div>`:i.initials?`<span class="avatar ${i.tone||''}">${i.initials}</span>`:'<span class="mini-dot"></span>'}<div style="min-width:0;flex:1"><h4>${i.title}</h4><p>${i.description||''}</p></div>${i.right?`<div class="right">${i.right}</div>`:''}</div>`).join('')}</div>`}
function progress(label,value,right='',tone=''){return `<div class="meter-row"><div class="row-between"><span>${label}</span><strong>${right||value+'%'}</strong></div><div class="progress ${tone}"><span style="width:${Math.min(100,Math.max(0,value))}%"></span></div></div>`}
function lineLegend(items){return `<div class="chart-legend">${items.map(([n,alt])=>`<span><i class="legend-swatch ${alt?'alt':''}"></i>${n}</span>`).join('')}</div>`}
function chart(data,key='revenue',other=''){const max=Math.max(1,...data.map(o=>Math.max(o[key]||0,other?o[other]||0:0)))*1.1;return `<div class="chart-box" aria-label="Illustrative monthly chart"><div class="chart-grid"></div>${data.map(x=>`<div class="bar-col"><div class="row" style="gap:3px;width:100%;height:100%;align-items:flex-end;justify-content:center"><div class="bar" style="height:${x[key]/max*100}%"></div>${other?`<div class="bar alt" style="height:${x[other]/max*100}%"></div>`:''}</div><label>${x.month}</label></div>`).join('')}</div>${lineLegend([[key==='revenue'?'Revenue':key,false],...(other?[[other,true]]:[])])}`}
function demoTag(){return `<span class="demo-pill">${icon('info','icon-sm')} Fictional demo data</span>`}
function demoNotice(){return `<div class="disclaimer">${icon('info','icon-sm')} <strong>Static demonstration only.</strong> All profiles, clinical information, professional credentials, schedules and metrics are fictional. No care, account, session, payment or secure message is created.</div>`}
function toast(message){const el=document.getElementById('toast-region');const div=document.createElement('div');div.className='toast';div.textContent=message;el.appendChild(div);setTimeout(()=>div.remove(),4600)}
function openModal(title,body,footer=''){const box=document.getElementById('wasl-dialog');document.getElementById('modal-content').innerHTML=`<div class="modal-inner"><div class="modal-head"><h2 id="modal-title">${title}</h2><button class="btn-icon" type="button" data-action="close-modal" aria-label="Close dialog">${icon('x')}</button></div><div class="modal-content">${body}</div>${footer?`<div class="modal-actions">${footer}</div>`:''}</div>`;if(!box.open)box.showModal()}
function closeModal(){const el=document.getElementById('wasl-dialog');if(el.open)el.close()}
function days(){return ['Su','Mo','Tu','We','Th','Fr','Sa']}
function calendar(){let dates=Array.from({length:30},(_,i)=>i+1);return `<div class="calendar-mini">${days().map(s=>`<span>${s}</span>`).join('')}${Array.from({length:0},()=>'<span></span>').join('')}${dates.map(d=>`<button type="button" aria-label="November ${d}" class="${d===state.selectedDate?'selected':''}" data-action="date:${d}">${d}</button>`).join('')}</div><p class="small muted" style="margin:13px 0 0">Selected: ${state.selectedDate} November 2026 · example calendar</p>`}
window.WASL_UI={D,state,icon,esc,btn,link,badge,brand,head,panel,stat,stats,formatEGP,cardImage,groupCard,resourceCard,table,listRows,progress,chart,demoTag,demoNotice,toast,openModal,closeModal,calendar};
})();
