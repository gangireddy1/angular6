function greeting( message = 'Hello', name = 'World' ) {
    console.log( message + ' ' + name + '!' );
}

greeting( 'Good morning', 'Sita' );
greeting( 'Good morning' );
greeting( undefined, 'Sita' );