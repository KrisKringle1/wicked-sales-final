<?php

require_once '../api/_lifecycle.php';

// print(json_encode($request));
switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;
  case '/api/orders':
  case '/api/cart':
  case '/api/products':
  case '/api/test':
  case '/api/health-check':
    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
