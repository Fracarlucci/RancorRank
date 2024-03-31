<html>
    <head>
    <title><?php echo $templateParams["titolo"]; ?></title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body class="bg-dark text-white">
        <main>
            <div class="container text-center">
                <h1 class="m-3 mb-5">RancorRank</h1>
                <div class="d-flex justify-content-center">
                    <ul class="list-group">
                        <?php $i = 1; foreach($templateParams["utenti"] as $utente): ?>
                            <li class="list-group-item d-flex justify-content-between align-items-center"><?php echo $i, " ", $utente["Name"], " ", $utente["Score"]; ?></li>
                        <?php $i++; endforeach; ?>
                    </ul>
                </div>
            </div>
        </main>
    </body>
</html>