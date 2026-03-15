/* ---------- DATABASE ---------- */

const db = {

branches: [

{
id:1,
name:'Downtown Branch',
code:'BR001',
city:'New York',
state:'NY',
phone:'212-555-0101',
status:'Active'
},

{
id:2,
name:'Midtown Branch',
code:'BR002',
city:'New York',
state:'NY',
phone:'212-555-0102',
status:'Active'
},

{
id:3,
name:'Boston Branch',
code:'BR003',
city:'Boston',
state:'MA',
phone:'617-555-0103',
status:'Active'
}

],

departments:[

{
id:1,
name:'Retail Banking',
description:'Handles customer savings and checking'
},

{
id:2,
name:'Corporate Finance',
description:'Business loans and corporate services'
},

{
id:3,
name:'Loans Department',
description:'Personal and home loans'
}

],

employees:[

{
id:1,
name:'Jane Smith',
code:'EMP001',
email:'[jane@bank.com](mailto:jane@bank.com)',
designation:'Manager',
dept_id:1,
branch_id:1,
salary:50000,
status:'Active'
},

{
id:2,
name:'John Davis',
code:'EMP002',
email:'[john@bank.com](mailto:john@bank.com)',
designation:'Officer',
dept_id:1,
branch_id:1,
salary:35000,
status:'Active'
},

{
id:3,
name:'Sarah Wilson',
code:'EMP003',
email:'[sarah@bank.com](mailto:sarah@bank.com)',
designation:'Loan Officer',
dept_id:3,
branch_id:2,
salary:40000,
status:'Active'
}

],

customers:[

{
id:1,
first_name:'John',
last_name:'Doe',
email:'[john@email.com](mailto:john@email.com)',
phone:'9876543210',
city:'New York',
status:'Active'
},

{
id:2,
first_name:'Michael',
last_name:'Johnson',
email:'[michael@email.com](mailto:michael@email.com)',
phone:'9876543211',
city:'Boston',
status:'Active'
},

{
id:3,
first_name:'Sarah',
last_name:'Williams',
email:'[sarah@email.com](mailto:sarah@email.com)',
phone:'9876543212',
city:'New York',
status:'Active'
},

{
id:4,
first_name:'Robert',
last_name:'Brown',
email:'[robert@email.com](mailto:robert@email.com)',
phone:'9876543213',
city:'Boston',
status:'Inactive'
},

{
id:5,
first_name:'Emma',
last_name:'Davis',
email:'[emma@email.com](mailto:emma@email.com)',
phone:'9876543214',
city:'New York',
status:'Active'
}

],

accounts:[

{
id:1,
number:'1234567890',
customer_id:1,
type:'Savings',
balance:15000,
interest_rate:4.5,
status:'Active'
},

{
id:2,
number:'9876543210',
customer_id:2,
type:'Checking',
balance:25000,
interest_rate:2.75,
status:'Active'
},

{
id:3,
number:'5555666677',
customer_id:3,
type:'Savings',
balance:8500,
interest_rate:4.5,
status:'Active'
},

{
id:4,
number:'4444333322',
customer_id:1,
type:'Checking',
balance:32000,
interest_rate:2.75,
status:'Active'
},

{
id:5,
number:'1111222233',
customer_id:5,
type:'Savings',
balance:5200,
interest_rate:4.5,
status:'Frozen'
}

],

cards:[

{
id:1,
number:'4532123456789012',
type:'Debit',
cardholder:'John Doe',
expiry:'2027-01-31',
limit:50000,
status:'Active'
},

{
id:2,
number:'5425233010103010',
type:'Credit',
cardholder:'Michael Johnson',
expiry:'2027-02-28',
limit:100000,
status:'Active'
},

{
id:3,
number:'3782822463100051',
type:'Debit',
cardholder:'Sarah Williams',
expiry:'2026-12-31',
limit:50000,
status:'Active'
},

{
id:4,
number:'6011111111111117',
type:'Credit',
cardholder:'John Doe',
expiry:'2025-06-30',
limit:75000,
status:'Blocked'
}

],

transactions:[

{
id:1,
account_id:1,
type:'Deposit',
amount:5000,
date:'2024-01-15',
reference:'SAL001'
},

{
id:2,
account_id:2,
type:'Withdraw',
amount:2000,
date:'2024-01-16',
reference:'WTH001'
},

{
id:3,
account_id:1,
type:'Transfer',
amount:3000,
date:'2024-01-17',
reference:'TRN001'
},

{
id:4,
account_id:3,
type:'Deposit',
amount:1500,
date:'2024-01-18',
reference:'DEP001'
},

{
id:5,
account_id:2,
type:'Deposit',
amount:5500,
date:'2024-01-19',
reference:'SAL002'
}

],

loans:[

{
id:1,
number:'LOAN001',
customer_id:1,
type:'Personal',
principal:100000,
balance:95000,
status:'Active'
},

{
id:2,
number:'LOAN002',
customer_id:2,
type:'Home',
principal:500000,
balance:480000,
status:'Disbursed'
},

{
id:3,
number:'LOAN003',
customer_id:3,
type:'Personal',
principal:50000,
balance:45000,
status:'Pending'
}

]

}
