<?php

if ($request['method'] === 'POST') {
  $link = get_db_link();
  $message = check_connection($link);
  $response['body'] =  $message;
  send($response);
}
