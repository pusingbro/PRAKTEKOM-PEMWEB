<?php
    
    include "connect.php";
    $sql = "
    CREATE TABLE 'belajar_ajax'.'mahasiswa'(
        'nim' BIGINT NOT NULL,
        'nama' VARCHAR(50) NOT NULL,
        'prodi' VARCHAR(50) NOT NULL
    );";

    if (mysqli_query($connection,$sql)){
    echo "Database Berhasil Dibuat";
    } else {
        echo "Error Gan : " . mysqli_error($connection);
    }

?>