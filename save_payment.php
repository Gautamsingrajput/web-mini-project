<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Change if you set a different username
$password = ""; // Change if you set a password
$database = "nike_store";

// Create connection
$conn = new mysqli($servername, $username, $password, $database, 3307);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'] ?? null;
$phone = $_POST['phone'] ?? null;
$address = $_POST['address'] ?? null;
$card_number = $_POST['card_number'] ?? null;
$exp_month = $_POST['exp_month'] ?? null;
$exp_year = $_POST['exp_year'] ?? null;
$cvv = $_POST['cvv'] ?? null;

if (!$name || !$phone || !$address || !$card_number || !$exp_month || !$exp_year || !$cvv) {
    die("Error: Missing required fields!");
}

// Insert data into database
$sql = "INSERT INTO payments (name, phone, address, card_number, exp_month, exp_year, cvv)
        VALUES ('$name', '$phone', '$address', '$card_number', '$exp_month', '$exp_year', '$cvv')";

if ($conn->query($sql) === TRUE) {
    echo "<div class='message-success'> <p> Payment Successfull! ✅ </p>
             <p> Order Successfully Placed! </p>
            <img src='./img/success.gif' alt='Success' width='100px' height='100px'>
            <a class='back' href='index.html'> Go back to Home </a>
    </div>";
} else {
    echo "<div class='message error'>❌ Error: " . $conn->error . "</div>";
}

// Close connection
$conn->close();
?>

<style>
    body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f4;
    }
    .message {
        padding: 15px;
        width: 50%;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        border-radius: 8px;
        margin-top: 20px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .message-success{
        display: flex;
        flex-direction: column;
        font-weight: 700;
        justify-content: center;
        align-items: center;
    }

    .success {
        background-color: #dff0d8;
        color: #3c763d;
        border: 1px solid #d6e9c6;
    }
    .error {
        background-color: #f2dede;
        color: #a94442;
        border: 1px solid #ebccd1;
    }

    .back {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }

</style>