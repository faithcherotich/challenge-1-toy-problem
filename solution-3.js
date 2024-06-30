function grossSalary(basic,benefits) {
    return basic + benefits;

}
function netSalary(grossSalary){
    return Math.abs(grossSalary - (grossSalary * 0.12))
}

grossSalary =43000;
benefits = 5000;
console .log(netSalary(grossSalary));

