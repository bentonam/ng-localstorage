# ng-localstorage

This is a wrapper for localStorage for Angular JS.  Each of the implemented methods use promises.

## Installing

Install via bower

`bower install https://github.com/bentonam/ng-localstorage.git`

Require it into your application (after Angular)

	<script src="angular.min.js"></script>
	<script src="ng-localstorage.js"></script>

Add the module as a dependency to your app

	var app = angular.module( "yourAwesomeApp", [ "ngLocalStorage" ] );
	
Inject it into your controller

	app.controller( "SomeController"", function( $scope, $localStorage ) {
		$localStorage.set( "foo", "bar" );
	} );

## Methods

### set

The `set` method can be used to set single values, or multiple values by passing an object.  Each set will read it's own write and return the value that was set.

	app.controller( "SomeController"", function( $scope, $localStorage ) {
	
		// set a single value
		$localStorage
			.set( "company_abc", { company: "ABC, Inc." } )
			.then( function( value ){
				console.log( "set single value" );
				console.log( "value", value );
			} );

		// set a single value
		$localStorage
			.set( "company_xyz", { company: "XYZ Corp." } )
			.then( function( value ){
				console.log( "set single value" );
				console.log( "value", value );
			} );

		// set multiple values
		$localStorage
			.set( {
				"one": 1,
				"two": 2,
				"three": 3,
				"four": 4,
				"five": 5,
				"six": 6
			} )
			.then( function( value ){
				console.log( "set multiple" );
				console.log( "value", value );
			} );
	} );

### get

The `get` method can be used to get one or more values.  It accepts a string, comma-delimited list, or an array of keys to retrieve.

	app.controller( "SomeController"", function( $scope, $localStorage ) {
	
		// get a single value
		$localStorage
			.get( "foo" )
			.then( function( value ){
				console.log( "get single value" );
				console.log( value );
			} );

		// get multiple values by using a comma-delimited list
		$localStorage
			.get( "one,three,five" )
			.then(function( value ){
				console.log( "get as list" );
				console.log(  value );
			} );

		// get multiple values by using an array
		$localStorage
			.get( ["two", "four", "six"] )
			.then( function( value ){
				console.log( "get as array" );
				console.log( value );
			} );
	} );
	

### filter

The `filter` method is used to return values whose keys contain a given string or match a regular expression.

	app.controller( "SomeController"", function( $scope, $localStorage ) {
	
		// get values based on a a given string found in the key
		$localStorage
			.filter( "e" )
			.then( function( value ){
				console.log( "get by filter string" );
				console.log( value );
			} );

		// get values based on a regex applied to the key
		$localStorage
			.filter( /^[A-Z]{3}$/i )
			.then( function( value ){
				console.log( "get by filter" );
				console.log( value );
			} );
	} );
	

### map

The `map` method is used to return values that are passed to a supplied function that returns true to keep the value or false to omit the value.

	app.controller( "SomeController"", function( $scope, $localStorage ) {

		// get values based on a function
		$localStorage
			.map( function( value, key ){
				return value.company && value.company == "ABC, Inc.";
			} )
			.then( function( value ){
				console.log( "get by map" );
				console.log( value );
			} );
	} );
	

### remove

The `remove` method is used to remove values.  It accepts a string, comma-delimited list, or an array of keys to removed.

	app.controller( "SomeController"", function( $scope, $localStorage ) {

		// remove a single item
		$localStorage
			.remove( "company_abc" )
			.then( function(){
				console.log( "removed single value" );
			} );

		// remove a multiple items using a comma-delimited string
		$localStorage
			.remove( "one,two,three" )
			.then( function(){
				console.log( "removed from list" );
			} );

		// remove a multiple items using an array
		$localStorage
			.remove( [ "four", "five", "six", "company_xyz" ] )
			.then( function(){
				console.log( "removed from array" );
			} );
	} );
	

### exists

The `exists` method is used to determine if a value exists or not.  The promise is resolved, if the value exists and is rejected if it does not.

	app.controller( "SomeController"", function( $scope, $localStorage ) {

		// check to see if an item exists
		$localStorage
			.exists( "foo" )
			.then(
				function( key ){
					console.log( "The key \"" + key + "\" exists" );
				},
				function( key ){
					console.log( "The key \"" + key + "\" does not exist" );
				}
			);
	} );
	

### all

The `all` method is used to retrieve all values.

	app.controller( "SomeController"", function( $scope, $localStorage ) {

		// remove a single item
		$localStorage
			.all()
			.then( function( values ){
				console.log( "all values" );
				console.log( values );
			} );
	} );
