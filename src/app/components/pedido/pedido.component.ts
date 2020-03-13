import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var objetos = Array();

    localStorage.getItem("");
    function AddCarrinho(produto, qtd, valor, posicao)
    { 
    localStorage.setItem("produto" + posicao, produto);
    localStorage.setItem("qtd" + posicao, qtd);
    valor = valor * qtd;
    localStorage.setItem("valor" + posicao, valor);
    alert("Produto adicionado ao carrinho!");
    }

    var app = angular.module("myShoppingList", []);
    app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}       
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";   
        $scope.products.splice(x, 1);
    }
});
}
}
