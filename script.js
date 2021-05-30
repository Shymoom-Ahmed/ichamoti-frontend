
// toggle between hiding and showing the dropdown content 

function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu of outside click 

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
// -----------End of Dropdown---------

// Test purpose 

const home_Button = document.getElementById('home_button');
const daily_Receive = document.getElementById('daily_receive');
const weekly_Receive = document.getElementById('weekly_receive');
const bank_Withdrawal = document.getElementById('bank_withdrawal');
const borrow_Receive = document.getElementById('borrow_receive');

const mainC = document.getElementById('mainC');


// -----------------Back to Home-----------------------

const backToHome = () =>{
  mainC.innerHTML = `
  <iframe src="home.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

// ------------------End of Back to Home---------------------------

// -------------------Receive Entry--------------------
//Daily Receive
const dailyReceive = () => {

    mainC.innerHTML = `
    
    <iframe src="dailyReceive.html" style="border:none;"height="100%" width="100%" scrolling="no"></iframe>
    
    `;

}

//Weekly Receive

const weeklyReceive = () =>{

      mainC.innerHTML = `
      <iframe src="weeklyCollection.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

//Bank Withdrawal

const bankWithdrawal = () =>{

  mainC.innerHTML = `
  <iframe src="bankWithdrawal.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

//Borrow Receive
const borrowReceive = () =>{
  mainC.innerHTML = `
  <iframe src="LoanReceive.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

// ------------------------End of Receive Entry----------------------

// ---------------------------Payment Entry--------------------------

const bank_Deposite = document.getElementById('bank_deposite');
const payment_Govt = document.getElementById('payment_govt');
const pay_Salary = document.getElementById('pay_salary');
const other_Cost = document.getElementById('other_cost');
const pay_Assets = document.getElementById('pay_assets');

const bankDeposite = () =>{
  mainC.innerHTML = `
  <iframe src="bankdeposit.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const paymentGovt = () =>{
  mainC.innerHTML = `
  <iframe src="" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const paySalary = () =>{
  mainC.innerHTML =  `
  <iframe src="salaryAndOtherAllowance.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const otherCost = () => {
  mainC.innerHTML = `
  <iframe src="otherExpense.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const payAssets = () =>{
  mainC.innerHTML = `
  <iframe src="porperty.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

// --------------------------End of Payment Entry------------------

// ------------------------------Members---------------------------

const member_Entry = document.getElementById('member_entry');
const cancel_Membership = document.getElementById('cancel_membership');
const member_Book = document.getElementById('member_book');
const socity_Info = document.getElementById('socity_info');

const memberEntry = () =>{
  mainC.innerHTML = `
  <iframe src="member.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const cancelMembership = () =>{
  mainC.innerHTML = `
  <iframe src="cancelMembership.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const memberBook = () =>{
  mainC.innerHTML = `
  <iframe src="memberBook.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const socityInfo = () =>{
  mainC.innerHTML = `
  <iframe src="aboutUS.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

// --------------------------End of Members--------------------------------------

// ------------------------------Accounts------------------------------------

const cash_Book = document.getElementById('cash_book');
const cash_Accounts = document.getElementById('cash_accounts');
const profit_Loss = document.getElementById('profit_loss');
const detail_List = document.getElementById('detail_list');
const general_Ledger = document.getElementById('general_ledger');
const some_Balance = document.getElementById('some_balance');
const personal_Balance = document.getElementById('personal_balance');
const unit_List = document.getElementById('unit_list');


const cashBook = () =>{
  mainC.innerHTML = `
  <iframe src="" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const cashAccounts = () =>{
  mainC.innerHTML = `
  <iframe src="" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const profitLoss = () =>{
  mainC.innerHTML = `
  <iframe src="profitLoss.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const detailList = () =>{
  mainC.innerHTML = `
  <iframe src="detailedList.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const generalLedger = () =>{
  mainC.innerHTML = `
  <iframe src="generalLedger.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const someBalance = () =>{
  mainC.innerHTML = `
  <iframe src="someAccountStatus.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const personalBalance = () =>{
  mainC.innerHTML = `
  <iframe src="personalBalance.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

const unitList = () =>{
  mainC.innerHTML = `
  <iframe src="unitDetailList.html" style="border:none;"height="100%" width="100%" scrolling="yes"></iframe>
  `;
}

// -------------------------------End of Accounts-----------------------------
