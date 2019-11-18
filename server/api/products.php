<?php


function getProducts(){

$query =  "SELECT productId, name, price, image, shortDescription FROM `products`";
$newLink = get_db_link();
$queryResult = mysqli_query($newLink, $query);
$fetch = mysqli_fetch_all($queryResult, MYSQLI_ASSOC);
return $fetch;
}

$response['body'] = [
  "message" => "products go here"
];
$response['status'] = 202;

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = getProducts($link);
  $response['body'] = [
    'message' => $message
  ];
  send($response);
}
