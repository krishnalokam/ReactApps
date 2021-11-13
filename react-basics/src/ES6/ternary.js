//old way

if(authenticated) {
    renderApp();
} else {
    renderLogin();
}

//with ternary
 authenticated ? renderApp() : renderLogin();