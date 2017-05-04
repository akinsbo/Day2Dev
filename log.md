
-----------------Styling-----------------------------
#added the materail design web styling
npm install --save material-components-web

------------------TDD---------------------------------
#added enzyme for testing
npm install --save-dev enzyme react-addons-test-utils

#added chai from chai
$ npm install --save-dev chai
$ npm install --save-dev sinon


# or just do
npm install --save-dev enzyme react-addons-test-utils mocha chai sinon
###Solved the problem of snapshot rendering by manually adding
'react-test-renderer': "*"   :in package.json**

**Checking for chai**

------------------BDD---------------------------------
#Install Cumber for BDD
npm install --save-dev cucumber

###create directory
features/addItem.feature
features/step-definitions/additem.js

#run cucumber
$ node_modules/.bin/cucumber-js

#this can also run the step-definitions
$ node_modules/.bin/cucumber-js -r features/step-definitions

#install selenium web-driver
npm install selenium web-driver (didn't work - but no worries, leave it for now)
---------------------------FEATURES---------------------------------------------
---------------------------START DRAG-N-DROP--------------------------------------
npm install --save react-dnd
npm install --save react-dnd-html5-backend

####Enable Decorator Syntax############
# enable decorator syntax {@XYZ} of ES7
npm i -S babel-plugin-transform-decorators-legacy

# Then update your .babelrc file to add the legacy decorator support plug-in like so:

{
  "presets": ["es2015", "react", "stage-1"],
  "plugins": ["transform-decorators-legacy"]
}

---------------------------END DRAG-N-DROP--------------------------------------
----------------------------TYPECHECK on JS-------------------------------------
# install prop-types library
npm install --save prop-types
--------------------------------------------------------------------------------
=--------------------BUILD- CSS Preprocessor------------------------------------
$ npm install node-sass --save-dev

added the following to package.json, under script
+    "build-css": "node-sass src/ -o src/",
+    "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",

#run this to watch
$ npm run watch-css

#ignore component css cos we use sass. We added this to .gitignore
src/**/*.css


----for build -----
$ npm install --save-dev npm-run-all

"scripts": {
  "build-css": "node-sass src/ -o src/",
  "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}

------------------------------------------------------------------------------
------------------**BACKEND**---------------------------------
------------------Unit Testing--------------------------------
$ phpunit -c app/

- use 'extends PHPUnit_Framework_TestCase' instead of WebTestCase for services
and other non-Controller equivalent test classes
-------------------Added Behat for BDD backend testing--------
$ composer require --dev behat/behat

$ php vendor/behat/behat/bin/behat.php

#incorporating symfony2-extension
$ composer require --dev behat/symfony2-extension

#incorporating mink for browserkit of symfony2
$ composer require --dev behat/mink
$ composer require --dev behat/mink-extension

#install browserkit driver
$ composer require --dev behat/mink-browserkit-driver

------------------Added Sami.phar---------------------------------
curl -O http://get.sensiolabs.org/sami.phar
______________________________________________

Test it with '$ php vendor/sami/sami/sami.php'
__________________________________________
Created a Sami config file

<?php

use Sami\Sami;
use Sami\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('Resources')
    ->exclude('Tests')
    ->in($dir = '/path/to/symfony/src')
;

// generate documentation for all v2.0.* tags, the 2.0 branch, and the master one
$versions = GitVersionCollection::create($dir)
    ->addFromTags('v2.0.*')
    ->add('2.0', '2.0 branch')
    ->add('master', 'master branch')
;

return new Sami($iterator, array(
    'theme'                => 'symfony',
    'versions'             => $versions,
    'title'                => 'Symfony2 API',
    'build_dir'            => __DIR__.'/../build/sf2/%version%',
    'cache_dir'            => __DIR__.'/../cache/sf2/%version%',
    'default_opened_level' => 2,
));
__________________________________________

**
ran the following command:
php sami.php update /path/to/config.php -v

__________________________________________________
