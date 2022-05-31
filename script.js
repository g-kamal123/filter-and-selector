var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];
let arr_brand= [];
products.forEach(ele =>{
    arr_brand.push(ele.brand);
});
arr_brand=arr_brand.filter((el,index,ar)=>{
    return ar.indexOf(el)==index;
});
let arr_os= [];
products.forEach(ele =>{
    arr_os.push(ele.os);
});
arr_os=arr_os.filter((el,index,ar)=>{
    return ar.indexOf(el)==index;
});
let text = "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"<th>"+"Remove"+"</th>"+"</tr>";
function option_by_os(){
    let opt = "<select id='os'><option>select os</option>";
    arr_os.forEach(ele => {
        opt+= "<option>"+ ele+ "</option>";
    });
    $("#p").append(opt);
}
function option_by_brand(){
    let optb = "<select id='brand'><option>select brand</option>";
    arr_brand.forEach(ele => {
        optb+= "<option>"+ ele+ "</option>";
        });
        $('#p').append(optb);
}

function print_arr(){
    products.forEach(myfun);
    $('#res').html(text);
}

function myfun(item){
    text+="<tr>"+"<td>"+item.id+"</td>"+"<td>"+item.name+"</td>"+"<td>"+item.brand+"</td>"+"<td>"+item.os+"</td>"+"<td class='tdm'>"+"X"+"</td>"+"</tr>";
}
function remove_fun(){
    $(this).closest("tr").css("display","none");
}

$(document).ready(function(){
    option_by_os();
    option_by_brand();
    print_arr();
    $('.tdm').on('click',remove_fun);
    $("#brand").on("change" , function(){
        var os = $("#os").val();
        var brand = $("#brand").val();
        if(os=="select os") printByBrand(brand);
        else printBoth(os , brand);
    });
    $("#os").on("change" , function(){
        var os = $("#os").val();
        var brand = $("#brand").val();
        if(brand=="select brand") printByOs(os);
        else printBoth(os , brand);
    });
    $("#btn").on("click" , function(){
        let item = $("#search").val();
    let txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"</tr>";
        for(let i=0;i<6;i++){
            if(products[i].id==item || products[i].name==item){
                txt+="<tr>"+"<td>"+products[i].id+"</td>"+"<td>"+products[i].name+"</td>"+"<td>"+products[i].brand+"</td>"+"<td>"+products[i].os+"</td>"+"</tr>";
                document.getElementById("res2").innerHTML=txt; 
                break;
            }
            
        }
    });
});

function printByOs(os){
    let txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"</tr>";
    products.forEach(ele =>{
        if(ele.os==os){
            txt+="<tr>"+"<td>"+ele.id+"</td>"+"<td>"+ele.name+"</td>"+"<td>"+ele.brand+"</td>"+"<td>"+ele.os+"</td>"+"</tr>"
        }
    });
    $('#res').html(txt);
}
function printByBrand(brand){
    let txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</tr>";
    products.forEach(ele =>{
        if(ele.brand==brand){
            txt+="<tr>"+"<td>"+ele.id+"</td>"+"<td>"+ele.name+"</td>"+"<td>"+ele.brand+"</td>"+"<td>"+ele.os+"</td>"+"</tr>"
        }
    });
    $('#res').html(txt);
}
function printBoth(os , brand){
    console.log(os , brand);
    let txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"</tr>";
    products.forEach(ele =>{
        if(ele.brand==brand && ele.os==os){
            txt+="<tr>"+"<td>"+ele.id+"</td>"+"<td>"+ele.name+"</td>"+"<td>"+ele.brand+"</td>"+"<td>"+ele.os+"</td>"+"</tr>"
        }
    });
    $('#res').html(txt);
}