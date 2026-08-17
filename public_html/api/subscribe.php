<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Only POST requests are allowed'
    ]);
    exit;
}

$email = trim($_POST['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid email address'
    ]);
    exit;
}

$file = __DIR__ . '/../data/emails.txt';

$result = file_put_contents(
    $file,
    $email . PHP_EOL,
    FILE_APPEND | LOCK_EX
);

if ($result === false) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Could not save email'
    ]);
    exit;
}

echo json_encode([
    'success' => true
]);