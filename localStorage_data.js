// --- إدارة بيانات الموظفين ---
function getWorkers(){
    return JSON.parse(localStorage.getItem("workers") || "[]");
}

function addWorker(worker){
    const workers = getWorkers();
    workers.push(worker);
    localStorage.setItem("workers", JSON.stringify(workers));
    localStorage.setItem("workersUpdated", new Date().toISOString());
}

function updateWorker(index, worker){
    const workers = getWorkers();
    workers[index] = worker;
    localStorage.setItem("workers", JSON.stringify(workers));
    localStorage.setItem("workersUpdated", new Date().toISOString());
}

function deleteWorker(index){
    const workers = getWorkers();
    workers.splice(index,1);
    localStorage.setItem("workers", JSON.stringify(workers));
    localStorage.setItem("workersUpdated", new Date().toISOString());
}

// --- إدارة بيانات المبيعات ---
function getSales(){
    return JSON.parse(localStorage.getItem("sales") || "[]");
}

function addSale(sale){
    const sales = getSales();
    sales.push(sale);
    localStorage.setItem("sales", JSON.stringify(sales));
    localStorage.setItem('salesUpdated', new Date().toISOString());
}

function getSalesByEmployee(username){
    return getSales().filter(s => s.employee === username);
}

// --- تسجيل دخول الموظف ---
function loginEmployee(username){
    localStorage.setItem("currentEmployee", username);
}

function logoutEmployee(){
    localStorage.removeItem("currentEmployee");
}

// --- تسجيل دخول المدير ---
function loginAdmin(){
    localStorage.setItem("isAdminLoggedIn","true");
}

function logoutAdmin(){
    localStorage.removeItem("isAdminLoggedIn");
}

// --- بيانات أولية إذا لم تكن موجودة ---
if(!localStorage.getItem("workers")){
    const sampleWorkers = [
        {username:"emp1", name:"محمد علي", password:"123"},
        {username:"emp2", name:"أحمد حسن", password:"123"}
    ];
    localStorage.setItem("workers", JSON.stringify(sampleWorkers));
}

if(!localStorage.getItem("sales")){
    localStorage.setItem("sales", JSON.stringify([]));
}
