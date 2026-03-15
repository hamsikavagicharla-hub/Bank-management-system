/* ---------- SWITCH TABLE ---------- */

function switchTable(table,event){

document.querySelectorAll('.sidebar-item').forEach(item=>{
item.classList.remove('active')
})

if(event){
event.currentTarget.classList.add('active')
}

document.querySelectorAll('.view-section').forEach(section=>{
section.classList.remove('active')
})

const section=document.getElementById(table==='analytics'?'queries':table)

if(section){
section.classList.add('active')
}

loadTable(table)

}

/* ---------- LOAD TABLE CONTROLLER ---------- */

function loadTable(table){

switch(table){

case 'dashboard':
loadDashboard()
break

case 'branch':
loadBranches()
break

case 'department':
loadDepartments()
break

case 'employee':
loadEmployees()
break

case 'customer':
loadCustomers()
break

case 'account':
loadAccounts()
break

case 'card':
loadCards()
break

case 'transaction':
loadTransactions()
break

case 'loan':
loadLoans()
break

case 'analytics':
loadAnalytics()
break

}

}

/* ---------- DASHBOARD ---------- */

function loadDashboard(){

document.getElementById('statCustomers').textContent=db.customers.length
document.getElementById('statAccounts').textContent=db.accounts.length
document.getElementById('statBranches').textContent=db.branches.length
document.getElementById('statCards').textContent=db.cards.filter(c=>c.status==="Active").length
document.getElementById('statLoans').textContent=db.loans.filter(l=>l.status==="Active" || l.status==="Disbursed").length
document.getElementById('statTransactions').textContent=db.transactions.length

const tbody=document.getElementById('recentTransactions')
if(!tbody) return

tbody.innerHTML=''

db.transactions.slice(-5).reverse().forEach(t=>{

const account=db.accounts.find(a=>a.id===t.account_id)

const row=`

<tr>
<td>${t.date}</td>
<td>${account.number}</td>
<td><span class="badge">${t.type}</span></td>
<td>$${t.amount.toLocaleString()}</td>
<td>${t.reference}</td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- BRANCH TABLE ---------- */

function loadBranches(){

const tbody=document.getElementById('branchTable')
if(!tbody) return

tbody.innerHTML=''

db.branches.forEach(b=>{

const row=`

<tr>
<td>${b.id}</td>
<td>${b.name}</td>
<td>${b.code}</td>
<td>${b.city}</td>
<td>${b.state}</td>
<td>${b.phone}</td>
<td><span class="badge active">${b.status}</span></td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- DEPARTMENTS ---------- */

function loadDepartments(){

const tbody=document.getElementById('departmentTable')
if(!tbody) return

tbody.innerHTML=''

db.departments.forEach(d=>{

const row=`

<tr>
<td>${d.id}</td>
<td>${d.name}</td>
<td>${d.description}</td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- EMPLOYEES ---------- */

function loadEmployees(){

const tbody=document.getElementById('employeeTable')
if(!tbody) return

tbody.innerHTML=''

db.employees.forEach(e=>{

const dept=db.departments.find(d=>d.id===e.dept_id)

const row=`

<tr>
<td>${e.id}</td>
<td>${e.name}</td>
<td>${e.code}</td>
<td>${e.email}</td>
<td>${e.designation}</td>
<td>${dept ? dept.name : ''}</td>
<td>$${e.salary.toLocaleString()}</td>
<td><span class="badge active">${e.status}</span></td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- CUSTOMERS ---------- */

function loadCustomers(){

const tbody=document.getElementById('customerTable')
if(!tbody) return

tbody.innerHTML=''

db.customers.forEach(c=>{

const row=`

<tr>
<td>${c.id}</td>
<td>${c.first_name} ${c.last_name}</td>
<td>${c.email}</td>
<td>${c.phone}</td>
<td>${c.city}</td>
<td><span class="badge ${c.status==='Active'?'active':'inactive'}">${c.status}</span></td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- ACCOUNTS ---------- */

function loadAccounts(){

const tbody=document.getElementById('accountTable')
if(!tbody) return

tbody.innerHTML=''

db.accounts.forEach(a=>{

const customer=db.customers.find(c=>c.id===a.customer_id)

const row=`

<tr>
<td>${a.id}</td>
<td>${a.number}</td>
<td>${customer.first_name} ${customer.last_name}</td>
<td>${a.type}</td>
<td>$${a.balance.toLocaleString()}</td>
<td>${a.interest_rate}%</td>
<td><span class="badge ${a.status==='Active'?'active':'inactive'}">${a.status}</span></td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- CARDS ---------- */

function loadCards(){

const tbody=document.getElementById('cardTable')
if(!tbody) return

tbody.innerHTML=''

db.cards.forEach(c=>{

const row=`

<tr>
<td>${c.id}</td>
<td>${c.number}</td>
<td>${c.type}</td>
<td>${c.cardholder}</td>
<td>${c.expiry}</td>
<td>$${c.limit.toLocaleString()}</td>
<td><span class="badge ${c.status==='Active'?'active':'inactive'}">${c.status}</span></td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- TRANSACTIONS ---------- */

function loadTransactions(){

const tbody=document.getElementById('transactionTable')
if(!tbody) return

tbody.innerHTML=''

db.transactions.forEach(t=>{

const account=db.accounts.find(a=>a.id===t.account_id)

const row=`

<tr>
<td>${t.id}</td>
<td>${account.number}</td>
<td><span class="badge">${t.type}</span></td>
<td>$${t.amount.toLocaleString()}</td>
<td>${t.date}</td>
<td>${t.reference}</td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- LOANS ---------- */

function loadLoans(){

const tbody=document.getElementById('loanTable')
if(!tbody) return

tbody.innerHTML=''

db.loans.forEach(l=>{

const customer=db.customers.find(c=>c.id===l.customer_id)

const row=`

<tr>
<td>${l.id}</td>
<td>${l.number}</td>
<td>${customer.first_name} ${customer.last_name}</td>
<td>${l.type}</td>
<td>$${l.principal.toLocaleString()}</td>
<td>$${l.balance.toLocaleString()}</td>
<td><span class="badge ${l.status==='Active'||l.status==='Disbursed'?'active':'inactive'}">${l.status}</span></td>
</tr>
`

tbody.innerHTML+=row

})

}

/* ---------- ANALYTICS ---------- */

function loadAnalytics(){

displayQueries(queries)

setupSearchListener()

}

/* ---------- QUERY SEARCH ---------- */

function setupSearchListener(){

const searchInput=document.getElementById('querySearch')

if(!searchInput) return

searchInput.addEventListener('input',e=>{

const term=e.target.value.toLowerCase()

const filtered=queries.filter(q=>
q.title.toLowerCase().includes(term) ||
q.category.toLowerCase().includes(term)
)

displayQueries(filtered)

})

}

/* ---------- DISPLAY QUERY LIST ---------- */

function displayQueries(list){

const container=document.getElementById('queryList')

if(!container) return

container.innerHTML=''

list.forEach(query=>{

const card=document.createElement('div')

card.className='query-card'

card.innerHTML=`

<div style="display:flex;justify-content:space-between;">
<div class="query-card-title">${query.title}</div>
<span class="query-card-category">${query.category}</span>
</div>
<small>Query #${query.id}</small>
`

card.onclick=()=>executeQuery(query)

container.appendChild(card)

})

}
/* ---------- EXECUTE QUERY ---------- */

function executeQuery(query){

const resultsContainer = document.getElementById('queryResults')

resultsContainer.innerHTML = `

<div class="query-card">
<h3>${query.title}</h3>
<div class="query-card-sql">${query.sql}</div>
<div id="resultTable"></div>
</div>
`

const results = getQueryResults(query)

renderTableResults(results, document.getElementById('resultTable'))

}


/* ---------- EXECUTE QUERY ---------- */

function getQueryResults(query){

let sql = query.sql.toLowerCase().trim()

/* ---------- TABLE ---------- */

let tableMatch = sql.match(/from\s+(\w+)/)

if(!tableMatch) return []

let table = tableMatch[1]

let data = [...db[table]]

if(!data) return []

/* ---------- WHERE ---------- */

/* ---------- WHERE ---------- */

if(sql.includes("where")){

/* LIKE condition */

let likeMatch = sql.match(/where\s+(\w+)\s+like\s+"(\w+)%"/)

if(likeMatch){

let column = likeMatch[1]

let prefix = likeMatch[2].toLowerCase()

data = data.filter(row =>
String(row[column]).toLowerCase().startsWith(prefix)
)

}

/* EQUAL condition */

else{

let whereMatch = sql.match(/where\s+(\w+)\s*=\s*"?([\w\s]+)"?/)

if(whereMatch){

let column = whereMatch[1]

let value = whereMatch[2].toLowerCase()

data = data.filter(row =>
String(row[column]).toLowerCase() === value
)

}

}

}


/* ---------- COUNT ---------- */

if(sql.includes("count(") && !sql.includes("group by")){

return [{
count:data.length
}]

}

/* ---------- SUM ---------- */

if(sql.includes("sum(") && !sql.includes("group by")){

let sumMatch = sql.match(/sum((\w+))/)

if(sumMatch){

let column = sumMatch[1]

let total = data.reduce((sum,row)=>sum + Number(row[column] || 0),0)

return [{
sum:total
}]

}

}

/* ---------- AVG ---------- */

if(sql.includes("avg(") && !sql.includes("group by")){

let avgMatch = sql.match(/avg((\w+))/)

if(avgMatch){

let column = avgMatch[1]

let total = data.reduce((sum,row)=>sum + Number(row[column] || 0),0)

let avg = total / data.length

return [{
avg:Number(avg.toFixed(2))
}]

}

}

/* ---------- GROUP BY ---------- */

if(sql.includes("group by")){

let groupMatch = sql.match(/group by\s+(\w+)/)

if(groupMatch){

let column = groupMatch[1]

let groups = {}

data.forEach(row=>{

let key = row[column]

if(!groups[key]) groups[key] = []

groups[key].push(row)

})

/* COUNT GROUP */

if(sql.includes("count(")){

data = Object.entries(groups).map(([key,rows])=>({
[column]:key,
count:rows.length
}))

}

/* SUM GROUP */

else if(sql.includes("sum(")){

let sumMatch = sql.match(/sum((\w+))/)

let sumColumn = sumMatch[1]

data = Object.entries(groups).map(([key,rows])=>({

[column]: key,

sum:rows.reduce((s,r)=>s + Number(r[sumColumn] || 0),0)

}))

}

/* AVG GROUP */

else if(sql.includes("avg(")){

let avgMatch = sql.match(/avg((\w+))/)

let avgColumn = avgMatch[1]

data = Object.entries(groups).map(([key,rows])=>({

[column]: key,

avg:Number(
(rows.reduce((s,r)=>s + Number(r[avgColumn] || 0),0) / rows.length).toFixed(2)
)

}))

}

}

}

/* ---------- SELECT COLUMNS ---------- */

let selectMatch = sql.match(/select\s+(.*?)\s+from/)

if(selectMatch){

let columns = selectMatch[1].split(",").map(c=>c.trim())

if(columns[0] !== "*" && !sql.includes("count(") && !sql.includes("sum(") && !sql.includes("avg(")){

data = data.map(row=>{

let obj = {}

columns.forEach(col=>{
obj[col] = row[col]
})

return obj

})

}

}

/* ---------- ORDER BY ---------- */

if(sql.includes("order by")){

let orderMatch = sql.match(/order by\s+(\w+)/)

if(orderMatch){

let column = orderMatch[1]

data.sort((a,b)=>{

if(a[column] > b[column]) return 1

if(a[column] < b[column]) return -1

return 0

})

}

}

return data

}

/* ---------- RENDER RESULT TABLE ---------- */

function renderTableResults(data,container){

if(!data || data.length===0){

container.innerHTML='<p>No results found</p>'

return
}

const keys=Object.keys(data[0])

const table=`

<table>
<thead>
<tr>
${keys.map(k=>`<th>${k}</th>`).join('')}
</tr>
</thead>

<tbody>

${data.map(row=>`

<tr>
${keys.map(k=>`<td>${row[k]}</td>`).join('')}
</tr>
`).join('')}

</tbody>
</table>
`

container.innerHTML=table

}

/* ---------- LOAD DASHBOARD ON START ---------- */

window.addEventListener("DOMContentLoaded",()=>{

loadDashboard()

})
