<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$page= $_SERVER['REQUEST_URI'];
$url=parse_url($page,PHP_URL_QUERY);
parse_str($url,$param);
$context= $param['context'];

$country = filter_input(INPUT_GET, "country", FILTER_SANITIZE_STRING);
$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$countriesQuery = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%';");
$citiesQuery= $conn->query("SELECT cities.name, cities.district, cities.population FROM countries join cities on cities.country_code = countries.code WHERE countries.name LIKE '%$country'"); 

$countriesResults = $countriesQuery->fetchAll(PDO::FETCH_ASSOC);
$citiesResults = $citiesQuery->fetchAll(PDO::FETCH_ASSOC);


if($context=="countries"){
  echo "<table><tr><th>Name</th><th>Continent</th><th>Independence Year</th><th>Head of State</th></tr>";
  foreach ($countriesResults as $row):
    echo "<tr><td>".$row["name"]."</td><td>".$row["continent"]."</td><td>".$row["independence_year"]."</td><td>".$row["head_of_state"]."</td></tr>";
  endforeach;
  echo "</table>";
}else{
  unset($page,$url,$context);
  $page= null;
  $url= null;
  $context= null;
  echo "<table><tr><th>Name</th><th>District</th><th>Population</th></tr>";
  foreach($citiesResults as $row):
    echo "<tr><td>".$row["name"]."</td><td>".$row["district"]."</td><td>".$row["population"]."</td></tr>";
  endforeach;
  echo "</table>";
}

?>