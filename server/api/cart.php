<?php

if ($request['method'] === 'GET') {
  if (!$_SESSION['cart_id']) {
    $response['body'] = [];
    send($response);
  }
  $newLink = get_db_link();
  $sessionId = $_SESSION['cart_id'];
  $query = "SELECT cartId, cartItemId, cartItems.quantity, name, products.price, products.productId, shortDescription,  longDescription, products.image
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
    exit;
  }
  $productId = $request['body']['productId'];
  $cartItemId = $request['body']['cartItemId'];
  $newLink = get_db_link();
  $sessionId = $_SESSION['cart_id'];
  $query = $newLink->query("DELETE
            FROM cartItems
            WHERE cartId=${sessionId}
            AND cartItemId=${cartItemId}");
  $response['body'] = "";
  send($response);
}

if ($request['method'] === 'POST') {
  $requestId = $request['body']['productId'];
  $sessionId = $_SESSION['cart_id'];
  $operator = $request['body']['operator'];

  if (!isset($requestId) || !intval($requestId)) {
    throw new ApiError('Not a valid product Id', 400);
  }
  $query =    "SELECT *
                       FROM products
                      WHERE productId=$requestId";
  $newLink = get_db_link();
  $queryResult = $newLink->query($query);
  $fetch = mysqli_fetch_assoc($queryResult);

  $timeStampInsert = "INSERT INTO `carts` (createdAt)
                      VALUES (CURRENT_TIMESTAMP)";

  if (!empty($sessionId)) {
    $cartIdQuery = "
      SELECT COUNT(cartId) AS count
      FROM `carts`
      WHERE `cartId` = $sessionId
    ";
    $cartIdResult = mysqli_query($newLink, $cartIdQuery);
    if (!$cartIdResult) {
      throw new ApiError($cartIdQuery, 500);
    }
    if (mysqli_fetch_assoc($cartIdResult)['count'] == 0) {
      $sessionId = NULL;
    }
  }

  if (empty($sessionId)) {
    mysqli_query($newLink, $timeStampInsert);
    $sessionId = mysqli_insert_id($newLink);
  }
  $_SESSION['cart_id'] = $sessionId;

  $cartItemsInsert = "INSERT INTO cartItems (cartId, productId, price, quantity)
                      VALUES($sessionId, $requestId, $fetch[price], 1)
                      ON DUPLICATE
                      KEY UPDATE quantity = quantity $operator 1";
  mysqli_query($newLink, $cartItemsInsert);

  $cartItemsInsertId = mysqli_insert_id($newLink);
  $joinQuery = "SELECT cartItems.cartItemId
                        AS id, cartItems.productId, cartItems.quantity, products.name, products.price, products.image, products.shortDescription
                      FROM cartItems
                      JOIN products
                        ON cartItems.productId = products.productId
                     WHERE cartItems.cartItemId={$cartItemsInsertId}";
  $joinQueryResponse = mysqli_query($newLink, $joinQuery);
  $productResponse = mysqli_fetch_assoc($joinQueryResponse);
  $response['body'] = $productResponse;

  send($response);
}
