module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                '10v': '10vh',
                '20v': '20vh',
                '30v': '30vh',
                '40v': '40vh',
                '50v': '50vh',
                '60v': '60vh',
                '70v': '70vh',
                '80v': '80vh',
                '90v': '90vh',
                '100v': '100vh',
            },
            width: {
                '10w': '10vw',
                '20w': '20vw',
                '30w': '30vw',
                '40w': '40vw',
                '50w': '50vw',
                '60w': '60vw',
                '70w': '70vw',
                '80w': '80vw',
                '90w': '90vw',
                '100w': '100vw',
            },
            zIndex: {
                0: 0,
                10: 10,
                20: 20,
                30: 30,
                40: 40,
                50: 50,
                25: 25,
                50: 50,
                75: 75,
                100: 100,
                auto: 'auto',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
