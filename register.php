    <?php
    if (isset($_POST['submit'])) {
        $gmail = $_POST['gmail'];
        $password = $_POST['password'];
        
        $conn = new mysqli("localhost", "root", "", "nike_store", 3307);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
        $sql = "INSERT INTO users (email, password) VALUES ('$gmail', '$passwordHash')";
        if ($conn->query($sql) === TRUE) {
            header("Location: index.html");
            echo "<script>
                alert('Registration successful!');
              </script>";
              exit();
        } else {    echo "<script>alert('Error: " . $conn->error . "');</script>";
        }
        
        $conn->close();
    }
    ?>