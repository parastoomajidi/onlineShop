function openProduct(productcalling){
    let i;
    let x = document.getElementsByClassName("product");
    for(i = 0 ; i < x.length; i++){
        x[i].style.display = 'none';

    }
    document.getElementById(productcalling).style.display = "block";
}