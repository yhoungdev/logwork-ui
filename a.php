<?php

$serviceCategories = [
    'tradesMen' => [
        ['imgSrc' => 'construction.svg', 'title' => 'Construction'],
        ['imgSrc' => 'gardening.svg', 'title' => 'Gardening & landscaping'],
        ['imgSrc' => 'painters.svg', 'title' => 'Painters'],
        ['imgSrc' => 'electricians.svg', 'title' => 'Electricians']
    ],
    'cleaning' => [
        ['imgSrc' => 'domestic.svg', 'title' => 'Domestic Cleaners'],
        ['imgSrc' => 'window.svg', 'title' => 'Window Cleaners'],
        ['imgSrc' => 'prperty.svg', 'title' => 'Property Maintenance'],
        ['imgSrc' => 'drain.svg', 'title' => 'Drain and Pipe Cleaning']
    ]
];

$directory = 'public/assets/serviceCategories/';

foreach ($serviceCategories as $category => $items) {

    if (!is_dir($directory . $category)) {
        mkdir($directory . $category, 0777, true);
    }

    foreach ($items as $item) {

        $svgContent = <<<SVG
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <!-- SVG content goes here -->
</svg>
SVG;
        file_put_contents($directory . $category . '/' . $item['imgSrc'], $svgContent);
    }
}

echo "SVG files created successfully.";

?>
