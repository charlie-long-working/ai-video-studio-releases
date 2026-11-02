'use strict';
const prices = {month1:299000, month3:599000, month6:699000, perpetual:999000};
const names = {month1:'1 tháng',month3:'3 tháng',month6:'6 tháng',perpetual:'Vĩnh viễn'};
const money = n => n.toLocaleString('vi-VN')+'đ';
for (const link of document.querySelectorAll('.plan-contact')) {
 const subject=`Mua license Muse Auto — ${link.dataset.plan}`;
 const body='Chào bạn,\nMình muốn mua gói '+link.dataset.plan+'. Vui lòng hướng dẫn thanh toán, mã đơn và xác nhận điều kiện hoàn tiền trước khi mình thanh toán.\n\nHệ điều hành của mình: ';
 link.href=`mailto:charlie.nguyen.forwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
const simulation=document.querySelector('#simulation');
if(simulation){const calculate=()=>{const counts=[...simulation.querySelectorAll('input')].map(i=>Math.max(0,Math.floor(Number(i.value)||0))); document.querySelector('#simulation-total').textContent=money(counts.reduce((s,n,i)=>s+n*Object.values(prices)[i],0));};simulation.addEventListener('input',calculate);for(const button of simulation.querySelectorAll('[data-example]'))button.onclick=()=>{button.dataset.example.split(',').forEach((v,i)=>simulation.querySelectorAll('input')[i].value=v);calculate();};calculate();}
