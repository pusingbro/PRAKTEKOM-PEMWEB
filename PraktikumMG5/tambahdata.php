<?php
    include "connect.php";
    $nim = $_POST["nim"];
    $nama = $_POST["nama"];
    $prodi = $_POST["prodi"];

    $query = "INSERT INTO mahasiswa (nim,nama,prodi) VALUES ('$nim', '$nama', '$prodi')";
    $result = mysqli_query($connection,$query);
    if(mysqli_query($connection,$query)){
        echo "Sukses Menambah Data";
    } else {
        echo "Error Gan ---> ".$sql."<br>".mysqli_error($connection);
    }
?>