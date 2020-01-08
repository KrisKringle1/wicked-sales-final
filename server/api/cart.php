<?php

if ($request['method'] === 'GET') {
  if (!$_SESSION['cart_id']) {
    $response['body'] = [];
    send($response);
  }
  $newLink = get_db_link();
  $sessionId = $_SESSION['cart_id'];
  $query = "SELECT cartId, cartItemId, name, products.price, products.productId, shortDescription, products.image
            FROM cartItems
            JOIN products
            ON products.productId=cartItems.productId
            WHERE cartId=${sessionId}";
  $cartQuery = mysqli_query($newLink, $query);
  $cartQueryResponse = mysqli_fetch_all($cartQuery, MYSQLI_ASSOC);
  $response['body'] = $cartQueryResponse;
  send($response);
}
if ($request['method'] === 'DELETE') {
  if (!$_SESSION['cart_id']) {
    $response['body'] = [];

    send($response);
  }
  $productId = $request['body']['productId'];
  $cartItemId = $request['body']['cartItemId'];
  $newLink = get_db_link();
  $sessionId = $_SESSION['cart_id'];
  $query = "DELETE
            FROM cartItems
            WHERE cartId=${sessionId}
            AND cartItemId=${cartItemId}";


  $cartQuery = mysqli_query($newLink, $query);
  $cartQueryResponse = mysqli_fetch_all($cartQuery, MYSQLI_ASSOC);
  $response['body'] = $cartQueryResponse;
  send($response);
}

if ($request['method'] === 'POST') {
  $requestId = $request['body']['productId'];
  $sessionId = $_SESSION['cart_id'];
  if (!isset($requestId) || !intval($requestId)) {
    throw new ApiError('Not a valid product Id', 400);
  }
  $query =    "SELECT price
              FROM products
              WHERE productId=${requestId}";
  $newLink = get_db_link();
  $queryResult = mysqli_query($newLink, $query);
  $fetch = mysqli_fetch_assoc($queryResult);

  $timeStampInsert = "INSERT INTO `carts` (createdAt) VALUES (CURRENT_TIMESTAMP)";

  if (!isset($_SESSION['cart_id'])) {
    mysqli_query($newLink, $timeStampInsert);
    $sessionId = mysqli_insert_id($newLink);
  }

  $cartItemsInsert = "INSERT INTO `cartItems` (cartId, productId, price) VALUES($sessionId, $requestId, $fetch[price])";
  mysqli_query($newLink, $cartItemsInsert);
  $cartItemsInsertId = mysqli_insert_id($newLink);
  $joinQuery = "SELECT * FROM `cartItems` JOIN products ON products.productId=cartItems.productId WHERE cartItemId={$cartItemsInsertId}";
  $joinQueryResponse = mysqli_query($newLink, $joinQuery);
  $productResponse = mysqli_fetch_assoc($joinQueryResponse);
  $response['body'] = $productResponse;

  if (!$_SESSION['cart_id']) {
    $_SESSION['cart_id'] = $cartItemsInsertId;
  }
  send($response);
}
