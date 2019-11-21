<?php

if ($request['method'] === 'POST') {
  $link = get_db_link();
  if (!isset($_SESSION['cart_id'])) {
    throw new ApiError('an active shopping cart is required homie', 400);
  }

  $name = $request['body']['name'];
  $creditCard = $request['body']['creditCard'];
  $shippingAddress = $request['body']['shippingAddress'];
  $cartId = $_SESSION['cart_id'];

  if (!isset($name) || !isset($creditCard) || !isset($shippingAddress)) {
    throw new ApiError("you are missing some credentials dude", 400);
  }

  $query = "INSERT INTO `orders` (cartId, name, creditCard, shippingAddress) VALUES( ?, ?, ?, ?)";
  $preparedStatement = mysqli_prepare($link, $query);
  mysqli_stmt_bind_param($preparedStatement, 'isss', $cartId, $name, $creditCard, $shippingAddress);
  mysqli_stmt_execute($preparedStatement);
  $sessionId = mysqli_insert_id($link);



  $cartQuery = "SELECT *  FROM orders WHERE orderId = $sessionId";
  $queryResult = mysqli_query($link, $cartQuery);
  $fetch = mysqli_fetch_assoc($queryResult);

  unset($_SESSION['cart_id']);

  $response['body'] = [
    $fetch
  ];
  send($response);
}
