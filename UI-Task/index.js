const form = document.getElementById("form");
const username = document.getElementById("username");
const Description = document.getElementById("Description");
const date = document.getElementById("Date");
const CutOffDate = document.getElementById("Cut-off-Date");
const submitBtn = document.getElementById("submit");


// const numberValues =document.querySelectorAll('.num__value');
// numberValues.forEach((num)=>startCount(num))
// function startCount(el){
//     let goal =el.dataset.goal;
//     let count =setInterval(()=>{
// el.textContent++;
// if(el.textContent == goal){
//     clearInterval(count)
// }
//     },10);
// }

const counts = document.querySelectorAll('.num__value');
const speed = 97;

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-goal'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) ;
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target;
        }
    }
    upDate()
})


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

function setError(element, errorMessage) {
    const inputControl = element.parentElement;
    const errorDispaly = inputControl.querySelector(".error");
    errorDispaly.innerText = errorMessage;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function SetSuccess(element) {
    const inputControl = element.parentElement;
    const errorDispaly = inputControl.querySelector(".error");
    errorDispaly.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
function validateInputs() {
    const UsernameValue = username.value.trim();
    const DescriptionValue = Description.value.trim();

    if (UsernameValue === '') {
        setError(username, 'Username is required');
    } else {
        SetSuccess(username);
    }
    if(DescriptionValue === ''){
        setError(Description, 'Description is required');

    }else{
        SetSuccess(Description);

    }
    if(date.value === ''){
        setError(date, 'Date is required');

    }else{
        SetSuccess(date);

    }
    if(CutOffDate.value === ''){
        setError(CutOffDate, 'Cut-off Date is required');

    }else{
        SetSuccess(CutOffDate);

    }
}

