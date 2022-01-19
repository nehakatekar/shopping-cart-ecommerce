export default function formatCurrency(n){
    return "$"+ Number(n.toFixed(1)).toLocaleString()+ " ";
    }