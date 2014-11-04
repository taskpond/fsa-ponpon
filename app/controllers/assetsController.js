// This is the assets controller. Goal is to serve css, js, partials, images, or bower packages.
module.exports = {
    images: {
        handler: {
            directory: { path: './app/assets/images' }
        },
        app: {
            name: 'images'
        }
    },
    css: {
        handler: {
            directory: { path: './app/assets/stylesheets' }
        },
        app: {
            name: 'css'
        }
    },
    js: {
        handler: {
            directory: { path: './app/assets/javascripts' }
        },
        app: {
            name: 'js'
        }
    },
    bower: {
        handler: {
            directory: { path: './app/assets/components' }
        },
        app: {
            name: 'bower'
        }
    },
    shared: {
        handler: {
            directory: { path: './app/views/shared' }
        },
        app: {
            name: 'shared'
        }
    }
}