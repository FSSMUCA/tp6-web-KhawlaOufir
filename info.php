<?php

$etablissement = "Université Cadi Ayyad";
$module = "Développement Web Avancé";
$annee = 2024;

$a = 12;
$b = 8;

$addition = $a + $b;
$multiplication = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>
<body>
    <h1>Informations Générales</h1>
    <p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année :</strong> <?php echo $annee; ?></p>

    <h2>Variables Numériques</h2>
    <p>A = <?php echo $a; ?></p>
    <p>B = <?php echo $b; ?></p>

    <h2>Résultats</h2>
    <p>Addition : <?php echo $addition; ?></p>
    <p>Multiplication : <?php echo $multiplication; ?></p>
</body>
</html>
