var count = 0;

document.querySelector('#submit').addEventListener('click', function () {
    count += 1;
    var name, id, no, exp_date, rec_date, q_dem, q_rec, q_ret;
    name = document.querySelector('#name').value;    
    id = document.querySelector('#id').value;
    no = document.querySelector('#phone').value;
    exp_date = document.querySelector('#exp-date').value;
    rec_date = document.querySelector('#rec-date').value;
    q_ret = document.querySelector('#returned').value;
    q_rec = document.querySelector('#received').value;
    q_dem = document.querySelector('#demanded').value;

    if((!name || !id || !no)) {
        alert('Please enter all the credentials')
        return;
    }
    if(!name.match(/[a-z | \s]/i) || name.match(/^ /)) {
         document.querySelector('#invalid-1').style.display = 'block';
        return;
    }
    else{
        document.querySelector('#invalid-1').style.display = 'none'
    }
    if(!id.match(/202[0-1][A|B][1-7][P|H][S][0-9]{4}[P]/i)) {
        document.querySelector('#invalid-2').style.display = 'block';
        return;
    }
    else{
        document.querySelector('#invalid-2').style.display = 'none'
    }
    if(!no.match(/[0-9]{10}/)) {
        document.querySelector('#invalid-3').style.display = 'block';
        return;
    }
    else{
        document.querySelector('#invalid-3').style.display = 'none'
    }
    if(!exp_date || !rec_date || !q_dem || !q_rec || !q_ret) {
        alert('Please fill out all the fields')
        return;
    }
    else if(rec_date < exp_date) {
        alert('Received date cannot be less than expected delivery date. Please enter valid received date.');
        return;
    }
    else if(q_rec > q_dem) {
        alert('Received quantity cannot be more than the demanded quantity. Please enter the correct received amount.');
        return;
    }
    else if(Number(q_rec) + Number(q_ret) != q_dem) {
        alert('Returned quantity is incorrect. Please enter the correct value.')
    }
    
    document.querySelector('.records').style.display = 'block'
    document.querySelector('.records').innerHTML += `
    <br>
    <hr>
    <br>
    <div>
        <div class="records-content" id="records-content-${count}">
            <p>Name: ${name}</p>
            <p>BITS Id: ${id}</p>
            <p>Contact No.: ${no}</p>
            <p>Expected Delivery Date: ${exp_date}</p>
            <p>Received Date: ${rec_date}</p>
            <p>Quantity Demanded: ${q_dem}</p>
            <p>Quantity Received: ${q_rec}</p>
            <p>Quantity Returned: ${q_ret}</p>
        </div>
        <button class="btn del-btn" id="del-btn-${count}" onlick="delete_rec(this)">Delete</button>   
    </div>
    `
})

document.querySelector('#clear').addEventListener('click', function () {
    exp_date = document.querySelector('#exp-date').value = "";
    rec_date = document.querySelector('#rec-date').value = "";
    q_ret = document.querySelector('#returned').value = "";
    q_rec = document.querySelector('#received').value = "";
    q_dem = document.querySelector('#demanded').value = "";   

    document.querySelector('#invalid-1').style.display = 'none'
    document.querySelector('#invalid-2').style.display = 'none'
    document.querySelector('#invalid-3').style.display = 'none'
})

if(count>=1){
document.querySelector('#del-btn-1').addEventListener('click', function () { 
    console.log('hello')
})
}

function delete_rec(btn) {
    this.style.display = 'none';
    console.log('hello')
    console.log(btn.id)
    alert(btn.id)
}

document.querySelector('#clear').addEventListener('click', function () {
    document.querySelector('#del-btn-1').style.display = 'none'
})