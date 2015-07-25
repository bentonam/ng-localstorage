var app = angular.module("exampleApp", ["ngLocalStorage"]);

app.controller("AppCtrl", function($scope, $localStorage, $timeout ){

	$timeout( function(){
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

	}, 1000 );

	// gets
	$timeout( function(){
		// get a single value
		$localStorage
			.get( "company_abc" )
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

		// get values based on a function
		$localStorage
			.map( function( value, key ){
				return value.company && value.company == "ABC, Inc.";
			} )
			.then( function( value ){
				console.log( "get by map" );
				console.log( value );
			} );

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

	}, 2000 );

	// removals
	$timeout( function(){
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

	}, 3000);
});