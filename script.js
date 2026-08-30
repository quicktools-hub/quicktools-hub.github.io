
const $=id=>document.getElementById(id);
function out(id,text){$(id).textContent=text}
function ageCalc(){let v=$('dob').value;if(!v)return out('ageResult','Choose your birth date.');let b=new Date(v+'T00:00:00'),t=new Date(),y=t.getFullYear()-b.getFullYear(),m=t.getMonth()-b.getMonth(),d=t.getDate()-b.getDate();if(d<0){m--;d+=new Date(t.getFullYear(),t.getMonth(),0).getDate()}if(m<0){y--;m+=12}out('ageResult',`${y} years, ${m} months, ${d} days`)}
function percentCalc(){let a=+$('num1').value,b=+$('num2').value;out('percentResult',b?`${(a/b*100).toFixed(2)}%`:'Enter a valid total.')}
function bmiCalc(){let h=+$('height').value/100,w=+$('weight').value;if(h>0&&w>0){let b=w/(h*h),c=b<18.5?'Underweight':b<25?'Healthy range':b<30?'Overweight':'Obesity';out('bmiResult',`BMI: ${b.toFixed(1)} — ${c}`)}else out('bmiResult','Enter valid height and weight.')}
function emiCalc(){let p=+$('loan').value,r=+$('rate').value/1200,n=+$('months').value;if(p>0&&n>0){let e=r? p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1):p/n;out('emiResult',`Monthly EMI: ₹${e.toFixed(2)} | Total: ₹${(e*n).toFixed(2)}`)}else out('emiResult','Enter valid loan details.')}
function gstCalc(){let a=+$('gstAmount').value,g=+$('gstRate').value;if(a>=0){let tax=a*g/100;out('gstResult',`GST: ₹${tax.toFixed(2)} | Total: ₹${(a+tax).toFixed(2)}`)}}
function discountCalc(){let p=+$('price').value,d=+$('discount').value;if(p>=0){let save=p*d/100;out('discountResult',`You save ₹${save.toFixed(2)} | Final price: ₹${(p-save).toFixed(2)}`)}}
function unitCalc(){let v=+$('unitValue').value,t=$('unitType').value;if(t==='kmmi')out('unitResult',`${(v*0.621371).toFixed(4)} miles`);if(t==='mift')out('unitResult',`${(v*1.609344).toFixed(4)} km`);if(t==='kgLb')out('unitResult',`${(v*2.2046226).toFixed(4)} lb`);if(t==='lbKg')out('unitResult',`${(v*0.45359237).toFixed(4)} kg`)}
function wordCalc(){let s=$('words').value.trim();let words=s?s.split(/\s+/).length:0;out('wordResult',`${words} words | ${s.length} characters`)}
function tipCalc(){let b=+$('bill').value,t=+$('tip').value,n=+$('people').value;if(b>=0&&n>0)out('tipResult',`Tip: ₹${(b*t/100).toFixed(2)} | Per person: ₹${((b+b*t/100)/n).toFixed(2)}`)}
