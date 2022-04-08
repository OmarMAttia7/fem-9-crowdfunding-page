module.exports = {
    content: ["./src/**/*.{html,js,tsx,ts}"],

    theme: {

        colors: {
            cyan: 'hsl(176, 50%, 47%)',
            darkcyan: 'hsl(176, 72%, 28%)',
            black: '#000',
            white: '#fff',
            gray: 'hsl(0, 0%, 48%)'
        },

        fontFamily: {
            main: ['Commissioner', 'Arial', 'Helvetica', 'sans-serif']
        },

        extend: {

            backgroundImage: {
                'hero-mobile': 'url(./images/image-hero-mobile.jpg)',
                'hero-desktop': 'url(./images/image-hero-desktop.jpg)',
                'nav-close': 'url(./images/icon-close-menu.svg)',
                'nav-open': 'url(./images/icon-hamburger.svg)'
            }

        },

    },

    plugins: [

    ],
}