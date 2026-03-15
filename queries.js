const queries = [

/* ---------------- BRANCH QUERIES (1–10) ---------------- */

{ id:1, category:'Branch', title:'All Active Branches', sql:'SELECT * FROM branches WHERE status="Active"' },

{ id:2, category:'Branch', title:'Branches by City', sql:'SELECT * FROM branches WHERE city="New York"' },

{ id:3, category:'Branch', title:'Count Branches per State', sql:'SELECT state, COUNT(*) FROM branches GROUP BY state' },

{ id:4, category:'Branch', title:'Branch with Most Employees', sql:'SELECT branch_id, COUNT(*) FROM employees GROUP BY branch_id ORDER BY COUNT(*) DESC' },

{ id:5, category:'Branch', title:'Branch Contact Details', sql:'SELECT id,name,phone,city FROM branches' },

{ id:6, category:'Branch', title:'Branches in Multiple States', sql:'SELECT state FROM branches GROUP BY state HAVING COUNT(*)>1' },

{ id:7, category:'Branch', title:'Branch Code List', sql:'SELECT code,name FROM branches' },

{ id:8, category:'Branch', title:'Branch Location List', sql:'SELECT name,city,state FROM branches' },

{ id:9, category:'Branch', title:'Active Branch Count', sql:'SELECT COUNT(*) FROM branches WHERE status="Active"' },

{ id:10, category:'Branch', title:'Branch Status Report', sql:'SELECT name,status FROM branches' },

/* ---------------- CUSTOMER QUERIES (11–25) ---------------- */

{ id:11, category:'Customer', title:'All Customers', sql:'SELECT * FROM customers' },

{ id:12, category:'Customer', title:'All Active Customers', sql:'SELECT * FROM customers WHERE status="Active"' },

{ id:13, category:'Customer', title:'Customers by City', sql:'SELECT * FROM customers WHERE city="New York"' },

{ id:14, category:'Customer', title:'Inactive Customers', sql:'SELECT * FROM customers WHERE status="Inactive"' },

{ id:15, category:'Customer', title:'Customer Count by Status', sql:'SELECT status,COUNT(*) FROM customers GROUP BY status' },

{ id:16, category:'Customer', title:'Customer Count by City', sql:'SELECT city,COUNT(*) FROM customers GROUP BY city' },

{ id:17, category:'Customer', title:'Customers Starting with J', sql:'SELECT * FROM customers WHERE first_name LIKE "J%"' },

{ id:18, category:'Customer', title:'Customer Email List', sql:'SELECT first_name,last_name,email FROM customers' },

{ id:19, category:'Customer', title:'Customer Phone List', sql:'SELECT first_name,last_name,phone FROM customers' },

{ id:20, category:'Customer', title:'Customer City Report', sql:'SELECT first_name,last_name,city FROM customers' },

{ id:21, category:'Customer', title:'Customers from Boston', sql:'SELECT * FROM customers WHERE city="Boston"' },

{ id:22, category:'Customer', title:'Customers Ordered by Name', sql:'SELECT * FROM customers ORDER BY first_name' },

{ id:23, category:'Customer', title:'Customer Status Report', sql:'SELECT first_name,last_name,status FROM customers' },

{ id:24, category:'Customer', title:'Customer Name List', sql:'SELECT first_name,last_name FROM customers' },

{ id:25, category:'Customer', title:'Customers with Gmail', sql:'SELECT * FROM customers WHERE email LIKE "%gmail%"' },

/* ---------------- ACCOUNT QUERIES (26–40) ---------------- */

{ id:26, category:'Account', title:'All Accounts', sql:'SELECT * FROM accounts' },

{ id:27, category:'Account', title:'Active Accounts', sql:'SELECT * FROM accounts WHERE status="Active"' },

{ id:28, category:'Account', title:'Savings Accounts', sql:'SELECT * FROM accounts WHERE type="Savings"' },

{ id:29, category:'Account', title:'Checking Accounts', sql:'SELECT * FROM accounts WHERE type="Checking"' },

{ id:30, category:'Account', title:'Frozen Accounts', sql:'SELECT * FROM accounts WHERE status="Frozen"' },

{ id:31, category:'Account', title:'Total Balance', sql:'SELECT SUM(balance) FROM accounts' },

{ id:32, category:'Account', title:'Average Balance', sql:'SELECT AVG(balance) FROM accounts' },

{ id:33, category:'Account', title:'High Balance Accounts', sql:'SELECT * FROM accounts WHERE balance>20000' },

{ id:34, category:'Account', title:'Accounts by Type', sql:'SELECT type,COUNT(*) FROM accounts GROUP BY type' },

{ id:35, category:'Account', title:'Interest Rate Report', sql:'SELECT type,AVG(interest_rate) FROM accounts GROUP BY type' },

{ id:36, category:'Account', title:'Account Count per Customer', sql:'SELECT customer_id,COUNT(*) FROM accounts GROUP BY customer_id' },

{ id:37, category:'Account', title:'Account Status Distribution', sql:'SELECT status,COUNT(*) FROM accounts GROUP BY status' },

{ id:38, category:'Account', title:'Top 3 Balances', sql:'SELECT * FROM accounts ORDER BY balance DESC LIMIT 3' },

{ id:39, category:'Account', title:'Account Numbers List', sql:'SELECT number FROM accounts' },

{ id:40, category:'Account', title:'Balance Report', sql:'SELECT number,balance FROM accounts' },

/* ---------------- TRANSACTION QUERIES (41–55) ---------------- */

{ id:41, category:'Transaction', title:'All Transactions', sql:'SELECT * FROM transactions' },

{ id:42, category:'Transaction', title:'Deposits Only', sql:'SELECT * FROM transactions WHERE type="Deposit"' },

{ id:43, category:'Transaction', title:'Withdrawals Only', sql:'SELECT * FROM transactions WHERE type="Withdraw"' },

{ id:44, category:'Transaction', title:'Transfers Only', sql:'SELECT * FROM transactions WHERE type="Transfer"' },

{ id:45, category:'Transaction', title:'Large Transactions', sql:'SELECT * FROM transactions WHERE amount>5000' },

{ id:46, category:'Transaction', title:'Average Transaction Amount', sql:'SELECT AVG(amount) FROM transactions' },

{ id:47, category:'Transaction', title:'Total Transaction Amount', sql:'SELECT SUM(amount) FROM transactions' },

{ id:48, category:'Transaction', title:'Transactions by Type', sql:'SELECT type,COUNT(*) FROM transactions GROUP BY type' },

{ id:49, category:'Transaction', title:'Transactions per Account', sql:'SELECT account_id,COUNT(*) FROM transactions GROUP BY account_id' },

{ id:50, category:'Transaction', title:'Transaction Count Daily', sql:'SELECT date,COUNT(*) FROM transactions GROUP BY date' },

{ id:51, category:'Transaction', title:'Transaction References', sql:'SELECT reference FROM transactions' },

{ id:52, category:'Transaction', title:'Latest Transactions', sql:'SELECT * FROM transactions ORDER BY date DESC' },

{ id:53, category:'Transaction', title:'Small Transactions', sql:'SELECT * FROM transactions WHERE amount<2000' },

{ id:54, category:'Transaction', title:'Deposit Totals', sql:'SELECT SUM(amount) FROM transactions WHERE type="Deposit"' },

{ id:55, category:'Transaction', title:'Withdrawal Totals', sql:'SELECT SUM(amount) FROM transactions WHERE type="Withdraw"' },

/* ---------------- CARD QUERIES (56–67) ---------------- */

{ id:56, category:'Card', title:'All Cards', sql:'SELECT * FROM cards' },

{ id:57, category:'Card', title:'Active Cards', sql:'SELECT * FROM cards WHERE status="Active"' },

{ id:58, category:'Card', title:'Debit Cards', sql:'SELECT * FROM cards WHERE type="Debit"' },

{ id:59, category:'Card', title:'Credit Cards', sql:'SELECT * FROM cards WHERE type="Credit"' },

{ id:60, category:'Card', title:'Blocked Cards', sql:'SELECT * FROM cards WHERE status="Blocked"' },

{ id:61, category:'Card', title:'Card Count by Type', sql:'SELECT type,COUNT(*) FROM cards GROUP BY type' },

{ id:62, category:'Card', title:'Card Status Summary', sql:'SELECT status,COUNT(*) FROM cards GROUP BY status' },

{ id:63, category:'Card', title:'High Limit Cards', sql:'SELECT * FROM cards WHERE limit>75000' },

{ id:64, category:'Card', title:'Card Limit Average', sql:'SELECT AVG(limit) FROM cards' },

{ id:65, category:'Card', title:'Cardholders List', sql:'SELECT cardholder FROM cards' },

{ id:66, category:'Card', title:'Cards Expiring Soon', sql:'SELECT * FROM cards WHERE expiry<"2026-12-31"' },

{ id:67, category:'Card', title:'Total Credit Limit', sql:'SELECT SUM(limit) FROM cards WHERE type="Credit"' },

/* ---------------- LOAN QUERIES (68–79) ---------------- */

{ id:68, category:'Loan', title:'All Loans', sql:'SELECT * FROM loans' },

{ id:69, category:'Loan', title:'Active Loans', sql:'SELECT * FROM loans WHERE status="Active"' },

{ id:70, category:'Loan', title:'Pending Loans', sql:'SELECT * FROM loans WHERE status="Pending"' },

{ id:71, category:'Loan', title:'Disbursed Loans', sql:'SELECT * FROM loans WHERE status="Disbursed"' },

{ id:72, category:'Loan', title:'Personal Loans', sql:'SELECT * FROM loans WHERE type="Personal"' },

{ id:73, category:'Loan', title:'Home Loans', sql:'SELECT * FROM loans WHERE type="Home"' },

{ id:74, category:'Loan', title:'Total Loan Principal', sql:'SELECT SUM(principal) FROM loans' },

{ id:75, category:'Loan', title:'Outstanding Balance', sql:'SELECT SUM(balance) FROM loans' },

{ id:76, category:'Loan', title:'Loan Count by Type', sql:'SELECT type,COUNT(*) FROM loans GROUP BY type' },

{ id:77, category:'Loan', title:'Largest Loans', sql:'SELECT * FROM loans ORDER BY principal DESC' },

{ id:78, category:'Loan', title:'Loan Progress', sql:'SELECT number,principal,balance FROM loans' },

{ id:79, category:'Loan', title:'Average Loan Amount', sql:'SELECT AVG(principal) FROM loans' },

/* ---------------- EMPLOYEE + DEPARTMENT QUERIES (80–100) ---------------- */

{ id:80, category:'Employee', title:'All Employees', sql:'SELECT * FROM employees' },

{ id:81, category:'Employee', title:'Active Employees', sql:'SELECT * FROM employees WHERE status="Active"' },

{ id:82, category:'Employee', title:'Managers', sql:'SELECT * FROM employees WHERE designation="Manager"' },

{ id:83, category:'Employee', title:'Loan Officers', sql:'SELECT * FROM employees WHERE designation="Loan Officer"' },

{ id:84, category:'Employee', title:'Employee Salary List', sql:'SELECT name,salary FROM employees' },

{ id:85, category:'Employee', title:'Total Payroll', sql:'SELECT SUM(salary) FROM employees' },

{ id:86, category:'Employee', title:'Average Salary', sql:'SELECT AVG(salary) FROM employees' },

{ id:87, category:'Employee', title:'Employees by Department', sql:'SELECT dept_id,COUNT(*) FROM employees GROUP BY dept_id' },

{ id:88, category:'Employee', title:'Employees by Branch', sql:'SELECT branch_id,COUNT(*) FROM employees GROUP BY branch_id' },

{ id:89, category:'Employee', title:'Highest Salary', sql:'SELECT * FROM employees ORDER BY salary DESC LIMIT 1' },

{ id:90, category:'Employee', title:'Employee Email List', sql:'SELECT name,email FROM employees' },

{ id:91, category:'Department', title:'All Departments', sql:'SELECT * FROM departments' },

{ id:92, category:'Department', title:'Department Count', sql:'SELECT COUNT(*) FROM departments' },

{ id:93, category:'Department', title:'Department Names', sql:'SELECT name FROM departments' },

{ id:94, category:'Department', title:'Department Descriptions', sql:'SELECT name,description FROM departments' },

{ id:95, category:'Department', title:'Department Employee Count', sql:'SELECT dept_id,COUNT(*) FROM employees GROUP BY dept_id' },

{ id:96, category:'Department', title:'Department Payroll', sql:'SELECT dept_id,SUM(salary) FROM employees GROUP BY dept_id' },

{ id:97, category:'Department', title:'Retail Banking Department', sql:'SELECT * FROM departments WHERE name="Retail Banking"' },

{ id:98, category:'Department', title:'Loans Department', sql:'SELECT * FROM departments WHERE name LIKE "%Loan%"' },

{ id:99, category:'Department', title:'Corporate Finance Department', sql:'SELECT * FROM departments WHERE name="Corporate Finance"' },

{ id:100, category:'Department', title:'Department Overview', sql:'SELECT id,name FROM departments' }

]
