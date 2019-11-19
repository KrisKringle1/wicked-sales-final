<?php


function getProducts()
{

  $query =  "SELECT productId, name, price, image, shortDescription FROM `products`";
  $newLink = get_db_link();
  $queryResult = mysqli_query($newLink, $query);
  $fetch = mysqli_fetch_all($queryResult, MYSQLI_ASSOC);
  return $fetch;
}



if (isset($request['query']['productId'])) {
  $productId = $request['query']['productId'] ?? null;
  if (!intval($productId)) {
    throw new ApiError('The product ID is not there', 400);
  }
  $query = "SELECT * FROM products WHERE productId = $productId";
  $link = get_db_link();
  $queryResult = mysqli_query($link, $query);
  $fetch = mysqli_fetch_assoc($queryResult);
  if ($fetch == null) {
    throw new ApiError('The product ID is not there', 404);
  }
  $response['body'] = $fetch;
  send($response);
} else {
  $query = "SELECT * FROM products";
  $link = get_db_link();
  $queryResult = mysqli_query($link, $query);
  $fetch = mysqli_fetch_all($queryResult, MYSQLI_ASSOC);
  if ($fetch == null) {
    throw new ApiError('The product ID is not there', 404);
  }
  $response['body'] = $fetch;
  send($response);
}




if ($request['method'] === 'GET') {
  $link = get_db_link();
  $message = getProducts($link);
  $response['body'] = $message;

  send($response);
}
