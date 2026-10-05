import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
const npm=process.platform==='win32'?'npm.cmd':'npm';
function run(bin,args){const r=spawnSync(bin,args,{stdio:'inherit',env:process.env,shell:process.platform==='win32'&&bin.endsWith('.cmd')});if(r.error)throw r.error;if(r.status!==0)process.exit(r.status||1);}
if(Number(process.versions.node.split('.')[0])<22)throw new Error('Gather requires Node.js 22.13 or later.');
run(npm,['run','build']);
const config=JSON.parse(readFileSync('dist/server/wrangler.json','utf8'));
config.d1_databases=config.d1_databases.map(d=>({...d,migrations_dir:'../../drizzle'}));
writeFileSync('dist/server/wrangler.json',JSON.stringify(config,null,2)+'\n');
run(process.execPath,['--import','./scripts/sites-env.mjs','./node_modules/wrangler/bin/wrangler.js','d1','migrations','apply','DB','--local','--config','dist/server/wrangler.json','--persist-to','.wrangler/state']);
console.log('\nGather is ready. Run npm run dev, then open the Local URL shown in your terminal.');
