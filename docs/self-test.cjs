const fs=require('fs');const vm=require('vm');const path=require('path');const root=path.resolve(__dirname,'..');const ctx={console,window:{},setTimeout};vm.createContext(ctx);
for(const f of ['data','ui','pages','dashboards'])vm.runInContext(fs.readFileSync(path.join(root,'assets/js',f+'.js'),'utf8'),ctx,{filename:f+'.js'});
const U=ctx.window.WASL_UI,P=ctx.window.WASL_PAGES,B=ctx.window.WASL_DASHBOARDS;
let count=0;
for(const r of ['/','/about','/groups','/how-it-works','/professionals','/pricing','/resources','/faq','/contact','/login','/signup']){
 const html=P.publicPage(r);if(!html||html.length<500||!html.includes('wasl'))throw new Error('Bad public route '+r);count++;
}
for(const [role,items] of Object.entries(B.nav)){for(const [view] of items){const html=B.dashboard(role,view);if(html.length<700||!html.includes('app-shell'))throw new Error('Bad dashboard '+role+'/'+view);count++;}}
if(U.D.groups.length!==8)throw new Error('Wrong groups');
console.log(`PASS: ${count} route renderers, ${U.D.groups.length} fictional groups, ${U.D.resources.length} resource previews`);
